
import { Section, SectionTitle } from "./Section";

export default function About() {
  return (
    <Section id="about">
      <div className="max-w-[940px] mx-auto px-6 w-full">
        <SectionTitle>About me</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <p className="text-base text-slate-400 !leading-loose">
            Results-driven Full-Stack Developer with hands-on experience building and deploying production-ready MERN stack applications. I deliver end-to-end features — from precise API design and real-time systems to cloud platforms.
          </p>
          <p className="text-base text-slate-400 !leading-loose">
            Adept at integrating payment gateways, verification handlers, and geolocation services. Currently expanding technical competencies across data engineering tools and modern AI infrastructure.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mt-10">
          {[["Ranchi, IN", "Location"], ["MCA 2026", "Degree"], ["MERN Stack", "Speciality"]].map(([val, label]) => (
            <div key={label} className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 flex-1 min-w-[160px]">
              <div className="font-serif text-lg text-[#f0f4f8] font-semibold">{val}</div>
              <div className="text-[11px] text-[#5DCAA5] mt-1 tracking-wider font-mono uppercase">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
