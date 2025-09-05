window.addEventListener("DOMContentLoaded", () => {
  const navbar =
    document.querySelector("#mainNav") || document.querySelector(".navbar");
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.getElementById("navbarResponsive");

  // Navbar shrink function (toggle CSS class or inline styles on scroll)
  const navbarShrink = () => {
    if (!navbar) return;
    if (window.scrollY === 0) {
      navbar.classList.remove("navbar-shrink");
      if (navbar.style) {
        navbar.style.padding = "8px 0";
        navbar.style.boxShadow = "none";
      }
    } else {
      navbar.classList.add("navbar-shrink");
      if (navbar.style) {
        navbar.style.padding = "8px 0";
        navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
      }
    }
  };

  // Initial shrink on page load
  navbarShrink();

  // Shrink navbar on scroll event
  document.addEventListener("scroll", navbarShrink);

  // Collapse responsive navbar when a nav link is clicked (if toggler shown)
  const responsiveNavItems = Array.from(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
      // Only run if navbar is currently shown (mobile view)
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        });
        bsCollapse.hide();
      }
    });
  });

  // IntersectionObserver animation for elements when they come into view
  const animatedElements = document.querySelectorAll(
    ".value-card, .product-card, .testimonial-card"
  );
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );
  animatedElements.forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(el);
  });

  // Form submission handling with validation and success alert
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = this.querySelector('input[type="text"]').value;
      const email = this.querySelector('input[type="email"]').value;
      const subject = this.querySelector('input[placeholder="Subject"]').value;
      const message = this.querySelector("textarea").value;
      if (!name || !email || !message) {
        alert("Please fill in all required fields");
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return;
      }
      console.log("Form submitted:", { name, email, subject, message });
      alert("Thank you for your message! We will get back to you soon.");
      this.reset();
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
});
