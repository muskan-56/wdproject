let slideIndex = 0;
const slides = document.querySelectorAll('.fade-slide');

function showSlides() {
    slides.forEach(slide => slide.classList.remove('active'));

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].classList.add('active');
}

showSlides();


setInterval(showSlides, 5000);
function sendMessage(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const contactMessageContainer = document.getElementById('contact-message');
    contactMessageContainer.innerHTML = ""; 
    contactMessageContainer.innerHTML = "<p style='color:green;'>Thank you, " + name + "! Your message has been sent.</p>";
    document.getElementById('contact-form').reset();
}

