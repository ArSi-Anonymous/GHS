// Add GSAP to your HTML file:
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>

// Initialize GSAP animations
gsap.from('.hero h2', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from('.hero p', { opacity: 0, y: 50, duration: 1, delay: 0.7 });
gsap.from('.hero .btn', { opacity: 0, y: 50, duration: 1, delay: 0.9 });

// Add more animations for other elements
gsap.from('.about-content img', { opacity: 0, scale: 0.5, duration: 1 });
gsap.from('.about-text', { opacity: 0, x: -50, duration: 1, delay: 0.5 });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});