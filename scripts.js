document.addEventListener("DOMContentLoaded", function () {
    const scrollableContent = document.querySelector(".scrollable-content");
    const contentWrapper = document.querySelector(".content-wrapper");
    const additionalSection = document.querySelector(".additional-section");

    scrollableContent.addEventListener("wheel", (event) => {
        const contentHeight = contentWrapper.scrollHeight;
        const scrollTop = contentWrapper.scrollTop;
        const clientHeight = contentWrapper.clientHeight;

        // Check if we are at the boundaries of the scrollable area
        if ((event.deltaY > 0 && scrollTop + clientHeight < contentHeight) ||
            (event.deltaY < 0 && scrollTop > 0)) {
            // Prevent default scrolling behavior
            contentWrapper.scrollTop += event.deltaY;
            event.preventDefault();
        } else if (event.deltaY > 0 && scrollTop + clientHeight >= contentHeight) {
            // At the bottom of the scrollable-content, scroll to the next section
            additionalSection.scrollIntoView({ behavior: "smooth" });
        } else if (event.deltaY < 0 && scrollTop <= 0) {
            // At the top of the scrollable-content, scroll back to the main section
            document.querySelector(".main-section").scrollIntoView({ behavior: "smooth" });
        }
    });
});
