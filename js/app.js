/* =========================
   DATA
========================= */
const listingsData = [
  {
    id: 3,
    title: "Arsa",
    location: "Çiftlik Mah / Aksaray",
    price: "180 / m²",
    currency: "EUR",
    zoning: "Konut Alanı",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126920/3895/17/1767094781910",
	coord:[33.992319, 38.390511],			    // GOOGLE STREET KOORDİNATLARI
	googlecoord: [38.390635, 33.992221],	// GOOGLE KOORDİNATLARI
	cardImage: "images/satilik_arsa_2.png",    // 🔥 SADECE LİSTE
    images: [
      "images/logo_2.png"                     // 🔥 MODAL
    ],
    rooms: "-",
    area: "816.15 m²",
    floor: "-",
    age: "-",
	titledeedstatus: "Müstakil Tapulu"
  },
  {
    id: 4,
    title: "Arsa",
    location: "Hassas Mah / Aksaray",
    price: "120 / m²",
    currency: "EUR",
    zoning: "Konut Alanı",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126916/6920/5/1767095636317",
	googlecoord: [38.410651, 33.972646],	// GOOGLE KOORDİNATLARI
    cardImage: "images/satilik_arsa_2.png",   // 🔥 SADECE LİSTE
    images: [
      "images/logo_2.png"                   // 🔥 MODAL
    ],
    rooms: "-",
    area: "2168.48 m²",
    floor: "-",
    age: "-",
	titledeedstatus: "Müstakil Tapulu",
  },
  {
    id: 5,
    title: "Kat Karşılığı Arsa",
    location: "Tacin Mah / Aksaray",
    price: "% 40",
    currency: "-",
    zoning: "Ticaret-Konut",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126925/4553/1/1767096011253",
	googlecoord: [38.368856, 33.996951],	// GOOGLE KOORDİNATLARI
	cardImage: "images/kat_karsiligi.png",   // 🔥 SADECE LİSTE
    images: [
      "images/arazi-gelistirme.jpg"
    ],
    rooms: "-",
    area: "1230.00 m²",
    floor: "-",
    age: "-",
	titledeedstatus: "Müstakil Tapulu"
  },
  {
    id: 6,
    title: "Arsa",
    location: "Şifahane Mah / Aksaray",
    price: "250 / m²",
    currency: "EUR",
    zoning: "Konut Alanı",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126924/4304/8/1767096659685",
	coord:[34.025409, 38.38774],
	googlecoord: [38.387608, 34.025321],	// GOOGLE KOORDİNATLARI
    cardImage: "images/satilik_arsa_2.png",   // 🔥 SADECE LİSTE
    images: [
      "images/logo_2.png"                   // 🔥 MODAL
    ],
    rooms: "-",
    area: "426.32 m²",
    floor: "-",
    age: "-",
	titledeedstatus: "Müstakil Tapulu"
  },
  {
    id: 7,
    title: "3+1 Daire",
    location: "Zafer Mah / Aksaray",
    price: 2500000,
    currency: "TRY",
    zoning: "-",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126926/901/10/1767096913469",
	googlecoord: [38.396688, 34.02303],	// GOOGLE KOORDİNATLARI
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
    zoning: "Konut Alanı",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126924/4301/8/1767098064916",
	coord:[34.023949, 38.38894],
	googlecoord: [38.389057, 34.02409],	// GOOGLE KOORDİNATLARI
    cardImage: "images/satilik_arsa_2.png",   // 🔥 SADECE LİSTE
    images: [
      "images/logo_2.png"                   // 🔥 MODAL
    ],
    rooms: "-",
    area: "557.89 m²",
    floor: "-",
    age: "-",
	titledeedstatus: "Müstakil Tapulu"
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
	googlecoord: [38.362612, 34.035636],	// GOOGLE KOORDİNATLARI
    images: [
      "images/sammaz_ozmel/1.JPG"
    ],
    rooms: "-",
    area: "500 m²",
    floor: "Zemin",
    age: "-",
	titledeedstatus: "Kat Mülkiyetli",
  },
  {
    id: 10,
    title: "Arsa",
    location: "Çiftlik Mah / Aksaray",
    price: "210 / m²",
    currency: "EUR",
    zoning: "Konut Alanı",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126924/3833/13/1767099705379",
	coord:[33.999574, 38.393924],
	googlecoord: [38.394005, 33.999362],	// GOOGLE KOORDİNATLARI
    cardImage: "images/satilik_arsa_2.png",   // 🔥 SADECE LİSTE
    images: [
      "images/logo_2.png"                   // 🔥 MODAL
    ],
    rooms: "-",
    area: "1003.91 m²",
    floor: "-",
    age: "-",
	titledeedstatus: "Müstakil Tapulu"
  },
  {
    id: 11,
    title: "Arsa",
    location: "Hassas Mah / Aksaray",
    price: "70 / m²",
    currency: "EUR",
    zoning: "Konut Alanı",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126916/7280/5/1767371807761",
	googlecoord: [38.405968, 33.96367],	// GOOGLE KOORDİNATLARI
    cardImage: "images/satilik_arsa_2.png",   // 🔥 SADECE LİSTE
    images: [
      "images/logo_2.png"                   // 🔥 MODAL
    ],
    rooms: "-",
    area: "2412.81 m²",
    floor: "-",
    age: "-",
	titledeedstatus: "Müstakil Tapulu"
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
    area: "23254.21 m²",
    floor: "-",
    age: "-",
	titledeedstatus: "Müstakil Tapulu"
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
    area: "32711.42 m²",
    floor: "-",
    age: "-",
	titledeedstatus: "Müstakil Tapulu"
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
    area: "15000 m²",
    floor: "-",
    age: "-",
	titledeedstatus: "Müstakil Tapulu"
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
    area: "25145 m²",
    floor: "-",
    age: "-",
	titledeedstatus: "Müstakil Tapulu"
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
    area: "45972.98 m²",
    floor: "-",
    age: "-",
	titledeedstatus: "Müstakil Tapulu"
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
	googlecoord: [38.31396, 34.0576],	// GOOGLE KOORDİNATLARI
    cardImage: "images/satilik_arsa_2.png",   // 🔥 SADECE LİSTE
    images: [
      "images/logo_2.png"                   // 🔥 MODAL
    ],
    rooms: "-",
    area: "700 m²",
    floor: "-",
    age: "-",
	titledeedstatus: "Müstakil Tapulu"
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
	googlecoord: [38.314056, 34.057859],	// GOOGLE KOORDİNATLARI
    cardImage: "images/satilik_arsa_2.png",   // 🔥 SADECE LİSTE
    images: [
      "images/logo_2.png"                   // 🔥 MODAL
    ],
    rooms: "-",
    area: "700 m²",
    floor: "-",
    age: "-",
	titledeedstatus: "Müstakil Tapulu"
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
	googlecoord: [38.314146, 34.058121],	// GOOGLE KOORDİNATLARI
    cardImage: "images/satilik_arsa_2.png",   // 🔥 SADECE LİSTE
    images: [
      "images/logo_2.png"                   // 🔥 MODAL
    ],
    rooms: "-",
    area: "763 m²",
    floor: "-",
    age: "-",
	titledeedstatus: "Müstakil Tapulu"
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
	googlecoord: [38.314352, 34.057841],	// GOOGLE KOORDİNATLARI
    cardImage: "images/satilik_arsa_2.png",   // 🔥 SADECE LİSTE
    images: [
      "images/logo_2.png"                   // 🔥 MODAL
    ],
    rooms: "-",
    area: "987 m²",
    floor: "-",
    age: "-",
	titledeedstatus: "Müstakil Tapulu"
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
	googlecoord: [38.314246, 34.057531],	// GOOGLE KOORDİNATLARI
    cardImage: "images/satilik_arsa_2.png",   // 🔥 SADECE LİSTE
    images: [
      "images/logo_2.png"                   // 🔥 MODAL
    ],
    rooms: "-",
    area: "987 m²",
    floor: "-",
    age: "-",
	features: "-",
	titledeedstatus: "Müstakil Tapulu"
  }, 		
  {
    id: 22,
    title: "3+1 Daire",
    location: "Hassas Mah / Aksaray",
    price: 6000000,
    currency: "TRY",
    zoning: "-",
	parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126916/2962/16/1770720594916",
	googlecoord: [38.388422, 34.012967],	// GOOGLE KOORDİNATLARI
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
	numberoffloor: "3",
	balcony: "Var",
    age: "1",
	swap: "Araç Takaslı",
	heating: "Kombi Doğalgaz",
	description:
		"Cam Balkonlu\n" +
		"Kombisi Takılı\n" +
		"Geniş Balkon ( 21 m² )"
  },
  {
    id: 23,
    title: "Dükkan",
    location: "B.Bölcek Mah / Aksaray",
    price: "2000 / m²",
    currency: "EUR",
    zoning: "-",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126914/4466/6/1767641262460",
	googlecoord: [38.369258, 34.00708],	// GOOGLE KOORDİNATLARI
    cardImage: "images/satilik_dukkan_2.png",   // 🔥 SADECE LİSTE
    images: [
      "images/logo_2.png"                   // 🔥 MODAL
    ],
    rooms: "-",
    area: "400 m²",
    floor: "-",
    age: "-",
	features: "-",
	titledeedstatus: "Kat Mülkiyetli"
  },
  {
    id: 24,
    title: "3+1 Daire",
    location: "Şifahane Mah / Aksaray",
    price: 5800000,
    currency: "TRY",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/cografi/38.39538642485814/34.0180116891861",
	coord:[34.017955,38.39559],
	googlecoord: [38.39559, 34.017955],	// GOOGLE KOORDİNATLARI
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
	numberoffloor: "8",
    age: "6-10",
	heating: "Merkezi Doğalgaz",
	balcony: "Var",
	lift: "Var",
	parking: "Var",
	site: "Evet",
	usecase: "Mülk Sahibi",
	titledeedstatus: "Kat Mülkiyetli",
	description:
		"Şifahane Mahallesi merkezi konum\n" +
		"140 m² geniş ve ferah kullanım alanı\n" +
		"3+1 fonksiyonel daire planı\n" +
		"Aydınlık cephe\n" +
		"4. Kat\n" +
		"Merkezi Doğalgaz Isıtma\n" +
		"Site içerisinde havuz ve sauna\n" +
		"Asansör mevcut\n" +
		"Otopark mevcut\n" +
		"Balkon var\n" +
		"Güvenli site yaşamı\n" +
		"Mülk sahibinden\n" +
		"Yüksek yatırım potansiyeli"

  }
  
];

/* =========================
title:           "Başlık",
location:        "Konum",
price:           "Fiyat",
currency:        "Para Birimi",
rooms:           "Oda Sayısı",
size:            "m² Brüt",
area:            "Alan",
floor:           "Bulunduğu Kat",
locatedfloor:    "Bulunduğu Kat",
age:             "Bina Yaşı",
zoning:          "İmar Durumu",
features:        "Özellikler",
swap:            "Takas",
indoorsize:      "Kapalı Alan",
heating:         "Isıtma",
balcony:         "Balkon",
lift:            "Asansör",
parking:         "Otopark",
site:            "Site İçerisinde",
furnished:       "Eşyalı",
numberoffloor:   "Kat Sayısı",
usecase:         "Kullanım Durumu",
titledeedstatus: "Tapu Durumu"
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

// ==========================
// HASH İLE DİREKT İLAN AÇMA
// ==========================
function openListingFromHash() {
  const hash = window.location.hash.replace("#", "");
  if (!hash) return;

  const id = Number(hash);
  const item = listingsData.find(i => i.id === id);
  if (!item) {
    console.warn("İlan bulunamadı:", id);
    return;
  }

  // Kategori listesi oluştur
  renderCategoryListings(item.title);

  // Modal butonu DOM’a gelene kadar bekle
  const tryOpen = () => {
    const btn = document.querySelector(`.detail-btn[data-id="${id}"]`);
    if (btn) {
      btn.click();
    } else {
      setTimeout(tryOpen, 100);
    }
  };
  tryOpen();
}


/* =========================
   MODAL (AYNI – BOZULMAZ)
========================= */
function setField(el, label, value) {
  if (value && value !== "-") {
    el.innerHTML = `${label} <span class="value-colored">${value}</span>`;
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

  setField(modalRooms,           "Oda Sayısı", item.rooms);
  setField(modalSize,            "m² Brüt", item.size);
  setField(modalArea,            "Alan", item.area);
  setField(modalFloor,           "Bulunduğu Kat", item.floor);
  setField(modalBalcony,         "Balkon", item.balcony);
  setField(modalAge,             "Bina Yaşı", item.age);
  setField(modalZoning,          "İmar Durumu", item.zoning);
  setField(modalSwap,            "Takas", item.swap);
  setField(modalIndoorSize,      "Kapalı Alan", item.indoorsize);
  setField(modalHeating,         "Isıtma", item.heating);
  setField(modalLift,      	     "Asansör", item.lift);
  setField(modalParking,         "Otopark", item.parking);
  setField(modalSite,            "Site İçerisinde", item.site);
  setField(modalFurnished,       "Eşyalı", item.furnished);
  setField(modalNumberOfFloor,   "Kat Sayısı", item.numberoffloor);
  setField(modalUsecase,         "Kullanım Durumu", item.usecase);
  setField(modalTitledeedstatus, "Tapu Durumu", item.titledeedstatus);

  // 🔹 Açıklama paneli entegrasyonu
	if (item.description && item.description.trim() !== "") {

  detailsBtn.style.display = "inline-block";
  modalFeatures.style.display = "none";
  modalFeatures.classList.remove("show");

  const lines = item.description.split("\n");

  modalFeatures.innerHTML = lines
    .map(line => `<div class="feature-line">${line}</div>`)
    .join("");

  detailsBtn.onclick = () => {

    if (modalFeatures.style.display === "none") {

      modalFeatures.style.display = "block";

      // küçük gecikme ile animasyonu tetikle
      setTimeout(() => {
        modalFeatures.classList.add("show");
      }, 10);

      detailsBtn.textContent = "Kapat";

      modalFeatures.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    } else {

      modalFeatures.classList.remove("show");

      setTimeout(() => {
        modalFeatures.style.display = "none";
      }, 250);

      detailsBtn.textContent = "Detaylar";
    }
  };

} else {

  detailsBtn.style.display = "none";
  modalFeatures.style.display = "none";
  modalFeatures.innerHTML = "";
  detailsBtn.onclick = null;
}


  // Parsel butonu
  if (item.parcelUrl) {
    parcelBtn.style.display = "inline-block";
    parcelBtn.href = item.parcelUrl;
  } else {
    parcelBtn.style.display = "none";
  }
  
    // Google Maps butonu (yeni)
  if (item.googlecoord && item.googlecoord.length === 2) {
    mapsBtn.style.display = "inline-block"; // butonu göster

   mapsBtn.onclick = () => {
  const lat = item.googlecoord[0];
  const lng = item.googlecoord[1];

  // Modal oluştur
  const modal = document.createElement("div");
	modal.style.position = "fixed";
	modal.style.top = "0";
	modal.style.left = "0";
	modal.style.width = "100%";
	modal.style.height = "100%";
	modal.style.background = "rgba(0,0,0,0.6)";
	modal.style.display = "flex";
	modal.style.alignItems = "center";
	modal.style.justifyContent = "center";
	modal.style.zIndex = "99999";

	// İç kutu
	const content = document.createElement("div");
	content.style.width = "80%";
	content.style.maxWidth = "900px";
	content.style.height = "500px";
	content.style.background = "#fff";
	content.style.borderRadius = "10px";
	content.style.overflow = "hidden";
	content.style.position = "relative";

	// Kapat butonu
	const closeBtn = document.createElement("button");
	closeBtn.innerHTML = "✕";
	closeBtn.style.position = "absolute";
	closeBtn.style.top = "10px";
	closeBtn.style.right = "10px";
	closeBtn.style.zIndex = "20";
	closeBtn.style.background = "#fff";
	closeBtn.style.border = "none";
	closeBtn.style.fontSize = "18px";
	closeBtn.style.cursor = "pointer";

	closeBtn.onclick = () => document.body.removeChild(modal);

	// Street View butonu
	const streetBtn = document.createElement("button");
	streetBtn.innerHTML = "Street View";
	streetBtn.style.position = "absolute";
	streetBtn.style.bottom = "70px";   // yukarı konum
	streetBtn.style.left = "10px";
	streetBtn.style.zIndex = "20";
	streetBtn.style.padding = "4px 8px";
	streetBtn.style.background = "#1976d2";   // mavi zemin
	streetBtn.style.color = "#ffffff";        // beyaz yazı
	streetBtn.style.border = "none";
	streetBtn.style.borderRadius = "4px";
	streetBtn.style.fontSize = "11px";
	streetBtn.style.cursor = "pointer";
	streetBtn.style.boxShadow = "0 2px 6px rgba(0,0,0,0.3)";


	// Iframe
	const iframe = document.createElement("iframe");

	// 1️⃣ Önce normal harita
	iframe.src = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

	iframe.style.width = "100%";
	iframe.style.height = "100%";
	iframe.style.border = "0";

	// 2️⃣ Butona basınca Street View'a geç
	streetBtn.onclick = () => {

	  const lat = item.googlecoord[0];
	  const lng = item.googlecoord[1];

	  const streetUrl =
		`https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${lat},${lng}&radius=300`;

	  window.open(streetUrl, "_blank");
	};

	// Birleştir
	content.appendChild(closeBtn);
	content.appendChild(streetBtn);
	content.appendChild(iframe);
	modal.appendChild(content);
	document.body.appendChild(modal);

	};

  } else {
    mapsBtn.style.display = "none"; // koordinat yoksa gizle
    mapsBtn.onclick = null;
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
renderCategories(); // kategori ekranını oluştur

const openListingFromHashSafe = () => {
  const hash = window.location.hash.replace("#", "");
  if (!hash) return;

  const item = listingsData.find(i => i.id.toString() === hash);
  if (!item) {
    console.warn("İlan bulunamadı:", hash);
    return;
  }

  // Kategori ekranı
  renderCategoryListings(item.title);

  // Buton DOM hazır olana kadar bekle
  const tryOpen = () => {
    const btn = document.querySelector(`.detail-btn[data-id="${hash}"]`);
    if (btn) {
      btn.click();
    } else {
      setTimeout(tryOpen, 100);
    }
  };
  tryOpen();
};

setTimeout(openListingFromHashSafe, 300);


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
const eduClose = document.getElementById("eduClose");

/* Aç / kapa */
eduBtn.addEventListener("click", (e) => {
  e.preventDefault(); // eduBtn <a> ise sayfa yenilenmesin
  eduDropdown.classList.toggle("show");
});

/* X ile kapat */
eduClose.addEventListener("click", (e) => {
  e.stopPropagation();
  eduDropdown.classList.remove("show");
});

/* Dışarı tıklanınca kapat (CLICK DEĞİL) */
document.addEventListener("pointerdown", (e) => {
  if (
    !eduDropdown.contains(e.target) &&
    !eduBtn.contains(e.target)
  ) {
    eduDropdown.classList.remove("show");
  }
});

/* Listeye tıklanınca yönlen */
eduDropdown.querySelectorAll(".dropdown-item").forEach(item => {
  item.addEventListener("click", () => {
    window.location.href = item.dataset.page;
  });
});

















