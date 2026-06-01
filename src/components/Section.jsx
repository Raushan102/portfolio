
// The main reusable section container layout
export function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`py-24 ${className}`}>
      {children}
    </section>
  );
}

// The standardized heading component used across your profile sections
export function SectionTitle({ children }) {
  return (
    <div className="mb-10">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#f0f4f8] m-0 line-clamp-2">
        {children}
      </h2>
      <div className="w-10 h-[3px] bg-[#5DCAA5] rounded-sm mt-3" />
    </div>
  );
}
