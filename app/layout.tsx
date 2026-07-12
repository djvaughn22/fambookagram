import type { Metadata } from "next";
import "./globals.css";
import OpenMirrorFooter from "./OpenMirrorFooter";
import OpenMirrorNav from "./OpenMirrorNav";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Fambookagram.com — Your Family's Private Feed",
  description:
    "The family feed, minus the noise. Share photos and everyday moments with the people you actually call family — private, calm, and invite-only. Join the waitlist.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <body>
        <OpenMirrorNav site="Fambookagram.com" />
        {children}
        <OpenMirrorFooter siteName="Fambookagram.com" tagline="Your Family's Private Feed" accent="#C084FC" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NKYBVC72ZT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NKYBVC72ZT');`}
        </Script>
      </body>
    </html>
  );
}
