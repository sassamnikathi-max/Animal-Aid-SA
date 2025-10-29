// ===========================================
// Animal Aid SA - JavaScript
// ===========================================

// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", () => {

  // -------------------------------
  // ✅ Footer Year
  // -------------------------------
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();


  // -------------------------------
  // ✅ Mobile Menu Toggle
  // -------------------------------
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");

  if (navToggle && siteNav) {
    // Create animated burger lines if not included
    if (!navToggle.innerHTML.trim()) {
      navToggle.innerHTML = `
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
      `;
    }

    // Toggle mobile nav visibility
    navToggle.addEventListener("click", () => {
      siteNav.classList.toggle("active");
      navToggle.classList.toggle("open");
    });

    // Close nav when clicking a link (on small devices)
    document.querySelectorAll(".site-nav a").forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          siteNav.classList.remove("active");
          navToggle.classList.remove("open");
        }
      });
    });
  }


  // -------------------------------
  // ✅ Adopt Page - Filter System
  // -------------------------------
  const filterForm = document.getElementById("filter-form");
  const adoptGrid = document.getElementById("adopt-grid");

  if (filterForm && adoptGrid) {
    filterForm.addEventListener("change", () => {
      const species = document.getElementById("species").value;
      const age = document.getElementById("age").value;
      const size = document.getElementById("size").value;

      document.querySelectorAll(".adoptable").forEach(card => {
        const matchSpecies = species === "all" || card.dataset.species === species;
        const matchAge = age === "all" || card.dataset.age === age;
        const matchSize = size === "all" || card.dataset.size === size;

        if (matchSpecies && matchAge && matchSize) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }


  // -------------------------------
  // ✅ Adopt Modal (Apply Button)
  // -------------------------------
  const modal = document.getElementById("apply-modal");
  const applyBtns = document.querySelectorAll(".apply-btn");
  const applyPet = document.getElementById("apply-pet");

  if (modal && applyBtns.length > 0) {
    applyBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const petName = btn.dataset.name;
        applyPet.textContent = `You're applying to adopt ${petName}. Please fill in your details below.`;
        modal.showModal();
      });
    });

    // Close modal when Cancel button is clicked
    modal.addEventListener("close", () => {
      document.getElementById("apply-form").reset();
    });
  }


  // -------------------------------
  // ✅ Fade-In Animation on Scroll
  // -------------------------------
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("inview");
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".fade-in, .zoom-in").forEach(el => observer.observe(el));
});
