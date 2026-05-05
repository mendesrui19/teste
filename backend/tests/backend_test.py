"""Backend API tests for SQZ Catalog (minimal API)."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")
if not BASE_URL:
    # Fallback to frontend env file if env var not exported
    env_path = "/app/frontend/.env"
    if os.path.exists(env_path):
        with open(env_path) as f:
            for line in f:
                if line.startswith("REACT_APP_BACKEND_URL="):
                    BASE_URL = line.split("=", 1)[1].strip().rstrip("/")
                    break


@pytest.fixture
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# --- Health endpoint ---
class TestHealth:
    def test_health_status_code(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/health", timeout=15)
        assert r.status_code == 200, f"unexpected status: {r.status_code} body={r.text}"

    def test_health_payload(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/health", timeout=15)
        data = r.json()
        assert data.get("status") == "ok"
        assert data.get("brand") == "SQZ"

    def test_health_cors(self, api_client):
        r = api_client.options(
            f"{BASE_URL}/api/health",
            headers={
                "Origin": "https://example.com",
                "Access-Control-Request-Method": "GET",
            },
            timeout=15,
        )
        # CORS configured with allow_origins=*; either 200 or 204 acceptable
        assert r.status_code in (200, 204)
