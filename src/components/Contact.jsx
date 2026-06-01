
import { Section, SectionTitle } from "./Section";

export default function Contact() {
  return (
    <Section id="contact" className="bg-white/[0.01]">
      <div className="max-w-[940px] mx-auto px-6 w-full">
        <SectionTitle>Contact</SectionTitle>
        <p className="text-base text-slate-400 max-w-lg mb-8">
          Looking for full-time production opportunities or technical discussions. Drop a message.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { label: "Email", val: "raushankumarsaw15@gmail.com", href: "mailto:raushankumarsaw15@gmail.com" },
            { label: "GitHub", val: "github.com/Raushan102", href: "https://github.com/Raushan102" },
            { label: "LinkedIn", val: "https://www.linkedin.com/in/raushan-kumar-saw-39067b261/", href: "https://www.linkedin.com/in/raushan-kumar-saw-39067b261/" },
          ].map(item => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-[#111b2e] border border-white/[0.05] rounded-lg p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#5DCAA5]/20"
            >
              <span className="font-mono text-xs text-[#5DCAA5] min-w-[48px]">{item.label}</span>
              <span className="text-sm text-slate-400 truncate">{item.val}</span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
