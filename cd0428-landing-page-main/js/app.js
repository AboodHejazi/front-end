// Global Variables
const navList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const more_section_buttom = document.getElementById('more_sections');
// Helper Function: Create a Nav Item
function createNavItem(section) {
    const navItem = document.createElement('li');
    navItem.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
    return navItem;
}

// Build the nav dynamically
function buildNav() {
    const fragment = document.createDocumentFragment();

    sections.forEach(section => {
        const navItem = createNavItem(section);
        fragment.appendChild(navItem);
    });

    navList.appendChild(fragment);
}

// Set the active class based on viewport visibility
function setActiveSection() {
    let activeSection = null;
    let minDistance = window.innerHeight;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const distanceFromTop = Math.abs(rect.top);

        // Check if section is in the viewport (top within 0 to 300px)
        if (rect.top >= -300 && rect.top <= 300) {
            if (distanceFromTop < minDistance) {
                minDistance = distanceFromTop;
                activeSection = section;
            }
        }
    });

    // Update active classes
    sections.forEach(section => {
        const navLink = document.querySelector(`a[href="#${section.id}"]`);

        if (section === activeSection) {
            section.classList.add('your-active-class');
            navLink.classList.add('active');
        } else {
            section.classList.remove('your-active-class');
            navLink.classList.remove('active');
        }
    });
}

// Scroll to section when clicking a nav item
function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Add Event Listeners
function addEventListeners() {
    document.querySelectorAll('.menu__link').forEach(link => {
        link.addEventListener('click', scrollToSection);
    });
}

// Initialize the navigation and set active states on scroll
buildNav();
addEventListeners();
window.addEventListener('scroll', setActiveSection);


