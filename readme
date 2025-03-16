# Ar-Rahman Qur'an

**Ar-Rahman Qur'an** adalah aplikasi web yang memungkinkan pengguna untuk memilih surah dari Al-Quran dan mendengarkan bacaan oleh berbagai pembaca (Qari). Aplikasi ini menggunakan dua public API untuk mendapatkan data surah Al-Quran dan daftar pembaca.

## Akses Aplikasi

Anda dapat mencoba aplikasi **Ar-Rahman Qur'an** secara langsung di sini:

[Ar-Rahman Qur'an Web App](URL_APLIKASI_ANDA)

## Fitur Utama
- Memilih surah dari daftar yang tersedia.
- Memilih pembaca (Qari) untuk setiap surah.
- Memutar audio dari pembaca yang dipilih dengan teks yang muncul di halaman.
- Teks surah ditampilkan beserta nomor ayat, termasuk "Bismillah" di awal dan "Sadaqallah" di akhir.
- Aplikasi sederhana dan mudah digunakan untuk mendengarkan Al-Quran.

## Keterangan API Public yang Digunakan

### 1. **Al-Quran Cloud API**
   - **URL**: `https://api.alquran.cloud/v1/surah`
   - **Metode HTTP**: `GET`
   - **Deskripsi**: API ini digunakan untuk mendapatkan daftar surah yang terdapat dalam Al-Quran. Setiap surah memiliki informasi seperti nomor surah, nama surah, dan nama surah dalam bahasa Inggris.

   ### **Endpoint**: `/v1/surah`
   - **Request**:
     - **Method**: `GET`
     - **URL**: `https://api.alquran.cloud/v1/surah`
   - **Response**:
     - **Format**: JSON
     - **Contoh Response**:
       ```json
       {
         "data": [
           {
             "number": 1,
             "name": "Al-Fatiha",
             "englishName": "The Opening",
             "englishNameTranslation": "The Opening",
             ...
           },
           {
             "number": 2,
             "name": "Al-Baqarah",
             "englishName": "The Cow",
             "englishNameTranslation": "The Cow",
             ...
           },
           ...
         ]
       }
       ```

   - **Penjelasan**:
     - Endpoint ini mengembalikan daftar surah yang ada di Al-Quran, dimulai dari surah pertama (Al-Fatiha) hingga surah terakhir.
     - Setiap surah berisi informasi seperti:
       - `number`: Nomor surah.
       - `name`: Nama surah dalam bahasa Arab.
       - `englishName`: Nama surah dalam bahasa Inggris.
       - `englishNameTranslation`: Terjemahan nama surah dalam bahasa Inggris.

### 2. **CDN Surah Audio JSON**
   - **URL**: `https://raw.githubusercontent.com/islamic-network/cdn/master/info/cdn_surah_audio.json`
   - **Metode HTTP**: `GET`
   - **Deskripsi**: API ini digunakan untuk mendapatkan daftar pembaca (Qari) yang tersedia untuk setiap surah. Data yang diberikan mencakup identifier pembaca dan nama pembaca.

   ### **Endpoint**: `/info/cdn_surah_audio.json`
   - **Request**:
     - **Method**: `GET`
     - **URL**: `https://raw.githubusercontent.com/islamic-network/cdn/master/info/cdn_surah_audio.json`
   - **Response**:
     - **Format**: JSON
     - **Contoh Response**:
       ```json
       [
         {
           "identifier": "abdulbaset",
           "name": "Abdul Baset"
         },
         {
           "identifier": "alafasy",
           "name": "Mishary Rashid Alafasy"
         },
         ...
       ]
       ```

   - **Penjelasan**:
     - Endpoint ini mengembalikan daftar pembaca (Qari) yang tersedia untuk bacaan surah.
     - Setiap pembaca memiliki dua atribut:
       - `identifier`: Identifier pembaca (digunakan untuk menentukan pembaca audio).
       - `name`: Nama pembaca dalam format yang mudah dibaca.

### 3. **Audio Surah**
   - **URL**: `https://cdn.islamic.network/quran/audio-surah/128/{reciter}/{surahNumber}.mp3`
   - **Metode HTTP**: `GET`
   - **Deskripsi**: Menggunakan API ini untuk mendapatkan file audio dari surah yang dipilih dengan pembaca (reciter) yang dipilih.

   ### **Endpoint**: `/audio-surah/128/{reciter}/{surahNumber}.mp3`
   - **Request**:
     - **Method**: `GET`
     - **URL**: `https://cdn.islamic.network/quran/audio-surah/128/{reciter}/{surahNumber}.mp3`
     - **Parameter**:
       - `{reciter}`: Identifier pembaca yang dipilih (misalnya `abdulbaset`).
       - `{surahNumber}`: Nomor surah yang dipilih (misalnya `1` untuk surah Al-Fatiha).
   - **Response**:
     - **Format**: Audio MP3.
     - **Contoh Response**: Audio MP3 dari surah yang dipilih dibaca oleh pembaca yang dipilih.

   - **Penjelasan**:
     - Endpoint ini menyediakan file audio dari surah yang dipilih dengan pembaca yang dipilih.
     - Kamu dapat mengakses audio MP3 langsung dari URL ini.

## Tampilan Aplikasi

Aplikasi **Ar-Rahman Qur'an** memiliki tampilan yang sederhana dengan komponen berikut:
- **Header**: Logo dan nama aplikasi "Ar-Rahman Qur'an".
- **Dropdown untuk memilih pembaca**: Menggunakan data dari API pembaca.
- **Dropdown untuk memilih surah**: Menggunakan data dari API surah.
- **Tombol untuk memutar surah**: Setelah memilih surah dan pembaca, pengguna dapat menekan tombol untuk memutar surah.
- **Audio player**: Menampilkan pemutar audio untuk memutar bacaan surah.
- **Teks surah**: Menampilkan teks surah yang sedang diputar, lengkap dengan nomor ayat.

## Cara Menggunakan Aplikasi
1. Pilih pembaca (Qari) dari dropdown "Pilih Pembaca".
2. Pilih surah yang ingin didengarkan dari dropdown "Pilih Surat".
3. Klik tombol "Putar Surat Lengkap" untuk mulai mendengarkan surah.
4. Teks surah akan ditampilkan di bawah pemutar audio, dan audio akan diputar dengan bacaan pembaca yang dipilih.

