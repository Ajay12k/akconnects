// Loader fade-out
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.transition = "opacity 0.5s";
  loader.style.opacity = 0;
  setTimeout(() => loader.style.display = "none", 500);
});

// FAB toggle
function toggleFAB() {
  const fabIcons = document.querySelector(".fab-icons");
  fabIcons.style.display = (fabIcons.style.display === "flex") ? "none" : "flex";
}
