export default function Avatar() {
  return (
    <div className="relative flex h-48 w-48 md:h-56 md:w-56 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d1527] p-2 shadow-[0_16px_40px_rgba(0,0,0,0.5)] group">
      {/* Outer framing accents */}
      <div className="absolute inset-0 border border-[#5DCAA5]/20 rounded-2xl pointer-events-none transition-all duration-300 group-hover:border-[#5DCAA5]/40" />

      {/* Image element with crisp contrast configuration */}
      <div className="w-full h-full overflow-hidden rounded-xl bg-slate-950">
        <img
          src="photo.jpg"
          alt="Raushan Kumar Saw"
          className="w-full h-full object-cover object-center grayscale contrast-[1.1] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
        />
      </div>
    </div>
  );
}
