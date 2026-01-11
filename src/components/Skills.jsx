import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
    FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaPython, FaJava, FaDocker, FaAws, FaGitAlt, FaGithub, FaAndroid, FaAngular
} from "react-icons/fa";
import {
    SiRedux, SiMui, SiFlutter, SiDart, SiFirebase, SiMysql, SiMongodb, SiPostgresql, SiKubernetes, SiJenkins, SiTensorflow, SiKeras, SiJupyter, SiScikitlearn, SiPostman, SiCanva, SiKotlin, SiDotnet, SiSpringboot, SiTypescript, SiTailwindcss
} from "react-icons/si";
import { TbBrandNextjs, TbBrandCSharp } from "react-icons/tb";
import { DiJava, DiMsqlServer, DiVisualstudio, DiEclipse } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "React Js", icon: <FaReact className="text-blue-400" /> },
            { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
            { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
            { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
            { name: "Angular", icon: <FaAngular className="text-red-600" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
            { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Java", icon: <FaJava className="text-red-500" /> },
            { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
            { name: "C#", icon: <TbBrandCSharp className="text-purple-500" /> },
            { name: ".NET", icon: <SiDotnet className="text-purple-600" /> },
            { name: "Python", icon: <FaPython className="text-yellow-300" /> },
            { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
            { name: "SSMS", icon: <DiMsqlServer className="text-red-500 text-3xl" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
            { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        ],
    },
    {
        title: "DevOps",
        skills: [
            { name: "AWS", icon: <FaAws className="text-orange-400" /> },
            { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
            { name: "Jenkins", icon: <SiJenkins className="text-red-400" /> },
            { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
        ],
    },
    {
        title: "Android",
        skills: [
            { name: "Dart", icon: <SiDart className="text-blue-400" /> },
            { name: "Kotlin", icon: <SiKotlin className="text-purple-500" /> },
            { name: "XML", icon: <span className="font-bold text-orange-400">&lt;/&gt;</span> }, // Custom icon for XML
            { name: "Android Studio", icon: <FaAndroid className="text-green-400" /> },
        ],
    },
    {
        title: "Machine Learning",
        skills: [
            { name: "Python", icon: <FaPython className="text-yellow-300" /> },
            { name: "Tensorflow", icon: <SiTensorflow className="text-orange-500" /> },
            { name: "Keras", icon: <SiKeras className="text-red-500" /> },
            { name: "Jupyter", icon: <SiJupyter className="text-orange-600" /> },
            { name: "Google Colab", icon: <span className="text-orange-300 font-bold">CO</span> },
            { name: "Sk Learn Kit", icon: <SiScikitlearn className="text-blue-400" /> },
        ],
    },
    {
        title: "Others",
        skills: [
            { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
            { name: "GitHub", icon: <FaGithub className="text-white" /> },
            { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
            { name: "Visual Studio", icon: <DiVisualstudio className="text-purple-600 font-bold" /> },
            { name: "Eclipse", icon: <DiEclipse className="text-blue-800" /> },
            { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
            { name: "Canva", icon: <SiCanva className="text-blue-400" /> },
        ],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="min-h-screen bg-black text-white px-6 py-20 relative overflow-hidden">

            {/* Background Particles (Subtle) */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-purple-500 rounded-full opacity-20 animate-pulse"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 4 + 1}px`,
                            height: `${Math.random() * 4 + 1}px`,
                            animationDuration: `${Math.random() * 3 + 2}s`
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 font-['Space_Grotesk'] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                        Skills
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl font-['Outfit'] max-w-2xl mx-auto">
                        Here are some of my skills on which I have been working on for the past 3 years.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {skillCategories.map((category, index) => (
                        <Tilt key={index} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 md:p-8 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 h-full"
                            >
                                <h3 className="text-2xl font-bold text-center mb-8 text-gray-200 font-['Space_Grotesk']">
                                    {category.title}
                                </h3>

                                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                                    {category.skills.map((skill, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-3 bg-black/40 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-purple-500 hover:bg-gray-800 transition-all duration-300 cursor-default"
                                        >
                                            <span className="text-xl md:text-2xl">{skill.icon}</span>
                                            <span className="text-sm md:text-base font-medium font-['Outfit']">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
