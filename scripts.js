// ======= DATA TRANSLASI ============
const translations = {
  en: {
    welcome: "Welcome to Rintis Arah",
    community: "Nature Lovers & Hikers Community",
    shareStory: "Share Your Hiking Story",
    info: "Mountain Info",
    gallery: "Mountain Gallery",
    video: "Video Documentation",
    notfound: "Mountain not found. Try 'merbabu' or 'rinjani'."
  },
  id: {
    welcome: "Selamat Datang di Rintis Arah",
    community: "Komunitas Pecinta Alam dan Pendaki Gunung",
    shareStory: "Bagikan Cerita Pendakianmu",
    info: "Informasi Gunung",
    gallery: "Galeri Gunung",
    video: "Video Dokumentasi",
    notfound: "Gunung tidak ditemukan. Coba ketik 'merbabu' atau 'rinjani'."
  }
};

let currentLang = "id"; // default bahasa

function switchLanguage(lang) {
  currentLang = lang;

  document.querySelector("#beranda h2").textContent = translations[lang].welcome;
  document.querySelector("#beranda p").textContent = translations[lang].community;
  document.querySelector("#infoSection h2").textContent = translations[lang].info;
  document.querySelector("#galeri h2").textContent = translations[lang].gallery;
  document.querySelector("#video h2").textContent = translations[lang].video;
  document.querySelector("#form-cerita h2").textContent = translations[lang].shareStory;

  // Refresh data pencarian jika sudah pernah dicari
  const currentQuery = document.getElementById("unifiedSearch").value.trim().toLowerCase();
  if (currentQuery) {
    handleSearch(currentQuery);
  }
}

// ========== DATA GUNUNG ============
const mountainData = {
  merbabu: {
    id: {
      info: "Gunung Merbabu adalah gunung berapi tipe Strato di Jawa Tengah.",
      simaksi: "Simaksi bisa diurus online atau langsung di basecamp Selo.",
      weather: "Cuaca cerah, suhu sekitar 15°C.",
      transport: "Dari Boyolali, lanjut ke Selo via ojek atau angkot."
    },
    en: {
      info: "Mount Merbabu is a stratovolcano located in Central Java.",
      simaksi: "Permit can be handled online or directly at Selo basecamp.",
      weather: "Clear weather, around 15°C.",
      transport: "From Boyolali, continue to Selo via motorcycle taxi or public minibus."
    }
  },
  rinjani: {
    id: {
      info: "Gunung Rinjani adalah gunung tertinggi kedua di Indonesia, terletak di Lombok.",
      simaksi: "Simaksi bisa diakses melalui Sembalun atau Senaru.",
      weather: "Cerah berawan, suhu sekitar 12°C.",
      transport: "Dari Mataram ke Sembalun via mobil sewaan atau bus kecil."
    },
    en: {
      info: "Mount Rinjani is Indonesia’s second highest volcano, located in Lombok.",
      simaksi: "Permit can be accessed via Sembalun or Senaru route.",
      weather: "Partly cloudy, around 12°C.",
      transport: "From Mataram to Sembalun by rental car or minibus."
    }
  }
};

// ========== CARI GUNUNG ============
function handleSearch(query = null) {
  const input = query || document.getElementById("unifiedSearch").value.trim().toLowerCase();
  const infoBox = document.getElementById("mountainInfo");
  const simaksiBox = document.getElementById("simaksiResult");
  const weatherBox = document.getElementById("weatherResult");
  const transportBox = document.getElementById("transportResult");

  const result = mountainData[input];

  if (result) {
    const content = result[currentLang];
    infoBox.textContent = content.info;
    simaksiBox.textContent = content.simaksi;
    weatherBox.textContent = content.weather;
    transportBox.textContent = content.transport;
  } else {
    infoBox.textContent = translations[currentLang].notfound;
    simaksiBox.textContent = "";
    weatherBox.textContent = "";
    transportBox.textContent = "";
  }
}

// ========== ENTER UNTUK CARI ============
document.getElementById("unifiedSearch").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    handleSearch();
  }
});

// ========== KLIK GALERI ============
function searchFromGallery(gunung) {
  document.getElementById("unifiedSearch").value = gunung;
  handleSearch(gunung.toLowerCase());
}
