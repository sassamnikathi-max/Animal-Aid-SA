// ===========================
//   ANIMAL AID JS SCRIPT
// ===========================

// --- Footer Year ---
document.getElementById("year").textContent = new Date().getFullYear();

// --- Mobile Burger Menu ---
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('active');
    navToggle.classList.toggle('open');
  });
}

// --- Accordion (Mission & Vision) ---
const accordions = document.querySelectorAll(".accordion-header");
accordions.forEach(header => {
  header.addEventListener("click", () => {
    // Close others
    accordions.forEach(h => {
      if (h !== header) {
        h.classList.remove("active");
        h.nextElementSibling.style.maxHeight = null;
      }
    });

    // Toggle current one
    header.classList.toggle("active");
    const body = header.nextElementSibling;
    if (body.style.maxHeight) {
      body.style.maxHeight = null;
    } else {
      body.style.maxHeight = body.scrollHeight + "px";
    }
  });
});

// --- Counter Animation ---
function animateCounter(id, target) {
  let count = 0;
  const speed = 20;
  const counter = document.getElementById(id);
  const update = setInterval(() => {
    count += 5;
    counter.textContent = count;
    if (count >= target) clearInterval(update);
  }, speed);
}
animateCounter("rescued", 300);
animateCounter("adopted", 120);
animateCounter("volunteers", 80);

// --- Lightbox Image Viewer ---
const images = document.querySelectorAll(".lightbox-img");
images.forEach(img => {
  img.addEventListener("click", () => {
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    lightbox.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
    document.body.appendChild(lightbox);
    lightbox.addEventListener("click", () => lightbox.remove());
  });
});

// --- Google Map ---
function initMap() {
  const location = { lat: -26.2041, lng: 28.0473 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location,
  });
  new google.maps.Marker({ position: location, map: map, title: "Animal Aid SA" });
}
