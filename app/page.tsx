"use client";

import { useState } from "react";

const A = "#FBBF24"; // accent
const SIGNUP_EMAIL = "hello@openmirrorllc.com";

const features = [
  { emoji: "📸", title: "Shared photo albums", text: "Everyone's photos in one warm place — not scattered across five apps." },
  { emoji: "🗓️", title: "Everyday moments", text: "Little updates, big milestones, and the in-between stuff that matters." },
  { emoji: "🔒", title: "Private & invite-only", text: "Just your family. No ads, no algorithm, no strangers. Ever." },
];

export default function Fambookagram() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const join = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    const subject = encodeURIComponent("Fambookagram early access");
    const body = encodeURIComponent(`I'd love early access to Fambookagram.\n\nMy email: ${email.trim()}`);
    window.location.href = `mailto:${SIGNUP_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <main className="min-h-screen bg-[#0C0C0C] text-[#F5F0E8]">
      <div className="mx-auto max-w-2xl px-5 py-12">

        {/* Brand */}
        <div className="mb-14 inline-flex items-baseline text-lg font-black tracking-tight">
          <span className="text-[#F5F0E8]">Fambookagram</span>
          <span style={{ color: A }}>.com</span>
        </div>

        {/* Hero */}
        <section className="mb-12 text-center">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.3em]" style={{ color: A }}>
            Coming soon · Private beta
          </p>
          <div className="mb-6 text-6xl">👨‍👩‍👧‍👦</div>
          <h1 className="mb-5 text-4xl font-black leading-tight text-[#F5F0E8] sm:text-6xl">
            Fambookagram
          </h1>
          <p className="mx-auto mb-4 max-w-lg text-lg font-semibold leading-8 text-[#F5F0E8]">
            The family feed, minus the noise. Share photos and everyday moments with the people you actually call family.
          </p>
          <p className="text-sm font-black uppercase tracking-[0.2em]" style={{ color: A }}>
            No ads · No algorithm · No strangers
          </p>
        </section>

        {/* Waitlist */}
        <section className="mb-14 rounded-3xl border border-[#262626] bg-[#151515] p-7 text-center">
          <h2 className="mb-2 text-xl font-black text-[#F5F0E8]">Save your family&apos;s spot</h2>
          <p className="mx-auto mb-6 max-w-sm text-sm font-semibold text-[#9A9188]">
            Drop your email and we&apos;ll let you know the moment your private family space is ready.
          </p>
          {sent ? (
            <div className="rounded-2xl border border-[#262626] bg-[#1C1C1C] px-5 py-4 text-sm font-bold text-[#F5F0E8]">
              🎉 Almost there — just hit send in the email that popped up and you&apos;re on the list!
            </div>
          ) : (
            <form onSubmit={join} className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1 rounded-full border-2 border-[#262626] bg-[#1C1C1C] px-5 py-3 text-base text-white outline-none placeholder:text-[#6B6B6B] focus:border-[#FBBF24]"
              />
              <button type="submit" style={{ background: A, color: "#0C0C0C" }} className="rounded-full px-7 py-3 text-sm font-black uppercase tracking-[0.12em] hover:opacity-90 transition">
                Save my spot →
              </button>
            </form>
          )}
        </section>

        {/* Features */}
        <section className="mb-14 grid gap-4 sm:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-[#262626] bg-[#151515] p-6 text-center">
              <div className="mb-3 text-3xl">{f.emoji}</div>
              <h3 className="mb-2 text-base font-black text-[#F5F0E8]">{f.title}</h3>
              <p className="text-sm font-semibold leading-6 text-[#9A9188]">{f.text}</p>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="border-t border-[#262626] pt-8 text-center">
          <p className="mb-2 text-sm font-black tracking-tight">
            <span className="text-[#F5F0E8]">Fambookagram</span>
            <span style={{ color: A }}>.com</span>
          </p>
          <a href="https://openmirrorllc.com" target="_blank" rel="noopener noreferrer"
            className="text-xs font-black uppercase tracking-[0.2em] text-[#9A9188] hover:text-[#F5F0E8] transition">
            An Open Mirror LLC project
          </a>
        </footer>

      </div>
    </main>
  );
}
