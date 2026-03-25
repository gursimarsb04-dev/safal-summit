import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Apply — Safal Summit 2026",
};

const QUICK_FAQ = [
  {
    question: "Who can apply?",
    answer:
      "Sikh students, professionals, and entrepreneurs looking to grow and connect with a like-minded community.",
  },
  {
    question: "Is there a cost to attend?",
    answer:
      "Yes, there is a registration fee. Details will be shared upon acceptance. Scholarships are available.",
  },
  {
    question: "When will I hear back?",
    answer:
      "Applications are reviewed on a rolling basis. You will hear back within 2-3 weeks of submitting.",
  },
];

export default function ApplyPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <SectionLabel text="APPLY" />
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
            Apply to Safal Summit 2026
          </h1>
        </div>

        {/* Main content: 3-col grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Typeform — spans 2 cols */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-xl bg-navy-700">
              <iframe
                src="https://safalnetwork.typeform.com/to/TYPEFORM_ID"
                title="Safal Summit 2026 Application"
                className="h-[700px] w-full border-0"
                allow="camera; microphone; autoplay; encrypted-media;"
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            {/* Event Details card */}
            <div className="rounded-xl bg-navy-700 p-6">
              <h2 className="text-lg font-bold text-white mb-4">
                Event Details
              </h2>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-gold">Dates</dt>
                  <dd className="mt-1 text-white/60">{SITE.date}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gold">Venue</dt>
                  <dd className="mt-1 text-white/60">{SITE.venue}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gold">Location</dt>
                  <dd className="mt-1 text-white/60">{SITE.city}</dd>
                </div>
              </dl>
            </div>

            {/* Quick FAQ card */}
            <div className="rounded-xl bg-navy-700 p-6">
              <h2 className="text-lg font-bold text-white mb-4">Quick FAQ</h2>
              <div className="space-y-4">
                {QUICK_FAQ.map((item) => (
                  <div key={item.question}>
                    <p className="text-sm font-semibold text-white">
                      {item.question}
                    </p>
                    <p className="mt-1 text-sm text-white/50">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
