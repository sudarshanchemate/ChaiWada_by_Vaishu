/* =========================================================
   CONFIG — edit these values to update the whole site
   ========================================================= */
const CONFIG = {
  phone: "+919876543210",            // placeholder — replace with real number
  phoneDisplay: "+91 98765 43210",
  whatsappMsg: "Hi Chai वडा by Vaishu! ☕",
  lat: 18.5993154,
  lng: 74.0082295,
};

/* =========================================================
   TRANSLATIONS (English / मराठी)
   ========================================================= */
const I18N = {
  en: {
    "nav.about": "About", "nav.menu": "Menu", "nav.gallery": "Gallery", "nav.visit": "Visit",
    "hero.eyebrow": "Open-air chai café · Pune",
    "hero.sub": "Kulhad chai, hot vada pav and evenings beside green fields — come hungry, leave happy.",
    "cta.menu": "See the Menu", "cta.directions": "Get Directions", "cta.whatsapp": "WhatsApp Us",
    "cta.band": "Your table by the fields is waiting.",
    "tag.fresh": "☕ Fresh every cup",
    "about.eyebrow": "Our story",
    "about.title": "Chai, vada pav & green fields",
    "about.p1": "Chai वडा by Vaishu is an open-air café sitting right beside lush green fields — a place to slow down with a hot kulhad of chai and a spicy vada pav.",
    "about.p2": "A straw-roof chai hut, festive bunting, string lights and hills on the horizon. It's where friends gather in the evening, families unwind on weekends, and travellers stop for “just one cutting”.",
    "badge.1": "Brewed fresh", "badge.2": "Field-side seating", "badge.3": "Pocket friendly",
    "menu.eyebrow": "What we serve", "menu.title": "Our Menu",
    "menu.note": "Sample menu — items & prices may vary",
    "menu.featT": "The evening classic", "menu.featD": "Hot chai + buttery bun maska",
    "why.eyebrow": "Why people keep coming back", "why.title": "The Chai वडा vibe",
    "why.1t": "Seats by the fields", "why.1d": "Open-air seating with green fields and hills all around.",
    "why.2t": "Fresh every cup", "why.2d": "Every chai is boiled fresh — never reheated.",
    "why.3t": "Vada pav worth the drive", "why.3d": "Crispy, hot and spicy — the other half of our name.",
    "why.4t": "Evenings under lights", "why.4d": "String lights, festive flags and a glowing sign after sunset.",
    "gallery.eyebrow": "From our café", "gallery.title": "Moments at Chai वडा",
    "gallery.follow": "Follow @chaiwada_by_vaishu",
    "visit.eyebrow": "Drop by anytime", "visit.title": "Come, have a chai with us",
    "visit.addrL": "Address", "visit.addr": "Chai वडा by Vaishu, Pune, Maharashtra",
    "visit.hoursL": "Timings", "visit.hours": "Open daily · 6:30 AM – 10:30 PM",
    "visit.phoneL": "Phone",
    "footer.made": "Made with love & lots of chai",
    "bar.call": "Call", "bar.dir": "Directions",
    popular: "Popular",
  },
  mr: {
    "nav.about": "आमच्याबद्दल", "nav.menu": "मेनू", "nav.gallery": "गॅलरी", "nav.visit": "भेट द्या",
    "hero.eyebrow": "मोकळ्या हवेतला चहा कॅफे · पुणे",
    "hero.sub": "कुल्हड चहा, गरमागरम वडा पाव आणि हिरव्यागार शेतांशेजारी निवांत संध्याकाळ — पोटभर खा, मनभर हसा.",
    "cta.menu": "मेनू पहा", "cta.directions": "मार्ग पहा", "cta.whatsapp": "व्हॉट्सॲप करा",
    "cta.band": "शेताकडेचं तुमचं टेबल तुमची वाट पाहतंय.",
    "tag.fresh": "☕ प्रत्येक कप ताजा",
    "about.eyebrow": "आमची गोष्ट",
    "about.title": "चहा, वडा पाव आणि हिरवीगार शेतं",
    "about.p1": "चहा वडा बाय वैशू हा हिरव्यागार शेतांच्या अगदी कडेला असलेला मोकळ्या हवेतला कॅफे आहे — गरम कुल्हड चहा आणि झणझणीत वडा पावसोबत निवांत होण्याची जागा.",
    "about.p2": "गवताच्या छपराची चहाची झोपडी, रंगीबेरंगी पताका, दिव्यांच्या माळा आणि क्षितिजावर डोंगर. संध्याकाळी मित्र जमतात, वीकेंडला कुटुंबं निवांत होतात आणि प्रवासी “फक्त एक कटिंग” साठी थांबतात.",
    "badge.1": "ताजा उकळलेला", "badge.2": "शेताकडेची बैठक", "badge.3": "खिशाला परवडणारे",
    "menu.eyebrow": "आमच्याकडे काय मिळतं", "menu.title": "आमचा मेनू",
    "menu.note": "नमुना मेनू — पदार्थ व किमती बदलू शकतात",
    "menu.featT": "संध्याकाळची खास जोडी", "menu.featD": "गरम चहा + लोणीदार बन मस्का",
    "why.eyebrow": "लोक पुन्हा पुन्हा का येतात", "why.title": "चहा वडाचा माहोल",
    "why.1t": "शेतांच्या कडेला बैठक", "why.1d": "चारी बाजूंनी हिरवीगार शेतं आणि डोंगर — मोकळ्या हवेत बसा.",
    "why.2t": "प्रत्येक कप ताजा", "why.2d": "प्रत्येक चहा ताजा उकळलेला — कधीही पुन्हा गरम केलेला नाही.",
    "why.3t": "खास वडा पाव", "why.3d": "कुरकुरीत, गरम आणि झणझणीत — आमच्या नावाचा दुसरा भाग.",
    "why.4t": "दिव्यांखालच्या संध्याकाळी", "why.4d": "दिव्यांच्या माळा, रंगीत पताका आणि झगमगणारा बोर्ड.",
    "gallery.eyebrow": "आमच्या कॅफेमधून", "gallery.title": "चहा वडामधील क्षण",
    "gallery.follow": "इंस्टाग्रामवर फॉलो करा",
    "visit.eyebrow": "कधीही या", "visit.title": "या, आमच्यासोबत एक चहा घ्या",
    "visit.addrL": "पत्ता", "visit.addr": "चहा वडा बाय वैशू, पुणे, महाराष्ट्र",
    "visit.hoursL": "वेळ", "visit.hours": "दररोज · सकाळी ६:३० – रात्री १०:३०",
    "visit.phoneL": "फोन",
    "footer.made": "प्रेमाने आणि भरपूर चहाने बनवलेले",
    "bar.call": "कॉल", "bar.dir": "मार्ग",
    popular: "लोकप्रिय",
  },
};

/* =========================================================
   MENU — sample items, edit freely
   ========================================================= */
const MENU = [
  {
    id: "chai", en: "Chai", mr: "चहा",
    items: [
      { e: "🔥", en: ["Kadak Cutting Chai", "Strong, bold, classic"], mr: ["कडक कटिंग चहा", "दमदार, कडक, क्लासिक"], price: 15, pop: true },
      { e: "🏺", en: ["Kulhad Chai", "Served in a clay kulhad"], mr: ["कुल्हड चहा", "मातीच्या कुल्हडमधून"], price: 25, pop: true },
      { e: "🫚", en: ["Adrak Chai", "Fresh crushed ginger"], mr: ["आल्याचा चहा", "ताज्या कुटलेल्या आल्याचा"], price: 20 },
      { e: "🌿", en: ["Elaichi Chai", "Fragrant green cardamom"], mr: ["वेलची चहा", "सुगंधी वेलचीचा"], price: 20 },
      { e: "✨", en: ["Masala Chai", "Our special house spice blend"], mr: ["मसाला चहा", "आमचा खास घरगुती मसाला"], price: 25 },
      { e: "🍋", en: ["Lemon Tea", "Light & tangy, no milk"], mr: ["लिंबू चहा", "बिनदुधाचा, हलका आंबट"], price: 20 },
    ],
  },
  {
    id: "vada", en: "Vada Pav & Bun", mr: "वडा पाव व बन",
    items: [
      { e: "🍔", en: ["Vada Pav", "With dry garlic chutney & fried chilli"], mr: ["वडा पाव", "सुकी लसूण चटणी आणि तळलेल्या मिरचीसोबत"], price: 20, pop: true },
      { e: "🧀", en: ["Cheese Vada Pav", "Loaded with melty cheese"], mr: ["चीज वडा पाव", "भरपूर वितळलेलं चीज"], price: 40 },
      { e: "🧈", en: ["Bun Maska", "Soft bun, loads of butter"], mr: ["बन मस्का", "मऊ बन, भरपूर बटर"], price: 30, pop: true },
      { e: "🧀", en: ["Cheese Bun Maska", "Butter + cheese, the indulgent one"], mr: ["चीज बन मस्का", "बटर + चीज, खास मेजवानी"], price: 45 },
      { e: "☕", en: ["Chai + Vada Pav Combo", "Our namesake — the perfect pair"], mr: ["चहा + वडा पाव कॉम्बो", "आमच्या नावाची जोडी"], price: 35 },
    ],
  },
  {
    id: "snacks", en: "Snacks", mr: "नाश्ता",
    items: [
      { e: "🌶️", en: ["Misal Pav", "Spicy, tarri-loaded Puneri style"], mr: ["मिसळ पाव", "झणझणीत, तर्रीदार पुणेरी मिसळ"], price: 70, pop: true },
      { e: "🥗", en: ["Bhel", "Crunchy, tangy & chatpata"], mr: ["भेळ", "कुरकुरीत, चटपटीत भेळ"], price: 40 },
      { e: "🧅", en: ["Kanda Bhaji", "Crispy onion fritters"], mr: ["कांदा भजी", "कुरकुरीत कांदा भजी"], price: 40 },
      { e: "🍚", en: ["Poha", "With peanuts & a squeeze of lemon"], mr: ["पोहे", "शेंगदाणे आणि लिंबासह"], price: 30 },
      { e: "🍜", en: ["Masala Maggi", "Made hot, made spicy"], mr: ["मसाला मॅगी", "गरमागरम, मसालेदार"], price: 40 },
      { e: "🥐", en: ["Khari & Toast", "Chai's perfect partner"], mr: ["खारी व टोस्ट", "चहाचा परफेक्ट जोडीदार"], price: 20 },
    ],
  },
  {
    id: "coffee", en: "Coffee & More", mr: "कॉफी व इतर",
    items: [
      { e: "☕", en: ["Hot Coffee", "Frothy, milky, comforting"], mr: ["गरम कॉफी", "फेसाळ, दुधाळ कॉफी"], price: 25 },
      { e: "🧋", en: ["Cold Coffee", "Thick & chilled"], mr: ["कोल्ड कॉफी", "घट्ट आणि थंडगार"], price: 50 },
      { e: "🥛", en: ["Haldi Doodh", "Warm turmeric milk"], mr: ["हळदीचं दूध", "गरम हळद-दूध"], price: 30 },
    ],
  },
];

/* =========================================================
   GALLERY — photos in /images
   ========================================================= */
const GALLERY = [
  { src: "images/entrance.png",       en: "Welcome to Chai वडा",   mr: "चहा वडामध्ये स्वागत" },
  { src: "images/sign-night.png",     en: "Evenings glow here",    mr: "संध्याकाळची रोषणाई" },
  { src: "images/chai-bun.png",       en: "Chai & bun maska",      mr: "चहा आणि बन मस्का" },
  { src: "images/seating-fields.png", en: "Seats by the fields",   mr: "शेतांच्या कडेला बैठक" },
  { src: "images/hut-counter.png",    en: "Our chai hut",          mr: "आमची चहाची झोपडी" },
  { src: "images/sign-evening.png",   en: "Evenings like this",    mr: "अशा संध्याकाळी" },
];

/* =========================================================
   APP
   ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch {} },
};

let lang = store.get("cw-lang") || "en";
let activeTab = MENU[0].id;

/* ---------- Links ---------- */
function setupLinks() {
  const dir = `https://www.google.com/maps/dir/?api=1&destination=${CONFIG.lat},${CONFIG.lng}`;
  const wa = `https://wa.me/${CONFIG.phone.replace("+", "")}?text=${encodeURIComponent(CONFIG.whatsappMsg)}`;
  $$(".js-directions").forEach(a => (a.href = dir));
  $$(".js-whatsapp").forEach(a => (a.href = wa));
  $$(".js-tel").forEach(a => (a.href = `tel:${CONFIG.phone}`));
  $$(".js-phone-text").forEach(a => (a.textContent = CONFIG.phoneDisplay));
}

/* ---------- Language ---------- */
function applyLang() {
  document.documentElement.lang = lang;
  const dict = I18N[lang];
  $$("[data-i18n]").forEach(el => {
    const val = dict[el.dataset.i18n];
    if (val) el.textContent = val;
  });
  renderTabs();
  renderMenu();
  renderGalleryCaptions();
}

$("#langToggle").addEventListener("click", () => {
  lang = lang === "en" ? "mr" : "en";
  store.set("cw-lang", lang);
  applyLang();
});

/* ---------- Menu ---------- */
function renderTabs() {
  $("#menuTabs").innerHTML = MENU.map(c =>
    `<button class="tab ${c.id === activeTab ? "active" : ""}" role="tab" data-id="${c.id}">${c[lang]}</button>`
  ).join("");
}

function renderMenu() {
  const cat = MENU.find(c => c.id === activeTab);
  $("#menuGrid").innerHTML = cat.items.map((it, i) => {
    const [name, desc] = it[lang];
    return `
      <div class="menu-item" style="animation-delay:${i * 50}ms">
        <div class="menu-item__emoji">${it.e}</div>
        <div class="menu-item__body">
          <div class="menu-item__row">
            <span class="menu-item__name">${name}${it.pop ? `<span class="tag-pop">${I18N[lang].popular}</span>` : ""}</span>
            <span class="menu-item__dots"></span>
            <span class="menu-item__price">₹${it.price}</span>
          </div>
          <p class="menu-item__desc">${desc}</p>
        </div>
      </div>`;
  }).join("");
}

$("#menuTabs").addEventListener("click", e => {
  const btn = e.target.closest(".tab");
  if (!btn) return;
  activeTab = btn.dataset.id;
  renderTabs();
  renderMenu();
});

/* ---------- Gallery ---------- */
function renderGallery() {
  $("#galleryGrid").innerHTML = GALLERY.map((g, i) => `
    <figure class="gallery__item reveal" data-i="${i}">
      <img src="${g.src}" alt="${g.en}" loading="lazy">
      <figcaption></figcaption>
    </figure>`).join("");
}

function renderGalleryCaptions() {
  $$(".gallery__item").forEach((el, i) => { $("figcaption", el).textContent = GALLERY[i][lang]; });
}

/* ---------- Lightbox ---------- */
const lb = $("#lightbox");
$("#galleryGrid").addEventListener("click", e => {
  const item = e.target.closest(".gallery__item");
  if (!item) return;
  const g = GALLERY[item.dataset.i];
  $("img", lb).src = g.src;
  $("img", lb).alt = g.en;
  $(".lightbox__cap", lb).textContent = g[lang];
  lb.classList.add("open");
});
lb.addEventListener("click", e => {
  if (e.target !== $("img", lb)) lb.classList.remove("open");
});
document.addEventListener("keydown", e => { if (e.key === "Escape") lb.classList.remove("open"); });

/* ---------- Nav ---------- */
const nav = $("#nav"), burger = $("#burger"), links = $("#navLinks"), dock = $(".dock");
const DOCK_AFTER = 220; // px scrolled before the Call / Directions / WhatsApp dock appears
const onScroll = () => {
  const y = window.scrollY;
  nav.classList.toggle("scrolled", y > 40);
  dock.classList.toggle("dock--show", y > DOCK_AFTER);
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

burger.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  burger.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
});
links.addEventListener("click", e => {
  if (e.target.tagName === "A") { links.classList.remove("open"); burger.classList.remove("open"); }
});

/* ---------- Reveal on scroll ---------- */
function setupReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  $$(".reveal").forEach(el => io.observe(el));
}

/* ---------- Init ---------- */
$("#year").textContent = new Date().getFullYear();
setupLinks();
renderGallery();
applyLang();
setupReveal();
