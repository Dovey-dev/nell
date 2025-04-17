const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

let isOpen = false;

menuIcon.addEventListener("click", () => {
  isOpen = !isOpen;
  navLinks.classList.toggle("active");
  menuIcon.innerHTML = isOpen ? "<i class='bx bx-x'></i>" : "<i class='bx bx-menu'></i>";
});



(function () {
  const heroSlides = document.querySelectorAll('#hero-section .slide');
  const heroCircles = document.querySelectorAll('#hero-section .circle');
  let heroIndex = 0;
  let heroInterval;

  function showHeroSlide(index) {
    heroSlides.forEach((slide, i) => {
      slide.classList.remove('active');
      heroCircles[i].classList.remove('active');
    });
    heroSlides[index].classList.add('active');
    heroCircles[index].classList.add('active');
  }

  function nextHeroSlide() {
    heroIndex = (heroIndex + 1) % heroSlides.length;
    showHeroSlide(heroIndex);
  }

  function startHeroAutoSlide() {
    heroInterval = setInterval(nextHeroSlide, 4500);
  }

  heroCircles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
      clearInterval(heroInterval);
      heroIndex = index;
      showHeroSlide(heroIndex);
      startHeroAutoSlide();
    });
  });

  startHeroAutoSlide();
})();



(function () {
  const testimonials = document.querySelectorAll('.testimonial-item');
  const nextBtn = document.querySelector('.right-btn');
  const prevBtn = document.querySelector('.left-btn');
  let testimonialIndex = 0;
  let testimonialInterval;

  function showTestimonial(index) {
    testimonials.forEach((item, i) => {
      item.classList.remove('active');
    });
    testimonials[index].classList.add('active');
  }

  function nextTestimonial() {
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    showTestimonial(testimonialIndex);
  }

  function prevTestimonial() {
    testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(testimonialIndex);
  }

  function startTestimonialAuto() {
    testimonialInterval = setInterval(nextTestimonial, 5000);
  }

  nextBtn.addEventListener('click', () => {
    clearInterval(testimonialInterval);
    nextTestimonial();
    startTestimonialAuto();
  });

  prevBtn.addEventListener('click', () => {
    clearInterval(testimonialInterval);
    prevTestimonial();
    startTestimonialAuto();
  });

  startTestimonialAuto();
})();



