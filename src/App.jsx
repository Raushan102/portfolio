import  { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Education", "Contact"];

const SKILLS = {
  Frontend: ["React.js", "Next.js", "Redux", "TanStack Query", "Tailwind CSS", "HTML5", "CSS3"],
  Backend: ["Node.js", "Express.js", "REST APIs", "Socket.io", "JWT", "OAuth 2.0"],
  Database: ["MongoDB", "MySQL", "Mongoose", "Firebase"],
  Other: ["JavaScript (ES6+)"],
};

const LEARNING = ["Python", "Agentic AI", "LangChain", "AI Engineering"];

const PROJECTS = [
  {
    title: "devTinder",
    role: "Full-Stack Developer",
    period: "Dec 2024 – Present",
    desc: "A developer-matching platform with real-time chat, premium subscriptions, and cloud deployment.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "Razorpay", "AWS EC2", "Nginx", "Tailwind CSS"],
    highlights: [
      "Real-time chat for 100+ concurrent users via Socket.io, reducing latency by 30%",
      "JWT auth with OTP verification (Amazon SES) for 200+ users",
      "Razorpay payment gateway + AWS EC2 with Nginx reverse proxy",
      "15+ RESTful API endpoints with sub-200ms average response time",
    ],
    github: "https://github.com/Raushan102/DevTinder",
    color: "#5DCAA5",
  },
  {
    title: "Food Donation App",
    role: "Full-Stack Developer",
    period: "May – Jul 2024",
    desc: "Real-time food donation platform connecting donors and recipients with live location tracking.",
    stack: ["React", "Tailwind CSS", "Firebase", "Firestore", "Google Maps API", "Netlify"],
    highlights: [
      "Connected 50+ donors and recipients with live post creation",
      "Firestore real-time listeners + Google Maps API, under 1s update latency",
      "Firebase Auth with role-based access control, reducing unauthorized access by 100%",
    ],
    github: "https://github.com/Raushan102/food-donation",
    color: "#378ADD",
  },
];

const EXPERIENCE = [
  {
    role: "Full-Stack Developer",
    project: "devTinder",
    period: "Nov 2025 – feb 2026",
    tech: "React · Node.js · Express.js · MongoDB · Socket.io · JWT · Razorpay · AWS EC2",
  },
  {
    role: "Full-Stack Developer",
    project: "Food Donation Web App",
    period: "May – Jul 2024",
    tech: "React · Tailwind CSS · Firebase · Firestore · Google Maps API · Netlify",
  },
];

const EDUCATION = [
  { degree: "Master of Computer Applications", school: "Ranchi University", period: "2024 – 2026" },
  { degree: "B.Sc. Information Technology", school: "Ranchi University", period: "2021 – 2024" },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 200;
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.toLowerCase());
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const target = document.getElementById(id.toLowerCase());
    if (target) {
      const offsetPosition = target.offsetTop - 80;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <div className="bg-[#0b1220] text-slate-300 min-h-screen font-sans leading-relaxed text-[15px]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap');
        body { font-family: 'DM Sans', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-mono { font-family: 'DM Mono', monospace; }
        ::selection { background: rgba(93,202,165,0.15); color: #fff; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out forwards; }
      `}</style>

      <Navbar
        navLinks={NAV_LINKS}
        activeSection={activeSection}
        scrollTo={scrollTo}
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <Hero scrollTo={scrollTo} />

      <div className="max-w-[940px] mx-auto px-6 w-full">
        <div className="h-[1px] bg-white/[0.05]" />
      </div>

      <About />
      <Skills skills={SKILLS} learning={LEARNING} />
      <Projects projects={PROJECTS} />
      <Experience experience={EXPERIENCE} />
      <Education education={EDUCATION} />
      <Contact />
      <Footer />
    </div>
  );
}
