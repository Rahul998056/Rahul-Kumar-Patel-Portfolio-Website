import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';
import profileImg from "../assets/profile.jpg";

function Hero() {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-black text-white flex items-center px-6 pt-20">

      {/* Dynamic Starry Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-20"
            initial={{
              x: Math.random() * 100 + "vw",
              y: Math.random() * 100 + "vh",
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [Math.random() * 100 + "vh", -10],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: Math.random() * 3 + "px",
              height: Math.random() * 3 + "px",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center gap-3 mb-4 p-2 bg-white/5 rounded-lg border border-white/10 w-fit backdrop-blur-sm hover:border-purple-500/50 transition-colors group cursor-default"
          >
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="text-purple-500 text-2xl font-bold font-mono group-hover:text-pink-500 transition-colors"
            >&lt;</motion.span>

            <span className="text-gray-300 text-lg tracking-[0.2em] font-light group-hover:text-white transition-colors">
              RAHUL<span className="text-purple-500 mx-1">/</span>KUMAR<span className="text-purple-500 mx-1">/</span>PATEL
            </span>

            <motion.span
              animate={{ x: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="text-purple-500 text-2xl font-bold font-mono group-hover:text-pink-500 transition-colors"
            >&gt;</motion.span>
          </motion.div>

          <h3 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 block">
            Hi, I am <span className="text-white font-['Space_Grotesk'] text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight whitespace-nowrap block mt-2">RAHUL KUMAR PATEL</span>
          </h3>

          <div className="text-2xl md:text-4xl font-semibold text-purple-400 mb-6 h-[60px] flex items-center">
            I'm a{' '}
            <span className="ml-2">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  1000,
                  'Java Developer',
                  1000,
                  '.Net Developer',
                  1000,
                  'React Developer',
                  1000,
                  'Tech Enthusiast',
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-white"
              />
            </span>
          </div>

          <p className="text-gray-400 text-lg max-w-lg mb-8 leading-relaxed">
            I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results.
          </p>

          <motion.a
            href="/Rahul_Resume.pdf"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-purple-500/50 transition-all border border-purple-500 cursor-pointer z-50 relative"
          >
            Check Resume
          </motion.a>
        </motion.div>

        {/* Right Content - Profile Image with Tilt Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end relative"
        >
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.1}
            transitionSpeed={1500}
            className="relative"
          >
            {/* Glowing Background Effect */}
            <div className="absolute inset-0 bg-purple-600/30 rounded-full blur-[80px] -z-10 animate-pulse"></div>

            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full p-2 bg-gradient-to-br from-purple-500 to-pink-500 shadow-2xl shadow-purple-900/50">
              <div className="w-full h-full rounded-full overflow-hidden bg-black border-4 border-transparent">
                <img
                  src={profileImg}
                  alt="RAHUL KUMAR PATEL"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
