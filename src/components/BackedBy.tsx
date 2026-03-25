import SectionLabel from "./SectionLabel";

const partners = ["Anandpur Institute", "SikhTeens", "United Sikh Movement"];

export default function BackedBy() {
  return (
    <section className="bg-navy-950 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <SectionLabel text="BACKED BY" />

        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {partners.map((name) => (
            <span
              key={name}
              className="px-4 py-2 bg-navy-900 rounded-full text-white/40 text-xs font-medium border border-white/5"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
