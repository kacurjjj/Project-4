// Define a class to encapsulate the slideshow functionality
class Slideshow {
  constructor() {
    this.slideIndex = 1;
    // Attach event listeners to the prev/next buttons and dots when the object is created
    document.addEventListener('DOMContentLoaded', () => { // Ensure the DOM is fully loaded
      this.attachEventListeners();
    });
  }

  // Method to attach event listeners
  attachEventListeners() {
    document.querySelector('.prev').addEventListener('click', () => { this.plusSlides(-1); });
    document.querySelector('.next').addEventListener('click', () => { this.plusSlides(1); });

    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => { this.currentSlide(index + 1); });
    });
  }

  // Method to increment/decrement the current slide
  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  // Method to set the current slide
  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  // Main method to show slides
  showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Debugging: Log the current state
    console.log(`Current slide index before changes: ${this.slideIndex}`);

    if (n > slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";

    // Debugging: Log the current state after changes
    console.log(`Current slide index after changes: ${this.slideIndex}`);
  }
}

// Create a new Slideshow instance
const mySlideshow = new Slideshow();

// Initially display the first slide
mySlideshow.showSlides(mySlideshow.slideIndex);
