document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll(".fade-in, .fade-in-delay");

    fadeInElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }, index * 300);
    });

    // Hover effect for personality
    document.querySelectorAll(".project-card").forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.transform = `scale(1.02) rotateX(${(y - rect.height / 2) / 20}deg) rotateY(${(x - rect.width / 2) / 20}deg)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1) rotateX(0) rotateY(0)";
        });
    });
});

// Parallax effect for all hero accent shapes
const shapes = document.querySelectorAll('.accent-shape');

document.addEventListener('mousemove', (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 20;
    const y = (e.clientY / innerHeight - 0.5) * 20;

    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 1.5;
        shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});

