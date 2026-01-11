import { useState, useEffect } from "react";
import profileImg from "../assets/profile.jpg";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ["home", "about", "skills", "experience", "projects", "education", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 font-['Outfit'] ${isScrolled
        ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-xl border-b border-purple-500/20"
        : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500 blur-sm rounded-full opacity-50"></div>
              <img
                src={profileImg}
                alt="Profile"
                className="h-10 w-10 rounded-full border-2 border-purple-500 object-cover relative z-10"
              />
            </div>
            <a
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent hover:from-purple-400 hover:to-pink-500 transition-all duration-300"
            >
              Rahul Portfolio
            </a>
          </motion.div>

          {/* Desktop Menu (Hidden on Scroll) */}
          <div className={`hidden ${isScrolled ? '' : 'md:block'}`}>
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative group block"
                >
                  <span className={`text-sm font-medium transition-colors duration-300 ${activeSection === link.href.substring(1)
                    ? "text-purple-400"
                    : "text-gray-300 group-hover:text-white"
                    }`}>
                    {link.name}
                  </span>
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-500 rounded-full"
                    />
                  )}
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            {/* GitHub Icon */}
            <a
              href="https://github.com/Rahul998056"
              target="_blank"
              title="Rahul Portfolio"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            {/* Mobile Menu Button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                <div className="space-y-1.5">
                  <span className={`block w-6 h-0.5 bg-current transform transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-current transform transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Scroll Spy (Visible ONLY when scrolled on Desktop) */}
      <div className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex-col gap-4 ${isScrolled ? 'hidden md:flex' : 'hidden'}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="group relative flex items-center justify-end"
          >
            {/* Tooltip (Visible on Hover) */}
            <span className={`absolute right-8 px-2 py-1 rounded bg-purple-600 text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap ${activeSection === link.href.substring(1) ? "opacity-100" : ""
              }`}>
              {link.name}
            </span>

            {/* Dot */}
            <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${activeSection === link.href.substring(1)
              ? "bg-purple-500 border-purple-500 scale-125 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
              : "bg-transparent border-gray-500 hover:border-white hover:bg-white/20"
              }`} />
          </a>
        ))}
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop (No Blur as requested) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 z-40 md:hidden"
            />

            {/* Right Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-64 bg-gray-900 border-l border-purple-500/30 shadow-2xl z-50 flex flex-col pt-20 px-6 md:hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-xl font-bold tracking-wider transition-all duration-300 flex items-center gap-3 ${activeSection === link.href.substring(1)
                      ? "text-purple-400 translate-x-2"
                      : "text-gray-400 hover:text-white hover:translate-x-2"
                      }`}
                  >
                    {/* Active Indicator Dot */}
                    <span className={`w-2 h-2 rounded-full transition-all ${activeSection === link.href.substring(1) ? "bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" : "bg-transparent"
                      }`}></span>
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
