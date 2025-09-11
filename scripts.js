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
  // Count animation function
  function animateCount(id, max, duration) {
    const element = document.getElementById(id);
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / max));

    let timer = setInterval(() => {
      start += 1;
      element.textContent =
        start + (id === "prodCount" && start === max ? "+" : "");
      if (start >= max) {
        clearInterval(timer);
      }
    }, stepTime);
  }

  // Animate counts on page load
  window.onload = () => {
    animateCount("expCount", 25, 1000); // 1 to 25 in 1 second
    animateCount("prodCount", 200, 1500); // 1 to 1000+ in 1.5 seconds
    animateCount("custSatCount", 99, 1200); // 1 to 99 for Customer Satisfaction example
  };
  // Animate counts when section comes into view
  function animateCount(id, end, duration, suffix = "") {
    const el = document.getElementById(id);
    let num = 0;
    if (!el) return;
    const interval = Math.max(Math.floor(duration / end), 10);
    const timer = setInterval(() => {
      num++;
      el.textContent = num + suffix;
      if (num >= end) {
        el.textContent = end + suffix;
        clearInterval(timer);
      }
    }, interval);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".transition-section");
    let counted = false;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!counted && entry.isIntersecting) {
            counted = true;
            animateCount("expCount", 25, 1000, "");
            animateCount("prodCount", 200, 1500, "+");
            animateCount("custSatCount", 99, 1200, "%");
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(section);
  });
  // Smooth scroll for anchor links including handling # and #top
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#" || targetId === "#top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
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
