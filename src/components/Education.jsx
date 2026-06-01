
import { Section, SectionTitle } from "./Section";

export default function Education({ education }) {
  return (
    <Section id="education">
      <div className="max-w-[940px] mx-auto px-6 w-full">
        <SectionTitle>Education</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {education.map((e, i) => (
            <div key={i} className="bg-[#111b2e] border border-white/[0.05] rounded-xl p-6 md:p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#5DCAA5]/20">
              <div className="font-mono text-[11px] text-[#5DCAA5] tracking-wider mb-3">{e.period}</div>
              <h3 className="font-serif text-lg font-semibold text-[#f0f4f8] mb-1.5">{e.degree}</h3>
              <p className="text-sm text-slate-500">{e.school}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
