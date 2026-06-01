
import { Section, SectionTitle } from "./Section";

export default function Experience({ experience }) {
  return (
    <Section id="experience" className="bg-white/[0.01]">
      <div className="max-w-[940px] mx-auto px-6 w-full">
        <SectionTitle>Experience</SectionTitle>
        <div className="relative pl-2">
          <div className="absolute left-3.5 top-2 bottom-2 w-[1px] bg-white/[0.06]" />
          {experience.map((e, i) => (
            <div key={i} className="flex gap-6 mb-8 relative">
              <div className="w-2.5 h-2.5 rounded-full shrink-0 bg-[#5DCAA5] mt-2.5 z-10 ml-[7px] shadow-[0_0_0_4px_#0b1220]" />
              <div className="bg-[#111b2e] border border-white/[0.05] rounded-xl p-6 flex-1 transition-all duration-200 hover:-translate-y-1 hover:border-[#5DCAA5]/20">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#f0f4f8]">{e.role}</h3>
                    <p className="text-sm text-[#5DCAA5] mt-0.5">{e.project}</p>
                  </div>
                  <span className="font-mono text-[11px] text-slate-500 border border-white/[0.08] px-3 py-1 rounded-full self-start tracking-wide">
                    {e.period}
                  </span>
                </div>
                <p className="text-[13px] text-slate-500 font-mono leading-relaxed">{e.tech}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
