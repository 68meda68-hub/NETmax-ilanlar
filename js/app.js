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
      "images/yasin_akturk/1.JPEG",
	  "images/yasin_akturk/3.JPEG",
	  "images/yasin_akturk/5.JPEG"
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
      "images/kadir_tekin/1.JPG",
	  "images/kadir_tekin/2.JPG",
	  "images/kadir_tekin/3.JPG",
	  "images/kadir_tekin/4.JPG",
	  "images/kadir_tekin/5.JPG",
	  "images/kadir_tekin/6.JPG",
	  "images/kadir_tekin/7.JPG",
	  "images/kadir_tekin/8.JPG",
	  "images/kadir_tekin/9.JPG",
	  "images/kadir_tekin/10.JPG",
	  "images/kadir_tekin/11.JPG"
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
    zoning: "Konut Alanı E=0.90",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126920/3895/17/1767094781910",
    images: [
      "images/satilik-arsa.JPG"
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
    zoning: "Konut Alanı A-3",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126916/6920/5/1767095636317",
    images: [
      "images/satilik-arsa.JPG"
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
    zoning: "Ticaret-Konut Alanı E=2.40",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126925/4553/1/1767096011253",
    images: [
      "images/arazi-gelistirme.JPG"
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
    zoning: "Konut Alanı A-3",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126924/4304/8/1767096659685",
    images: [
      "images/satilik-arsa.JPG"
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
      "images/cengiz_iz/1.JPEG",
	  "images/cengiz_iz/2.JPEG",
	  "images/cengiz_iz/3.JPEG",
	  "images/cengiz_iz/4.JPEG",
	  "images/cengiz_iz/5.JPEG",
	  "images/cengiz_iz/6.JPEG",
	  "images/cengiz_iz/7.JPEG"
    ],
    rooms: "3+1",
    size: "150 m²",
    floor: "Zemin",
    age: "-"
  },
  {
    id: 8,
    title: "Arsa",
    location: "Şifahane Mah / Aksaray",
    price: "250 / m²",
    currency: "EUR",
    zoning: "Konut Alanı A-3",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126924/4301/8/1767098064916",
    images: [
      "images/satilik-arsa.JPG"
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
    zoning: "Konut Alanı E=0.90",
    parcelUrl: "https://parselsorgu.tkgm.gov.tr/#ara/idari/126924/3833/13/1767099705379",
    images: [
      "images/satilik-arsa.JPG"
    ],
    rooms: "-",
    size: "1003.91 m²",
    floor: "-",
    age: "-"
  }
  
];

const listingsContainer = document.querySelector(".listings");

// Fiyat formatlama
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

// İlanları render
function renderListings() {
  listingsContainer.innerHTML = "";

  listingsData.forEach(item => {
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <img src="${item.images[0]}" alt="İlan">
      <div class="card-body">
        <h3>${item.title}</h3>
        <p class="location">${item.location}</p>
        <div class="price">${formatPrice(item.price, item.currency)}</div>
        <button class="detail-btn" data-id="${item.id}">Detay 🔍</button>
      </div>
    `;

    listingsContainer.appendChild(card);
  });
}

renderListings();

/* MODAL */
const modalOverlay = document.getElementById("modalOverlay");
const closeModal = document.getElementById("closeModal");

const sliderImage = document.getElementById("sliderImage");
const modalTitle = document.getElementById("modalTitle");
const modalLocation = document.getElementById("modalLocation");
const modalPrice = document.getElementById("modalPrice");
const modalRooms = document.getElementById("modalRooms");
const modalSize = document.getElementById("modalSize");
const modalFloor = document.getElementById("modalFloor");
const modalAge = document.getElementById("modalAge");
const modalZoning = document.getElementById("modalZoning");
const parcelBtn = document.getElementById("parcelBtn");

let currentImages = [];
let currentIndex = 0;

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Modal açma
document.addEventListener("click", e => {
  if (e.target.classList.contains("detail-btn")) {
    const id = Number(e.target.dataset.id);
    const item = listingsData.find(i => i.id === id);

    currentImages = item.images;
    currentIndex = 0;
    showImage(currentIndex);

    modalTitle.textContent = item.title;
    modalLocation.textContent = item.location;
    modalPrice.textContent = formatPrice(item.price, item.currency);
    modalRooms.textContent = "Oda: " + item.rooms;
    modalSize.textContent = "Alan: " + item.size;
    modalFloor.textContent = "Kat: " + item.floor;
    modalAge.textContent = "Bina Yaşı: " + item.age;
    modalZoning.textContent = "İmar: " + item.zoning;

    // Parsel butonu URL
    if(item.parcelUrl){
      parcelBtn.style.display = "inline-block";
      parcelBtn.href = item.parcelUrl;
    } else {
      parcelBtn.style.display = "none";
    }

    modalOverlay.style.display = "flex";
  }
});

// Modal kapatma
closeModal.addEventListener("click", () => {
  modalOverlay.style.display = "none";
});

modalOverlay.addEventListener("click", e => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = "none";
  }
});

// Slider
function showImage(index) {
  if (!currentImages || currentImages.length === 0) return;
  sliderImage.src = currentImages[index];

  // Butonları göster/gizle
  if (currentImages.length > 1) {
    prevBtn.style.display = "flex";
    nextBtn.style.display = "flex";
  } else {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
  }
}

// Önceki buton
prevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (currentImages.length <= 1) return;
  currentIndex = currentIndex === 0 ? currentImages.length - 1 : currentIndex - 1;
  showImage(currentIndex);
});

// Sonraki buton
nextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (currentImages.length <= 1) return;
  currentIndex = currentIndex === currentImages.length - 1 ? 0 : currentIndex + 1;
  showImage(currentIndex);
});

