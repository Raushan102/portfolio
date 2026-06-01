

export default function Tag({ children, variant = "default" }) {
  // Scoped utility styles for different tag colors
  const styles = {
    default: "bg-[#5DCAA5]/[0.08] text-[#5DCAA5] border-[#5DCAA5]/20",
    learning: "bg-[#EF9F27]/[0.08] text-[#EF9F27] border-[#EF9F27]/25",
    stack: "bg-white/[0.04] text-slate-400 border-white/[0.08]",
  };

  return (
    <span className={`inline-block rounded-md border font-mono text-xs px-3 py-1 transition-colors duration-200 hover:bg-[#5DCAA5]/20 ${styles[variant]}`}>
      {children}
    </span>
  );
}
