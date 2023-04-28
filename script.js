// Header toggle
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// Typing effect
let typed = new Typed('.auto-input', {
    strings: ['Software Engineer .', 'Full Stack Developer .', 'Freelance Developer .', ''],
    typeSpeed: 75,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
})