// =========================
// RINTIS ARAH - SCRIPT.JS
// =========================

// Preloader
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.display = "none";
  }
});

// Dark Mode Toggle
const themeBtn = document.getElementById("toggleTheme");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Language Switch
const translations = {
  en: {
    welcome: "Welcome to Rintis Arah",
    community: "Nature Lovers & Hikers Community",
    shareStory: "Share Your Hiking Story",
    info: "Mountain Info",
    simaksi: "Permit Info",
    weather: "Weather Info",
    transport: "Transport Access"
  },
  id: {
    welcome: "Selamat Datang di Rintis Arah",
    community: "Komunitas Pecinta Alam dan Pendaki Gunung",
    shareStory: "Bagikan Cerita Pendakianmu",
    info: "Informasi Gunung",
    simaksi: "Info Simaksi",
    weather: "Info Cuaca",
    transport: "Akses Transportasi"
  }
};

function switchLanguage(lang) {
  document.querySelector("#beranda h2").textContent = translations[lang].welcome;
  document.querySelector("#beranda p").textContent = translations[lang].community;
  document.querySelector("#form-cerita h2").textContent = translations[lang].shareStory;
  document.querySelector("#infoSection h2").textContent = translations[lang].info;
}

// Unified Search
function handleSearch() {
  const query = document.getElementById("unifiedSearch").value.toLowerCase();
  const infoBox = document.getElementById("mountainInfo");
  const simaksiBox = document.getElementById("simaksiResult");
  const weatherBox = document.getElementById("weatherResult");
  const transportBox = document.getElementById("transportResult");

  // Dummy data - ganti dengan API atau JSON dinamis
  const data = {
    merbabu: {
      info: "Gunung Merbabu adalah gunung berapi tipe Strato di Jawa Tengah.",
      simaksi: "Simaksi bisa diurus online di simaksi.merbabu.id",
      weather: "Cuaca cerah, suhu sekitar 15°C",
      transport: "Transportasi umum dari Salatiga atau Boyolali"
    },
    rinjani: {
      info: "Gunung Rinjani adalah gunung tertinggi kedua di Indonesia di Lombok.",
      simaksi: "Simaksi tersedia via rinjani.net",
      weather: "Cerah berawan, suhu 12°C",
      transport: "Akses melalui Mataram dan Sembalun"
    }
  };

  const result = data[query];

  if (result) {
    infoBox.textContent = result.info;
    simaksiBox.textContent = result.simaksi;
    weatherBox.textContent = result.weather;
    transportBox.textContent = result.transport;
  } else {
    infoBox.textContent = "Gunung tidak ditemukan. Coba ketik 'merbabu' atau 'rinjani'.";
    simaksiBox.textContent = "";
    weatherBox.textContent = "";
    transportBox.textContent = "";
  }
}

// Map (dummy marker)
function initMap() {
  const mapDiv = document.getElementById("mapContainer");
  if (!mapDiv) return;
  mapDiv.innerHTML = `<iframe src="https://maps.google.com/maps?q=indonesia&amp;t=&amp;z=4&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width="100%" height="400" style="border:0;"></iframe>`;
}
window.onload = initMap;

// Cerita Form
const form = document.getElementById("storyForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Cerita kamu sudah dikirim! Terima kasih.");
  form.reset();
});
