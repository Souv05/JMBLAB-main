const squares = document.querySelectorAll('.square');
const faces = document.querySelectorAll('.face');
const logos = [
    'Client 1 Logo', 
    'Client 2 Logo', 
    'Client 3 Logo', 
    'Client 4 Logo', 
    'Client 5 Logo', 
    'Client 6 Logo'
];

let currentLogoIndex = 0;

function updateSquareLogos() {
    squares.forEach((square, squareIndex) => {
        const squareFaces = square.querySelectorAll('.face');
        squareFaces.forEach((face, index) => {
            face.textContent = ' ';
        });
    });
    currentLogoIndex++;
}

setInterval(updateSquareLogos, 3000); // Change logo every 3 seconds
updateSquareLogos(); // Initialize logos immediately


document.addEventListener('DOMContentLoaded', () => {
    const testimonialContainer = document.querySelector('.testimonial-container');
    const testimonials = document.querySelectorAll('.testimonial');
    
    // Clone the testimonials to create a seamless scrolling effect
    testimonials.forEach(testimonial => {
      const clone = testimonial.cloneNode(true);
      testimonialContainer.appendChild(clone);
    });
  });