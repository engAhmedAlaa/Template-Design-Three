// Global Variables
// Toggle Button
const toggleButton = document.querySelector('.main-header .toggle-button');

// Navbar Menu
const navBar = document.querySelector('.nav-bar');

// Popup Menu
const popUpMenu = document.getElementById('pop-up');

// All Sections
const sections = document.querySelectorAll('section');

// Scroll To Top Button
const toTopButton = document.querySelector('span.up');

// Toggle Theme Button
const themeButton = document.querySelector('.toggle-theme');

// Main Function
// Scroll To Specific Section
function scrollToSection(link) {
    link.preventDefault();
    if (link.target.dataset.nav !== undefined) {
        const sectionToGo = document.getElementById(
            `${link.target.dataset.nav}`
        );
        sectionToGo.scrollIntoView();
    }
}

// Changing Themes
function changeThemes() {
    // Theme Icon
    const themeIcon = document.querySelector('.theme-icon');
    // Toggle Dark Theme Class On Body Element
    document.body.classList.toggle('dark-theme');
    // Toggle Button Theme
    themeButton.classList.toggle('toggled');
    // Toggle Icon Theme
    themeIcon.classList.toggle('fa-sun');
    themeIcon.classList.toggle('fa-moon');
}

// Adding Active Class To Section In View
function animateOnView() {
    for (const section of sections) {
        if (
            section.getBoundingClientRect().top <= 200 &&
            section.getBoundingClientRect().bottom >= 200
        ) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    }
}

// Showing And Hidding The Scroll To Top Button
function scrollToTopControl() {
    if (window.scrollY >= 1000) {
        toTopButton.classList.add('show');
    } else {
        toTopButton.classList.remove('show');
    }
}

// Events
// Scroll To Specific Section On Clicking
navBar.addEventListener('click', (link) => {
    scrollToSection(link);
});

toggleButton.addEventListener('click', () => {
    popUpMenu.classList.toggle('toggled');
    toggleButton.classList.toggle('toggled');
});

// Toggle Themes On Clicking
themeButton.addEventListener('click', () => {
    changeThemes();
});

// Event Showing and Hidding The Scroll To Top Button
window.onscroll = () => {
    animateOnView();
    scrollToTopControl();
};

// Scrolling to Top On Clicking
toTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0 });
});
