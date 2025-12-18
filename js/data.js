const portfolioData = {
    profile: {
        name: "Alex Dev",
        role: "Creative Developer & UI Architect",
        bio: "Construyo interfaces digitales que combinan estética minimalista con rendimiento excepcional. Especializado en React, Node.js y sistemas de diseño escalables.",
        location: "Madrid, España",
        email: "alex@example.com",
        social: {
            github: "github.com/alexdev",
            linkedin: "linkedin.com/in/alexdev",
            twitter: "twitter.com/alexdev_code",
            dribbble: "dribbble.com/alexdev"
        }
    },
    services: [
        {
            title: "Desarrollo Frontend",
            description: "Creación de aplicaciones web SPA (Single Page Applications) rápidas y responsivas utilizando React, Vue o arquitectura Jamstack.",
            icon: "code"
        },
        {
            title: "Diseño UI/UX",
            description: "Diseño de interfaces limpias y centradas en el usuario. Prototipado, wireframing y sistemas de diseño coherentes.",
            icon: "pen-tool"
        },
        {
            title: "Backend & API",
            description: "Desarrollo de APIs RESTful y GraphQL robustas con Node.js, optimizadas para escalabilidad y seguridad.",
            icon: "server"
        }
    ],
    experience: [
        {
            role: "Senior Frontend Engineer",
            company: "TechNova Solutions",
            period: "2021 - Presente",
            description: "Lidero el equipo de frontend en la migración a una arquitectura de micro-frontends. Mejoré el tiempo de carga en un 40%."
        },
        {
            role: "Full Stack Developer",
            company: "Creative Studio X",
            period: "2019 - 2021",
            description: "Desarrollé múltiples sitios e-commerce y aplicaciones corporativas. Implementé CI/CD pipelines para despliegues automatizados."
        },
        {
            role: "Junior Web Developer",
            company: "StartUp Inc",
            period: "2018 - 2019",
            description: "Colaboré en el desarrollo de la landing page principal y dashboard de usuarios utilizando Vue.js."
        }
    ],
    skills: [
        "JavaScript (ES6+)",
        "TypeScript",
        "React / Next.js",
        "Node.js",
        "GraphQL",
        "CSS Modules / Tailwind",
        "Docker / K8s",
        "Figma"
    ],
    projects: [
        {
            title: "TaskFlow Pro",
            description: "Sistema de gestión de proyectos para equipos remotos. Incluye chat en tiempo real, videollamadas y tableros Kanban sincronizados.",
            tags: ["React", "Socket.io", "Redis", "AWS"],
            link: "#",
            repo: "#",
            image: "https://via.placeholder.com/600x400/f0f0f0/333333?text=TaskFlow"
        },
        {
            title: "Lumina Gallery",
            description: "Una galería de arte virtual inmersiva utilizando WebGL. Permite a los usuarios explorar exposiciones en un entorno 3D minimalista.",
            tags: ["Three.js", "WebGL", "React"],
            link: "#",
            repo: "#",
            image: "https://via.placeholder.com/600x400/e0e0e0/333333?text=Lumina"
        },
        {
            title: "EcoChain",
            description: "Plataforma de trazabilidad de suministros basada en Blockchain para garantizar la sostenibilidad de los productos.",
            tags: ["Solidity", "Ethereum", "Next.js"],
            link: "#",
            repo: "#",
            image: "https://via.placeholder.com/600x400/d0d0d0/333333?text=EcoChain"
        }
    ],
    testimonials: [
        {
            text: "Alex tiene una habilidad única para simplificar problemas complejos de UI. Su código es tan limpio como sus diseños.",
            author: "Sarah Jenkings",
            role: "CTO @ TechNova"
        },
        {
            text: "Trabajar con Alex fue un placer. Entregó el proyecto antes de tiempo y superó nuestras expectativas de diseño.",
            author: "Marc Johnson",
            role: "Founder @ Creative Studio"
        }
    ]
};

// Exportar para uso en módulos o global
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
