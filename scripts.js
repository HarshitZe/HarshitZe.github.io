document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;
    window.addEventListener('scroll', () => {
        sections.forEach((sec, i) => {
            if (window.pageYOffset >= sec.offsetTop - 100 && window.pageYOffset < sec.offsetTop + sec.offsetHeight) {
                document.querySelectorAll('nav ul li')[i].classList.add('active');
            } else {
                document.querySelectorAll('nav ul li')[i].classList.remove('active');
            }
        });
    });
});
