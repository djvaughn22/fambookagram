import type { Metadata } from "next";
import "./globals.css";
import OpenMirrorFooter from "./OpenMirrorFooter";

export const metadata: Metadata = {
  title: "Fambookagram.com — Your Family's Private Feed",
  description:
    "The family feed, minus the noise. Share photos and everyday moments with the people you actually call family — private, calm, and invite-only. Join the waitlist.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <body>
        {children}
        <OpenMirrorFooter siteName="Fambookagram.com" tagline="Your Family's Private Feed" />
      </body>
    </html>
  );
}
