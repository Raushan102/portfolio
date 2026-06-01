
import LogoImage from "./LogoImage";
export default function Navbar({ navLinks, activeSection, scrollTo, scrolled, menuOpen, setMenuOpen }) {
  return (
    <nav className={`sticky top-0 z-50 py-4 transition-all duration-300 ${
      scrolled
        ? "bg-[#0b1220]/85 backdrop-blur-md border-b border-white/[0.05]"
        : "bg-transparent border-b border-transparent"
    }`}>
      <div className="max-w-[940px] mx-auto px-6 w-full flex items-center justify-between">
        <span
          className="font-serif text-2xl font-bold text-[#f0f4f8] cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <LogoImage/>
        </span>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`bg-none border-none cursor-pointer font-sans text-sm font-normal p-0 transition-colors duration-200 ${
                activeSection === link ? "text-[#5DCAA5] font-medium" : "text-slate-400 hover:text-[#9FE1CB]"
              }`}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex md:hidden flex-col gap-1.5 p-1 z-50 bg-none border-none cursor-pointer"
        >
          <div className={`w-6 h-[2px] bg-[#f0f4f8] transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
          <div className={`w-6 h-[2px] bg-[#f0f4f8] transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
          <div className={`w-6 h-[2px] bg-[#f0f4f8] transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Fullscreen Panel */}
      {menuOpen && (
        <div className="fixed inset-0 h-screen w-screen bg-[#0b1220] flex flex-col justify-center items-center gap-6 z-40 animate-fadeIn">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`bg-none border-none cursor-pointer font-serif text-3xl ${
                activeSection === link ? "text-[#5DCAA5]" : "text-slate-400"
              }`}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
