
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('section');
    const navbarList = document.getElementById('navbar__list');


    sections.forEach((section) => {
        const sectionId = section.id;
        const sectionNav = section.getAttribute('data-nav');


        const navItem = document.createElement('li');
        const link = document.createElement('a');

        link.textContent = sectionNav;
        link.href = `#${sectionId}`; //
        link.classList.add('menu__link');


        navItem.appendChild(link);
        navbarList.appendChild(navItem);
    });


    navbarList.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const targetSection = document.querySelector(event.target.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });


    window.addEventListener('scroll', function () {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const link = navbarList.querySelector(`a[href="#${section.id}"]`);


            if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                section.classList.add('your-active-class');
                link.classList.add('active');
            } else {
                section.classList.remove('your-active-class');
                link.classList.remove('active');
            }
        });
    });
});
