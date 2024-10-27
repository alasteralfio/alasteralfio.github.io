document.addEventListener("DOMContentLoaded", function() {
    const projectCards = document.querySelectorAll(".project-card");
    
    projectCards.forEach(card => {
        card.addEventListener("click", () => openProject(card));
    });
});

function openProject(card) {
    document.body.style.overflow = 'hidden'; // Disable scrolling

    // Retrieve the title and description from the data attributes
    const projectTitle = card.getAttribute("data-title");
    const projectDescription = card.getAttribute("data-description");

    // Create overlay and project container
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);

    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project-container");

    // Content section with title and description
    const contentSection = document.createElement("div");
    contentSection.classList.add("content-section");

    const title = document.createElement("h3");
    title.classList.add("highlight");
    title.textContent = projectTitle; // Use dynamic title
    contentSection.appendChild(title);

    const description = document.createElement("p");
    description.textContent = projectDescription; // Use dynamic description
    contentSection.appendChild(description);

    projectContainer.appendChild(contentSection);

    // Clone and enlarge project image
    const projectImage = card.querySelector("img").cloneNode(true);
    projectImage.classList.add("project-focus-image");
    projectContainer.appendChild(projectImage);

    overlay.appendChild(projectContainer);

    // Close overlay when clicking outside the project container
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeProject(overlay);
    });
}

function closeProject(overlay) {
    document.body.style.overflow = ''; // Re-enable scrolling
    document.body.removeChild(overlay);
}
