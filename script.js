(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  // Tanggal pernikahan yang dapat diubah dengan mudah
  const weddingDate = "2025-10-16"; // Format: YYYY-MM-DD

  const countDown = new Date(weddingDate).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor((distance % day) / hour)),
        (document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute)),
        (document.getElementById("seconds").innerText = Math.floor((distance % minute) / second));

      // Ketika tanggal pernikahan telah tiba
      if (distance < 0) {
        document.getElementById("headline").innerText = "Hari pernikahan telah tiba!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
    }, 1000);
})();

// Fungsi untuk hamburger menu
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");
  const closeSidebar = document.getElementById("close-sidebar");

  hamburger.addEventListener("click", function () {
    sidebar.classList.toggle("translate-x-full");
  });

  closeSidebar.addEventListener("click", function () {
    sidebar.classList.add("translate-x-full");
  });
});

// Fungsi untuk mengatur posisi gambar mempelai
function setMempelaiPosition() {
  const acaraSection = document.getElementById("acara");
  const mempelaiBergandengan = document.getElementById("mempelaiBergandengan");

  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const acaraTop = acaraSection.offsetTop;

  // Tampilkan gambar mempelai saat section acara mencapai setengah layar
  if (scrollPosition + windowHeight / 2 > acaraTop) {
    mempelaiBergandengan.style.opacity = "1";
  } else {
    mempelaiBergandengan.style.opacity = "0";
  }
}

// Panggil fungsi saat halaman di-scroll
window.addEventListener("scroll", setMempelaiPosition);

// Panggil fungsi saat halaman dimuat
window.addEventListener("load", setMempelaiPosition);

// Tambahkan kode ini di akhir file script.js Anda

document.addEventListener("DOMContentLoaded", function () {
  const music = document.getElementById("backgroundMusic");
  const musicControl = document.getElementById("musicControl");
  let isPlaying = true; // Ubah ini menjadi true

  // Fungsi untuk memainkan musik
  function playMusic() {
    music.play().catch((error) => {
      console.log("Autoplay was prevented:", error);
      isPlaying = false;
      updateMusicControlIcon();
    });
  }

  // Fungsi untuk memperbarui ikon kontrol musik
  function updateMusicControlIcon() {
    if (isPlaying) {
      musicControl.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      `;
    } else {
      musicControl.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      `;
    }
  }

  // Coba mainkan musik secara otomatis
  playMusic();

  musicControl.addEventListener("click", function () {
    if (isPlaying) {
      music.pause();
    } else {
      music.play();
    }
    isPlaying = !isPlaying;
    updateMusicControlIcon();
  });

  // Perbarui ikon saat halaman dimuat
  updateMusicControlIcon();
});

// Fungsi untuk tombol kembali ke atas
function handleToTopButton() {
  const toTopBtn = document.getElementById("toTopBtn");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      toTopBtn.classList.add("opacity-100");
      toTopBtn.classList.remove("opacity-0");
    } else {
      toTopBtn.classList.add("opacity-0");
      toTopBtn.classList.remove("opacity-100");
    }
  });

  toTopBtn.addEventListener("click", () => {
    toTopBtn.classList.add("floating");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      toTopBtn.classList.remove("floating");
    }, 1000);
  });
}

// Panggil fungsi saat dokumen dimuat
document.addEventListener("DOMContentLoaded", handleToTopButton);
