function toggleOffcanvas() {
  const menu = document.getElementById("offcanvasMenu");
  const backdrop = document.getElementById("offcanvasBackdrop");
  const isOpen = menu.classList.contains("-translate-x-full");

  if (isOpen) {
    menu.classList.remove("-translate-x-full");
    backdrop.classList.remove("hidden");
  } else {
    menu.classList.add("-translate-x-full");
    backdrop.classList.add("hidden");
  }
}
