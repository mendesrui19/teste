// Catálogo de produtos SQZ - imagens carregadas a partir de /assets

export const CATEGORIES = [
  { id: "all", label: "Tudo", color: "#FBD503" },
  { id: "colares", label: "Colares", color: "#FC6CA7" },
  { id: "brincos", label: "Brincos", color: "#04A5E6" },
  { id: "aneis", label: "Anéis", color: "#B2D801" },
  { id: "capas", label: "Capas", color: "#D0B2FF" },
  { id: "acessorios", label: "Acessórios", color: "#FE8E04" },
];

const p = (id, name, category, image, color, featured = false) => ({
  id,
  name,
  category,
  image,
  color,
  featured,
});

export const PRODUCTS = [
  // Colares
  p("c1", "Colar Limonada", "colares", "/assets/colares/novo_colar_amarelo.png", "#FBD503", true),
  p("c2", "Colar Tangerina", "colares", "/assets/colares/colar_laranja.png", "#FE8E04"),
  p("c3", "Colar Lima", "colares", "/assets/colares/novo_colar_lima.png", "#B2D801", true),
  p("c4", "Colar Oceano", "colares", "/assets/colares/novo_colar_azul.png", "#04A5E6"),
  p("c5", "Colar Lavanda", "colares", "/assets/colares/novo_colar_lavanda.png", "#D0B2FF"),
  p("c6", "Colar Bubblegum", "colares", "/assets/colares/novo_colar_rosa.png", "#FC6CA7", true),
  p("c7", "Colar Sunshine", "colares", "/assets/colares/colar_amarelo.png", "#FBD503"),
  p("c8", "Colar Sereia", "colares", "/assets/colares/colar_azul.png", "#04A5E6"),
  p("c9", "Colar Citrus", "colares", "/assets/colares/colar_lima.png", "#B2D801"),
  p("c10", "Colar Candy", "colares", "/assets/colares/colar_rosa.png", "#FC6CA7"),
  p("c11", "Colar Lilás", "colares", "/assets/colares/colar_lavanda.png", "#D0B2FF"),

  // Brincos
  p("b1", "Brincos Lemon Pop", "brincos", "/assets/brincos/brincos_amarelo.png", "#FBD503", true),
  p("b2", "Brincos Lima Fresh", "brincos", "/assets/brincos/brincos_lima.png", "#B2D801"),
  p("b3", "Brincos Sky", "brincos", "/assets/brincos/brincos_azul.png", "#04A5E6"),
  p("b4", "Brincos Berry", "brincos", "/assets/brincos/brincos_rosa.png", "#FC6CA7", true),
  p("b5", "Brincos Lavanda", "brincos", "/assets/brincos/brincos_lavanda.png", "#D0B2FF"),
  p("b6", "Brincos Squeeze", "brincos", "/assets/brincos/brinco_extra1.png", "#FBD503"),
  p("b7", "Brincos Pulp", "brincos", "/assets/brincos/brinco_extra2.png", "#FE8E04"),
  p("b8", "Brincos Zest", "brincos", "/assets/brincos/brinco_extra3.png", "#B2D801"),
  p("b9", "Brincos Slice", "brincos", "/assets/brincos/brinco_extra4.png", "#FC6CA7"),
  p("b10", "Brincos Drop", "brincos", "/assets/brincos/brinco_extra5.png", "#04A5E6"),

  // Anéis
  p("a1", "Anel Squeeze", "aneis", "/assets/aneis/anel1.png", "#FBD503", true),
  p("a2", "Anel Pop", "aneis", "/assets/aneis/anel2.png", "#FC6CA7"),
  p("a3", "Anel Zest", "aneis", "/assets/aneis/anel3.png", "#B2D801"),
  p("a4", "Anel Sunny", "aneis", "/assets/aneis/anel4.png", "#FE8E04"),
  p("a5", "Anel Sweet", "aneis", "/assets/aneis/anel5.png", "#D0B2FF"),

  // Capas
  p("cp1", "Capa Tech Lavanda Puffy", "capas", "/assets/capas/tech_puffy_lavanda.png", "#D0B2FF", true),
  p("cp2", "Capa Tech Waves Lime", "capas", "/assets/capas/tech_waves_lime.png", "#B2D801", true),
  p("cp3", "Capa Squeeze 01", "capas", "/assets/capas/capa1.png", "#FBD503"),
  p("cp4", "Capa Squeeze 02", "capas", "/assets/capas/capa2.png", "#FC6CA7"),
  p("cp5", "Capa Squeeze 03", "capas", "/assets/capas/capa3.png", "#04A5E6"),

  // Acessórios
  p("ac1", "Saco SQZ Premium", "acessorios", "/assets/acessorios/saco_sqz.png", "#FBD503", true),
  p("ac2", "Saquinho Limão", "acessorios", "/assets/acessorios/saco_pequeno.png", "#FBD503"),
  p("ac3", "Porta-Joias Limão", "acessorios", "/assets/acessorios/porta_joias_limao_premium.png", "#FBD503"),
  p("ac4", "Molas de Cabelo Limão", "acessorios", "/assets/acessorios/molas_limao.jpeg", "#B2D801", true),
  p("ac5", "Acessório Surpresa", "acessorios", "/assets/acessorios/acessorio_extra.png", "#FC6CA7"),
];

export const FEATURED = PRODUCTS.filter((x) => x.featured);
