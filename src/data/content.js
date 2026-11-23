export const WA_NUMBER = "6285640442686";
export const WA_DISPLAY = "+62 856-4044-2686";
export const IG_URL = "https://www.instagram.com/studioholic_/";
export const wa = (text = "Halo Studio Holic! Saya ingin tanya jadwal & harga dokumentasi foto/video event.") =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

const ig = (f) => `/ig/${f}.jpg`;
const set = (id, n) => Array.from({ length: n }, (_, i) => ig(`${id}_${i}`));

export const IMG = {
  hero: ig("Ddg3ZkFiQGP_9"),
  lens: ig("Ddgw18tCcn3_9"),
  night: ig("Ddg1d9kiQ5M_0"),
  stage: ig("DSX0tJMk0Ap_1"),
};

export const NAV = [
  { id: "layanan", label: "Layanan" },
  { id: "karya", label: "Karya" },
  { id: "showreel", label: "Showreel" },
  { id: "paket", label: "Paket" },
  { id: "alur", label: "Alur" },
  { id: "faq", label: "FAQ" },
];

export const MARQUEE = ["Kethoprak", "Kirab Budaya", "Merti Desa", "Gema Takbir", "Pentas Seni", "Konser", "Wedding", "Wisuda", "Corporate", "Aftermovie"];

export const SERVICES = [
  { id: "foto", tag: "01 / Foto", title: "Dokumentasi Foto Event", text: "Setiap ekspresi, cahaya panggung dan detail kecil acara diabadikan lalu diedit dengan warna yang konsisten.", img: IMG.stage, span: "lg:col-span-7 lg:row-span-2" },
  { id: "video", tag: "02 / Video", title: "Aftermovie & Recap", text: "Rangkuman acara dalam film pendek dengan musik dan ritme yang bikin penonton ingin datang tahun depan.", span: "lg:col-span-5" },
  { id: "konten", tag: "03 / Konten", title: "Reels & Konten Sosmed", text: "Potongan vertikal 9:16 siap unggah untuk Instagram & TikTok, termasuk maskot dan teaser acara.", span: "lg:col-span-5" },
  { id: "budaya", tag: "04 / Budaya", title: "Event Budaya & Komunitas", text: "Kethoprak, kirab, merti desa hingga takbiran — kami terbiasa bergerak di tengah keramaian tanpa mengganggu jalannya acara.", img: IMG.night, span: "lg:col-span-12" },
];

const SH = "@studioholic_";
const AF = "@aoe.fa";

export const WORKS = [
  { id: "kethoprak-hut-rukun", title: "Kethoprak Hut Rukun", cat: "Foto Panggung", credit: SH, img: ig("Ddg3ZkFiQGP_3"), photos: set("Ddg3ZkFiQGP", 10), span: "lg:col-span-7 lg:row-span-2" },
  { id: "kethoprak-2024", title: "Kethoprak 2024", cat: "Foto Panggung", credit: SH, img: ig("Ddgw18tCcn3_6"), photos: set("Ddgw18tCcn3", 11), span: "lg:col-span-5" },
  { id: "kirab-jodang", title: "Kirab Jodang Bintaran", cat: "Budaya", credit: SH, img: ig("Ddg1d9kiQ5M_3"), photos: set("Ddg1d9kiQ5M", 5), span: "lg:col-span-5" },
  { id: "ndarboy", title: "Ndarboy Genk — Koyo Jogja Istimewa", cat: "Konser", credit: `${AF} × ${SH}`, img: ig("DSX0tJMk0Ap_1"), photos: set("DSX0tJMk0Ap", 8), span: "lg:col-span-4" },
  { id: "gema-takbir", title: "Maskot Gema Takbir", cat: "Event Religi", credit: SH, img: ig("Ddgy_UKicsQ_3"), photos: set("Ddgy_UKicsQ", 4), span: "lg:col-span-4" },
  { id: "adzan-bts", title: "BTS Film Adzan Terakhir Bapak", cat: "Produksi Film", credit: AF, img: ig("DQ38xfhE4Uc_1"), photos: set("DQ38xfhE4Uc", 11), span: "lg:col-span-4" },
  { id: "panggung-musik", title: "Panggung Musik", cat: "Live Music", credit: SH, img: ig("Ddgvh9jiUaf_1"), photos: set("Ddgvh9jiUaf", 4), span: "lg:col-span-6" },
  { id: "seminar", title: "Seminar & Acara Kantor", cat: "Corporate", credit: AF, img: ig("DcAWm9imjQm_1"), photos: set("DcAWm9imjQm", 3), span: "lg:col-span-6" },
];

export const ARCHIVE = [
  ...WORKS.flatMap((w) => w.photos.map((img, i) => ({ id: `${w.id}-${i}`, img, title: w.title, cat: w.cat, credit: w.credit }))),
  ...set("DNiANxFv41b", 3).map((img, i) => ({ id: `pantai-${i}`, img, title: "Sesi Foto Pantai", cat: "Potret", credit: AF })),
  ...set("DNh_bBev_KJ", 3).map((img, i) => ({ id: `lookbook-${i}`, img, title: "Lookbook Produk", cat: "Foto Produk", credit: AF })),
];

export const FILMS = [
  { id: "adzan-terakhir-bapak", title: "Adzan Terakhir Bapak", cat: "Film Pendek — Festival Film Pendek 2 2025", credit: AF, src: "/ig/DOqTY1qDuef.mp4", poster: ig("DOqTY1qDuef_0"), wide: true },
  { id: "recap-merti-opak", title: "Recap Merti Opak", cat: "Recap Reels", credit: SH, src: "/ig/DdgzUhthFbN.mp4", poster: ig("DdgzUhthFbN_0") },
  { id: "recap-merti-opak-2025", title: "Recap Merti Opak 2025", cat: "Recap Reels", credit: AF, src: "/ig/DNnU85-pnkV.mp4", poster: ig("DNnU85-pnkV_0") },
];

export const IG_FILMS = [
  { id: "after-merti-opak", title: "After Movie Merti Opak", credit: SH, code: "Ddgz2nphyZB", poster: ig("Ddgz2nphyZB_0") },
  { id: "after-gema-takbir", title: "After Movie Gema Takbir", credit: SH, code: "DdgybmAhtkd", poster: ig("DdgybmAhtkd_0") },
  { id: "gelar-karya", title: "NDARBOY — Gelar Karya 2025", credit: AF, code: "DQ9-P8AE8-4", poster: ig("DQ9-P8AE8-4_0") },
];

export const PACKAGES = [
  { id: "shot", name: "Shot", sub: "Acara singkat", price: "1.500.000", features: ["1 Fotografer", "Liputan hingga 4 jam", "Semua foto + 40 foto edit", "File via Google Drive"] },
  { id: "scene", name: "Scene", sub: "Paling sering dipilih", price: "3.500.000", featured: true, features: ["1 Fotografer + 1 Videografer", "Liputan hingga 8 jam", "100 foto edit", "Aftermovie 2–3 menit", "1 Reels 9:16 siap unggah"] },
  { id: "feature", name: "Feature", sub: "Event besar / multi-hari", price: "7.500.000", features: ["2 Fotografer + 2 Videografer", "Liputan full day / multi-hari", "Foto edit tanpa batas jumlah", "Aftermovie 4–6 menit", "Recap + 3 Reels", "Prioritas pengerjaan"] },
];

export const STEPS = [
  { n: "01", title: "Chat WhatsApp", text: "Ceritakan acara, tanggal, lokasi dan kebutuhan kontenmu." },
  { n: "02", title: "Kunci Jadwal", text: "Kami cek ketersediaan tim, sepakati paket dan DP untuk mengunci tanggal." },
  { n: "03", title: "Hari-H", text: "Tim datang lebih awal, mengikuti rundown dan shotlist yang sudah dibahas." },
  { n: "04", title: "Edit & Kirim", text: "Foto dan video diedit lalu dikirim lewat link cloud, siap dipakai." },
];

export const FAQS = [
  { q: "Berapa lama hasil foto dan video selesai?", a: "Tergantung paket dan durasi acara. Estimasi waktu pengerjaan akan kami sampaikan saat konsultasi via WhatsApp sebelum jadwal dikunci." },
  { q: "Apakah bisa melayani acara di luar kota?", a: "Bisa dibicarakan. Sampaikan lokasi acaramu lewat WhatsApp, nanti kami hitungkan biaya transport dan akomodasinya." },
  { q: "Bisakah paket disesuaikan dengan budget?", a: "Bisa. Jumlah kru, durasi liputan dan jenis hasil (foto, aftermovie, reels) bisa diatur sesuai kebutuhan dan budget acara." },
  { q: "Bagaimana cara booking?", a: "Klik tombol WhatsApp di halaman ini, kirim detail acara, lalu kami bantu cek tanggal dan pilih paket yang pas." },
];
