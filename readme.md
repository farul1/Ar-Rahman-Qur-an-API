
# Ar-Rahman Qur'an

<p align="center">
  <img src="logo.png" alt="Logo Ar-Rahman Qur'an" width="150"/>
</p>

**Ar-Rahman Qur'an** adalah aplikasi web yang memungkinkan pengguna untuk memilih surah dari Al-Quran dan mendengarkan bacaan oleh berbagai pembaca (Qari). Aplikasi ini memanfaatkan dua public API untuk mengambil data surah Al-Quran dan daftar pembaca, sehingga memberikan pengalaman mendengarkan Al-Quran yang interaktif dan menyenangkan.

## Akses Aplikasi

Aplikasi **Ar-Rahman Qur'an** dapat diakses langsung melalui link berikut:

[Ar-Rahman Qur'an Web App](https://farul1.github.io/Ar-Rahman-Qur-an-API/)

## Fitur Utama

- **Pilih Surah**: Pengguna dapat memilih surah Al-Quran dari daftar yang lengkap.
- **Pilih Pembaca (Qari)**: Dapat memilih dari berbagai Qari yang tersedia untuk setiap surah.
- **Pemutar Audio**: Mendengarkan bacaan surah oleh pembaca yang dipilih dengan teks yang muncul di halaman.
- **Teks Surah**: Teks surah ditampilkan secara lengkap beserta nomor ayat, termasuk "Bismillah" di awal dan "Sadaqallah" di akhir.
- **Antarmuka Sederhana**: Aplikasi dengan desain yang ramah pengguna dan mudah digunakan, sehingga memudahkan setiap orang dalam mendengarkan Al-Quran.

## Keterangan API Public yang Digunakan

Aplikasi ini menggunakan beberapa API publik yang menyediakan data terkait surah Al-Quran dan pembaca (Qari). Berikut adalah rincian API yang digunakan:

### 1. **Al-Quran Cloud API**
   - **URL**: `https://api.alquran.cloud/v1/surah`
   - **Metode HTTP**: `GET`
   - **Deskripsi**: API ini menyediakan data tentang surah yang ada dalam Al-Quran, termasuk nama surah, nomor surah, dan informasi lainnya.

   **Contoh Response**:
   ```json
   {
     "code": 200,
     "status": "OK",
     "data": [
       {
         "number": 1,
         "name": "سورة الفاتحة",
         "englishName": "Al-Faatiha",
         "englishNameTranslation": "The Opening",
         "numberOfAyahs": 7,
         "revelationType": "Meccan"
       },
       {
         "number": 2,
         "name": "سورة البقرة",
         "englishName": "Al-Baqara",
         "englishNameTranslation": "The Cow",
         "numberOfAyahs": 286,
         "revelationType": "Medinan"
       }
     ]
   }
   ```

### 2. **CDN Surah Audio JSON**
   - **URL**: `https://raw.githubusercontent.com/islamic-network/cdn/master/info/cdn_surah_audio.json`
   - **Metode HTTP**: `GET`
   - **Deskripsi**: API ini memberikan daftar pembaca (Qari) yang tersedia untuk setiap surah.

   **Contoh Response**:
   ```json
   [
     {
       "identifier": "abdulbaset",
       "name": "Abdul Baset"
     },
     {
       "identifier": "alafasy",
       "name": "Mishary Rashid Alafasy"
     }
   ]
   ```

### 3. **Audio Surah**
   - **URL**: `https://cdn.islamic.network/quran/audio-surah/128/{reciter}/{surahNumber}.mp3`
   - **Metode HTTP**: `GET`
   - **Deskripsi**: API ini menyediakan file audio dari surah yang dipilih dengan pembaca (Qari) yang dipilih.

   **Contoh URL**:
   ```
   https://cdn.islamic.network/quran/audio-surah/128/abdulbaset/1.mp3
   ```

## Tampilan Aplikasi

Aplikasi **Ar-Rahman Qur'an** memiliki antarmuka yang ramah pengguna dengan beberapa komponen utama, antara lain:
- **Header**: Menampilkan logo dan nama aplikasi **Ar-Rahman Qur'an**.
- **Dropdown untuk memilih pembaca**: Memungkinkan pengguna memilih pembaca dari daftar Qari yang tersedia.
- **Dropdown untuk memilih surah**: Memungkinkan pengguna memilih surah yang ingin didengarkan.
- **Tombol "Putar Surat"**: Menekan tombol ini untuk mulai mendengarkan surah yang dipilih.
- **Audio player**: Menampilkan pemutar audio untuk memainkan bacaan surah.
- **Teks Surah**: Menampilkan teks surah yang sedang diputar, lengkap dengan nomor ayat.

## Cara Menggunakan Aplikasi

1. **Pilih Pembaca (Qari)**: Pilih pembaca dari dropdown yang tersedia.
2. **Pilih Surah**: Pilih surah yang ingin didengarkan dari dropdown yang tersedia.
3. **Klik "Putar Surat"**: Tekan tombol untuk mulai mendengarkan surah yang dipilih dengan pembaca yang telah dipilih.
4. **Teks Surah**: Teks surah akan ditampilkan secara otomatis di bawah pemutar audio.


## Kontribusi

Kami menerima kontribusi dari siapa saja yang ingin membantu mengembangkan aplikasi ini! Jika Anda memiliki saran atau ingin melaporkan masalah, silakan buat **issue** atau **pull request** di repositori ini.

## Lisensi

Aplikasi ini menggunakan **MIT License**. Anda bebas untuk menggunakannya, memodifikasi, dan mendistribusikannya dengan syarat mencantumkan lisensi ini.

---
