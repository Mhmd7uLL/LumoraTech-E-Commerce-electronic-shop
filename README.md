# LumoraTech E-Commerce Electronic Shop

LumoraTech E-Commerce Electronic Shop adalah sebuah aplikasi web e-commerce untuk toko elektronik yang memungkinkan pengguna untuk menjelajahi, mencari, dan membeli berbagai produk elektronik secara online.

## Fitur Utama

- **Katalog Produk**: Tampilkan produk elektronik lengkap dengan gambar, deskripsi, dan harga.
- **Filter**: Cari produk berdasarkan kategori
- **Keranjang Belanja**: Tambahkan produk ke keranjang belanja dan ubah jumlahnya.
- **Checkout & Pembayaran**: Proses checkout sederhana untuk menyelesaikan pembelian.

## Teknologi yang Digunakan

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: PHP

## Struktur Direktori

```
├── assets/            # File gambar, ikon, dan aset statis lainnya
├── style/             # Stylesheets (CSS)
├── script/            # Script JavaScript
├── system/            # File PHP untuk koneksi database, helper, dll
├── index.html         # Halaman utama
├── type-page.html     # Halaman web untuk kategori produk
├── product-page.html  # Halaman detail produk yang dipilih            
```

## Instalasi & Menjalankan

1. **Clone repository**
   ```bash
   git clone https://github.com/Mhmd7uLL/LumoraTech-E-Commerce-electronic-shop.git
   ```

2. **Setup Database**
   - Impor file SQL (jika ada) ke database MySQL.
   - Konfigurasikan kredensial database pada file konfigurasi di folder `includes/`.

3. **Jalankan di Localhost**
   - Tempatkan folder project di dalam direktori server lokal (misal: `htdocs` untuk XAMPP).
   - Akses melalui browser: `http://localhost/LumoraTech-E-Commerce-electronic-shop/`

## Kontribusi

Kontribusi sangat terbuka! Silakan fork repository ini, lakukan perubahan, dan ajukan pull request.

## Lisensi

[MIT License](LICENSE)

---

**Catatan:**  
Repository ini masih dapat dikembangkan lebih lanjut. Silakan buka issue untuk saran atau pelaporan bug.
