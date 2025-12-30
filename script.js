document.addEventListener('DOMContentLoaded', () => {
    // ===================================
    // THEME TOGGLE
    // ===================================
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const html = document.documentElement;

    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    } else if (systemPrefersDark) {
        html.setAttribute('data-theme', 'dark');
        updateThemeIcon('dark');
    }

    function updateThemeIcon(theme) {
        if (!themeIcon) return;
        if (theme === 'dark') {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    // ===================================
    // LANGUAGE TOGGLE
    // ===================================
    const languageToggle = document.getElementById('language-toggle');
    const languageIcon = document.getElementById('language-icon');

    const translations = {
        es: {
            nav: {
                home: "Inicio",
                experience: "Experiencia",
                education: "Formación",
                skills: "Habilidades",
                certifications: "Certificaciones",
                about: "Sobre Mí",
                contact: "Contactar"
            },
            hero: {
                badge: "Disponible para nuevos proyectos",
                greeting: "¡Hola! Soy",
                role1: "Ingeniero de Sistemas",
                role2: "QA Specialist",
                description: "Profesional dinámico con experiencia en el sector clínico y TI. Especializado en testing de software, gestión de bases de datos SQL, soporte de sistemas ERP (SAP Business One) y automatización de procesos. Pro-activo y perseverante, con capacidad para trabajar bajo presión en equipos multidisciplinarios.",
                download_cv: "Descargar CV",
                view_experience: "Ver Experiencia",
                scroll: "Scroll"
            },
            stats: {
                years: "Años de Experiencia",
                tech: "Tecnologías",
                sap: "Business One",
                teamwork: "Mejor Trabajo en Equipo"
            },
            section: {
                experience_tag: "Trayectoria Profesional",
                experience_title: "Experiencia Laboral",
                experience_subtitle: "Mi recorrido profesional en el sector tecnológico y clínico",
                education_tag: "Educación",
                education_title: "Formación Académica",
                education_subtitle: "Mi trayectoria educativa y formación profesional",
                skills_tag: "Competencias",
                skills_title: "Habilidades",
                certifications_tag: "Certificaciones",
                certifications_title: "Certificaciones & Capacitaciones",
                certifications_subtitle: "Formación especializada y actualización profesional continua",
                about_tag: "Conóceme",
                about_title: "Sobre Mí"
            },
            experience: {
                carita_feliz: {
                    date: "2021 - Actualidad",
                    award: "Reconocido como \"Mejor Trabajo en Equipo\" - Abril 2025",
                    role1: "Soporte de Bases de Datos & ERP",
                    task1_1: "Gestión y soporte con <strong>DataGrip, MySQL y SQL Server</strong>",
                    task1_2: "Administración de <strong>SAP Business One Client</strong>",
                    task1_3: "Consultas SQL para generación de reportes y filtrado de información",
                    task1_4: "Migración y sincronización de datos entre SAP y sistema clínico",
                    task1_5: "Creación y gestión de datos maestros y proveedores",
                    role2: "Testing & Calidad de Software (QA)",
                    task2_1: "Pruebas rigurosas de módulos para identificar y documentar errores",
                    task2_2: "Gestión de incidencias con <strong>Jira</strong> y seguimiento de bugs",
                    task2_3: "Uso de inspector de código y <strong>Termius</strong> para análisis detallado",
                    task2_4: "Colaboración con desarrolladores Java para resolver problemas",
                    task2_5: "Implementación de cambios y ejecución de scripts",
                    role3: "Soporte TI & Infraestructura",
                    task3_1: "Soporte técnico de hardware, software y redes",
                    task3_2: "Configuración y manejo de cámaras DVR/NVR",
                    task3_3: "Servidores Linux (NTP, DNS, DHCP) y Windows Server 2012",
                    task3_4: "Firewall Fortinet",
                    task3_5: "Desarrollo con PHP, JavaScript, Python, C# para automatización"
                },
                primax: {
                    role: "Soporte Técnico y Sistemas",
                    task1: "Operaciones de soporte técnico y sistema ERP",
                    task2: "Soporte de cámaras y mantenimiento de hardware/software",
                    task3: "Instalación de redes",
                    task4: "Servidores Linux (NTP, DNS, DHCP) y Windows Server 2012",
                    task5: "Configuración de Firewall Fortinet"
                },
                comdata: {
                    role: "Operador",
                    task1: "Gestión de interacción con clientes",
                    task2: "Manejo de procesos operativos",
                    task3: "Atención y servicio al cliente"
                }
            },
            education: {
                ucv: {
                    degree: "Ingeniería Informática",
                    institution: "Universidad César Vallejo (UCV)",
                    status: "En curso"
                },
                unp: {
                    degree: "Ingeniería Informática",
                    institution: "Universidad Nacional de Piura (UNP)"
                },
                etsunp: {
                    degree: "Técnico en Análisis de Sistemas",
                    institution: "ETSUNP",
                    status: "Titulado"
                },
                cisco: {
                    degree: "Cisco Networking CCNA",
                    institution: "Universidad de Piura (UDEP)",
                    status: "Certificado"
                },
                office: {
                    degree: "Ofimática Avanzada",
                    institution: "Word, Excel, PowerPoint, Access"
                },
                python: {
                    degree: "Lenguaje Python",
                    institution: "Certificación Profesional",
                    status: "Certificado"
                }
            },
            skills: {
                subtitle: "Tecnologías y herramientas que domino",
                languages: "Lenguajes & Frameworks",
                databases: "Bases de Datos",
                qa: "QA & DevOps",
                cloud: "Cloud & Servidores",
                tools: "Herramientas",
                soft_skills: "Habilidades Personales"
            },
            certifications: {
                featured: "Destacado",
                testing: {
                    title: "Testing & QA",
                    issuer: "NTT DATA - 2025",
                    item1: "Metodologías ágiles y control de calidad",
                    item2: "Técnicas: Partición de equivalencia, valores límite",
                    item3: "Testing de API con Postman y Bruno",
                    item4: "Automatización con Gherkin y Serenity BDD",
                    item5: "Gestión de defectos y seguimiento"
                },
                iso: {
                    title: "ISO 45001:2018",
                    issuer: "ICC Adviser - 2020",
                    item1: "Interpretación de la norma ISO 45001",
                    item2: "Sistemas de gestión de seguridad y salud",
                    item3: "8 horas académicas"
                },
                python: {
                    title: "Python",
                    issuer: "Certificación 2023",
                    item1: "Programación en Python",
                    item2: "32 horas lectivas",
                    item3: "Automatización de procesos"
                },
                cisco: {
                    title: "Cisco CCNA",
                    issuer: "UDEP - 2018",
                    item1: "Networking fundamentals",
                    item2: "Configuración de redes",
                    item3: "Routing y switching"
                }
            },
            about: {
                objective_title: "Objetivo Profesional",
                p1: "Busco oportunidades que me permitan continuar desarrollando mis habilidades en el área de sistemas y programación, contribuyendo con mis conocimientos en soporte clínico, testing de software y resolución de problemas complejos. Mi meta es promover el éxito de los clientes con soluciones prácticas, ofreciendo una experiencia de servicio positiva.",
                p2: "Soy un profesional joven con grandes expectativas de superación, dinámico, sociable y con un amplio interés en la tecnología. El <strong>buen trato, la paciencia, la responsabilidad y la honestidad</strong> son características innatas en mi persona.",
                p3: "Mi experiencia dual en el <strong>sector clínico y de tecnología de la información</strong> me ha permitido desarrollar un enfoque integral en la solución de problemas. He trabajado en soporte de sistemas ERP, gestión de bases de datos y testing de software, siempre buscando optimizar procesos.",
                p4: "Soy <strong>proactivo y perseverante</strong>, con una gran pasión por el aprendizaje continuo. Mi capacidad para trabajar bajo presión y en equipos multidisciplinarios me ha permitido colaborar eficientemente en la resolución de desafíos complejos.",
                location_label: "Ubicación",
                location_value: "Piura - Perú",
                education_label: "Formación",
                education_value: "Técnico en Análisis de Sistemas (Titulado)",
                specialty_label: "Especialidad",
                specialty_value: "QA Testing & Soporte TI",
                languages_label: "Idiomas",
                languages_value: "Español (Nativo), Inglés (Intermedio)",
                licenses_label: "Licencias",
                licenses_value: "Auto A-1, Moto",
                availability_label: "Disponibilidad",
                availability_value: "15 días | Piura, Híbrido, Remoto"
            },
            cta: {
                title: "¿Listo para trabajar juntos?",
                text: "Estoy disponible para nuevas oportunidades laborales. ¡Hablemos!"
            },
            footer: {
                copyright: "&copy; 2025 Jorge Angel Figallo Mesta. Todos los derechos reservados."
            }
        },
        en: {
            nav: {
                home: "Home",
                experience: "Experience",
                education: "Education",
                skills: "Skills",
                certifications: "Certifications",
                about: "About Me",
                contact: "Contact"
            },
            hero: {
                badge: "Available for new projects",
                greeting: "Hello! I am",
                role1: "Systems Engineer",
                role2: "QA Specialist",
                description: "Dynamic professional with experience in clinical and IT sectors. Specialized in software testing, SQL database management, ERP system support (SAP Business One), and process automation. Proactive and perseverant, capable of working under pressure in multidisciplinary teams.",
                download_cv: "Download CV",
                view_experience: "View Experience",
                scroll: "Scroll"
            },
            stats: {
                years: "Years of Experience",
                tech: "Technologies",
                sap: "Business One",
                teamwork: "Best Teamwork Award"
            },
            section: {
                experience_tag: "Professional Career",
                experience_title: "Work Experience",
                experience_subtitle: "My professional journey in the technology and clinical sectors",
                education_tag: "Education",
                education_title: "Academic Background",
                education_subtitle: "My educational journey and professional training",
                skills_tag: "Competencies",
                skills_title: "Skills",
                certifications_tag: "Certifications",
                certifications_title: "Certifications & Training",
                certifications_subtitle: "Specialized training and continuous professional updates",
                about_tag: "Know Me",
                about_title: "About Me"
            },
            experience: {
                carita_feliz: {
                    date: "2021 - Present",
                    award: "Recognized for \"Best Teamwork\" - April 2025",
                    role1: "Database Support & ERP",
                    task1_1: "Management and support with <strong>DataGrip, MySQL, and SQL Server</strong>",
                    task1_2: "Administration of <strong>SAP Business One Client</strong>",
                    task1_3: "SQL queries for report generation and information filtering",
                    task1_4: "Data migration and synchronization between SAP and clinical system",
                    task1_5: "Creation and management of master data and providers",
                    role2: "Testing & Software Quality (QA)",
                    task2_1: "Rigorous module testing to identify and document errors",
                    task2_2: "Incident management with <strong>Jira</strong> and bug tracking",
                    task2_3: "Use of code inspector and <strong>Termius</strong> for detailed analysis",
                    task2_4: "Collaboration with Java developers to resolve issues",
                    task2_5: "Implementation of changes and script execution",
                    role3: "IT Support & Infrastructure",
                    task3_1: "Technical support for hardware, software, and networks",
                    task3_2: "Configuration and management of DVR/NVR cameras",
                    task3_3: "Linux Servers (NTP, DNS, DHCP) and Windows Server 2012",
                    task3_4: "Fortinet Firewall",
                    task3_5: "Development with PHP, JavaScript, Python, C# for automation"
                },
                primax: {
                    role: "Technical Support & Systems",
                    task1: "Technical support operations and ERP system",
                    task2: "Camera support and hardware/software maintenance",
                    task3: "Network installation",
                    task4: "Linux Servers (NTP, DNS, DHCP) and Windows Server 2012",
                    task5: "Fortinet Firewall configuration"
                },
                comdata: {
                    role: "Operator",
                    task1: "Customer interaction management",
                    task2: "Operational process handling",
                    task3: "Customer service and attention"
                }
            },
            education: {
                ucv: {
                    degree: "Computer Engineering",
                    institution: "César Vallejo University (UCV)",
                    status: "In progress"
                },
                unp: {
                    degree: "Computer Engineering",
                    institution: "National University of Piura (UNP)"
                },
                etsunp: {
                    degree: "Systems Analysis Technician",
                    institution: "ETSUNP",
                    status: "Graduated"
                },
                cisco: {
                    degree: "Cisco Networking CCNA",
                    institution: "University of Piura (UDEP)",
                    status: "Certified"
                },
                office: {
                    degree: "Advanced Office Tools",
                    institution: "Word, Excel, PowerPoint, Access"
                },
                python: {
                    degree: "Python Language",
                    institution: "Professional Certification",
                    status: "Certified"
                }
            },
            skills: {
                subtitle: "Technologies and tools I master",
                languages: "Languages & Frameworks",
                databases: "Databases",
                qa: "QA & DevOps",
                cloud: "Cloud & Servers",
                tools: "Tools",
                soft_skills: "Soft Skills"
            },
            certifications: {
                featured: "Featured",
                testing: {
                    title: "Testing & QA",
                    issuer: "NTT DATA - 2025",
                    item1: "Agile methodologies and quality control",
                    item2: "Techniques: Equivalence partitioning, boundary values",
                    item3: "API Testing with Postman and Bruno",
                    item4: "Automation with Gherkin and Serenity BDD",
                    item5: "Defect management and tracking"
                },
                iso: {
                    title: "ISO 45001:2018",
                    issuer: "ICC Adviser - 2020",
                    item1: "ISO 45001 standard interpretation",
                    item2: "Occupational health and safety management systems",
                    item3: "8 academic hours"
                },
                python: {
                    title: "Python",
                    issuer: "2023 Certification",
                    item1: "Python Programming",
                    item2: "32 lecture hours",
                    item3: "Process automation"
                },
                cisco: {
                    title: "Cisco CCNA",
                    issuer: "UDEP - 2018",
                    item1: "Networking fundamentals",
                    item2: "Network configuration",
                    item3: "Routing and switching"
                }
            },
            about: {
                objective_title: "Professional Objective",
                p1: "I seek opportunities to continue developing my skills in systems and programming, contributing my knowledge in clinical support, software testing, and complex problem resolution. My goal is to promote client success with practical solutions, offering a positive service experience.",
                p2: "I am a young professional with high expectations for improvement, dynamic, sociable, and with a broad interest in technology. <strong>Good treatment, patience, responsibility, and honesty</strong> are innate characteristics of my person.",
                p3: "My dual experience in the <strong>clinical and information technology sectors</strong> has allowed me to develop a comprehensive approach to problem-solving. I have worked in ERP system support, database management, and software testing, always seeking to optimize processes.",
                p4: "I am <strong>proactive and perseverant</strong>, with a great passion for continuous learning. My ability to work under pressure and in multidisciplinary teams has allowed me to collaborate efficiently in resolving complex challenges.",
                location_label: "Location",
                location_value: "Piura - Peru",
                education_label: "Education",
                education_value: "Systems Analysis Technician (Graduated)",
                specialty_label: "Specialty",
                specialty_value: "QA Testing & IT Support",
                languages_label: "Languages",
                languages_value: "Spanish (Native), English (Intermediate)",
                licenses_label: "Licenses",
                licenses_value: "Car A-1, Motorcycle",
                availability_label: "Availability",
                availability_value: "15 days | Piura, Hybrid, Remote"
            },
            cta: {
                title: "Ready to work together?",
                text: "I am available for new job opportunities. Let's talk!"
            },
            footer: {
                copyright: "&copy; 2025 Jorge Angel Figallo Mesta. All rights reserved."
            }
        }
    };

    function changeLanguage(lang) {
        // Update text content for all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const keys = key.split('.');
            let value = translations[lang];

            for (const k of keys) {
                if (value) {
                    value = value[k];
                }
            }

            if (value) {
                // Check if the content contains HTML tags
                if (value.includes('<')) {
                    element.innerHTML = value;
                } else {
                    element.textContent = value;
                }
            }
        });

        // Update language icon text
        if (languageIcon) {
            languageIcon.textContent = lang === 'es' ? 'ES' : 'EN';
        }

        // Save preference
        localStorage.setItem('language', lang);
        html.setAttribute('lang', lang);
    }

    // Initialize language
    const savedLanguage = localStorage.getItem('language') || 'es';
    changeLanguage(savedLanguage);

    if (languageToggle) {
        languageToggle.addEventListener('click', () => {
            const currentLang = localStorage.getItem('language') || 'es';
            const newLang = currentLang === 'es' ? 'en' : 'es';
            changeLanguage(newLang);
        });
    }

    // ===================================
    // MOBILE MENU
    // ===================================
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navList = document.getElementById('nav-list');

    if (hamburgerMenu && navList) {
        hamburgerMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                hamburgerMenu.classList.remove('active');
            });
        });
    }

    // ===================================
    // NAVBAR SCROLL EFFECT
    // ===================================
    const navbar = document.getElementById('navbar');

    if (navbar) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                navbar.style.boxShadow = 'var(--shadow-md)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // ===================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.timeline-item, .skill-group, .cert-card, .stat-item, .highlight-item'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add animate-in class styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // ===================================
    // ACTIVE NAV LINK ON SCROLL
    // ===================================
    const sections = document.querySelectorAll('section[id]');

    if (navList) {
        window.addEventListener('scroll', () => {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;

                if (window.pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navList.querySelectorAll('a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
});