function toggleFAB() {
  const menu = document.getElementById("fabMenu");
  menu.classList.toggle("show");
}

const tips = [
  "Tip 1: Stay consistent and stay connected!",
  "Tip 2: Follow on social media for updates!",
  "Tip 3: Share with your friends!",
  "Tip 4: Keep learning something new daily!"
];

let tipIndex = 0;

setInterval(() => {
  tipIndex = (tipIndex + 1) % tips.length;
  document.getElementById("tipText").innerText = tips[tipIndex];
}, 4000);
