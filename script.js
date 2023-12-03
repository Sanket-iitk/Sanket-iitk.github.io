document.getElementById('mobile-menu-button').addEventListener('click', function () {
    var mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.style.display = (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') ? 'block' : 'none';
});


// Get the current page URL
const currentPage = window.location.href;

// Get all navigation links
const navLinks = document.querySelectorAll('nav a');

debugger
// Loop through each link and check if it matches the current page
var isHomePage = true;
navLinks.forEach(link => {

    debugger
    if (currentPage.includes(link.id)) {
        link.classList.add('highlighted-tab'); // Add the highlighted tab class
        isHomePage = false;
    }
    else {
        link.classList.remove('highlighted-tab')
    }
});

debugger
if (isHomePage)
    document.getElementById("index").classList.add('highlighted-tab');