const portfolioData = {
    profile: {
        name: "Alex Dev",
        role: "Desarrollador Full Stack & UI Designer",
        bio: "Apasionado por crear experiencias web minimalistas y escalables. Transformo ideas en código limpio y eficiente.",
        location: "Madrid, España",
        email: "alex@example.com",
        social: {
            github: "github.com/alexdev",
            linkedin: "linkedin.com/in/alexdev",
            twitter: "@alexdev_code"
        }
    },
    skills: [
        "JavaScript (ES6+)",
        "React",
        "Node.js",
        "CSS3 / SCSS",
        "Git / GitHub",
        "Docker",
        "UI/UX Design"
    ],
    projects: [
        {
            title: "TaskFlow",
            description: "Una aplicación de gestión de tareas minimalista con soporte para tableros Kanban y colaboración en tiempo real.",
            tags: ["React", "Firebase", "Tailwind CSS"],
            link: "#",
            repo: "#"
        },
        {
            title: "EcoMarket",
            description: "Plataforma de comercio electrónico enfocada en productos sostenibles, con integración de pagos y dashboard de administración.",
            tags: ["Node.js", "Express", "MongoDB", "Stripe"],
            link: "#",
            repo: "#"
        },
        {
            title: "WeatherMind",
            description: "Dashboard meteorológico que sugiere actividades basadas en el clima actual y pronósticos futuros utilizando IA.",
            tags: ["Vue.js", "OpenWeatherMap API", "TensorFlow.js"],
            link: "#",
            repo: "#"
        }
    ]
};

// Exportar para uso en módulos o global
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
