// Typing animation
const text = "Welcome to AK Connects – One Stop For All Resources!";
let index = 0;
function type() {
  document.getElementById("typingText").textContent = text.slice(0, ++index);
  if (index < text.length) setTimeout(type, 100);
}
type();

// Floating Action Button toggle
function toggleFab() {
  const fabLinks = document.querySelector(".fab-links");
  fabLinks.style.display = fabLinks.style.display === "block" ? "none" : "block";
}

// Scroll-to-top button
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Random Tip Generator
const tips = [
  "Use version control like Git to manage your code.",
  "Break problems into smaller chunks before coding.",
  "Practice DSA regularly to ace interviews.",
  "Always write clean and readable code.",
  "Keep learning new technologies every week."
];
document.getElementById("codingTip").textContent =
  tips[Math.floor(Math.random() * tips.length)];
