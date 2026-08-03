import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Fambookagram",
  description:
    "Fambookagram was an Open Mirror experiment. The concept now lives in the iDontCry playground.",
};

const A = "#C084FC";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0b1220] text-[#e8edf5]">
      <div className="mx-auto max-w-2xl px-5 py-10">
        <h1 className="text-2xl font-black">About Fambookagram</h1>
        <p className="mt-3 text-[15px] leading-relaxed text-[#94a3b8]">
          Fambookagram was an Open Mirror experiment in a private family feed.
          The standalone site stepped down, and the concept now lives on inside{" "}
          <a href="https://idontcry.com" style={{ color: A }}>
            iDontCry
          </a>
          , the family&rsquo;s digital playground.
        </p>

        {/* The footer's Contact and Disclaimer links land on these two
            sections (family standard, 2026-08-02). */}
        <section id="contact" className="mt-8 scroll-mt-24">
          <h2 className="text-lg font-bold">Contact</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-[#94a3b8]">
            Have a question or an idea? Email{" "}
            <a
              href="mailto:ask@openmirrorllc.com?subject=Open%20Mirror%20Inquiry"
              style={{ color: A }}
            >
              ask@openmirrorllc.com
            </a>
            .
          </p>
        </section>

        <section id="disclaimer" className="mt-8 scroll-mt-24">
          <h2 className="text-lg font-bold">Disclaimer</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-[#94a3b8]">
            Open Mirror LLC is independently owned and operated. Nothing
            published by Open Mirror LLC is sponsored by, affiliated with,
            endorsed by, or representative of the owner&rsquo;s full-time
            employer. Read the{" "}
            <a
              href="https://openmirrorllc.com/disclaimer"
              style={{ color: A }}
            >
              full Open Mirror disclaimer
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
