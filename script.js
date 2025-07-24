window.onload = () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menuClose = document.getElementById("menu-close");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuToggle && menuClose && mobileMenu) {
    menuToggle.onclick = () => {
      mobileMenu.classList.add("active");
      document.body.classList.add("menu-open");
    };

    menuClose.onclick = () => {
      mobileMenu.classList.remove("active");
      document.body.classList.remove("menu-open");
    };
  }

  const toggle = document.getElementById("footer-toggle");
  const hiddenFooter = document.getElementById("footer-hidden");
  const wrapper = document.getElementById("footer-toggle-wrapper");

  if (toggle && hiddenFooter && wrapper) {
    toggle.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent this click from triggering document click
      hiddenFooter.classList.toggle("active");
      toggle.classList.toggle("open");
      wrapper.classList.toggle("hide");
    });

    // Close footer if user clicks anywhere outside
    document.addEventListener("click", (e) => {
      const isFooterOpen = hiddenFooter.classList.contains("active");

      if (
        isFooterOpen &&
        !hiddenFooter.contains(e.target) &&
        !toggle.contains(e.target)
      ) {
        hiddenFooter.classList.remove("active");
        toggle.classList.remove("open");
        wrapper.classList.remove("hide");
      }
    });

    // Optional: Pressing Escape closes it too
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        hiddenFooter.classList.remove("active");
        toggle.classList.remove("open");
        wrapper.classList.remove("hide");
      }
    });
  }

  // Dropdown logic for mobile menu
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      const parent = this.parentElement;
      // Close other open dropdowns
      document.querySelectorAll('.menu-link-dropdown').forEach(drop => {
        if (drop !== parent) drop.classList.remove('open');
      });
      // Toggle this one
      parent.classList.toggle('open');
    });
  });
};

