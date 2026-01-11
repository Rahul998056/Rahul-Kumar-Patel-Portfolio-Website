import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="min-h-screen bg-black text-white px-6 py-20 flex items-center relative overflow-hidden">

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center z-10">

        {/* Left Content - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 font-['Space_Grotesk'] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            About Me
          </h2>

          <div className="space-y-6 text-lg text-gray-300 font-['Outfit'] leading-relaxed">
            <p>
              Hello! I’m <span className="text-white font-bold">Rahul Kumar Patel</span>, a <span className="text-purple-400 font-semibold">passionate and motivated Software Developer</span> with a strong foundation in <span className="text-purple-400 font-semibold">Web Development</span>.
            </p>
            <p>
              I have successfully completed my <span className="text-white font-bold">B.Tech</span>, where I honed my <span className="text-purple-400 font-semibold">problem-solving skills</span> and developed a deep interest in building complex, <span className="text-white font-bold">real-world applications</span>.
            </p>
            <p>
              As a <span className="text-purple-400 font-semibold">Fast Learner</span>, <span className="text-purple-400 font-semibold">Strong Problem Solver</span>, and <span className="text-white font-bold">Team-Oriented Developer</span>, I am always eager to embrace new technologies and continuously improve my craft.
            </p>
          </div>

          <div className="mt-8 flex gap-4 flex-wrap">
            {/* Stats / Badges */}
            {['B.Tech Graduate', 'Fast Learner', 'Problem Solver', 'Team Player'].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(168, 85, 247, 0.2)" }}
                className="px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm font-semibold text-purple-300 cursor-default"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Content - Interactive Code Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

          <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:border-purple-500/50">
            {/* Window Controls */}
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            {/* Code Content */}
            <div className="font-mono text-sm md:text-base leading-7 overflow-x-auto">
              <div className="flex">
                <span className="text-gray-600 select-none mr-4">1</span>
                <span><span className="text-purple-400">const</span> <span className="text-yellow-400">developer</span> = <span className="text-blue-400">{`{`}</span></span>
              </div>
              <div className="flex">
                <span className="text-gray-600 select-none mr-4">2</span>
                <span className="pl-4">name: <span className="text-green-400">"Rahul Kumar Patel"</span>,</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 select-none mr-4">3</span>
                <span className="pl-4">role: <span className="text-green-400">"Software Developer"</span>,</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 select-none mr-4">4</span>
                <span className="pl-4">education: <span className="text-green-400">"B.Tech"</span>,</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 select-none mr-4">5</span>
                <span className="pl-4">traits: <span className="text-blue-400">[</span></span>
              </div>
              <div className="flex">
                <span className="text-gray-600 select-none mr-4">6</span>
                <span className="pl-8"><span className="text-green-400">"Fast Learner"</span>, <span className="text-green-400">"Team Player"</span></span>
              </div>
              <div className="flex">
                <span className="text-gray-600 select-none mr-4">7</span>
                <span className="pl-4"><span className="text-blue-400">]</span>,</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 select-none mr-4">8</span>
                <span className="pl-4">problemSolver: <span className="text-orange-400">true</span></span>
              </div>
              <div className="flex">
                <span className="text-gray-600 select-none mr-4">9</span>
                <span><span className="text-blue-400">{`}`}</span>;</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
