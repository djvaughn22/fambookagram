"use client";

import { useState } from "react";

const A = "#C084FC"; // accent
const SIGNUP_EMAIL = "ask@openmirrorllc.com";

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
    const subject = encodeURIComponent("Fambookagram — feedback");
    const body = encodeURIComponent(`My thoughts on the Fambookagram idea:\n\n\n\nMy email: ${email.trim()}`);
    window.location.href = `mailto:${SIGNUP_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <main className="min-h-screen bg-[#0b1220] text-[#e8edf5]">
      <div className="mx-auto max-w-2xl px-5 py-12">

        {/* Brand */}
        <div className="mb-14 inline-flex items-baseline text-lg font-black tracking-tight">
          <span className="text-[#e8edf5]">Fambookagram</span>
          <span style={{ color: A }}>.com</span>
        </div>

        {/* Hero */}
        <section className="mb-12 text-center">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.3em]" style={{ color: A }}>
            An early idea · Testing the concept
          </p>
          <div className="mb-6 text-6xl">👨‍👩‍👧‍👦</div>
          <h1 className="mb-5 text-4xl font-black leading-tight text-[#e8edf5] sm:text-6xl">
            Fambookagram
          </h1>
          <p className="mx-auto mb-4 max-w-lg text-lg font-semibold leading-8 text-[#e8edf5]">
            The family feed, minus the noise. Share photos and everyday moments with the people you actually call family.
          </p>
          <p className="text-sm font-black uppercase tracking-[0.2em]" style={{ color: A }}>
            No ads · No algorithm · No strangers
          </p>
        </section>

        {/* Waitlist */}
        <section className="mb-14 rounded-3xl border border-[#26324c] bg-[#141d2e] p-7 text-center">
          <h2 className="mb-2 text-xl font-black text-[#e8edf5]">Tell us what you think</h2>
          <p className="mx-auto mb-6 max-w-sm text-sm font-semibold text-[#94a3b8]">
            Fambookagram is an Open Mirror concept being explored. If you&apos;d like to share feedback or interest, send us an email — it goes straight to a real inbox.
          </p>
          {sent ? (
            <div className="rounded-2xl border border-[#26324c] bg-[#1c2740] px-5 py-4 text-sm font-bold text-[#e8edf5]">
              Just hit send in the email that opened — it goes straight to a real inbox. Thank you!
            </div>
          ) : (
            <form onSubmit={join} className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1 rounded-full border-2 border-[#26324c] bg-[#1c2740] px-5 py-3 text-base text-white outline-none placeholder:text-[#6B6B6B] focus:border-[#38BDF8]"
              />
              <button type="submit" style={{ background: A, color: "#0b1220" }} className="rounded-full px-7 py-3 text-sm font-black uppercase tracking-[0.12em] hover:opacity-90 transition">
                Share feedback →
              </button>
            </form>
          )}
        </section>

        {/* Features */}
        <section className="mb-14 grid gap-4 sm:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="pop rounded-2xl border border-[#26324c] bg-[#141d2e] p-6 text-center">
              <div className="mb-3 text-3xl">{f.emoji}</div>
              <h3 className="mb-2 text-base font-black text-[#e8edf5]">{f.title}</h3>
              <p className="text-sm font-semibold leading-6 text-[#94a3b8]">{f.text}</p>
            </div>
          ))}
        </section>

        {/* Quiet placeholder-domain note (DJ, 2026-07-11) */}
        <p className="mx-auto max-w-md text-center text-xs font-semibold leading-6 text-[#64748b]">
          Fambookagram is an Open Mirror concept in testing, on a placeholder domain. If it
          proves valuable, expect a domain change.
        </p>

      </div>
    </main>
  );
}
