import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiExternalLink, FiCode, FiLayers, FiDatabase } from "react-icons/fi";
import attendanceImg from "../assets/attendance_system.png";
import portfolioImg from "../assets/portfolio_preview.png";
import dockerImg from "../assets/docker_project.png";
import apiImg from "../assets/api_project.png";

const projects = [
    {
        title: "Attendance Management Software",
        description: "A desktop-based system to streamline attendance tracking using Java and MySQL. Features automated reporting and JDBC-driven data persistence.",
        tech: ["Java", "IntelliJ IDEA", "MySQL", "JDBC"],
        category: ["Frontend", "Backend"],
        image: attendanceImg,
        github: "https://github.com/Rahul998056",
        demo: "#",
        gradient: "from-blue-600/20 to-indigo-600/20"
    },
    {
        title: "Rahul Portfolio",
        description: "The current premium portfolio featuring Framer Motion, Tailwind CSS, and a highly interactive project showcase.",
        tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
        category: "Frontend",
        image: portfolioImg,
        github: "https://github.com/Rahul998056/Rahul-Kumar-Patel-Portfolio-Website",
        demo: "#",
        gradient: "from-purple-500/20 to-blue-500/20"
    },
    {
        title: "Docker Services & SQL Server",
        description: "A backend ecosystem demonstrating Dockerized microservices integrated with SQL Server for robust data management.",
        tech: ["C#", ".NET", "SQL Server", "Docker"],
        category: "Backend",
        image: dockerImg,
        github: "https://github.com/Rahul998056/DockerServices",
        demo: "#",
        gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
        title: "Perpetual Fix API",
        description: "A specialized C# backend API built for high-performance data processing and service orchestration.",
        tech: ["C#", ".NET Core", "REST API", "Entity Framework"],
        category: "Backend",
        image: apiImg,
        github: "https://github.com/Rahul998056/Perpetual-FixApi",
        demo: "#",
        gradient: "from-orange-500/20 to-red-500/20"
    }
];

const categories = ["All", "Full-Stack", "Backend", "Frontend"];

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p =>
            Array.isArray(p.category)
                ? p.category.includes(activeCategory)
                : p.category === activeCategory
        );

    return (
        <section id="projects" className="min-h-screen bg-black text-white px-6 py-28 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-7xl font-bold mb-6 font-['Space_Grotesk'] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500"
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto font-['Outfit']"
                    >
                        A collection of technical solutions, from full-stack ecosystems to specialized backend architectures.
                    </motion.p>
                </div>

                {/* Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mb-16"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border ${activeCategory === cat
                                ? "bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-500/20"
                                : "bg-white/5 border-white/10 text-gray-400 hover:border-purple-500/40 hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                whileHover={{ y: -10 }}
                                className={`group relative bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-gray-800 hover:border-purple-500/50 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-purple-500/10 flex flex-col`}
                            >
                                {/* Project Image Header */}
                                <div className="relative h-64 overflow-hidden">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                                            <FiLayers size={48} className="text-white/20" />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>

                                    {/* Action Buttons (Floating on Image) */}
                                    <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                        <motion.a
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            href={project.github}
                                            className="p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-purple-600/80 transition-all border border-white/10"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FiGithub size={20} />
                                        </motion.a>
                                        {project.title === "Rahul Portfolio" && (
                                            <motion.a
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                href={project.demo}
                                                className="p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-purple-600/80 transition-all border border-white/10"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FiExternalLink size={20} />
                                            </motion.a>
                                        )}
                                    </div>
                                </div>

                                <div className="p-8 relative z-10 flex flex-col flex-1">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {(Array.isArray(project.category) ? project.category : [project.category]).map((cat) => (
                                            <div key={cat} className="text-[10px] font-bold font-mono tracking-wider text-purple-400 uppercase bg-purple-400/10 px-3 py-1 rounded-full border border-purple-400/20">
                                                {cat}
                                            </div>
                                        ))}
                                    </div>

                                    <h3 className="text-3xl font-bold text-white mb-4 font-['Space_Grotesk'] group-hover:text-purple-400 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 mb-8 leading-relaxed font-['Outfit'] line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="mt-auto">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300 group-hover:bg-purple-500/10 group-hover:border-purple-500/20 group-hover:text-purple-300 transition-all"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
