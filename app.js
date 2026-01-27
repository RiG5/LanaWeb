document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = document.querySelectorAll('.text-paragraph');
    paragraphs[0].classList.add('visible');
    
    function checkVisibility() {
        paragraphs.forEach((paragraph, index) => {
            const rect = paragraph.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top <= windowHeight * 0.85 && rect.bottom >= 0) {
                setTimeout(() => {
                    paragraph.classList.add('visible');
                }, index * 150);
            }
        });
    }
    
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    
    document.querySelectorAll('.nav-btn[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const photoCircle = document.querySelector('.photo-circle');
    setTimeout(() => {
        photoCircle.style.animation = 'slideInPhoto 1.5s ease-out forwards';
    }, 500);
    
    setTimeout(() => {
        photoCircle.style.animation = 'slideInPhoto 1.5s ease-out forwards, float 6s ease-in-out infinite';
    }, 2000);
});