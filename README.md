# Flipbook

Flipbook berbasis web dengan animasi membuka halaman buku (3D page flip) di setiap halaman.
Dibangun dengan HTML/CSS/JS murni + [StPageFlip](https://github.com/Nodlik/StPageFlip) (sudah disertakan di `js/page-flip.browser.js`, tanpa build step).

## Menjalankan secara lokal

Cukup buka `index.html` di browser, atau jalankan server statis:

```bash
python3 -m http.server 8080
```

lalu buka http://localhost:8080.

## Mengganti isi halaman

Edit `js/pages.js`. Tiga tipe halaman tersedia:

| Tipe    | Contoh                                                        |
|---------|---------------------------------------------------------------|
| `cover` | `{ type: "cover", title: "Judul", subtitle: "Sub judul" }`     |
| `text`  | `{ type: "text", title: "Bab 1", html: "<p>Isi...</p>" }`      |
| `image` | `{ type: "image", src: "images/hal-01.jpg", alt: "Halaman 1" }`|

Untuk menerbitkan PDF, ekspor tiap halaman PDF menjadi gambar (JPG/PNG), taruh di folder `images/`,
lalu daftarkan sebagai halaman `image`.

## Navigasi

- Klik / seret sudut halaman
- Tombol ◀ ▶ di bagian atas
- Keyboard: `←` `→` `PageUp` `PageDown` `Home` `End`
- Tombol layar penuh

## Publikasi (GitHub Pages)

Workflow `.github/workflows/deploy-pages.yml` otomatis men-deploy ke GitHub Pages setiap ada push ke `main`.
Aktifkan sekali di **Settings → Pages → Source: GitHub Actions**. Situs akan tersedia di:

`https://kantinpulangsekolahmalang.github.io/Flipbook/`
