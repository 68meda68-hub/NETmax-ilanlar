/* =========================
   DATA
========================= */
const listingsData = [
	{
    id: 1,
    title: "Dükkan",
    location: "Aratol İstiklal Mah / Aksaray",
    price: 9000000,
    currency: "TRY",
    zoning: "-",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/205889/107/1/1767092602095",
    images: [
      "images/yasin_akturk/1.jpeg",
	  "images/yasin_akturk/3.jpeg",
	  "images/yasin_akturk/5.jpeg"
    ],
    rooms: "-",
    size: "106 m²",
    floor: "Zemin",
    age: "1"
  },
  {
    id: 2,
    title: "3+1 Daire",
    location: "Tacin Mah / Aksaray",
    price: 4250000,
    currency: "TRY",
    zoning: "-",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126925/8244/1/1767093819711",
    images: [
      "images/kadir_tekin/1.jpg",
	  "images/kadir_tekin/2.jpg",
	  "images/kadir_tekin/3.jpg",
	  "images/kadir_tekin/4.jpg",
	  "images/kadir_tekin/5.jpg",
	  "images/kadir_tekin/6.jpg",
	  "images/kadir_tekin/7.jpg",
	  "images/kadir_tekin/8.jpg",
	  "images/kadir_tekin/9.jpg",
	  "images/kadir_tekin/10.jpg",
	  "images/kadir_tekin/11.jpg"
    ],
    rooms: "3+1",
    size: "120 m²",
    floor: "5",
    age: "1"
  },
  {
    id: 3,
    title: "Arsa",
    location: "Çiftlik Mah / Aksaray",
    price: "180 / m²",
    currency: "EUR",
    zoning: "Konut Alanı , E=0.90",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126920/3895/17/1767094781910",
	cardImage: "images/satilik-arsa.jpg",   // 🔥 SADECE LİSTE
    images: [
      "images/logo_2.png"                   // 🔥 MODAL
    ],
    rooms: "-",
    size: "816.15 m²",
    floor: "-",
    age: "-"
  },
  {
    id: 4,
    title: "Arsa",
    location: "Hassas Mah / Aksaray",
    price: "120 / m²",
    currency: "EUR",
    zoning: "Konut Alanı , A-3",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126916/6920/5/1767095636317",
    cardImage: "images/satilik-arsa.jpg",   // 🔥 SADECE LİSTE
    images: [
      "images/logo_2.png"                   // 🔥 MODAL
    ],
    rooms: "-",
    size: "2168.48 m²",
    floor: "-",
    age: "-"
  },
  {
    id: 5,
    title: "Kat Karşılığı Arsa",
    location: "Tacin Mah / Aksaray",
    price: "% 40",
    currency: "-",
    zoning: "Ticaret-Konut Alanı,E=2.40",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126925/4553/1/1767096011253",
    images: [
      "images/arazi-gelistirme.jpg"
    ],
    rooms: "-",
    size: "1230.00 m²",
    floor: "-",
    age: "-"
  },
  {
    id: 6,
    title: "Arsa",
    location: "Şifahane Mah / Aksaray",
    price: "250 / m²",
    currency: "EUR",
    zoning: "Konut Alanı , A-3",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126924/4304/8/1767096659685",
    cardImage: "images/satilik-arsa.jpg",   // 🔥 SADECE LİSTE
    images: [
      "images/logo_2.png"                   // 🔥 MODAL
    ],
    rooms: "-",
    size: "426.32 m²",
    floor: "-",
    age: "-"
  },
  {
    id: 7,
    title: "3+1 Daire",
    location: "Zafer Mah / Aksaray",
    price: 2500000,
    currency: "TRY",
    zoning: "-",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126926/901/10/1767096913469",
    images: [
      "images/cengiz_iz/1.jpeg",
	  "images/cengiz_iz/2.jpeg",
	  "images/cengiz_iz/3.jpeg",
	  "images/cengiz_iz/4.jpeg",
	  "images/cengiz_iz/5.jpeg",
	  "images/cengiz_iz/6.jpeg",
	  "images/cengiz_iz/7.jpeg"
    ],
    rooms: "3+1",
    size: "150 m²",
    floor: "Zemin",
    age: "10 yaş üzeri"
  },
  {
    id: 8,
    title: "Arsa",
    location: "Şifahane Mah / Aksaray",
    price: "250 / m²",
    currency: "EUR",
    zoning: "Konut Alanı , A-3",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126924/4301/8/1767098064916",
    cardImage: "images/satilik-arsa.jpg",   // 🔥 SADECE LİSTE
    images: [
      "images/logo_2.png"                   // 🔥 MODAL
    ],
    rooms: "-",
    size: "557.89 m²",
    floor: "-",
    age: "-"
  },
  {
    id: 9,
    title: "Dükkan",
    location: "Ereğlikapı Mah / Aksaray",
    price: "2000 / m²",
    currency: "EUR",
    zoning: "-",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126959/2320/18/1767098938147",
    images: [
      "images/sammaz_ozmel/1.JPG"
    ],
    rooms: "-",
    size: "500 m²",
    floor: "Zemin",
    age: "-"
  },
  {
    id: 10,
    title: "Arsa",
    location: "Çiftlik Mah / Aksaray",
    price: "210 / m²",
    currency: "EUR",
    zoning: "Konut Alanı , E=0.90",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126924/3833/13/1767099705379",
    cardImage: "images/satilik-arsa.jpg",   // 🔥 SADECE LİSTE
    images: [
      "images/logo_2.png"                   // 🔥 MODAL
    ],
    rooms: "-",
    size: "1003.91 m²",
    floor: "-",
    age: "-"
  },
  {
    id: 11,
    title: "Arsa",
    location: "Hassas Mah / Aksaray",
    price: "70 / m²",
    currency: "EUR",
    zoning: "Konut Alanı , E=0.20",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126916/7280/5/1767371807761",
    cardImage: "images/satilik-arsa.jpg",   // 🔥 SADECE LİSTE
    images: [
      "images/logo_2.png"                   // 🔥 MODAL
    ],
    rooms: "-",
    size: "2412.81 m²",
    floor: "-",
    age: "-"
  },
  {
    id: 12,
    title: "Tarla",
    location: "Taşpınar Yeni Cami Mah / Aksaray",
    price: "200 / m²",
    currency: "TRY",
    zoning: "-",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/204852/390/155/1767523900903",
    cardImage: "images/satilik-tarla.jpeg",   // 🔥 SADECE LİSTE
    images: [
      "images/logo_2.png"                   // 🔥 MODAL
    ],
    rooms: "-",
    size: "23254.21 m²",
    floor: "-",
    age: "-"
  },
  {
    id: 13,
    title: "Tarla",
    location: "Taşpınar Yeni Cami Mah / Aksaray",
    price: "250 / m²",
    currency: "TRY",
    zoning: "-",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/204852/390/145/1767524079126",
    cardImage: "images/satilik-tarla.jpeg",   // 🔥 SADECE LİSTE
    images: [
      "images/logo_2.png"                   // 🔥 MODAL
    ],
    rooms: "-",
    size: "32711.42 m²",
    floor: "-",
    age: "-"
  },
  {
    id: 14,
    title: "Tarla",
    location: "Sağlık Belediyesi / Aksaray",
    price: "1500 / m²",
    currency: "TRY",
    zoning: "-",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126950/0/365/1767524226417",
    cardImage: "images/satilik-tarla.jpeg",   // 🔥 SADECE LİSTE
    images: [
      "images/logo_2.png"                   // 🔥 MODAL
    ],
    rooms: "-",
    size: "15000 m²",
    floor: "-",
    age: "-"
  },
  {
    id: 15,
    title: "Tarla",
    location: "Sağlık Belediyesi / Aksaray",
    price: "800 / m²",
    currency: "TRY",
    zoning: "-",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126950/0/326/1767524380516",
    cardImage: "images/satilik-tarla.jpeg",   // 🔥 SADECE LİSTE
    images: [
      "images/logo_2.png"                   // 🔥 MODAL
    ],
    rooms: "-",
    size: "25145 m²",
    floor: "-",
    age: "-"
  },
  {
    id: 16,
    title: "Tarla",
    location: "Sağlık Belediyesi / Aksaray",
    price: "800 / m²",
    currency: "TRY",
    zoning: "-",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126950/0/2347/1767524459483",
    cardImage: "images/satilik-tarla.jpeg",   // 🔥 SADECE LİSTE
    images: [
      "images/logo_2.png"                   // 🔥 MODAL
    ],
    rooms: "-",
    size: "45972.98 m²",
    floor: "-",
    age: "-"
  },
  {
    id: 17,
    title: "Arsa",
    location: "Sağlık Belediyesi / Aksaray",
    price: 3000000,
    currency: "TRY",
    zoning: "Ticari",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126950/670/6/1767525549081",
    cardImage: "images/satilik-arsa.jpg",   // 🔥 SADECE LİSTE
    images: [
      "images/logo_2.png"                   // 🔥 MODAL
    ],
    rooms: "-",
    size: "700 m²",
    floor: "-",
    age: "-"
  },
  {
    id: 18,
    title: "Arsa",
    location: "Sağlık Belediyesi / Aksaray",
    price: 3000000,
    currency: "TRY",
    zoning: "Ticari",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126950/670/5/1767525843966",
    cardImage: "images/satilik-arsa.jpg",   // 🔥 SADECE LİSTE
    images: [
      "images/logo_2.png"                   // 🔥 MODAL
    ],
    rooms: "-",
    size: "700 m²",
    floor: "-",
    age: "-"
  },
  {
    id: 19,
    title: "Arsa",
    location: "Sağlık Belediyesi / Aksaray",
    price: "6000 / m²",
    currency: "TRY",
    zoning: "Ticari",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126950/670/4/1767525967125",
    cardImage: "images/satilik-arsa.jpg",   // 🔥 SADECE LİSTE
    images: [
      "images/logo_2.png"                   // 🔥 MODAL
    ],
    rooms: "-",
    size: "763 m²",
    floor: "-",
    age: "-"
  },
  {
    id: 20,
    title: "Arsa",
    location: "Sağlık Belediyesi / Aksaray",
    price: "6000 / m²",
    currency: "TRY",
    zoning: "Ticari",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126950/670/3/1767526106535",
    cardImage: "images/satilik-arsa.jpg",   // 🔥 SADECE LİSTE
    images: [
      "images/logo_2.png"                   // 🔥 MODAL
    ],
    rooms: "-",
    size: "987 m²",
    floor: "-",
    age: "-"
  },
  {
    id: 21,
    title: "Arsa",
    location: "Sağlık Belediyesi / Aksaray",
    price: "5000 / m²",
    currency: "TRY",
    zoning: "Ticari",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126950/670/2/1767526168481",
    cardImage: "images/satilik-arsa.jpg",   // 🔥 SADECE LİSTE
    images: [
      "images/logo_2.png"                   // 🔥 MODAL
    ],
    rooms: "-",
    size: "987 m²",
    floor: "-",
    age: "-"
  }
  
];

/* =========================
   ELEMENT
========================= */
const listingsContainer = document.querySelector(".listings");

/* =========================
   FİYAT FORMAT
========================= */
function formatPrice(price, currency) {
  let symbol, locale;

  switch(currency) {
    case "EUR":
      symbol = "€";
      locale = "de-DE";
      break;
    case "USD":
      symbol = "$";
      locale = "en-US";
      break;
    case "TRY":
    default:
      symbol = "₺";
      locale = "tr-TR";
      break;
  }

  return symbol + " " + price.toLocaleString(locale);  // ← boşluk eklendi
}

/* =========================
   KATEGORİLER
========================= */
function getCategories() {
  return [...new Set(listingsData.map(item => item.title))];
}

/* =========================
   İLK AÇILIŞ – SADE, ŞIK
========================= */
/* ----------------------------
   KATEGORİLER
---------------------------- */
function getCategories() {
  // 🔥 istediğin sırada kategoriler
  return ["Arsa", "Dükkan", "3+1 Daire", "Kat Karşılığı Arsa", "Tarla"];
}

/* ----------------------------
   RENDER KATEGORİLER
---------------------------- */
function renderCategories() {
  listingsContainer.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.className = "category-grid";

  getCategories().forEach(title => {
    // 👉 kategoriye ait ilan sayısı
    const count = listingsData.filter(
      item => item.title === title
    ).length;

    const card = document.createElement("div");
    card.className = "category-card";

    // 👉 başlık + sayı
    card.innerHTML = `${title}<span class="count">(${count})</span>`;


    card.addEventListener("click", () => {
      renderCategoryListings(title);
    });

    wrapper.appendChild(card);
  });

  listingsContainer.appendChild(wrapper);
}


/* =========================
   KATEGORİ İLANLARI
========================= */
function renderCategoryListings(title) {
  listingsContainer.innerHTML = "";

  // --- Category Bar ---
  const categoryBar = document.createElement("div");
  categoryBar.className = "category-bar";
  categoryBar.innerHTML = `
    <span class="back-btn">← Kategorilere Dön</span>
    <span class="category-title">${title}</span>
  `;
  categoryBar.querySelector(".back-btn").onclick = renderCategories;
  categoryBar.querySelector(".category-title").classList.add("active");
  listingsContainer.appendChild(categoryBar);

  // Spacer
  const spacer = document.createElement("div");
  spacer.style.height = "10px";
  listingsContainer.appendChild(spacer);

  // --- Fragment ile hızlı ekleme ---
  const fragment = document.createDocumentFragment();

  listingsData
    .filter(item => item.title === title)
    .forEach(item => {
      const card = document.createElement("article");
      card.className = "card";

      const img = item.cardImage || item.images?.[0] || "";

      card.innerHTML = `
        <img src="${img}" loading="lazy" alt="İlan" class="card-img">
        <div class="card-body">
          <h3>${item.title}</h3>
          <p class="location">${item.location}</p>
          <div class="price">${formatPrice(item.price, item.currency)}</div>
          <button class="detail-btn" data-id="${item.id}">Detay 🔍</button>
        </div>
      `;

      // Başlangıçta opaklığı sıfır yapıyoruz (fade-in için)
      card.style.opacity = 0;
      card.style.transform = "translateY(10px)";
      card.style.transition = "all 0.25s ease";

      fragment.appendChild(card);
    });

  listingsContainer.appendChild(fragment);

  // --- Fade-in Animasyonu (Lazy image ile uyumlu) ---
  const cards = listingsContainer.querySelectorAll(".card");
  cards.forEach(card => {
    const img = card.querySelector(".card-img");

    // Resim yüklendiğinde animasyonu başlat
    if (img.complete) {
      // Zaten yüklüyse hemen göster
      requestAnimationFrame(() => {
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
      });
    } else {
      img.onload = () => {
        requestAnimationFrame(() => {
          card.style.opacity = 1;
          card.style.transform = "translateY(0)";
        });
      };
    }
  });

  // Scroll başa al
  window.scrollTo({ top: 0, behavior: "smooth" });
}



/* =========================
   MODAL (AYNI – BOZULMAZ)
========================= */
document.addEventListener("click", e => {
  if (!e.target.classList.contains("detail-btn")) return;

  const id = Number(e.target.dataset.id);
  const item = listingsData.find(i => i.id === id);

  currentImages = item.images;
  currentIndex = 0;
  showImage(0);

  modalTitle.textContent = item.title;
  modalLocation.textContent = item.location;
  modalPrice.textContent = formatPrice(item.price, item.currency);
  modalRooms.innerHTML   = `Oda: <span class="value-colored">${item.rooms !== "-" ? item.rooms : ""}</span>`;
  modalSize.innerHTML    = `Alan: <span class="value-colored">${item.size !== "-" ? item.size : ""}</span>`;
  modalFloor.innerHTML   = `Kat: <span class="value-colored">${item.floor !== "-" ? item.floor : ""}</span>`;
  modalAge.innerHTML     = `Yaş: <span class="value-colored">${item.age !== "-" ? item.age : ""}</span>`;
  modalZoning.innerHTML  = `İmar: <span class="value-colored">${item.zoning !== "-" ? item.zoning : ""}</span>`;


  if (item.parcelUrl) {
    parcelBtn.style.display = "inline-block";
    parcelBtn.href = item.parcelUrl;
  } else {
    parcelBtn.style.display = "none";
  }

  modalOverlay.style.display = "flex";
});

/* =========================
   SLIDER
========================= */
function showImage(index) {
  sliderImage.src = currentImages[index];
  prevBtn.style.display = currentImages.length > 1 ? "flex" : "none";
  nextBtn.style.display = currentImages.length > 1 ? "flex" : "none";
}

prevBtn.onclick = e => {
  e.stopPropagation();
  currentIndex = currentIndex === 0 ? currentImages.length - 1 : currentIndex - 1;
  showImage(currentIndex);
};

nextBtn.onclick = e => {
  e.stopPropagation();
  currentIndex = currentIndex === currentImages.length - 1 ? 0 : currentIndex + 1;
  showImage(currentIndex);
};

/* =========================
   BAŞLAT
========================= */
renderCategories();

/* =========================
   MODAL KAPATMA – FIX
========================= */

// KAPAT BUTONU
closeModal.addEventListener("click", () => {
  modalOverlay.style.display = "none";
});

// ARKA PLAN TIKLAMA
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = "none";
  }
});

