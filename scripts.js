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

// ChatBot
// ChatBot
// ChatBot

document.addEventListener("DOMContentLoaded", function () {
  // DOM elements
  const chatbotButton = document.querySelector(".chatbot-button");
  const chatbotWindow = document.querySelector(".chatbot-window");
  const chatbotClose = document.querySelector(".chatbot-close");
  const chatbotSend = document.querySelector(".chatbot-send");
  const chatbotInput = document.querySelector(".chatbot-input input");
  const chatbotMessages = document.querySelector(".chatbot-messages");
  const quickReplies = document.querySelectorAll(".chatbot-quick-reply");

  // Toggle chat window
  chatbotButton.addEventListener("click", function () {
    chatbotWindow.classList.toggle("active");
  });

  chatbotClose.addEventListener("click", function () {
    chatbotWindow.classList.remove("active");
  });

  // Send message function
  function sendMessage() {
    const message = chatbotInput.value.trim();
    if (message === "") return;

    // Add user message
    addMessage(message, "user");
    chatbotInput.value = "";

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse = generateResponse(message);
      addMessage(botResponse, "bot");
    }, 600);
  }

  // Send button event
  chatbotSend.addEventListener("click", sendMessage);

  // Send message on Enter key
  chatbotInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  // Quick replies
  quickReplies.forEach((reply) => {
    reply.addEventListener("click", function () {
      const text = this.textContent;
      addMessage(text, "user");

      // Simulate bot response after a short delay
      setTimeout(() => {
        const botResponse = generateResponse(text);
        addMessage(botResponse, "bot");
      }, 600);
    });
  });

  // Add message to chat
  function addMessage(text, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message");
    messageElement.classList.add(sender + "-message");
    messageElement.textContent = text;

    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  // Comprehensive knowledge base for Pharmacia
  const knowledgeBase = {
    // Company information
    about: {
      patterns: [
        "what is pharmacia",
        "about pharmacia",
        "company information",
        "tell me about pharmacia",
      ],
      responses: [
        "Pharmacia is a distinguished pharmaceutical and medical supplies company with over 25 years of experience in delivering premium-quality medicines and medical supplies. We're committed to enhancing well-being through trusted healthcare products and personalized service.",
      ],
    },
    headquarters: {
      patterns: [
        "where is pharmacia",
        "headquarters",
        "location",
        "where are you located",
      ],
      responses: [
        "Pharmacia is headquartered in Kuwait. Our address is: Building No. 12, Block 8, Shuwaikh Industrial Area, Kuwait City, Kuwait.",
      ],
    },
    established: {
      patterns: [
        "when was pharmacia established",
        "founding year",
        "when did pharmacia start",
        "how old is pharmacia",
      ],
      responses: [
        "Pharmacia was established in 1998, bringing over 25 years of experience in the pharmaceutical industry.",
      ],
    },
    experience: {
      patterns: [
        "how much experience",
        "years of experience",
        "how long has pharmacia been",
        "industry experience",
      ],
      responses: [
        "Pharmacia has over 25 years of experience in the pharmaceutical industry, delivering premium-quality medicines and medical supplies with a commitment to excellence.",
      ],
    },
    mission: {
      patterns: ["mission", "what is your mission", "company mission"],
      responses: [
        "Pharmacia's mission is to enhance the well-being of individuals by providing trusted healthcare products coupled with compassionate and personalized service.",
      ],
    },
    vision: {
      patterns: ["vision", "what is your vision", "company vision"],
      responses: [
        "Pharmacia's vision is to revolutionize healthcare by integrating cutting-edge technology and maintaining the highest standards of integrity and professionalism.",
      ],
    },
    values: {
      patterns: [
        "core values",
        "values",
        "what are your values",
        "company values",
      ],
      responses: [
        "Pharmacia's core values include: trust, innovation, excellence, compassion, integrity, and commitment to health and wellness.",
      ],
    },

    // Products information
    products: {
      patterns: [
        "products",
        "what products",
        "offer",
        "medicines",
        "medical supplies",
      ],
      responses: [
        "Pharmacia offers a comprehensive range of pharmaceutical products including cardiovascular medications, diabetes care supplies, vaccines & immunizations, mental health aids, wound care supplies, and nutrition supplements.",
      ],
    },
    cardiovascular: {
      patterns: [
        "cardiovascular",
        "heart medications",
        "hypertension",
        "blood pressure",
      ],
      responses: [
        "Yes, we offer premium cardiovascular medications for hypertension and heart conditions. These are expertly formulated to provide effective, reliable care that enhances heart health and supports healthy circulation.",
      ],
    },
    vaccines: {
      patterns: ["vaccines", "immunizations", "vaccinations"],
      responses: [
        "We provide WHO-approved vaccines equipped with advanced temperature-controlled delivery systems to ensure optimal stability and potency throughout the supply chain.",
      ],
    },
    wound_care: {
      patterns: ["wound care", "bandages", "dressings", "wound treatment"],
      responses: [
        "We offer premium wound care supplies including sterile dressings, durable bandages, and advanced wound care treatment products designed to promote optimal healing and prevent infection.",
      ],
    },
    diabetes: {
      patterns: ["diabetes", "diabetes care", "blood sugar", "glucose"],
      responses: [
        "Yes, we provide comprehensive diabetes care supplies and specialized medications designed to ensure accurate and consistent blood sugar control and improved health outcomes.",
      ],
    },
    mental_health: {
      patterns: [
        "mental health",
        "mental wellness",
        "emotional stability",
        "psychological health",
      ],
      responses: [
        "We offer supportive aids and supplements formulated with advanced ingredients to promote optimal mental wellness, enhance emotional stability, and support comprehensive psychological health.",
      ],
    },
    supplements: {
      patterns: [
        "nutrition",
        "supplements",
        "vitamins",
        "minerals",
        "nutritional",
      ],
      responses: [
        "We provide high-quality vitamins, minerals, and essential nutrients formulated with advanced bioavailable ingredients to support balanced nutrition and promote sustained long-term wellness.",
      ],
    },
    view_products: {
      patterns: [
        "view products",
        "see products",
        "product catalog",
        "all products",
      ],
      responses: [
        "You can view all our products on the 'Products' section of our website. We have detailed information about each product including specifications and usage guidelines.",
      ],
    },
    approved: {
      patterns: [
        "approved",
        "who approved",
        "fda",
        "quality approved",
        "certified products",
      ],
      responses: [
        "All Pharmacia products are WHO-certified and meet the highest quality standards. Our medications undergo rigorous testing for safety and efficacy.",
      ],
    },
    international: {
      patterns: [
        "international",
        "globally",
        "worldwide",
        "available countries",
      ],
      responses: [
        "Yes, Pharmacia products are available internationally. We have a trusted supply chain with delivery across multiple regions and countries.",
      ],
    },
    datasheets: {
      patterns: [
        "datasheets",
        "brochures",
        "product information",
        "technical specifications",
      ],
      responses: [
        "Yes, we provide detailed product datasheets and brochures for all our products. You can find them on our website or contact our support team for specific product information.",
      ],
    },

    // Why choose Pharmacia
    why_choose: {
      patterns: ["why choose", "why pharmacia", "advantages", "benefits"],
      responses: [
        "You should choose Pharmacia for our: 1) 25+ years of experience 2) Quality assured products 3) Global reach 4) Advanced technology 5) Customer support 6) Safety & compliance standards.",
      ],
    },
    global_reach: {
      patterns: [
        "global reach",
        "international presence",
        "worldwide delivery",
      ],
      responses: [
        "Yes, Pharmacia has a trusted supply chain with delivery across multiple regions and countries, ensuring our products reach customers worldwide.",
      ],
    },
    quality_assured: {
      patterns: ["quality assured", "quality products", "high quality"],
      responses: [
        "Absolutely. All our products are WHO-approved, rigorously tested medicines and supplies meeting the highest standards of quality and safety.",
      ],
    },
    customer_support: {
      patterns: ["customer support", "support", "help", "assistance"],
      responses: [
        "Yes, we provide expert guidance and after-sales support by industry professionals. Our customer service team is available to assist you with any questions or concerns.",
      ],
    },
    technology: {
      patterns: [
        "advanced technology",
        "technology",
        "innovation",
        "modern systems",
      ],
      responses: [
        "Pharmacia utilizes modern automation and temperature-controlled delivery systems to ensure product integrity and efficient service delivery.",
      ],
    },
    experience_years: {
      patterns: ["25 years", "more than 25 years", "over 25 years"],
      responses: [
        "Yes, Pharmacia has a long-standing legacy and expertise in healthcare with over 25 years of experience in the pharmaceutical industry.",
      ],
    },
    compliance: {
      patterns: [
        "compliance",
        "safety standards",
        "regulatory",
        "quality standards",
      ],
      responses: [
        "Pharmacia follows strict safety and compliance standards with reliable supplies and regulatory compliance in every shipment. We adhere to all international pharmaceutical regulations.",
      ],
    },

    // Expert team
    experts: {
      patterns: [
        "experts",
        "team",
        "professionals",
        "specialists",
        "our experts",
        "who are your experts",
      ],
      responses: [
        "Our expert team includes: Dr. Arjun Singh (Chief Medical Officer), Mr. Sameer Verma (Pharmaceutical Analyst), and Mr. Rakesh Sharma (Supply Chain Manager). These dedicated professionals drive innovation, quality, and compassionate care at Pharmacia.",
      ],
    },
    dr_arjun: {
      patterns: ["dr arjun", "arjun singh", "chief medical officer"],
      responses: [
        "Dr. Arjun Singh is our Chief Medical Officer. He ensures that all our products meet the highest medical standards and provides expert guidance on healthcare solutions. With years of experience in the medical field, he oversees our product quality and medical compliance.",
      ],
    },
    sameer_verma: {
      patterns: ["sameer verma", "pharmaceutical analyst"],
      responses: [
        "Mr. Sameer Verma is our Pharmaceutical Analyst. He is responsible for analyzing and ensuring the quality and efficacy of our pharmaceutical products. His expertise ensures that all our medications meet stringent quality standards before reaching customers.",
      ],
    },
    rakesh_sharma: {
      patterns: ["rakesh sharma", "supply chain manager"],
      responses: [
        "Mr. Rakesh Sharma is our Supply Chain Manager. He oversees the efficient distribution of our products, ensuring timely delivery while maintaining quality standards throughout the supply chain. His management ensures our products reach customers in perfect condition.",
      ],
    },
    quality_team: {
      patterns: ["quality team", "who ensures quality", "quality control"],
      responses: [
        "Our dedicated quality assurance team, led by our Pharmaceutical Analyst Mr. Sameer Verma, ensures all products meet stringent quality standards through rigorous testing and compliance checks. We maintain the highest quality control measures at every stage.",
      ],
    },
    team_experience: {
      patterns: ["team experience", "experienced team", "qualified team"],
      responses: [
        "Our team members are highly experienced professionals with extensive backgrounds in pharmaceuticals, healthcare, and supply chain management. Each expert brings years of industry experience, ensuring expert service at every level of our operations.",
      ],
    },

    // Client testimonials
    testimonials: {
      patterns: [
        "testimonials",
        "reviews",
        "client feedback",
        "what clients say",
        "customer reviews",
        "what customers say",
      ],
      responses: [
        "Our clients consistently praise Pharmacia for our product quality and professional service. Here's what some of them say: 'The team at PHARMACIA consistently delivers top-notch medical supplies with professionalism and care.' - Dr. Arjun Singh, Chief Medical Officer, City Hospital",
      ],
    },
    client_reviews: {
      patterns: [
        "customer reviews",
        "ratings",
        "feedback",
        "testimonials page",
      ],
      responses: [
        "We have numerous positive customer reviews highlighting our product quality and service. Rajesh Kumar, Procurement Manager at Health Network says: 'The team at PHARMACIA understands the critical nature of medical supplies. Their responsive customer service and quality products make them our preferred partner.'",
      ],
    },
    more_testimonials: {
      patterns: ["more testimonials", "other reviews", "additional feedback"],
      responses: [
        "We're proud of our client feedback. Rahul Singh, Director of Wellness Group notes: 'We trust PHARMACIA for their innovative solutions and reliable medical supplies. Their commitment to patient wellbeing and professional support has set a new standard in healthcare partnerships.' Dr. Aman Verma, Senior Physician at Metro Clinic adds: 'PHARMACIA consistently delivers high-quality products with outstanding attention to detail.'",
      ],
    },

    // Certifications
    certifications: {
      patterns: ["certifications", "certified", "accreditations", "approvals"],
      responses: [
        "Pharmacia holds multiple certifications including WHO-GMP, ISO, and other international quality certifications. Our products meet the highest global standards for pharmaceutical products.",
      ],
    },
    who_fda_iso: {
      patterns: ["who", "fda", "iso", "gmp", "who-gmp"],
      responses: [
        "Yes, Pharmacia is WHO-GMP certified and meets FDA and ISO standards. We adhere to strict quality control measures and international regulatory requirements.",
      ],
    },
    certification_proof: {
      patterns: [
        "proof",
        "see certifications",
        "certification documents",
        "verification",
      ],
      responses: [
        "You can view our certifications on the 'Certifications' section of our website. For specific certification documents, please contact our support team.",
      ],
    },

    // Contact & support
    contact: {
      patterns: ["contact", "how to contact", "get in touch", "reach us"],
      responses: [
        "You can contact Pharmacia through: Phone: +965 1234 5678, Email: info@pharmacia.com, or by visiting our headquarters at Building No. 12, Block 8, Shuwaikh Industrial Area, Kuwait City, Kuwait.",
      ],
    },
    contact_form: {
      patterns: ["contact form", "online form", "website form"],
      responses: [
        "Yes, we have a contact form on our website. You can find it in the 'Contact Us' section where you can submit your inquiries directly.",
      ],
    },
    support_hours: {
      patterns: ["24x7", "24/7", "support hours", "availability"],
      responses: [
        "Our customer support is available during business hours. For urgent matters outside these hours, please call our emergency line which is available 24/7 for critical issues.",
      ],
    },
    emergency: {
      patterns: ["emergency", "urgent", "critical", "immediate help"],
      responses: [
        "For emergency support, please call our 24/7 emergency line at +965 1234 5678 (press 1 for emergencies). Our team will provide immediate assistance for critical situations.",
      ],
    },

    // General/Other
    operations: {
      patterns: [
        "operate globally",
        "international operations",
        "countries active",
      ],
      responses: [
        "Yes, Pharmacia operates globally with presence in multiple countries. We serve customers across the Middle East, Asia, Africa, and beyond with our quality pharmaceutical products.",
      ],
    },
    countries: {
      patterns: [
        "which countries",
        "where do you operate",
        "locations",
        "regions",
      ],
      responses: [
        "Pharmacia is active in multiple countries including Kuwait, other GCC countries, and various international markets. We have a growing global presence with distribution networks across several regions.",
      ],
    },
    product_details: {
      patterns: [
        "product details",
        "more information",
        "specific product",
        "technical details",
      ],
      responses: [
        "For detailed information about a specific product, please visit our Products page on the website or contact our support team with the product name for comprehensive details.",
      ],
    },
    catalog: {
      patterns: ["catalog", "download catalog", "product catalog", "brochure"],
      responses: [
        "You can download our complete product catalog from the 'Resources' section of our website. Alternatively, you can contact us to receive a digital or physical copy.",
      ],
    },
    greetings: {
      patterns: [
        "hello",
        "hi",
        "hey",
        "hoi",
        "hey there",
        "hi there",
        "hello there",
        "greetings",
      ],
      responses: ["Hello! Welcome to Pharmacia. How can we assist you today?"],
    },

    // Default response
    default: {
      responses: [
        "I'm not sure I understand. Could you please rephrase your question?",
        "I apologize, but I don't have the answer to that specific question. Would you like to contact our support team for assistance?",
        "That's an interesting question. For detailed information, I recommend contacting our support team at +965 1234 5678 who can help you further.",
        "I'm still learning about all aspects of Pharmacia. For this question, our support team would be better equipped to assist you.",
      ],
    },
  };

  // Generate bot response based on user input
  function generateResponse(message) {
    const lowerMessage = message.toLowerCase();

    // Check for matching patterns
    for (const category in knowledgeBase) {
      if (category === "default") continue;

      for (const pattern of knowledgeBase[category].patterns) {
        if (lowerMessage.includes(pattern)) {
          const responses = knowledgeBase[category].responses;
          return responses[Math.floor(Math.random() * responses.length)];
        }
      }
    }

    // Return default response if no match found
    const defaultResponses = knowledgeBase.default.responses;
    return defaultResponses[
      Math.floor(Math.random() * defaultResponses.length)
    ];
  }
});
