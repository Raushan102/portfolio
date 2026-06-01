import React from "react";
import Tag from "./Tag";
import { Section, SectionTitle } from "./Section";

export default function Projects({ projects }) {
  // Map project identifiers to your exact live running links
  const getLiveUrl = (title) => {
    const t = title.toLowerCase();
    if (t.includes("devtinder")) return "https://raushankumarsaw.in/devtinder/";
    // Direct string match for your food donation application
    if (t.includes("feed") || t.includes("food") || t.includes("donation")) {
      return "https://feedaid.netlify.app/";
    }
    return null;
  };

  return (
    <Section id="projects">
      <div className="max-w-[940px] mx-auto px-6 w-full">
        <SectionTitle>Projects</SectionTitle>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((p) => {
            const liveUrl = getLiveUrl(p.title);

            return (
              <div
                key={p.title}
                className="bg-[#111b2e] border border-white/[0.05] rounded-2xl p-6 md:p-8 relative overflow-hidden transition-all duration-200 hover:border-[#5DCAA5]/20"
              >
                {/* Accent Color Strip */}
                <div className="absolute top-0 left-0 w-1 h-full" style={{ background: p.color }} />

                {/* 2-Column Grid Layout */}
                <div className={`grid grid-cols-1 ${liveUrl ? "lg:grid-cols-12" : "grid-cols-1"} gap-6 items-stretch`}>

                  {/* Left Side: Info & Metadata */}
                  <div className={liveUrl ? "lg:col-span-5 flex flex-col justify-between" : "w-full"}>
                    <div>
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                        <div>
                          <h3 className="font-serif text-xl md:text-2xl font-semibold text-[#f0f4f8]">{p.title}</h3>
                          <p className="font-mono text-xs text-[#5DCAA5] mt-1">{p.role} · {p.period}</p>
                        </div>
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="border border-white/[0.08] text-slate-400 px-3 py-1.5 rounded-md text-xs transition-colors duration-200 hover:border-[#5DCAA5] hover:text-[#5DCAA5] hover:bg-[#5DCAA5]/[0.02]"
                        >
                          Source →
                        </a>
                      </div>

                      <p className="text-[14px] md:text-base text-slate-400 mb-5">{p.desc}</p>

                      <ul className="list-none mb-6 grid gap-2.5 p-0">
                        {p.highlights.map((h, i) => (
                          <li key={i} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                            <span style={{ color: p.color }} className="shrink-0 select-none">▸</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {p.stack.map(s => <Tag key={s} variant="stack">{s}</Tag>)}
                    </div>
                  </div>

                  {/* Right Side: Desktop-Scaled Browser Frame Box */}
                  {liveUrl && (
                    <div className="lg:col-span-7 w-full flex flex-col border border-white/[0.08] bg-[#0b1322] rounded-xl overflow-hidden h-[400px] shadow-2xl">
                      {/* Browser Window UI Header */}
                      <div className="bg-[#162238] border-b border-white/[0.06] px-4 py-2 flex items-center gap-2 justify-between shrink-0 z-10">
                        <div className="flex gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 block"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 block"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 block"></span>
                        </div>
                        <div className="bg-[#0b1322] border border-white/[0.04] text-[10px] text-slate-400 rounded px-3 py-0.5 font-mono tracking-wide truncate max-w-[60%] text-center">
                          {liveUrl.replace("https://", "")}
                        </div>
                        <a
                          href={liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[11px] font-mono text-[#5DCAA5] hover:underline"
                        >
                          Live ↗
                        </a>
                      </div>

                      {/* Web Viewport Wrapper Container */}
                      <div className="w-full flex-1 bg-white relative overflow-hidden">
                        {/*
                          The iframe is set to 140% size to force a desktop resolution breakdown,
                          then downscaled using Tailwind's scale utility to fit the outer box mask.
                        */}
                        <iframe
                          src={liveUrl}
                          title={`${p.title} Desktop View`}
                          className="absolute top-0 left-0 border-0 origin-top-left scale-[0.714] w-[140%] h-[140%]"
                          sandbox="allow-scripts allow-same-origin allow-forms"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
