(function () {
  const pagesData = window.FLIPBOOK_PAGES || [];
  const bookEl = document.getElementById("book");
  const indicator = document.getElementById("page-indicator");

  // ---------- Bangun elemen halaman ----------
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));
  }

  pagesData.forEach((p, i) => {
    const page = document.createElement("div");
    page.className = "page";
    const pageNo = i + 1;

    if (p.type === "cover") {
      page.classList.add("page-cover");
      page.dataset.density = "hard"; // sampul kaku
      page.innerHTML =
        `<div class="page-content"><h2>${escapeHtml(p.title || "")}</h2>` +
        `<p>${escapeHtml(p.subtitle || "")}</p></div>`;
    } else if (p.type === "image") {
      page.classList.add("page-image");
      page.innerHTML =
        `<div class="page-content"><img src="${escapeHtml(p.src)}" alt="${escapeHtml(p.alt || "Halaman " + pageNo)}" draggable="false"></div>`;
    } else {
      page.innerHTML =
        `<div class="page-content">` +
        `<div class="page-header">${escapeHtml(p.title || "")}</div>` +
        `<div class="page-body">${p.html || ""}</div>` +
        `<div class="page-footer">${pageNo}</div>` +
        `</div>`;
    }
    bookEl.appendChild(page);
  });

  // ---------- Ukuran buku responsif ----------
  function computeSize() {
    const stage = document.querySelector(".stage");
    const maxW = stage.clientWidth - 40;
    const maxH = stage.clientHeight - 40;
    const ratio = 1.414; // A4 portrait (tinggi / lebar)
    const portrait = window.innerWidth < 700;

    let w, h;
    if (portrait) {
      w = Math.min(maxW, 480);
      h = w * ratio;
      if (h > maxH) { h = maxH; w = h / ratio; }
    } else {
      w = Math.min(maxW / 2, 550);
      h = w * ratio;
      if (h > maxH) { h = maxH; w = h / ratio; }
    }
    return { width: Math.floor(w), height: Math.floor(h), portrait };
  }

  const size = computeSize();

  // ---------- Inisialisasi PageFlip ----------
  const pageFlip = new St.PageFlip(bookEl, {
    width: size.width,
    height: size.height,
    size: "fixed",
    showCover: true,
    usePortrait: size.portrait,
    autoSize: true,
    maxShadowOpacity: 0.6,
    flippingTime: 900,
    mobileScrollSupport: false,
    drawShadow: true,
  });

  pageFlip.loadFromHTML(document.querySelectorAll("#book .page"));

  // ---------- Indikator halaman ----------
  function updateIndicator() {
    const total = pageFlip.getPageCount();
    const current = pageFlip.getCurrentPageIndex() + 1;
    indicator.textContent = `${current} / ${total}`;
  }
  pageFlip.on("flip", updateIndicator);
  pageFlip.on("init", updateIndicator);
  updateIndicator();

  // ---------- Navigasi ----------
  document.getElementById("btn-prev").addEventListener("click", () => pageFlip.flipPrev("top"));
  document.getElementById("btn-next").addEventListener("click", () => pageFlip.flipNext("top"));
  document.getElementById("btn-fullscreen").addEventListener("click", () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
    else document.exitFullscreen?.();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") { e.preventDefault(); pageFlip.flipNext("top"); }
    if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); pageFlip.flipPrev("top"); }
    if (e.key === "Home") pageFlip.turnToPage(0);
    if (e.key === "End") pageFlip.turnToPage(pageFlip.getPageCount() - 1);
  });

  // ---------- Resize: muat ulang agar ukuran/orientasi menyesuaikan ----------
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const s = computeSize();
      if (s.portrait !== size.portrait) { location.reload(); return; }
      pageFlip.update();
    }, 200);
  });
})();
