import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State untuk menu mobile

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        active
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* --- LOGO --- */}
        <div className="logo z-50">
          <a href="#" className="text-2xl font-black text-slate-900 tracking-tight">
            Al-Amin<span className="text-indigo-600">.</span>
          </a>
        </div>

        {/* --- DESKTOP MENU --- */}
        <ul className="hidden md:flex items-center gap-10">
          {[
            { name: "Home", link: "#" },
            { name: "About", link: "#about" },
            { name: "Education", link: "#education" },
            { name: "Experience", link: "#experience" },
            { name: "Projects", link: "#projects" },
          ].map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors uppercase tracking-wider"
              >
                {item.name}
              </a>
            </li>
          ))}
          {/* Tombol Contact khusus */}
          <li>
            <a
              href="#contact"
              className="px-6 py-2.5 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-indigo-600 transition-all shadow-lg hover:shadow-indigo-200"
            >
              Contact Me
            </a>
          </li>
        </ul>

        {/* --- MOBILE HAMBURGER BUTTON --- */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-900 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <i className="ri-close-line text-3xl"></i>
            ) : (
              <i className="ri-menu-3-line text-3xl"></i>
            )}
          </button>
        </div>

        {/* --- MOBILE MENU OVERLAY --- */}
        <div
          className={`fixed inset-0 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {[
            { name: "Home", link: "#" },
            { name: "About", link: "#about" },
            { name: "Experience", link: "#experience" },
            { name: "Projects", link: "#projects" },
            { name: "Contact", link: "#contact" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setMobileMenuOpen(false)} // Tutup menu saat diklik
              className="text-2xl font-bold text-slate-800 hover:text-indigo-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;