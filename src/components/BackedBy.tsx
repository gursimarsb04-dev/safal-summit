import Image from "next/image";
import SectionLabel from "./SectionLabel";

const partners = [
  { name: "SikhTeens", logo: "/images/logos/sikhteens.jpg" },
  { name: "United Sikh Movement", logo: "/images/logos/usm.png" },
  { name: "Anandpur Institute", logo: "/images/logos/anandpur.png" },
];

export default function BackedBy() {
  return (
    <section className="bg-navy-950 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <SectionLabel text="BACKED BY" />

        <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center h-12 opacity-60 hover:opacity-100 transition-opacity"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
