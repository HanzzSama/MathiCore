const downloads = document.querySelectorAll(".download");
const images = document.querySelectorAll(".banner img");
const titleLeft = document.querySelector(".aside.left h2"); // ambil elemen h2 di aside kiri

downloads.forEach((download, index) => {
  download.addEventListener("click", () => {
    const parent = download.closest(".path");
    const requirement = parent.querySelector(".requirement");
    const btnInstall = parent.querySelector(".btn-install");

    const isActive =
      requirement.classList.contains("active") ||
      (btnInstall && btnInstall.classList.contains("active"));

    // Tutup semua requirement & tombol install
    document
      .querySelectorAll(".requirement")
      .forEach((req) => req.classList.remove("active"));
    document
      .querySelectorAll(".btn-install")
      .forEach((btn) => btn.classList.remove("active"));

    // Sembunyikan semua gambar
    images.forEach((img) => {
      img.classList.remove("active");
      img.style.opacity = "0";
    });

    // Jika belum aktif → tampilkan requirement, tombol install, dan gambar sesuai index
    if (!isActive) {
      requirement.classList.add("active");
      if (btnInstall) btnInstall.classList.add("active");
      if (images[index]) {
        images[index].classList.add("active");
        images[index].style.opacity = "1";
      }

      // Ubah teks sesuai tombol download yang diklik
      const text = download.querySelector("h3")?.textContent || "desktop";
      titleLeft.textContent = text;
    }

    // Cek apakah masih ada section aktif
    const anyActive = document.querySelector(
      ".requirement.active, .btn-install.active"
    );

    // Jika tidak ada yang aktif → kembalikan gambar dan teks default
    if (!anyActive && images[0]) {
      images[0].style.opacity = "1";
      titleLeft.textContent = "desktop";
    }
  });
});
