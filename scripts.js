document.addEventListener("DOMContentLoaded", function () {
    const mainSection = document.querySelector(".main-section");
    const projectsSection = document.querySelector(".projects-section");
    const bufferZone = 100; // Adjusted buffer zone for sensitivity
    const navbarHeight = 60; // Height of sticky navbar
    let isCollapsed = false;

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const mainSectionHeight = mainSection.offsetHeight;
        const projectsTop = projectsSection.offsetTop;

        // Collapse home section when scrolling down past the main section
        if (scrollTop > mainSectionHeight - bufferZone && !isCollapsed) {
            isCollapsed = true;
            collapseMainSection();
        }

        // Expand home section when scrolling back up into the main section
        if (scrollTop < mainSectionHeight - bufferZone && isCollapsed) {
            isCollapsed = false;
            expandMainSection();
        }
    });

    function collapseMainSection() {
        mainSection.style.transition = "transform 0.4s ease-out, height 0.4s ease-out";
        mainSection.style.transform = "scaleY(0)";
        mainSection.style.height = "0";
        addStickyNavbar();
    }

    function expandMainSection() {
        mainSection.style.transition = "transform 0.4s ease-out, height 0.4s ease-out";
        mainSection.style.transform = "scaleY(1)";
        mainSection.style.height = "auto";
        removeStickyNavbar();
    }

    // Add Sticky Navbar
    function addStickyNavbar() {
        const stickyNavbar = document.querySelector(".sticky-navbar");
        if (!stickyNavbar) {
            const navbar = document.createElement("div");
            navbar.classList.add("sticky-navbar");
            navbar.innerHTML = `
                <ul>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Studio</a></li>
                    <li><a href="#">Journal</a></li>
                    <li><a href="#">Let’s Talk</a></li>
                </ul>`;
            document.body.insertBefore(navbar, projectsSection);
        }
    }

    // Remove Sticky Navbar
    function removeStickyNavbar() {
        const stickyNavbar = document.querySelector(".sticky-navbar");
        if (stickyNavbar) {
            stickyNavbar.remove();
        }
    }
});
