"""Backend health endpoint tests for SQZ catalog API."""
import os
import requests
import pytest

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://squeeze-retail.preview.emergentagent.com").rstrip("/")


@pytest.fixture
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


class TestHealth:
    def test_health_status_200(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/health", timeout=10)
        assert r.status_code == 200

    def test_health_payload(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/health", timeout=10)
        data = r.json()
        assert data.get("status") == "ok"
        assert data.get("brand") == "SQZ"
