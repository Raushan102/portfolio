import Avatar from "./Avatar";

export default function Hero({ scrollTo }) {
  return (
    <div className="relative max-w-[940px] mx-auto px-6 w-full pt-20 md:pt-28 pb-16 md:pb-24 overflow-hidden">
      {/* Soft Ambient Background Glow Behind Avatar */}
      <div className="absolute top-12 left-10 w-72 h-72 bg-[#5DCAA5]/[0.03] rounded-full blur-[120px] pointer-events-none select-none" />

      <div className="relative flex flex-col md:flex-row items-center gap-10 md:gap-16 text-center md:text-left">
        {/* Avatar Wrapper with Subtle Hover Lift */}
        <div className="transition-transform duration-300 hover:scale-[1.02]">
          <Avatar />
        </div>

        <div className="flex-1 min-w-[260px]">
          {/* Tagline with increased letter spacing and subtle accent border */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5DCAA5] animate-pulse" />
            <p className="font-mono text-[11px] text-[#5DCAA5] tracking-[0.2em] font-semibold uppercase">
              Full-Stack Developer
            </p>
          </div>

          {/* Premium Gradient Typography Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#f0f4f8] leading-[1.15] mb-5">
            Raushan{" "}
            <span className="bg-gradient-to-r from-[#f0f4f8] via-[#e2e8f0] to-[#5DCAA5] bg-clip-text text-transparent">
              Kumar Saw
            </span>
          </h1>

          {/* Optimized line-height and color blending for readability */}
          <p className="text-[15px] md:text-base text-slate-400 max-w-xl mb-8 mx-auto md:mx-0 leading-relaxed font-normal">
            Building production-ready MERN stack apps — from reliable architecture and real-time environments to cloud implementations.
          </p>

          {/* Modern Interactive Actions Group */}
          <div className="flex flex-wrap gap-3.5 justify-center md:justify-start items-center">
            <button
              onClick={() => scrollTo("projects")}
              className="group relative bg-[#5DCAA5] text-[#0b1220] px-6 py-3 rounded-xl cursor-pointer text-sm font-semibold shadow-[0_4px_20px_rgba(93,202,165,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(93,202,165,0.3)] active:translate-y-0"
            >
              View Projects
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 ml-1.5">
                →
              </span>
            </button>

            <a
              href="mailto:raushankumarsaw15@gmail.com"
              className="border border-white/[0.08] text-[#f0f4f8]/80 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:border-[#5DCAA5]/40 hover:text-[#5DCAA5] hover:bg-[#5DCAA5]/[0.03]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
