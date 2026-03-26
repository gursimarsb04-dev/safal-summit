import Image from "next/image";
import SectionLabel from "./SectionLabel";

const mentors = [
  {
    name: "Harmann Singh",
    role: "Attorney — Orrick, fmr Supreme Court Clerk",
    image: "/images/testimonials/person1.jpg",
    quote:
      "Safal has the potential to reshape how Sikh professionals connect and lead across industries.",
    linkedin: "https://linkedin.com/in/harmannsingh",
  },
  {
    name: "Sargun Kaur",
    role: "Fmr CEO @ Byteboard (acq.), Google SWE, Forbes 30U30",
    image: "/images/testimonials/person2.jpg",
    quote:
      "The mentorship circles aren\u2019t surface-level \u2014 they\u2019re real conversations about identity, ambition, and leadership.",
    linkedin: "https://linkedin.com/in/sargunkaur",
  },
  {
    name: "Gurjote Sethi",
    role: "Managing Partner — Hukam Capital Group",
    image: "/images/testimonials/person3.jpg",
    quote:
      "Exceeded expectations. The energy and the caliber of people in the room proved this community is ready to scale.",
    linkedin: "https://linkedin.com/in/gurjote",
  },
  {
    name: "Navi Singh",
    role: "Investor & Technologist — Taisu Ventures, ex-MIT",
    image: "/images/testimonials/person4.jpg",
    quote:
      "A strong first conference with clear demand. The quality of the venue, speakers, and mentees speaks for itself.",
    linkedin: "https://linkedin.com/in/navisinghk1",
  },
];

export default function MentorSpotlight() {
  return (
    <section className="bg-navy-800 py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <SectionLabel text="MEET OUR MENTORS" />
        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-16">
          Guided by the best.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor) => (
            <div
              key={mentor.name}
              className="bg-navy-700 rounded-xl p-8 flex flex-col items-center"
            >
              <Image
                src={mentor.image}
                alt={mentor.name}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full object-cover mx-auto"
              />
              <h3 className="text-lg font-semibold mt-5">{mentor.name}</h3>
              <p className="text-gold text-xs mt-1 leading-snug">{mentor.role}</p>
              <p className="text-white/60 italic text-sm mt-4 leading-relaxed">
                &ldquo;{mentor.quote}&rdquo;
              </p>
              <a
                href={mentor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-white/30 hover:text-gold transition-colors"
                aria-label={`${mentor.name} LinkedIn`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
