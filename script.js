document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica para el menú de hamburguesa ---
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navbar = document.querySelector('.navbar');

    hamburgerMenu.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Cerrar el menú si se hace clic en un enlace del menú
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });

    // --- Lógica para el cambio de tema ---
    const lightModeBtn = document.getElementById('light-mode-btn');
    const darkModeBtn = document.getElementById('dark-mode-btn');
    const systemModeBtn = document.getElementById('system-mode-btn');
    const body = document.body;

    // Función para aplicar el tema
    function setTheme(theme) {
        body.dataset.theme = theme;
        localStorage.setItem('theme', theme);
    }

    // Cargar el tema al iniciar la página
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        setTheme(systemTheme);
    }

    // Escuchadores de eventos para los botones de tema
    lightModeBtn.addEventListener('click', () => setTheme('light'));
    darkModeBtn.addEventListener('click', () => setTheme('dark'));
    systemModeBtn.addEventListener('click', () => {
        localStorage.removeItem('theme');
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        setTheme(systemTheme);
    });
});