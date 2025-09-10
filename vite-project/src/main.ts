import "./style.css";

// Mobile menu handler
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn?.addEventListener("click", () => {
  mobileMenu?.classList.toggle("hidden");
});

// simple UI-only handler for the form (no backend yet)
const form = document.getElementById("waitlist-form") as HTMLFormElement | null;
const email = document.getElementById("email") as HTMLInputElement | null;
const msg = document.getElementById("waitlist-msg") as HTMLParagraphElement | null;

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!email || !msg) return;
  if (!email.value.trim()) {
    msg.textContent = "Please enter a valid email.";
    return;
  }
  msg.textContent = "✅ Thanks! You’re on the list.";
  email.value = "";
});