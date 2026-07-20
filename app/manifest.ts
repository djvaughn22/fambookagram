import type { MetadataRoute } from "next";

// Installable-app manifest — same app-readiness layer as thedjcares.com,
// stepinthering.com, and idontcry.com.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fambookagram",
    short_name: "Fambookagram",
    description:
      "Your family's private feed. Photos and moments — no ads, no algorithm, no strangers.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0b1220",
    theme_color: "#0b1220",
    icons: [
      { src: "/icons/fam-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/fam-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/fam-192-maskable.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icons/fam-512-maskable.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
