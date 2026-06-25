# Pantau Aset SDA — Tapin Selatan

Aplikasi panduan inspeksi lapangan untuk Dinas PUPR Kabupaten Tapin.
Menampilkan 139 aset infrastruktur SDA hasil survei QField 2026,
dengan kemampuan update kondisi terkini secara kolaboratif (real-time).

## Menjalankan secara lokal
```
npm install
npm run dev
```

## Deploy ke Vercel
1. Push folder ini ke repository GitHub
2. Import repository di vercel.com
3. Build command: `npm run build`, Output directory: `dist`
4. Deploy

## Firestore Security Rules
Salin isi `firestore.rules` ke Firebase Console > Firestore Database > Rules.
