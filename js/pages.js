/*
 * Daftar halaman flipbook.
 * Edit file ini untuk mengganti isi buku.
 *
 * Tipe halaman yang didukung:
 *   { type: "cover", title: "...", subtitle: "..." }      -> sampul depan/belakang
 *   { type: "text",  title: "...", html: "<p>...</p>" }   -> halaman teks
 *   { type: "image", src: "images/hal1.jpg", alt: "..." } -> halaman gambar penuh (mis. hasil ekspor PDF)
 */
window.FLIPBOOK_PAGES = [
  { type: "cover", title: "Flipbook", subtitle: "Buka halaman untuk memulai" },

  {
    type: "text",
    title: "Selamat Datang",
    html:
      "<p>Ini adalah contoh flipbook berbasis web. Setiap halaman dibalik dengan " +
      "animasi menyerupai membuka halaman buku sungguhan.</p>" +
      "<p>Klik atau seret sudut halaman, tekan tombol panah di keyboard, " +
      "atau gunakan tombol navigasi di bagian atas.</p>",
  },
  {
    type: "text",
    title: "Cara Mengganti Isi",
    html:
      "<p>Buka file <code>js/pages.js</code> lalu ubah daftar halaman di dalamnya.</p>" +
      "<ul><li><b>text</b> – halaman berisi judul dan HTML.</li>" +
      "<li><b>image</b> – halaman gambar penuh, cocok untuk hasil ekspor PDF per halaman.</li>" +
      "<li><b>cover</b> – sampul depan atau belakang.</li></ul>",
  },
  {
    type: "text",
    title: "Bab 1",
    html:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor " +
      "incididunt ut labore et dolore magna aliqua.</p>" +
      "<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip " +
      "ex ea commodo consequat.</p>",
  },
  {
    type: "text",
    title: "Bab 2",
    html:
      "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu " +
      "fugiat nulla pariatur.</p>" +
      "<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt " +
      "mollit anim id est laborum.</p>",
  },
  {
    type: "text",
    title: "Penutup",
    html: "<p>Terima kasih telah membaca. Balik halaman terakhir untuk menutup buku.</p>",
  },

  { type: "cover", title: "Selesai", subtitle: "Sampai jumpa" },
];
