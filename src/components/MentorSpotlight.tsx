import Image from "next/image";
import SectionLabel from "./SectionLabel";

const mentors = [
  {
    name: "Harmann Singh",
    role: "Keynote Speaker",
    image: "/images/testimonials/person1.jpg",
    quote:
      "Safal has the potential to reshape how Sikh professionals connect and lead across industries.",
  },
  {
    name: "Sargun Kaur",
    role: "Keynote Speaker",
    image: "/images/testimonials/person2.jpg",
    quote:
      "The mentorship circles aren\u2019t surface-level \u2014 they\u2019re real conversations about identity, ambition, and leadership.",
  },
  {
    name: "Gurjote Singh",
    role: "Keynote Speaker & Sponsor",
    image: "/images/testimonials/person3.jpg",
    quote:
      "Exceeded expectations. The energy and the caliber of people in the room proved this community is ready to scale.",
  },
  {
    name: "Navi Singh",
    role: "Keynote Speaker",
    image: "/images/testimonials/person4.jpg",
    quote:
      "A strong first conference with clear demand. The quality of the venue, speakers, and mentees speaks for itself.",
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
              <p className="text-gold text-sm mt-1">{mentor.role}</p>
              <p className="text-white/60 italic text-sm mt-4 leading-relaxed">
                &ldquo;{mentor.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
