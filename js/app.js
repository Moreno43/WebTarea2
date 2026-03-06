const translations = {
  es: {
    siteTitle: "Descubriendo Japón",
    navHome: "Inicio",
    navGastronomy: "Gastronomía",
    navFestivals: "Festivales",
    navTourism: "Lugares Turísticos",
    heroTitle: "Explora la tradición y modernidad de Japón",
    heroBtn: "Ver más",
    gasTitle: "Gastronomía",
    gasText:
      "Sabores de Japón que combinan tradición y presentación artística.",
    gasBtn: "Descubrir más",
    festTitle: "Festivales",
    festText: "Fiestas tradicionales llenas de cultura y color.",
    festBtn: "Explorar",
    tourTitle: "Lugares Turísticos",
    tourText: "Descubre el Monte Fuji, Kioto y Tokio.",
    tourBtn: "Ver destinos",
    footerText: "© 2026 - Juan Pablo Moreno López",
  },
  en: {
    siteTitle: "Discovering Japan",
    navHome: "Home",
    navGastronomy: "Cuisine",
    navFestivals: "Festivals",
    navTourism: "Tourist Attractions",
    heroTitle: "Explore the tradition and modernity of Japan",
    heroBtn: "Learn more",
    gasTitle: "Cuisine",
    gasText:
      "Flavors of Japan that combine tradition and artistic presentation.",
    gasBtn: "Discover more",
    festTitle: "Festivals",
    festText: "Traditional celebrations full of culture and color.",
    festBtn: "Explore",
    tourTitle: "Tourist Attractions",
    tourText: "Discover Mount Fuji, Kyoto and Tokyo.",
    tourBtn: "View destinations",
    footerText: "© 2026 - Juan Pablo Moreno López",
  },
  jp: {
    siteTitle: "日本を巡る",
    navHome: "ホーム",
    navGastronomy: "料理",
    navFestivals: "祭り",
    navTourism: "観光地",
    heroTitle: "日本の伝統と現代を探検しよう",
    heroBtn: "もっと見る",
    gasTitle: "料理",
    gasText: "伝統と美しい盛り付けを組み合わせた日本の味。",
    gasBtn: "もっと知る",
    festTitle: "祭り",
    festText: "文化と色彩にあふれた伝統的なお祭り。",
    festBtn: "探す",
    tourTitle: "観光地",
    tourText: "富士山、京都、東京を発見しましょう。",
    tourBtn: "人気スポットを見る",
    footerText: "© 2026 - Juan Pablo Moreno López",
  },
};

const langBtn = document.getElementById("langBtn");
const langMenu = document.getElementById("langMenu");

langBtn.addEventListener("click", () => {
  langMenu.classList.toggle("show");
});

document.querySelectorAll("[data-lang]").forEach((option) => {
  option.addEventListener("click", () => {
    const selectedLang = option.getAttribute("data-lang");
    changeLanguage(selectedLang);
    langMenu.classList.remove("show");
  });
});

function changeLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem("language", lang);
  langBtn.textContent = lang.toUpperCase() + " ▾";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = translations[lang][key];
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "es";
  changeLanguage(savedLang);
});
