async function loadReciters() {
    const reciterSelect = document.getElementById("reciter");

    try {
        const response = await fetch("https://raw.githubusercontent.com/islamic-network/cdn/master/info/cdn_surah_audio.json");
        const data = await response.json();

        data.forEach((reciter) => {
            const option = document.createElement("option");
            option.value = reciter.identifier;
            option.textContent = `${reciter.name}`;
            reciterSelect.appendChild(option);
        });
    } catch (error) {
        console.error("Terjadi kesalahan saat memuat pembaca:", error);
        alert("Terjadi kesalahan saat memuat pembaca. Silakan coba lagi nanti.");
    }
}


async function loadSurats() {
    try {
        const response = await fetch("https://api.alquran.cloud/v1/surah");
        const data = await response.json();
        const suratSelect = document.getElementById("surat");

        data.data.forEach((surah) => {
            const option = document.createElement("option");
            option.value = surah.number;
            option.textContent = `${surah.number}. ${surah.englishName} - ${surah.name}`;
            suratSelect.appendChild(option);
        });
    } catch (error) {
        console.error("Terjadi kesalahan saat memuat surat:", error);
        alert("Terjadi kesalahan saat memuat surat. Silakan coba lagi nanti.");
    }
}

async function playFullSurah() {
    const suratNumber = document.getElementById("surat").value;
    const reciter = document.getElementById("reciter").value;

    try {
        const response = await fetch(`https://api.alquran.cloud/v1/surah/${suratNumber}/${reciter}`);
        const data = await response.json();

        const quranText = document.getElementById("quranText");
        quranText.innerHTML = "";

        data.data.ayahs.forEach((ayat, index) => {
            if (index === 0) {
                const bismillah = document.createElement("div");
                bismillah.className = "bismillah";
                bismillah.textContent = "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِي";  
                quranText.appendChild(bismillah);
            }

            ayat.text = ayat.text.replace('Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang', "");

            if (ayat.text.trim().length > 0) {
                const span = document.createElement("span");
                span.textContent = `${ayat.text} `;
                span.className = "ayat";

                const ayatNumber = document.createElement("span");
                ayatNumber.textContent = index + 1;  
                ayatNumber.className = "ayat-number";

                span.appendChild(ayatNumber);
                quranText.appendChild(span);
            }
        });

        const sadaqAllah = document.createElement("div");
        sadaqAllah.className = "sadaqallah";
        sadaqAllah.textContent = "Allah Maha Benar";  
        quranText.appendChild(sadaqAllah);

        const audioUrl = `https://cdn.islamic.network/quran/audio-surah/128/${reciter}/${suratNumber}.mp3`;

        const audioPlayer = document.getElementById("player");
        audioPlayer.src = audioUrl;
        audioPlayer.style.display = "block";
        audioPlayer.play().catch((error) => {
            console.error("Terjadi kesalahan saat memutar audio:", error);
            alert("Tidak dapat memutar audio. Periksa tautannya.");
        });
    } catch (error) {
        console.error("Terjadi kesalahan saat memuat surat dan audio:", error);
        alert("Terjadi kesalahan saat memuat surat atau audio. Silakan coba lagi nanti.");
    }
}

loadReciters();
loadSurats();
