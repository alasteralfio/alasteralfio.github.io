const swup = new Swup();

function init() {
    console.log('Initializing page...');

    const navbar = document.getElementById('navbar');
    const footer = document.getElementById('footer');

    // Debug navbar and footer existence
    if (!navbar) {
        console.error('#navbar not found');
    }
    if (!footer) {
        console.error('#footer not found');
    }

    // Load Navbar
    if (navbar) {
        const navbarType = navbar.getAttribute('data-navbar-type') || 'standard';
        const navbarFile = navbarType === 'long' 
            ? '/components/navbar-long.html' 
            : '/components/navbar.html';

        fetch(navbarFile)
            .then(response => {
                console.log('Navbar fetch response:', response);
                if (!response.ok) {
                    throw new Error(`Failed to load ${navbarFile}`);
                }
                return response.text();
            })
            .then(data => {
                console.log('Navbar content:', data);
                navbar.innerHTML = data;
            })
            .catch(error => console.error('Error loading navbar:', error));
    }

    // Load Footer
    if (footer) {
        const footerFile = '/components/footer.html';

        fetch(footerFile)
            .then(response => {
                console.log('Footer fetch response:', response);
                if (!response.ok) {
                    throw new Error(`Failed to load ${footerFile}`);
                }
                return response.text();
            })
            .then(data => {
                console.log('Footer content:', data);
                footer.innerHTML = data;
            })
            .catch(error => console.error('Error loading footer:', error));
    }

    console.log('Page initialized');
}

function unload() {
    console.log('Cleaning up before content replacement');

    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.innerHTML = ''; // Clear navbar to avoid duplication
    }

    const footer = document.getElementById('footer');
    if (footer) {
        footer.innerHTML = ''; // Clear footer
    }
}

// Run on initial load
if (document.readyState === 'complete') {
    init();
} else {
    document.addEventListener('DOMContentLoaded', () => init());
}

// Reinitialize after Swup navigation
swup.hooks.on('page:view', () => {
    console.log('Swup navigation triggered');
    init();
});

// Cleanup before Swup replaces content
swup.hooks.before('content:replace', () => unload());
