import "/src/navbar.css";

const createNavbar = () => {
  const navbar = document.createElement("header");
  navbar.className =
    "bg-white/70 backdrop-blur-md shadow sticky top-0 z-50";
  navbar.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
      <a href="/" class="text-xl sm:text-2xl font-extrabold tracking-tight text-blue-600">
        Murafi Technologies
      </a>
      <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
        <a href="about.html" class="hover:text-blue-600 transition">About</a>
        <a href="contact.html" class="hover:text-blue-600 transition">Contact</a>
      </nav>
      <button id="mobile-menu-button" class="md:hidden text-gray-800 hover:text-blue-600">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
    <div id="mobile-menu" class="hidden md:hidden px-4 pt-2 pb-4">
      <a href="about.html" class="block py-2 text-sm font-medium text-gray-800 hover:text-blue-600">About</a>
      <a href="contact.html" class="block py-2 text-sm font-medium text-gray-800 hover:text-blue-600">Contact</a>
    </div>
  `;

  const mobileMenuButton = navbar.querySelector("#mobile-menu-button");
  const mobileMenu = navbar.querySelector("#mobile-menu");

  mobileMenuButton?.addEventListener("click", () => {
    mobileMenu?.classList.toggle("hidden");
  });

  return navbar;
};

export default createNavbar;
