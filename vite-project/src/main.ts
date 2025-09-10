import "./style.css";
import createNavbar from "./navbar";

const app = document.querySelector<HTMLDivElement>("#app")!;

const navbar = createNavbar();
app.prepend(navbar);

const mainContent = document.createElement("main");
mainContent.innerHTML = `
  <!-- HERO -->
  <section class="relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700"></div>
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center text-white">
      <h1 class="text-3xl sm:text-5xl font-extrabold leading-tight mb-6">
        Meet <span class="text-yellow-300">Murafi AI</span><br/>
        by Murafi Technologies
      </h1>
      <p class="max-w-2xl mx-auto text-base sm:text-lg text-blue-100 mb-8">
        An intelligent assistant with multi-model support, memory, real-time browsing, Gmail summarization, and voice.
      </p>
      <form id="waitlist-form" class="max-w-md mx-auto flex flex-col sm:flex-row bg-white rounded-xl overflow-hidden shadow-lg">
        <input id="email" type="email" placeholder="Enter your email" required
               class="flex-1 px-4 py-3 text-gray-800 outline-none text-sm">
        <button type="submit"
                class="bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700 transition text-sm">
          Join Waitlist
        </button>
      </form>
      <p id="waitlist-msg" class="mt-3 text-sm text-blue-100"></p>
    </div>
  </section>

  <!-- ABOUT -->
  <section id="about" class="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 text-center">
    <h2 class="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">About Murafi Technologies</h2>
    <p class="max-w-3xl mx-auto text-gray-600 leading-relaxed text-sm sm:text-base">
      Murafi Technologies is building <span class="font-semibold text-gray-800">Murafi AI</span> — 
      an assistant designed to empower individuals and teams.  
      Features include multi-model chat, memory, real-time web results, Gmail summarization, and voice conversations.  
      We’re sharing our journey openly — join our waitlist to be part of it.
    </p>
  </section>

  <!-- BENEFITS -->
  <section id="benefits" class="py-16 sm:py-20 bg-gray-100">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <h2 class="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-900">Why join the waitlist?</h2>
      <div class="grid gap-6 sm:gap-8 md:grid-cols-3">
        <div class="p-6 sm:p-8 bg-white rounded-2xl shadow hover:shadow-lg transition text-center">
          <h3 class="text-base sm:text-lg font-semibold mb-2 text-blue-600">🚀 Early Access</h3>
          <p class="text-gray-600 text-sm sm:text-base">Try features before public launch and help shape the roadmap.</p>
        </div>
        <div class="p-6 sm:p-8 bg-white rounded-2xl shadow hover:shadow-lg transition text-center">
          <h3 class="text-base sm:text-lg font-semibold mb-2 text-blue-600">🎁 Founders’ Perks</h3>
          <p class="text-gray-600 text-sm sm:text-base">Priority support, perks, and exclusive launch benefits.</p>
        </div>
        <div class="p-6 sm:p-8 bg-white rounded-2xl shadow hover:shadow-lg transition text-center">
          <h3 class="text-base sm:text-lg font-semibold mb-2 text-blue-600">💡 Influence</h3>
          <p class="text-gray-600 text-sm sm:text-base">Your feedback directly impacts features and priorities.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ROADMAP -->
  <section id="roadmap" class="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6">
    <h2 class="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-900">Roadmap (Preview)</h2>
    <div class="grid gap-6 sm:gap-8 md:grid-cols-4 text-center">
      <div class="p-6 bg-white rounded-xl border shadow hover:shadow-md transition">
        <h4 class="font-bold mb-2 text-sm sm:text-base">Phase 1</h4>
        <p class="text-gray-600 text-xs sm:text-sm">Private waitlist + feedback loop.</p>
      </div>
      <div class="p-6 bg-white rounded-xl border shadow hover:shadow-md transition">
        <h4 class="font-bold mb-2 text-sm sm:text-base">Phase 2</h4>
        <p class="text-gray-600 text-xs sm:text-sm">MVP: multi-model chat.</p>
      </div>
      <div class="p-6 bg-white rounded-xl border shadow hover:shadow-md transition">
        <h4 class="font-bold mb-2 text-sm sm:text-base">Phase 3</h4>
        <p class="text-gray-600 text-xs sm:text-sm">Memory + Gmail summarization.</p>
      </div>
      <div class="p-6 bg-white rounded-xl border shadow hover:shadow-md transition">
        <h4 class="font-bold mb-2 text-sm sm:text-base">Phase 4</h4>
        <p class="text-gray-600 text-xs sm:text-sm">Web browsing + voice.</p>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact" class="py-16 sm:py-20 bg-gray-100">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 text-center">
      <h2 class="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Contact</h2>
      <p class="text-gray-600 mb-6 text-sm sm:text-base">Have questions? We’d love to hear from you.</p>
      <a href="mailto:support@murafi.tech"
         class="inline-block bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-xl shadow hover:bg-blue-700 transition text-sm sm:text-base">
        support@murafi.tech
      </a>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="bg-white border-t">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-6 text-center text-gray-600 text-xs sm:text-sm">
      © 2025 Murafi Technologies. All rights reserved.
    </div>
  </footer>
`;

app.appendChild(mainContent);

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
  msg.textContent = "✅ Thanks! You’re on the list. (We’ll hook this up to storage next.)";
  email.value = "";
});