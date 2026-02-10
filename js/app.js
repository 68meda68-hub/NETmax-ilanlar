/* =========================
   DATA
========================= */
const listingsData = [
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
	coord:[33.992319, 38.390511],
	cardImage: "images/satilik_arsa_2.png",   // 🔥 SADECE LİSTE
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
    cardImage: "images/satilik_arsa_2.png",   // 🔥 SADECE LİSTE
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
	cardImage: "images/kat_karsiligi.png",   // 🔥 SADECE LİSTE
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
	coord:[34.025409, 38.38774],
    cardImage: "images/satilik_arsa_2.png",   // 🔥 SADECE LİSTE
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
	coord:[34.023949, 38.38894],
    cardImage: "images/satilik_arsa_2.png",   // 🔥 SADECE LİSTE
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
	coord:[34.035905, 38.362865],
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
	coord:[33.999574, 38.393924],
    cardImage: "images/satilik_arsa_2.png",   // 🔥 SADECE LİSTE
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
    cardImage: "images/satilik_arsa_2.png",   // 🔥 SADECE LİSTE
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
    cardImage: "images/satilik_tarla_2.png",   // 🔥 SADECE LİSTE
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
    cardImage: "images/satilik_tarla_2.png",   // 🔥 SADECE LİSTE
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
    cardImage: "images/satilik_tarla_2.png",   // 🔥 SADECE LİSTE
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
    cardImage: "images/satilik_tarla_2.png",   // 🔥 SADECE LİSTE
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
    cardImage: "images/satilik_tarla_2.png",   // 🔥 SADECE LİSTE
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
	coord:[34.058325, 38.314204],
    cardImage: "images/satilik_arsa_2.png",   // 🔥 SADECE LİSTE
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
	coord:[34.058325, 38.314204],
    cardImage: "images/satilik_arsa_2.png",   // 🔥 SADECE LİSTE
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
	coord:[34.058325, 38.314204],
    cardImage: "images/satilik_arsa_2.png",   // 🔥 SADECE LİSTE
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
	coord:[34.058021, 38.314425],
    cardImage: "images/satilik_arsa_2.png",   // 🔥 SADECE LİSTE
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
	coord:[34.058021, 38.314425],
    cardImage: "images/satilik_arsa_2.png",   // 🔥 SADECE LİSTE
    images: [
      "images/logo_2.png"                   // 🔥 MODAL
    ],
    rooms: "-",
    size: "987 m²",
    floor: "-",
    age: "-",
	features: "-"
  }, 		// ← Yeni ilanlar
  {
    id: 22,
    title: "3+1 Daire",
    location: "Hassas Mah / Aksaray",
    price: 6000000,
    currency: "TRY",
    zoning: "-",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126916/2962/16/1770720594916",
    cardImage: "images/emin_acar/1.jpeg",   // 🔥 SADECE LİSTE
    images: [
      "images/emin_acar/1.jpeg",                  // 🔥 MODAL
	  "images/emin_acar/2.jpeg",
	  "images/emin_acar/3.jpeg",
	  "images/emin_acar/4.jpeg",
	  "images/emin_acar/5.jpeg",
	  "images/emin_acar/6.jpeg",
	  "images/emin_acar/7.jpeg",
	  "images/emin_acar/8.jpeg"
    ],
    rooms: "3+1",
    size: "150 m²",
    floor: "3",
    age: "1",
	features: "Kombili,Cam Balkonlu",
	swap: "Araç Takaslı"
  },
  {
    id: 23,
    title: "Dükkan",
    location: "B.Bölcek Mah / Aksaray",
    price: "2000 / m²",
    currency: "EUR",
    zoning: "-",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126914/4466/6/1767641262460",
    cardImage: "images/satilik_dukkan_2.png",   // 🔥 SADECE LİSTE
    images: [
      "images/logo_2.png"                   // 🔥 MODAL
    ],
    rooms: "-",
    size: "400 m²",
    floor: "-",
    age: "-",
	features: "-"
  },
  {
    id: 24,
    title: "3+1 Daire",
    location: "Şifahane Mah / Aksaray",
    price: 5800000,
    currency: "TRY",
    zoning: "-",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/cografi/38.39538642485814/34.0180116891861",
	coord:[34.017955,38.39559],
    images: [
      "images/yon_grup/1.jpeg",
	  "images/yon_grup/2.jpeg",
	  "images/yon_grup/3.jpeg",
	  "images/yon_grup/4.jpeg",
	  "images/yon_grup/5.jpeg",
	  "images/yon_grup/6.jpeg",
	  "images/yon_grup/7.jpeg",
	  "images/yon_grup/8.jpeg",
	  "images/yon_grup/9.jpeg",
	  "images/yon_grup/10.jpeg",
	  "images/yon_grup/11.jpeg",
	  "images/yon_grup/12.jpeg",
	  "images/yon_grup/13.jpeg",
	  "images/yon_grup/14.jpeg",
	  "images/yon_grup/15.jpeg",
	  "images/yon_grup/16.jpeg",
	  "images/yon_grup/17.jpeg"
    ],
    rooms: "3+1",
    size: "140 m²",
    floor: "4",
    age: "6-10",
	heating: "Merkezi",
	features: "Kapalı otopark,site güvenliği,havuz,hamam,sauna"
  }
  
];

/* =========================
title:        "Başlık",
location:     "Konum",
price:        "Fiyat",
currency:     "Para Birimi",
rooms:        "Oda",
size:         "Alan",
floor:        "Kat",
age:          "Bina Yaşı",
zoning:       "İmar Durumu",
features:     "Özellikler",
swap:         "Takas",
indoorsize:   "Kapalı Alan",
heating:      "Isıtma"
========================= */

/* =========================
   ELEMENT
========================= */
const listingsContainer = document.querySelector(".listings");
const streetBtn = document.getElementById("streetBtn");


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

/* =========================
   RENDER KATEGORİLER
========================= */
function renderCategories(lastUpdate = "02.02.2026") {
  listingsContainer.innerHTML = "";

  // --- ÜST BAŞLIK ---
  const titleBar = document.createElement("div");
  titleBar.className = "category-title-bar";
  titleBar.innerHTML = "🏷️&nbsp;&nbsp;İlan Kategorileri";
  listingsContainer.appendChild(titleBar);

  // --- Kategori Listesi ---
  const wrapper = document.createElement("div");
  wrapper.className = "category-grid";

  getCategories().forEach(title => {
    const count = listingsData.filter(item => item.title === title).length;

    const card = document.createElement("div");
    card.className = "category-card";
    card.innerHTML = `${title}<span class="count">(${count})</span>`;
    card.onclick = () => renderCategoryListings(title);

    wrapper.appendChild(card);
  });

  listingsContainer.appendChild(wrapper);

  // --- ALTTA SON GÜNCELLEME ---
  const updateBar = document.createElement("div");
  updateBar.className = "update-date";
  updateBar.textContent = `Son Güncelleme: ${lastUpdate}`;
  listingsContainer.appendChild(updateBar);
  
  // --- HARİTA BUTONU ---
	const mapBtn = document.createElement("button");
	mapBtn.className = "enter-btn";
	mapBtn.innerHTML = `<span style="font-size:20px; line-height:1; margin-right:6px;">🌍</span>İlanlar - Harita`;

	// ayrı sayfada aç
	mapBtn.onclick = () => {
	  // "_blank" yerine "_self" kullanırsan aynı sekmede açar
	  window.open("tum-ilanlar.html", "_blank");
	}

	listingsContainer.appendChild(mapBtn);

  // =========================
  //  ALTTA GERİ İKONU
  // =========================
  const backWrap = document.createElement("div");
  backWrap.className = "back-wrap";

  const backBtn = document.createElement("button");
	backBtn.className = "enter-btn back-btn";   // 👈 enter-btn stili
	backBtn.innerHTML = "👈 Geri";

	backBtn.onclick = () => {
	  const intro = document.getElementById("introScreen");
	  if (!intro) return;

	  intro.style.display = "flex";
	  intro.style.opacity = "0";

	  setTimeout(() => {
		intro.style.transition = "opacity .3s ease";
		intro.style.opacity = "1";
	  }, 10);
	};


  backWrap.appendChild(backBtn);
  listingsContainer.appendChild(backWrap);
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

  categoryBar.querySelector(".back-btn").onclick =
    () => renderCategories("02.02.2026");

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
			<h3 class="card-title">
				${item.title}
				<span class="card-id">İlan Id: ${item.id}</span>
			</h3>

          <p class="location">${item.location}</p>
          <div class="price">${formatPrice(item.price, item.currency)}</div>
          <button class="detail-btn" data-id="${item.id}">Detay 🔍</button>
        </div>
      `;

      card.style.opacity = 0;
      card.style.transform = "translateY(10px)";
      card.style.transition = "all 0.25s ease";

      fragment.appendChild(card);
    });

  listingsContainer.appendChild(fragment);

  // --- Fade-in Animasyonu ---
  const cards = listingsContainer.querySelectorAll(".card");
  cards.forEach(card => {
    const img = card.querySelector(".card-img");

    if (img.complete) {
      requestAnimationFrame(() => {
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
      });
    } else {
      img.addEventListener("load", () => {
        requestAnimationFrame(() => {
          card.style.opacity = 1;
          card.style.transform = "translateY(0)";
        });
      });
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}


/* =========================
   MODAL (AYNI – BOZULMAZ)
========================= */
function setField(el, label, value) {
  if (value && value !== "-") {
    el.innerHTML = `${label}: <span class="value-colored">${value}</span>`;
    el.style.display = "";
  } else {
    el.style.display = "none";
  }
}


document.addEventListener("click", e => {

  const btn = e.target.closest(".detail-btn");
  if (!btn) return;

  const id = Number(btn.dataset.id);
  const item = listingsData.find(i => i.id === id);
  if (!item) return;

  currentImages = item.images;
  currentIndex = 0;
  showImage(0);

  modalTitle.textContent = item.title;
  modalLocation.textContent = item.location;
  modalPrice.textContent = formatPrice(item.price, item.currency);

  setField(modalRooms,    "Oda",      item.rooms);
  setField(modalSize,     "Alan",     item.size);
  setField(modalFloor,    "Kat",      item.floor);
  setField(modalAge,      "Yaş",      item.age);
  setField(modalZoning,   "İmar",     item.zoning);
  setField(modalFeatures, "Özellik",  item.features);
  setField(modalSwap,     "Takas",    item.swap);
  setField(modalIndoorSize,"Kapalı Alan", item.indoorsize);
  setField(modalHeating,"Isıtma", item.heating);

  if (item.parcelUrl) {
    parcelBtn.style.display = "inline-block";
    parcelBtn.href = item.parcelUrl;
  } else {
    parcelBtn.style.display = "none";
  }

  // 👁️ Street View
  if (item.coord && item.coord.length === 2) {
    const lng = item.coord[0];
    const lat = item.coord[1];

    streetBtn.style.display = "inline-block";
    streetBtn.href =
      `https://www.google.com/maps?q=&layer=c&cbll=${lat},${lng}&cbp=11,0,0,0,0`;
  } else {
    streetBtn.style.display = "none";
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


document.addEventListener("DOMContentLoaded", () => {
      const intro = document.getElementById("introScreen");
      const btn = document.getElementById("enterBtn");

      btn.addEventListener("click", () => {
        intro.style.opacity = "0";
        intro.style.transition = "opacity .4s ease";

        setTimeout(() => {
          intro.style.display = "none";
        }, 400);
      });
    });
	
const slogans = [
  "Aksaray’da Güvenilir Gayrimenkul",
  "Doğru Yatırım, Doğru Adres",
  "Hayalinizdeki Mülk Bir Adım Uzakta",
  "NETmax’ta Güvenle Al, Güvenle Sat"
];

let sloganIndex = 0;
const sloganEl = document.getElementById("introSlogan");

const NORMAL_DURATION = 7000;   // normal slogan süresi
const SPECIAL_DURATION = 10000; // 👈 özel slogan (küçülerek çıkması için UZUN)

function playSlogan() {
  const text = slogans[sloganIndex];

  // classları temizle
  sloganEl.classList.remove("special");

  let duration = NORMAL_DURATION;

  if (text === "NETmax’ta Güvenle Al, Güvenle Sat") {
    // 👉 ÖZEL SLOGAN
    sloganEl.innerHTML = `" <span class="slogan-highlight">${text}</span> "`;
    sloganEl.classList.add("special");
    duration = SPECIAL_DURATION;   // 👈 ANİMASYON TAM BİTSİN
  } else {
    sloganEl.textContent = `"${text}"`;
  }

  // animasyonu sıfırla
  sloganEl.classList.remove("animate");
  void sloganEl.offsetWidth;
  sloganEl.classList.add("animate");

  sloganIndex = (sloganIndex + 1) % slogans.length;
  setTimeout(playSlogan, duration);
}

playSlogan();


const eduBtn = document.getElementById("eduBtn");
const eduDropdown = document.getElementById("eduDropdown");

eduBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  eduDropdown.classList.toggle("show"); // dropdown aç/kapa
});

// Liste öğelerine tıklandığında sayfaya git
eduDropdown.querySelectorAll(".dropdown-item").forEach(item => {
  item.addEventListener("click", () => {
    window.location.href = item.getAttribute("data-page");
  });
});

// Sayfa başka yere tıklayınca dropdown kapanır
document.addEventListener("click", () => {
  eduDropdown.classList.remove("show");
});

document.getElementById("eduClose").onclick = function () {
  document.getElementById("eduDropdown").style.display = "none";
};









