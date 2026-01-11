import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import collegeImage from "../assets/education/college.jpg";

const Education = () => {
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

    const educationData = [
        {
            degree: "Bachelor of Technology (B.Tech)",
            major: "Computer Science & Engineering",
            institute: "Shri Ram Institute Of Technology, Jabalpur",
            year: "2021 - 2025",
            grade: "CGPA: 8.14",
            description: "Successfully graduated with a degree in Computer Science, specialized in building scalable software systems and mastering modern architectural patterns.",
            image: collegeImage
        },
        {
            degree: "Higher Secondary (12th)",
            major: "Science (PCM)",
            institute: "Pushkar Public Higher Secondary School, UmariyaPan",
            year: "2021",
            grade: "Percentage: 92.2%",
            description: "Completed higher secondary education with a strong focus on Physics, Chemistry, and Mathematics."
        },
        {
            degree: "Secondary School (10th)",
            major: "General Education",
            institute: "Pushkar Public High School, UmariyaPan",
            year: "2019",
            grade: "Percentage: 91.2%",
            description: "Built a solid foundation across general science and mathematical subjects."
        }
    ];

    return (
        <section id="education" ref={containerRef} className="min-h-screen bg-black text-white py-20 px-6 relative overflow-hidden">
            {/* Background Elements */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10"
            ></motion.div>
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.15, 0.1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10"
            ></motion.div>

            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold mb-16 text-center font-['Space_Grotesk'] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
                >
                    Education
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
                        {educationData.map((edu, index) => (
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
                                        className="bg-gray-900/40 backdrop-blur-md rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group shadow-xl hover:shadow-purple-500/10 overflow-hidden"
                                    >
                                        {/* Image Section */}
                                        {edu.image && (
                                            <div className="relative w-full h-48 overflow-hidden">
                                                <img
                                                    src={edu.image}
                                                    alt={edu.institute}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                                            </div>
                                        )}

                                        <div className="p-6 md:p-8">
                                            <div className="flex flex-col mb-4">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold border border-purple-500/20">
                                                        {edu.year}
                                                    </span>
                                                    {edu.grade && (
                                                        <span className="text-gray-400 text-sm font-medium">
                                                            {edu.grade}
                                                        </span>
                                                    )}
                                                </div>
                                                <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                                                    {edu.degree}
                                                </h3>
                                            </div>

                                            <h4 className="text-lg text-pink-400 font-medium mb-2">{edu.major}</h4>
                                            <p className="text-gray-300 font-semibold mb-4">{edu.institute}</p>

                                            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                                {edu.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
