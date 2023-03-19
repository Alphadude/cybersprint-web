
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;
let slideInterval;

// Show the current slide and hide the others
function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

// Go to the previous slide
function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

// Go to the next slide
function nextSlide() {
  currentSlide++;
  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

// Set up the event listeners for the buttons
prevBtn.addEventListener('click', () => {
  clearInterval(slideInterval);
  prevSlide();
});
nextBtn.addEventListener('click', () => {
  clearInterval(slideInterval);
  nextSlide();
});

// Set up the slide interval
slideInterval = setInterval(() => {
  nextSlide();
}, 5000);

// Show the first slide when the page loads
showSlide(currentSlide);
