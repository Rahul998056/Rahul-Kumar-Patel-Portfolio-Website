import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import sumatiLogo from "../assets/sumati.png";
import wiproLogo from "../assets/wipro.svg";

function Experience() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const experiences = [
        {
            role: "Full-Stack Developer Intern",
            company: "Sumati.IO",
            logo: sumatiLogo,
            period: "Jun 2025 – Present",
            description: "Developing robust production code using C#, .NET, and React. Gaining hands-on experience with Docker and Kubernetes for containerization, and contributing to back-end architecture improvements while collaborating via Git/GitHub.",
        },
        {
            role: "Java Full Stack Program",
            company: "Wipro TalentNext",
            logo: wiproLogo,
            period: "May 2024 – Sep 2024",
            description: "Mastered Java (Core + Advanced) and MySQL for database integration. Developed RESTful APIs using MVC architecture and followed Agile methodologies with Git/GitHub for version control and sprint collaboration.",
        }
    ];

    return (
        <section id="experience" ref={containerRef} className="min-h-screen bg-black text-white px-6 py-20 relative overflow-hidden">
            {/* Background Elements */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10"
            ></motion.div>
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.15, 0.1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10"
            ></motion.div>

            <div className="max-w-7xl mx-auto w-full">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-6xl font-bold mb-16 text-center font-['Space_Grotesk'] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
                >
                    Experience
                </motion.h2>

                <div className="relative max-w-4xl mx-auto">
                    {/* Animated Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-800">
                        <motion.div
                            style={{ scaleY, originY: 0 }}
                            className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500"
                        />
                    </div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Dot Indicator */}
                                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-purple-500 z-10">
                                    <motion.div
                                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="w-full h-full rounded-full bg-purple-500"
                                    />
                                </div>

                                {/* Content Card */}
                                <div className="ml-12 md:ml-0 md:w-1/2 md:px-12">
                                    <motion.div
                                        whileHover={{ scale: 1.02, translateY: -5 }}
                                        className="bg-gray-900/40 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group shadow-xl hover:shadow-purple-500/10"
                                    >
                                        <div className="flex flex-col mb-4">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold border border-purple-500/20">
                                                    {exp.period}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-6">
                                                {exp.logo && (
                                                    <div className="w-20 h-20 rounded-2xl bg-white/10 p-4 flex items-center justify-center border border-white/20 shrink-0 overflow-hidden shadow-2xl shadow-purple-500/20">
                                                        <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                                                    </div>
                                                )}
                                                <div>
                                                    <h4 className="text-lg text-pink-400 font-medium font-mono">@ {exp.company}</h4>
                                                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors font-['Outfit']">
                                                        {exp.role}
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed text-sm md:text-base font-['Outfit']">
                                            {exp.description}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
