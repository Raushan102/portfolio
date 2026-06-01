
import Tag from "./Tag";
import { Section, SectionTitle } from "./Section";

export default function Skills({ skills, learning }) {
  return (
    <Section id="skills" className="bg-white/[0.01]">
      <div className="max-w-[940px] mx-auto px-6 w-full">
        <SectionTitle>Skills</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-6">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} className="bg-[#111b2e] border border-white/[0.05] rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#5DCAA5]/20">
              <h3 className="font-mono text-[11px] text-[#5DCAA5] tracking-widest mb-4 font-medium uppercase">
                {cat}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map(s => <Tag key={s} variant="stack">{s}</Tag>)}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#EF9F27]/[0.02] border border-[#EF9F27]/15 rounded-xl p-6">
          <h3 className="font-mono text-[11px] text-[#EF9F27] tracking-widest mb-4 font-medium uppercase">
            CURRENTLY EXPLORING
          </h3>
          <div className="flex flex-wrap gap-2">
            {learning.map(s => <Tag key={s} variant="learning">{s}</Tag>)}
          </div>
        </div>
      </div>
    </Section>
  );
}
