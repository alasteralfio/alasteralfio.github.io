document.addEventListener("DOMContentLoaded", function() {
    const projectCards = document.querySelectorAll(".project-card");
    const sections = document.querySelectorAll("div[id]"); // Selects each section by id attribute
    const navLinks = document.querySelectorAll(".nav-link");
    const footer = document.querySelector("footer");

    projectCards.forEach(card => {
        card.addEventListener("click", () => openProject(card));
    });

    window.addEventListener("scroll", () => {
        let currentSection = "";

        // Check if at the top of the page to highlight Home
        if (window.scrollY < 450) {
            currentSection = "home";
        } else if (
            window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
        ) {
            currentSection = "projects";
        } else {
            // Loop through each section to detect the current section in view
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (
                    window.scrollY >= sectionTop - sectionHeight / 3 &&
                    window.scrollY < sectionTop + sectionHeight - sectionHeight / 3
                ) {
                    currentSection = section.getAttribute("id");
                }
            });
        }

        // Remove highlight from all links, then highlight the current section link
        navLinks.forEach(link => {
            link.classList.remove("highlight");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("highlight");
            }
        });
    });
});

function openProject(card) {
    document.body.style.overflow = 'hidden';

    const projectTitle = card.getAttribute("data-title");
    const projectDescription = card.getAttribute("data-description");

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);

    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project-container");

    const contentSection = document.createElement("div");
    contentSection.classList.add("content-section");

    const title = document.createElement("h3");
    title.classList.add("highlight");
    title.textContent = projectTitle;
    contentSection.appendChild(title);

    const description = document.createElement("p");
    description.textContent = projectDescription;
    contentSection.appendChild(description);

    projectContainer.appendChild(contentSection);

    const projectImage = card.querySelector("img").cloneNode(true);
    projectImage.classList.add("project-focus-image");
    projectContainer.appendChild(projectImage);

    overlay.appendChild(projectContainer);

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeProject(overlay);
    });
}

function closeProject(overlay) {
    document.body.style.overflow = '';
    document.body.removeChild(overlay);
}
