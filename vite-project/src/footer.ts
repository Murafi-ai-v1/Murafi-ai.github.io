import "/src/footer.css";

const createFooter = () => {
  const footer = document.createElement("footer");
  footer.className = "bg-white border-t";
  footer.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-6 text-center text-gray-600 text-xs sm:text-sm">
      <p>© 2025 Murafi Technologies. All rights reserved.</p>
      <div class="mt-4">
        <a href="/about.html" class="text-gray-600 hover:text-blue-600 transition mx-2">About Us</a>
        <span class="text-gray-400">|</span>
        <a href="/contact.html" class="text-gray-600 hover:text-blue-600 transition mx-2">Contact Us</a>
      </div>
    </div>
  `;
  return footer;
};

export default createFooter;
