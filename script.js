document.addEventListener('DOMContentLoaded', () => {
    const lightBtn = document.getElementById('light-mode-btn');
    const darkBtn = document.getElementById('dark-mode-btn');
    const systemBtn = document.getElementById('system-mode-btn');
    const body = document.body;

    // Función para aplicar el tema
    const setTheme = (theme) => {
        body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    // Cargar el tema guardado en localStorage al iniciar
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Si no hay tema guardado, usar la preferencia del sistema
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
        if (prefersDarkScheme.matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    // Escuchadores de eventos para los botones
    lightBtn.addEventListener('click', () => {
        setTheme('light');
    });

    darkBtn.addEventListener('click', () => {
        setTheme('dark');
    });

    systemBtn.addEventListener('click', () => {
        // Eliminar el tema guardado para que vuelva a usar la preferencia del sistema
        localStorage.removeItem('theme');
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
        if (prefersDarkScheme.matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    });
});