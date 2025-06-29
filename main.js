let hamburgerBtn = document.querySelector('.hamburger');
let navMenu = document.querySelector('.header ul');
let hamburgerIcon = document.querySelector('.hamburger i');

hamburgerBtn.addEventListener('click', function() {
    // Toggle the menu visibility
    navMenu.classList.toggle('active');
    
    // Toggle the hamburger icon between bars and X
    if (hamburgerIcon.classList.contains('fa-bars')) {
        hamburgerIcon.classList.remove('fa-bars');
        hamburgerIcon.classList.add('fa-x');
    } else {
        hamburgerIcon.classList.remove('fa-x');
        hamburgerIcon.classList.add('fa-bars');
    }
});