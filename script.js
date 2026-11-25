document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement;
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMac = /Mac|iPhone|iPad|iPod/i.test(navigator.platform || '');

    // ===================================
    // TRANSLATIONS (ES / EN)
    // ===================================
    const translations = {
        es: {
            meta: {
                title: "Jorge Figallo M. | Full Stack Junior · QA · Soporte TI",
                description: "Jorge Figallo M. — Bachiller en Ingeniería de Sistemas. Full Stack Junior (React, TypeScript, Node.js, Java, Supabase), QA Testing, SQL/ETL y Soporte TI. Piura, Perú."
            },
            nav: {
                aria: "Navegación principal",
                home: "Inicio",
                experience: "Experiencia",
                projects: "Proyectos",
                skills: "Stack",
                education: "Formación",
                contact: "Contacto",
                cmd_aria: "Abrir paleta de comandos",
                cmd_title: "Paleta de comandos (Ctrl+K)",
                lang_aria: "Cambiar idioma",
                theme_aria: "Cambiar tema",
                theme_to_light: "Claro",
                theme_to_dark: "Oscuro",
                menu_aria: "Abrir menú"
            },
            hero: {
                eyebrow: "PIURA, PERÚ · REMOTO / HÍBRIDO",
                role: "Full Stack Junior · QA · Soporte TI",
                bio: "Bachiller en Ingeniería de Sistemas con más de 5 años en soporte TI, bases de datos SQL e integración con <strong>SAP Business One</strong>. Desarrollo aplicaciones full-stack con <strong>React, TypeScript, Node.js, Java y Supabase</strong>, y ejecuto pruebas funcionales y de APIs (<strong>Postman, Bruno, Gherkin, Serenity BDD</strong>).",
                view_projects: "Ver proyectos",
                fact1_val: "5+ años TI",
                fact1_label: "Soporte, BD, ERP y QA",
                fact2_val: "UCV / UNP",
                fact2_label: "Bachiller Sistemas · Técnico",
                fact3_val: "ES Nativo · EN B1",
                fact3_label: "Remoto · Híbrido · Piura"
            },
            badge: {
                role: "Full Stack Junior · QA · Soporte TI",
                sub: "B.S. Systems Eng. · Piura, PE",
                front_hint: "↻ Clic para girar",
                back_title: "CORE STACK & LINKS",
                back_mode: "Remoto / Híbrido",
                back_hint: "↻ Volver al frente",
                hint_bar: "Arrastra para balancear · Clic para girar",
                flip_btn: "Girar pase"
            },
            actions: {
                download_cv: "Descargar CV",
                copy_email: "Copiar email",
                print_cv: "Imprimir CV",
                print_aria: "Imprimir o guardar PDF"
            },
            section: {
                experience: "Experiencia Laboral",
                projects: "Proyectos Personales",
                skills: "Stack Técnico & Explorando",
                education: "Formación & Certificaciones",
                contact: "Contacto"
            },
            experience: {
                filter_aria: "Filtrar áreas de experiencia",
                filter_all: "Todo",
                filter_data: "Data & SAP",
                filter_qa: "QA & Dev",
                filter_infra: "Infraestructura",
                carita_feliz: {
                    date: "2021 — ACTUALIDAD",
                    role: "Soporte de Sistemas / Soporte Clínico y de TI",
                    awards: "Reconocimientos: Mejor trabajo en equipo (2025) · Destacado desempeño en sistemas (2023)",
                    group_data: "Data, SQL & SAP Business One",
                    task1_1: "Consultas SQL avanzadas (<strong>MySQL, DataGrip, SQL Server</strong>) para reportes clínicos y filtrado de información.",
                    task1_2: "Procesos ETL, migración y sincronización de datos entre <strong>SAP Business One</strong> y el sistema clínico.",
                    task1_3: "Administración de <strong>SAP Business One Client</strong>, gestión de datos maestros y proveedores.",
                    group_qa: "QA, Testing & Desarrollo",
                    task2_1: "Pruebas rigurosas de módulos del sistema clínico usando inspector de código y <strong>Termius</strong> para análisis y resolución de errores.",
                    task2_2: "Colaboración con programadores <strong>Java</strong> en resolución de errores de base de datos, implementación de cambios y scripts.",
                    task2_3: "Automatización y soporte técnico con conocimientos de <strong>PHP, JavaScript, Python y C#</strong>.",
                    task2_4: "Seguimiento de tareas e incidencias con <strong>Jira, Figma e IntelliJ IDEA</strong>.",
                    group_infra: "Infraestructura & Soporte TI",
                    task3_1: "Soporte técnico integral: sistema ERP, cámaras de seguridad (<strong>DVR/NVR</strong>), hardware, software y redes.",
                    task3_2: "Administración de servidores <strong>Linux (NTP, DNS, DHCP)</strong> y <strong>Windows Server 2012</strong>.",
                    task3_3: "Gestión del <strong>Firewall Fortinet</strong> para la continuidad operativa de la red."
                },
                primax: {
                    date: "2020 — JUN 2021",
                    role: "Técnico de Soporte de Sistemas",
                    task1: "Soporte técnico a sistema ERP, cámaras de seguridad, hardware, software e infraestructura de red.",
                    task2: "Configuración y administración de servidores <strong>Linux (NTP, DNS, DHCP)</strong> y <strong>Windows Server 2012</strong>.",
                    task3: "Gestión del <strong>Firewall Fortinet</strong> para garantizar seguridad y disponibilidad de la red."
                }
            },
            projects: {
                arch_aria: "Flujo de arquitectura",
                view_github: "Ver código en GitHub",
                view_repos: "Ver repositorios en GitHub",
                cafetin: {
                    type: "Full-Stack · Tiempo Real",
                    title: "Sistema de Gestión para Cafetín",
                    desc: "Aplicación full-stack para gestión integral de pedidos, ventas e inventario con sincronización en tiempo real y autenticación segura.",
                    node2: "Java REST API",
                    node3: "Supabase (PostgreSQL + Auth)"
                },
                react_apps: {
                    type: "Frontend · CI/CD",
                    title: "Aplicaciones Web con React (4 Proyectos)",
                    desc: "Desarrollo de 4 aplicaciones web responsivas con JavaScript y TypeScript, estilos modernos con Tailwind CSS, control de versiones con Git/GitHub y despliegue continuo en Vercel."
                }
            },
            skills: {
                filter_aria: "Filtrar tecnologías por rol",
                filter_all: "Todo",
                filter_fullstack: "Full Stack",
                filter_qa: "QA",
                filter_data: "Data & SQL",
                filter_infra: "Sistemas & ERP",
                filter_tools: "Herramientas",
                filter_learning: "Explorando",
                cat_languages: "Lenguajes",
                cat_web: "Web & APIs",
                cat_qa: "QA & Testing",
                cat_data: "Data & SQL",
                cat_infra: "Sistemas & ERP",
                cat_tools: "Herramientas",
                cat_learning: "Explorando",
                tag_test_design: "Diseño de Casos de Prueba",
                tag_defect_mgmt: "Gestión de Defectos",
                tag_sql_adv: "SQL Avanzado",
                tag_etl: "Procesos ETL",
                tag_sap_sync: "SAP ↔ Sistema Clínico",
                tag_python_data: "Python para Datos"
            },
            education: {
                ucv: {
                    degree: "Bachiller en Ingeniería de Sistemas",
                    institution: "Universidad César Vallejo (UCV)",
                    detail: "Carrera concluida, tesis sustentada y aprobada. Título Profesional en trámite."
                },
                etsunp: {
                    degree: "Técnico en Análisis de Sistemas",
                    institution: "ETSUNP · Universidad Nacional de Piura (UNP)",
                    detail: "Título Profesional Técnico."
                }
            },
            certifications: {
                heading: "Certificaciones & Capacitaciones",
                drive_link: "Ver certificados digitales en Google Drive",
                testing: {
                    title: "Testing & QA",
                    issuer: "NTT DATA",
                    desc: "Técnicas de diseño de pruebas (partición de equivalencia, valores límite, tabla de decisión), testing de APIs con Postman y Bruno, automatización con Gherkin en Serenity BDD y gestión de defectos."
                },
                web_mobile: {
                    title: "Desarrollador Web y Aplicaciones Móviles",
                    issuer: "Universidad César Vallejo",
                    desc: "Certificación intermedia de la Facultad de Ingeniería y Arquitectura orientada al desarrollo de soluciones web y aplicaciones móviles."
                },
                helpdesk: {
                    title: "Asistente de Help Desk",
                    issuer: "Universidad César Vallejo",
                    desc: "Certificación intermedia de la Facultad de Ingeniería y Arquitectura enfocada en soporte técnico, atención de incidencias y continuidad operativa TI."
                },
                python: {
                    title: "Programación en Python",
                    issuer: "InGenio Learning",
                    desc: "Curso acreditado de 32 horas lectivas orientado a programación en Python, manejo de datos y automatización de procesos."
                },
                cisco: {
                    title: "Cisco CCNA Routing & Switching",
                    issuer: "UDEP / Cisco Networking Academy",
                    desc: "Tecnologías WAN, PPP/PPPoE, GRE, eBGP, listas ACL IPv4/IPv6, QoS, seguridad LAN y diagnóstico de conectividad de punta a punta."
                },
                iso: {
                    title: "Norma ISO 45001:2018",
                    issuer: "ICC Adviser",
                    desc: "Interpretación de la norma ISO 45001:2018 y sistemas de gestión de seguridad y salud en el trabajo (8 horas académicas)."
                }
            },
            cta: {
                title: "Hablemos",
                text: "Disponible para roles en Desarrollo Full Stack Junior, QA Testing o Análisis de Datos (remoto, híbrido o en Piura).",
                copy_email: "Copiar figallojorge@gmail.com",
                send_email: "Enviar correo"
            },
            footer: {
                copyright: "© 2026 Jorge Figallo M. · Piura, Perú",
                cmd_hint: "Presiona Ctrl+K para navegación rápida"
            },
            cmd: {
                title: "Paleta de comandos",
                placeholder: "Buscar sección o acción...",
                close_aria: "Cerrar paleta",
                empty: "Sin coincidencias",
                go_section: "Ir a sección",
                action_label: "Acción",
                open_ext: "Abrir enlace",
                items: {
                    home: "Ir a Inicio / Fotocheck",
                    experience: "Ir a Experiencia Laboral",
                    projects: "Ir a Proyectos",
                    skills: "Ir a Stack Técnico",
                    education: "Ir a Formación & Certificaciones",
                    contact: "Ir a Contacto",
                    flip_badge: "Girar Fotocheck 3D",
                    copy_email: "Copiar correo (figallojorge@gmail.com)",
                    download_cv: "Descargar CV (Google Drive)",
                    linkedin: "Abrir LinkedIn",
                    github: "Abrir GitHub",
                    whatsapp: "Contactar por WhatsApp",
                    print: "Imprimir / Guardar PDF",
                    toggle_lang: "Cambiar idioma (ES / EN)",
                    toggle_theme: "Cambiar tema (Oscuro / Claro)"
                }
            },
            toast: {
                email_copied: "Correo copiado: figallojorge@gmail.com"
            }
        },
        en: {
            meta: {
                title: "Jorge Figallo M. | Junior Full Stack · QA · IT Support",
                description: "Jorge Figallo M. — Bachelor in Systems Engineering. Junior Full Stack (React, TypeScript, Node.js, Java, Supabase), QA Testing, SQL/ETL, and IT Support. Piura, Peru."
            },
            nav: {
                aria: "Main navigation",
                home: "Home",
                experience: "Experience",
                projects: "Projects",
                skills: "Stack",
                education: "Education",
                contact: "Contact",
                cmd_aria: "Open command palette",
                cmd_title: "Command palette (Ctrl+K)",
                lang_aria: "Switch language",
                theme_aria: "Switch theme",
                theme_to_light: "Light",
                theme_to_dark: "Dark",
                menu_aria: "Toggle menu"
            },
            hero: {
                eyebrow: "PIURA, PERU · REMOTE / HYBRID",
                role: "Junior Full Stack · QA · IT Support",
                bio: "Systems Engineering graduate with 5+ years of experience in IT support, SQL databases, and <strong>SAP Business One</strong> integration. I build full-stack web apps using <strong>React, TypeScript, Node.js, Java, and Supabase</strong>, and execute functional and API tests (<strong>Postman, Bruno, Gherkin, Serenity BDD</strong>).",
                view_projects: "View projects",
                fact1_val: "5+ yrs IT",
                fact1_label: "Support, DB, ERP & QA",
                fact2_val: "UCV / UNP",
                fact2_label: "B.S. Systems · Technical Degree",
                fact3_val: "Native ES · EN B1",
                fact3_label: "Remote · Hybrid · Piura"
            },
            badge: {
                role: "Junior Full Stack · QA · IT Support",
                sub: "B.S. Systems Eng. · Piura, PE",
                front_hint: "↻ Click to flip",
                back_title: "CORE STACK & LINKS",
                back_mode: "Remote / Hybrid",
                back_hint: "↻ Back to front",
                hint_bar: "Drag to swing · Click to flip",
                flip_btn: "Flip pass"
            },
            actions: {
                download_cv: "Download CV",
                copy_email: "Copy email",
                print_cv: "Print CV",
                print_aria: "Print or save PDF"
            },
            section: {
                experience: "Work Experience",
                projects: "Personal Projects",
                skills: "Tech Stack & Exploring",
                education: "Education & Certifications",
                contact: "Contact"
            },
            experience: {
                filter_aria: "Filter experience focus areas",
                filter_all: "All",
                filter_data: "Data & SAP",
                filter_qa: "QA & Dev",
                filter_infra: "Infrastructure",
                carita_feliz: {
                    date: "2021 — PRESENT",
                    role: "Systems Support / Clinical & IT Support",
                    awards: "Recognitions: Best Teamwork (2025) · Outstanding Systems Performance (2023)",
                    group_data: "Data, SQL & SAP Business One",
                    task1_1: "Advanced SQL queries (<strong>MySQL, DataGrip, SQL Server</strong>) for clinical reporting and data filtering.",
                    task1_2: "ETL workflows, data migration, and synchronization between <strong>SAP Business One</strong> and the clinical system.",
                    task1_3: "Administration of <strong>SAP Business One Client</strong>, master data creation, and vendor management.",
                    group_qa: "QA, Testing & Development",
                    task2_1: "Rigorous testing of clinical system modules using code inspection tools and <strong>Termius</strong> for root-cause analysis and bug resolution.",
                    task2_2: "Collaboration with <strong>Java</strong> developers on database fixes, deployments, and SQL/script execution.",
                    task2_3: "Automation and technical support with working knowledge of <strong>PHP, JavaScript, Python, and C#</strong>.",
                    task2_4: "Task and defect tracking with <strong>Jira, Figma, and IntelliJ IDEA</strong>.",
                    group_infra: "Infrastructure & IT Support",
                    task3_1: "End-to-end technical support: ERP system, security cameras (<strong>DVR/NVR</strong>), hardware, software, and networks.",
                    task3_2: "Administration of <strong>Linux servers (NTP, DNS, DHCP)</strong> and <strong>Windows Server 2012</strong>.",
                    task3_3: "<strong>Fortinet Firewall</strong> management to maintain network security and uptime."
                },
                primax: {
                    date: "2020 — JUN 2021",
                    role: "Systems Support Technician",
                    task1: "Technical support for ERP system, security cameras, hardware, software, and network infrastructure.",
                    task2: "Setup and administration of <strong>Linux servers (NTP, DNS, DHCP)</strong> and <strong>Windows Server 2012</strong>.",
                    task3: "<strong>Fortinet Firewall</strong> management to ensure network security and availability."
                }
            },
            projects: {
                arch_aria: "Architecture flow",
                view_github: "View code on GitHub",
                view_repos: "View GitHub repositories",
                cafetin: {
                    type: "Full-Stack · Real-Time",
                    title: "Cafeteria Management System",
                    desc: "Full-stack application for order management, sales tracking, and inventory control with real-time sync and authentication.",
                    node2: "Java REST API",
                    node3: "Supabase (PostgreSQL + Auth)"
                },
                react_apps: {
                    type: "Frontend · CI/CD",
                    title: "React Web Applications (4 Projects)",
                    desc: "Built 4 responsive web applications with JavaScript and TypeScript, styled with Tailwind CSS, versioned on Git/GitHub, and continuously deployed on Vercel."
                }
            },
            skills: {
                filter_aria: "Filter technologies by role",
                filter_all: "All",
                filter_fullstack: "Full Stack",
                filter_qa: "QA",
                filter_data: "Data & SQL",
                filter_infra: "Systems & ERP",
                filter_tools: "Tools",
                filter_learning: "Exploring",
                cat_languages: "Languages",
                cat_web: "Web & APIs",
                cat_qa: "QA & Testing",
                cat_data: "Data & SQL",
                cat_infra: "Systems & ERP",
                cat_tools: "Tools",
                cat_learning: "Exploring",
                tag_test_design: "Test Case Design",
                tag_defect_mgmt: "Defect Management",
                tag_sql_adv: "Advanced SQL",
                tag_etl: "ETL Workflows",
                tag_sap_sync: "SAP ↔ Clinical System",
                tag_python_data: "Python for Data"
            },
            education: {
                ucv: {
                    degree: "Bachelor in Systems Engineering",
                    institution: "César Vallejo University (UCV)",
                    detail: "Coursework completed, thesis defended and approved. Professional Title in progress."
                },
                etsunp: {
                    degree: "Systems Analysis Technician",
                    institution: "ETSUNP · National University of Piura (UNP)",
                    detail: "Professional Technical Degree."
                }
            },
            certifications: {
                heading: "Certifications & Training",
                drive_link: "View digital certificates on Google Drive",
                testing: {
                    title: "Testing & QA",
                    issuer: "NTT DATA",
                    desc: "Test design techniques (equivalence partitioning, boundary values, decision tables), API testing with Postman and Bruno, Gherkin automation in Serenity BDD, and defect management."
                },
                web_mobile: {
                    title: "Web & Mobile Applications Developer",
                    issuer: "César Vallejo University",
                    desc: "Intermediate certification from the Faculty of Engineering & Architecture focused on web and mobile solution development."
                },
                helpdesk: {
                    title: "Help Desk Assistant",
                    issuer: "César Vallejo University",
                    desc: "Intermediate certification from the Faculty of Engineering & Architecture focused on technical support, incident handling, and IT continuity."
                },
                python: {
                    title: "Python Programming",
                    issuer: "InGenio Learning",
                    desc: "Accredited 32-hour course focused on Python programming, data handling, and process automation."
                },
                cisco: {
                    title: "Cisco CCNA Routing & Switching",
                    issuer: "UDEP / Cisco Networking Academy",
                    desc: "WAN technologies, PPP/PPPoE, GRE, eBGP, IPv4/IPv6 ACLs, QoS, LAN security, and end-to-end connectivity troubleshooting."
                },
                iso: {
                    title: "ISO 45001:2018 Standard",
                    issuer: "ICC Adviser",
                    desc: "Interpretation of the ISO 45001:2018 standard and occupational health and safety management systems (8 academic hours)."
                }
            },
            cta: {
                title: "Get in touch",
                text: "Available for Junior Full Stack Development, QA Testing, or Data Analysis roles (remote, hybrid, or Piura).",
                copy_email: "Copy figallojorge@gmail.com",
                send_email: "Send email"
            },
            footer: {
                copyright: "© 2026 Jorge Figallo M. · Piura, Peru",
                cmd_hint: "Press Ctrl+K for quick navigation"
            },
            cmd: {
                title: "Command palette",
                placeholder: "Search section or action...",
                close_aria: "Close palette",
                empty: "No matches found",
                go_section: "Go to section",
                action_label: "Action",
                open_ext: "Open link",
                items: {
                    home: "Go to Home / 3D Pass",
                    experience: "Go to Work Experience",
                    projects: "Go to Projects",
                    skills: "Go to Tech Stack",
                    education: "Go to Education & Certifications",
                    contact: "Go to Contact",
                    flip_badge: "Flip 3D Badge",
                    copy_email: "Copy email (figallojorge@gmail.com)",
                    download_cv: "Download CV (Google Drive)",
                    linkedin: "Open LinkedIn",
                    github: "Open GitHub",
                    whatsapp: "Contact via WhatsApp",
                    print: "Print / Save PDF",
                    toggle_lang: "Switch language (ES / EN)",
                    toggle_theme: "Switch theme (Dark / Light)"
                }
            },
            toast: {
                email_copied: "Email copied: figallojorge@gmail.com"
            }
        }
    };

    function getTranslation(lang, path) {
        return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : null), translations[lang]);
    }

    const cmdShortcutLabel = document.getElementById('cmd-shortcut-label');
    if (cmdShortcutLabel && isMac) cmdShortcutLabel.textContent = '⌘K';

    // ===================================
    // LANGUAGE & THEME TOGGLES (DARK DEFAULT)
    // ===================================
    let currentLanguage = localStorage.getItem('language') || 'es';
    if (!translations[currentLanguage]) currentLanguage = 'es';

    const themeToggle = document.getElementById('theme-toggle');
    const iconSun = document.getElementById('icon-sun');
    const iconMoon = document.getElementById('icon-moon');
    const themeLabel = document.getElementById('theme-label');

    function updateThemeUI(theme) {
        const isDark = theme === 'dark';
        if (iconSun) iconSun.hidden = !isDark;
        if (iconMoon) iconMoon.hidden = isDark;
        if (themeLabel) {
            const labelKey = isDark ? 'nav.theme_to_light' : 'nav.theme_to_dark';
            themeLabel.textContent = getTranslation(currentLanguage, labelKey) || (isDark ? 'Claro' : 'Oscuro');
        }
    }

    const savedTheme = localStorage.getItem('cv_theme_pref');
    const initialTheme = savedTheme === 'light' ? 'light' : 'dark';
    html.setAttribute('data-theme', initialTheme);

    function toggleTheme() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('cv_theme_pref', newTheme);
        updateThemeUI(newTheme);
    }

    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);

    const languageToggle = document.getElementById('language-toggle');
    const languageIcon = document.getElementById('language-icon');
    const metaDesc = document.querySelector('meta[name="description"]');

    function applyLanguage(lang) {
        currentLanguage = lang;
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const val = getTranslation(lang, el.getAttribute('data-i18n'));
            if (typeof val === 'string') {
                if (val.includes('<')) el.innerHTML = val;
                else el.textContent = val;
            }
        });

        document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
            const val = getTranslation(lang, el.getAttribute('data-i18n-aria'));
            if (typeof val === 'string') el.setAttribute('aria-label', val);
        });

        document.querySelectorAll('[data-i18n-title]').forEach((el) => {
            const val = getTranslation(lang, el.getAttribute('data-i18n-title'));
            if (typeof val === 'string') el.setAttribute('title', val);
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
            const val = getTranslation(lang, el.getAttribute('data-i18n-placeholder'));
            if (typeof val === 'string') el.setAttribute('placeholder', val);
        });

        const metaTitle = getTranslation(lang, 'meta.title');
        const metaDescription = getTranslation(lang, 'meta.description');
        if (metaTitle) document.title = metaTitle;
        if (metaDescription && metaDesc) metaDesc.setAttribute('content', metaDescription);

        if (languageIcon) languageIcon.textContent = lang.toUpperCase();
        localStorage.setItem('language', lang);
        html.setAttribute('lang', lang);
        updateThemeUI(html.getAttribute('data-theme') || 'dark');
    }

    applyLanguage(currentLanguage);

    if (languageToggle) {
        languageToggle.addEventListener('click', () => {
            applyLanguage(currentLanguage === 'es' ? 'en' : 'es');
            if (cmdModal && !cmdModal.hidden) renderCommandList(cmdInput.value);
        });
    }

    // ===================================
    // MOBILE MENU
    // ===================================
    const hamburgerBtn = document.getElementById('hamburger-menu');
    const mobileNav = document.getElementById('mobile-nav');

    if (hamburgerBtn && mobileNav) {
        hamburgerBtn.addEventListener('click', () => {
            const willOpen = mobileNav.hidden;
            mobileNav.hidden = !willOpen;
            hamburgerBtn.setAttribute('aria-expanded', String(willOpen));
        });

        mobileNav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                mobileNav.hidden = true;
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ===================================
    // CACHED SCROLL PROGRESS & SCROLL-SPY
    // ===================================
    function scrollToSection(hash) {
        const target = document.querySelector(hash);
        if (!target) return;
        const top = hash === '#inicio' ? 0 : target.getBoundingClientRect().top + window.pageYOffset - 74;
        window.scrollTo({
            top,
            behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (!href || href === '#' || !document.querySelector(href)) return;
            e.preventDefault();
            scrollToSection(href);
        });
    });

    const scrollProgress = document.getElementById('scroll-progress');
    const spyTargets = Array.from(document.querySelectorAll('header[id], section[id]'));
    const navLinks = Array.from(document.querySelectorAll('#nav-links .nav-link'));
    let cachedMaxScroll = 0;
    let cachedSectionOffsets = [];

    function measureScrollBounds() {
        cachedMaxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
        cachedSectionOffsets = spyTargets.map((el) => ({ id: el.id, top: el.offsetTop }));
    }

    function updateScrollUI() {
        const scrollY = window.pageYOffset;

        if (scrollProgress) {
            const ratio = cachedMaxScroll > 0 ? Math.min(1, Math.max(0, scrollY / cachedMaxScroll)) : 0;
            scrollProgress.style.transform = `scaleX(${ratio})`;
        }

        if (cachedSectionOffsets.length > 0 && navLinks.length > 0) {
            let activeId = cachedSectionOffsets[0].id;
            const trigger = scrollY + 180;
            for (const sec of cachedSectionOffsets) {
                if (trigger >= sec.top) activeId = sec.id;
            }
            if (cachedMaxScroll > 0 && scrollY >= cachedMaxScroll - 24) {
                activeId = cachedSectionOffsets[cachedSectionOffsets.length - 1].id;
            }
            navLinks.forEach((link) => {
                link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`);
            });
        }
    }

    let scrollTicking = false;
    function onScroll() {
        if (scrollTicking) return;
        scrollTicking = true;
        requestAnimationFrame(() => {
            updateScrollUI();
            scrollTicking = false;
        });
    }

    measureScrollBounds();
    updateScrollUI();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('load', () => {
        measureScrollBounds();
        updateScrollUI();
    });

    // ===================================
    // 3D LANYARD & PENDULUM BADGE (ZERO-REFLOW)
    // ===================================
    const stage = document.getElementById('lanyard-stage');
    const lanyardSvg = document.getElementById('lanyard-svg');
    const strapTopMount = document.getElementById('strap-top-mount');
    const strapLeftBody = document.getElementById('strap-left-body');
    const strapLeftStitch = document.getElementById('strap-left-stitch');
    const strapRightBody = document.getElementById('strap-right-body');
    const strapRightStitch = document.getElementById('strap-right-stitch');
    const badgeRig = document.getElementById('badge-rig');
    const badgeCard = document.getElementById('badge-card');
    const badgeTilt = document.getElementById('badge-tilt');
    const badgeFlipper = document.getElementById('badge-flipper');
    const flipBadgeBtn = document.getElementById('flip-badge-btn');
    const badgeFront = badgeCard ? badgeCard.querySelector('.badge-front') : null;
    const badgeBack = badgeCard ? badgeCard.querySelector('.badge-back') : null;

    let isFlipped = false;

    function setBadgeFlip(flipped) {
        isFlipped = flipped;
        if (badgeFlipper) badgeFlipper.classList.toggle('is-flipped', isFlipped);
        if (badgeFront) badgeFront.setAttribute('aria-hidden', String(isFlipped));
        if (badgeBack) {
            badgeBack.setAttribute('aria-hidden', String(!isFlipped));
            badgeBack.querySelectorAll('a, button').forEach((el) => {
                el.setAttribute('tabindex', isFlipped ? '0' : '-1');
            });
        }
        if (flipBadgeBtn) flipBadgeBtn.setAttribute('aria-pressed', String(isFlipped));
    }

    if (flipBadgeBtn) {
        flipBadgeBtn.addEventListener('click', () => setBadgeFlip(!isFlipped));
    }

    if (stage && badgeRig && badgeCard && lanyardSvg) {
        const state = {
            x: prefersReducedMotion ? 0 : 18,
            y: prefersReducedMotion ? 0 : -48,
            vx: 0,
            vy: 0,
            angle: prefersReducedMotion ? 0 : -10,
            vAngle: prefersReducedMotion ? 0 : 1.5,
            dragging: false,
            pointerId: null,
            startClientX: 0,
            startClientY: 0,
            startX: 0,
            startY: 0,
            lastClientX: 0,
            lastClientY: 0,
            maxDragDist: 0,
            tiltX: 0,
            tiltY: 0,
            time: 0
        };

        let cachedCx = 190;
        let cachedRestY = 96;
        let cachedCardRect = null;

        function measureStage() {
            const w = stage.clientWidth || 380;
            const h = stage.clientHeight || 560;
            cachedCx = w / 2;
            cachedRestY = window.innerWidth <= 640 ? 74 : 96;
            lanyardSvg.setAttribute('viewBox', `0 0 ${w} ${h}`);
            if (strapTopMount) strapTopMount.setAttribute('transform', `translate(${cachedCx}, 0)`);
            cachedCardRect = badgeCard.getBoundingClientRect();
        }

        function updateRender() {
            badgeRig.style.transform = `translate3d(${state.x.toFixed(2)}px, ${(cachedRestY + state.y).toFixed(2)}px, 0) rotate(${state.angle.toFixed(2)}deg)`;

            const hookX = cachedCx + state.x;
            const hookY = cachedRestY + state.y + 8;
            const topOffset = 18;
            const midY = hookY * 0.52;
            const bendX = state.x * 0.32 - state.angle * 0.7;

            const leftPath = `M ${cachedCx - topOffset} 0 Q ${cachedCx - topOffset * 0.55 + bendX} ${midY}, ${hookX - 3} ${hookY}`;
            const rightPath = `M ${cachedCx + topOffset} 0 Q ${cachedCx + topOffset * 0.55 + bendX} ${midY}, ${hookX + 3} ${hookY}`;

            if (strapLeftBody) strapLeftBody.setAttribute('d', leftPath);
            if (strapLeftStitch) strapLeftStitch.setAttribute('d', leftPath);
            if (strapRightBody) strapRightBody.setAttribute('d', rightPath);
            if (strapRightStitch) strapRightStitch.setAttribute('d', rightPath);

            if (badgeTilt && !prefersReducedMotion) {
                badgeTilt.style.transform = `rotateX(${state.tiltX.toFixed(2)}deg) rotateY(${state.tiltY.toFixed(2)}deg)`;
            }
        }

        measureStage();

        if (prefersReducedMotion) {
            updateRender();
            badgeCard.addEventListener('click', (e) => {
                if (e.target.closest('a, button')) return;
                setBadgeFlip(!isFlipped);
            });
        } else {
            let isStageVisible = true;
            let rafHandle = null;
            let lastTime = performance.now();

            function tick(now) {
                rafHandle = null;
                if (!isStageVisible || document.hidden) return;

                const dt = Math.min(0.032, (now - lastTime) / 1000 || 0.016);
                lastTime = now;
                state.time += dt;

                if (!state.dragging) {
                    const kSpring = 52;
                    const kDamp = 6.8;
                    const ax = -kSpring * state.x - kDamp * state.vx;
                    const ay = -kSpring * state.y - kDamp * state.vy;

                    state.vx += ax * dt;
                    state.vy += ay * dt;
                    state.x += state.vx * dt;
                    state.y += state.vy * dt;

                    const ambientTarget = Math.sin(state.time * 1.15) * 0.85;
                    const targetAngle = ambientTarget - state.x * 0.12 - state.vx * 0.035;
                    const aAngle = 48 * (targetAngle - state.angle) - 5.4 * state.vAngle;
                    state.vAngle += aAngle * dt;
                    state.angle += state.vAngle * dt;
                }

                updateRender();
                rafHandle = requestAnimationFrame(tick);
            }

            function startLoop() {
                if (rafHandle === null && isStageVisible && !document.hidden) {
                    lastTime = performance.now();
                    rafHandle = requestAnimationFrame(tick);
                }
            }

            if ('IntersectionObserver' in window) {
                const stageObserver = new IntersectionObserver((entries) => {
                    isStageVisible = entries[0].isIntersecting;
                    if (isStageVisible) startLoop();
                }, { threshold: 0.02 });
                stageObserver.observe(stage);
            }

            document.addEventListener('visibilitychange', () => {
                if (!document.hidden && isStageVisible) startLoop();
            });

            startLoop();

            badgeCard.addEventListener('pointerenter', () => {
                cachedCardRect = badgeCard.getBoundingClientRect();
            });

            badgeCard.addEventListener('pointerdown', (e) => {
                if (e.button !== 0 && e.pointerType === 'mouse') return;
                if (e.target.closest('a, button')) return;

                cachedCardRect = badgeCard.getBoundingClientRect();
                state.dragging = true;
                state.pointerId = e.pointerId;
                state.startClientX = e.clientX;
                state.startClientY = e.clientY;
                state.lastClientX = e.clientX;
                state.lastClientY = e.clientY;
                state.startX = state.x;
                state.startY = state.y;
                state.maxDragDist = 0;
                state.vx = 0;
                state.vy = 0;

                badgeCard.classList.add('is-dragging');
                badgeCard.setPointerCapture(e.pointerId);
                startLoop();
            });

            badgeCard.addEventListener('pointermove', (e) => {
                if (!cachedCardRect) cachedCardRect = badgeCard.getBoundingClientRect();
                const rect = cachedCardRect;
                if (rect.width > 0 && rect.height > 0) {
                    const px = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
                    const py = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
                    badgeCard.style.setProperty('--holo-x', `${px.toFixed(1)}%`);
                    badgeCard.style.setProperty('--holo-y', `${py.toFixed(1)}%`);
                    badgeCard.style.setProperty('--holo-opacity', '0.52');

                    if (!state.dragging) {
                        const nx = (px / 50) - 1;
                        const ny = (py / 50) - 1;
                        state.tiltX = -ny * 10;
                        state.tiltY = nx * 11;
                    }
                }

                if (!state.dragging || e.pointerId !== state.pointerId) return;

                const dxTotal = e.clientX - state.startClientX;
                const dyTotal = e.clientY - state.startClientY;
                state.maxDragDist = Math.max(state.maxDragDist, Math.hypot(dxTotal, dyTotal));

                state.x = Math.max(-165, Math.min(165, state.startX + dxTotal));
                state.y = Math.max(-60, Math.min(115, state.startY + dyTotal));

                const stepDx = e.clientX - state.lastClientX;
                const stepDy = e.clientY - state.lastClientY;
                state.vx = stepDx * 26;
                state.vy = stepDy * 26;
                state.angle = Math.max(-22, Math.min(22, -state.x * 0.11 - stepDx * 0.45));
                state.vAngle = -stepDx * 0.6;

                state.lastClientX = e.clientX;
                state.lastClientY = e.clientY;
            });

            function releasePointer(e) {
                if (!state.dragging || e.pointerId !== state.pointerId) return;
                state.dragging = false;
                badgeCard.classList.remove('is-dragging');
                if (badgeCard.hasPointerCapture(e.pointerId)) {
                    badgeCard.releasePointerCapture(e.pointerId);
                }

                if (state.maxDragDist < 8) {
                    setBadgeFlip(!isFlipped);
                    state.vAngle += isFlipped ? 12 : -12;
                }
                startLoop();
            }

            badgeCard.addEventListener('pointerup', releasePointer);
            badgeCard.addEventListener('pointercancel', releasePointer);

            badgeCard.addEventListener('pointerleave', () => {
                state.tiltX = 0;
                state.tiltY = 0;
                badgeCard.style.setProperty('--holo-opacity', '0.24');
            });
        }

        let resizeTimer = null;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                measureStage();
                measureScrollBounds();
                updateRender();
                updateScrollUI();
            }, 120);
        }, { passive: true });
    }

    // ===================================
    // EXPERIENCE FILTER
    // ===================================
    const expFilterBtns = Array.from(document.querySelectorAll('[data-exp-filter]'));
    const expGroups = Array.from(document.querySelectorAll('[data-exp-group]'));

    expFilterBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const selected = btn.getAttribute('data-exp-filter');
            expFilterBtns.forEach((b) => {
                const isActive = b === btn;
                b.classList.toggle('active', isActive);
                b.setAttribute('aria-pressed', String(isActive));
            });

            expGroups.forEach((grp) => {
                const match = selected === 'all' || grp.getAttribute('data-exp-group') === selected;
                grp.classList.toggle('is-hidden', !match);
            });
            requestAnimationFrame(measureScrollBounds);
        });
    });

    // ===================================
    // STACK LEDGER FILTER
    // ===================================
    const stackFilterBtns = Array.from(document.querySelectorAll('[data-stack-filter]'));
    const stackRows = Array.from(document.querySelectorAll('[data-stack-cat]'));

    stackFilterBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const selected = btn.getAttribute('data-stack-filter');
            stackFilterBtns.forEach((b) => {
                const isActive = b === btn;
                b.classList.toggle('active', isActive);
                b.setAttribute('aria-pressed', String(isActive));
            });

            stackRows.forEach((row) => {
                const match = selected === 'all' || row.getAttribute('data-stack-cat') === selected;
                row.classList.toggle('is-hidden', !match);
            });
            requestAnimationFrame(measureScrollBounds);
        });
    });

    // ===================================
    // CERTIFICATIONS ACCORDION
    // ===================================
    document.querySelectorAll('.cert-trigger').forEach((trigger) => {
        trigger.addEventListener('click', () => {
            const item = trigger.closest('.cert-item');
            if (!item) return;
            const willOpen = !item.classList.contains('is-open');
            item.classList.toggle('is-open', willOpen);
            trigger.setAttribute('aria-expanded', String(willOpen));
            setTimeout(measureScrollBounds, 300);
        });
    });

    // ===================================
    // COPY EMAIL & TOAST
    // ===================================
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    let toastTimer = null;

    function showToast(message) {
        if (!toast || !toastMessage) return;
        toastMessage.textContent = message;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
    }

    async function copyToClipboard(text) {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            return;
        }
        const area = document.createElement('textarea');
        area.value = text;
        area.setAttribute('readonly', '');
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.select();
        document.execCommand('copy');
        document.body.removeChild(area);
    }

    async function handleCopyEmail(sourceBtn) {
        const email = 'figallojorge@gmail.com';
        try {
            await copyToClipboard(email);
        } catch (err) {
            // Toast confirms address even on restricted contexts
        }

        if (sourceBtn) {
            sourceBtn.classList.add('is-copied');
            setTimeout(() => sourceBtn.classList.remove('is-copied'), 1800);
        }

        showToast(getTranslation(currentLanguage, 'toast.email_copied') || email);
    }

    document.querySelectorAll('[data-copy-email]').forEach((btn) => {
        btn.addEventListener('click', () => handleCopyEmail(btn));
    });

    // ===================================
    // PRINT BUTTONS
    // ===================================
    ['print-cv-btn', 'contact-print-btn'].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('click', () => window.print());
    });

    // ===================================
    // COMMAND PALETTE (CTRL+K / CMD+K)
    // ===================================
    const cmdModal = document.getElementById('cmd-modal');
    const cmdInput = document.getElementById('cmd-input');
    const cmdResults = document.getElementById('cmd-results');
    const cmdClose = document.getElementById('cmd-close');
    const cmdTrigger = document.getElementById('cmd-trigger');
    const footerCmdTrigger = document.getElementById('footer-cmd-trigger');
    let cmdSelectedIdx = 0;
    let lastFocusedEl = null;

    function getCommands() {
        const c = (k) => getTranslation(currentLanguage, `cmd.items.${k}`);
        const s = (k) => getTranslation(currentLanguage, `cmd.${k}`);
        return [
            { id: 'sec-home', icon: 'fa-id-badge', label: c('home'), hint: s('go_section'), run: () => scrollToSection('#inicio') },
            { id: 'sec-exp', icon: 'fa-briefcase', label: c('experience'), hint: s('go_section'), run: () => scrollToSection('#experiencia') },
            { id: 'sec-proj', icon: 'fa-code', label: c('projects'), hint: s('go_section'), run: () => scrollToSection('#proyectos') },
            { id: 'sec-skills', icon: 'fa-layer-group', label: c('skills'), hint: s('go_section'), run: () => scrollToSection('#habilidades') },
            { id: 'sec-edu', icon: 'fa-graduation-cap', label: c('education'), hint: s('go_section'), run: () => scrollToSection('#formacion') },
            { id: 'sec-contact', icon: 'fa-envelope', label: c('contact'), hint: s('go_section'), run: () => scrollToSection('#contacto') },
            { id: 'act-flip', icon: 'fa-rotate', label: c('flip_badge'), hint: s('action_label'), run: () => { scrollToSection('#inicio'); setTimeout(() => setBadgeFlip(!isFlipped), 240); } },
            { id: 'act-copy', icon: 'fa-copy', label: c('copy_email'), hint: s('action_label'), run: () => handleCopyEmail(null) },
            { id: 'act-cv', icon: 'fa-file-pdf', label: c('download_cv'), hint: s('open_ext'), run: () => window.open('https://drive.google.com/drive/folders/1dxnH8mFEA18HHpyjgZ78JyEVPkj_vnNW?usp=sharing', '_blank', 'noopener,noreferrer') },
            { id: 'act-li', icon: 'fa-linkedin', brand: true, label: c('linkedin'), hint: s('open_ext'), run: () => window.open('https://www.linkedin.com/in/jorge-figallo-mesta-baab26234/', '_blank', 'noopener,noreferrer') },
            { id: 'act-gh', icon: 'fa-github', brand: true, label: c('github'), hint: s('open_ext'), run: () => window.open('https://github.com/jorgefigalloo', '_blank', 'noopener,noreferrer') },
            { id: 'act-wa', icon: 'fa-whatsapp', brand: true, label: c('whatsapp'), hint: s('open_ext'), run: () => window.open('https://wa.me/51920025691?text=Hola%20Jorge%2C%20vi%20tu%20CV%20web%20y%20me%20gustar%C3%ADa%20contactarte.', '_blank', 'noopener,noreferrer') },
            { id: 'act-print', icon: 'fa-print', label: c('print'), hint: s('action_label'), run: () => setTimeout(() => window.print(), 120) },
            { id: 'act-lang', icon: 'fa-language', label: c('toggle_lang'), hint: s('action_label'), run: () => applyLanguage(currentLanguage === 'es' ? 'en' : 'es') },
            { id: 'act-theme', icon: 'fa-circle-half-stroke', label: c('toggle_theme'), hint: s('action_label'), run: () => toggleTheme() }
        ];
    }

    function openCommandPalette() {
        if (!cmdModal || !cmdInput) return;
        lastFocusedEl = document.activeElement;
        cmdModal.hidden = false;
        cmdInput.value = '';
        cmdSelectedIdx = 0;
        renderCommandList('');
        cmdInput.focus();
    }

    function closeCommandPalette() {
        if (!cmdModal) return;
        cmdModal.hidden = true;
        if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') lastFocusedEl.focus();
    }

    let filteredCommands = [];

    function renderCommandList(query) {
        if (!cmdResults) return;
        const q = query.trim().toLowerCase();
        filteredCommands = getCommands().filter((item) => item.label.toLowerCase().includes(q) || item.hint.toLowerCase().includes(q));
        cmdResults.innerHTML = '';

        if (filteredCommands.length === 0) {
            const emptyLi = document.createElement('li');
            emptyLi.className = 'cmd-empty';
            emptyLi.textContent = getTranslation(currentLanguage, 'cmd.empty') || 'Sin coincidencias';
            cmdResults.appendChild(emptyLi);
            return;
        }

        if (cmdSelectedIdx >= filteredCommands.length) cmdSelectedIdx = 0;

        filteredCommands.forEach((cmd, idx) => {
            const li = document.createElement('li');
            li.className = `cmd-item${idx === cmdSelectedIdx ? ' is-selected' : ''}`;
            li.setAttribute('role', 'option');
            li.setAttribute('aria-selected', String(idx === cmdSelectedIdx));

            const left = document.createElement('span');
            left.className = 'cmd-item-left';
            const icon = document.createElement('i');
            icon.className = `${cmd.brand ? 'fab' : 'fas'} ${cmd.icon}`;
            icon.setAttribute('aria-hidden', 'true');
            const label = document.createElement('span');
            label.textContent = cmd.label;
            left.append(icon, label);

            const hint = document.createElement('span');
            hint.className = 'cmd-item-hint';
            hint.textContent = cmd.hint;

            li.append(left, hint);
            li.addEventListener('mouseenter', () => {
                cmdSelectedIdx = idx;
                updateCmdSelection();
            });
            li.addEventListener('click', () => {
                closeCommandPalette();
                cmd.run();
            });
            cmdResults.appendChild(li);
        });
    }

    function updateCmdSelection() {
        if (!cmdResults) return;
        Array.from(cmdResults.querySelectorAll('.cmd-item')).forEach((row, idx) => {
            const selected = idx === cmdSelectedIdx;
            row.classList.toggle('is-selected', selected);
            row.setAttribute('aria-selected', String(selected));
            if (selected) row.scrollIntoView({ block: 'nearest' });
        });
    }

    [cmdTrigger, footerCmdTrigger].forEach((btn) => {
        if (btn) btn.addEventListener('click', openCommandPalette);
    });
    if (cmdClose) cmdClose.addEventListener('click', closeCommandPalette);
    if (cmdModal) {
        cmdModal.addEventListener('click', (e) => {
            if (e.target === cmdModal) closeCommandPalette();
        });
    }
    if (cmdInput) {
        cmdInput.addEventListener('input', () => {
            cmdSelectedIdx = 0;
            renderCommandList(cmdInput.value);
        });
        cmdInput.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (filteredCommands.length > 0) {
                    cmdSelectedIdx = (cmdSelectedIdx + 1) % filteredCommands.length;
                    updateCmdSelection();
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (filteredCommands.length > 0) {
                    cmdSelectedIdx = (cmdSelectedIdx - 1 + filteredCommands.length) % filteredCommands.length;
                    updateCmdSelection();
                }
            } else if (e.key === 'Enter') {
                e.preventDefault();
                const activeCmd = filteredCommands[cmdSelectedIdx];
                if (activeCmd) {
                    closeCommandPalette();
                    activeCmd.run();
                }
            } else if (e.key === 'Escape') {
                e.preventDefault();
                closeCommandPalette();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            if (cmdModal && !cmdModal.hidden) closeCommandPalette();
            else openCommandPalette();
        } else if (e.key === 'Escape' && cmdModal && !cmdModal.hidden) {
            closeCommandPalette();
        }
    });

    // ===================================
    // SCROLL REVEAL & GPU CURSOR AURA
    // ===================================
    const revealEls = Array.from(document.querySelectorAll('.reveal'));
    if ('IntersectionObserver' in window && !prefersReducedMotion) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });

        revealEls.forEach((el) => observer.observe(el));
    } else {
        revealEls.forEach((el) => el.classList.add('is-visible'));
    }

    const cursorAura = document.getElementById('cursor-aura');
    const canHover = window.matchMedia && window.matchMedia('(hover: hover)').matches;
    if (cursorAura && canHover && !prefersReducedMotion) {
        let targetX = window.innerWidth * 0.5;
        let targetY = window.innerHeight * 0.25;
        let currentX = targetX;
        let currentY = targetY;
        let rafId = null;

        function animateAura() {
            currentX += (targetX - currentX) * 0.16;
            currentY += (targetY - currentY) * 0.16;
            cursorAura.style.transform = `translate3d(${(currentX - 260).toFixed(1)}px, ${(currentY - 260).toFixed(1)}px, 0)`;
            if (Math.abs(targetX - currentX) > 0.6 || Math.abs(targetY - currentY) > 0.6) {
                rafId = requestAnimationFrame(animateAura);
            } else {
                rafId = null;
            }
        }

        window.addEventListener('mousemove', (e) => {
            cursorAura.classList.add('active');
            targetX = e.clientX;
            targetY = e.clientY;
            if (!rafId) rafId = requestAnimationFrame(animateAura);
        }, { passive: true });
    }
});
