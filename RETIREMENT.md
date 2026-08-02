# Retired — 2026-08-02

Fambookagram was retired as a standalone Open Mirror product on
**August 2, 2026** (owner decision). It is no longer maintained, renewed,
marketed, or for sale as a standalone site.

## Where the concept lives now

The idea — a private, warm family feed with no ads, no algorithm, and no
strangers — moved into iDontCry, the family's digital playground:

- **New home:** https://www.idontcry.com/fambookagram
- **Sister concept:** https://www.idontcry.com/friendbookagram
- Built in the iDontCry repo (`djvaughn22/idontcry`), commit `b082588`.

## What this repo holds

- Complete Git history of the standalone site (preserved — do not squash or delete).
- The original landing page copy (see history before this date) and PWA icons
  in `public/icons/`.
- `app/page.tsx` now serves a quiet pointer page to the new iDontCry home for
  as long as the domain resolves.

## Owner follow-ups (manual)

- **GoDaddy:** let fambookagram.com lapse at renewal, or keep it and point
  it at idontcry.com/fambookagram. No other DNS records matter for this site.
- **Vercel:** the `fambookagram` project can stay (serves the pointer page)
  or be deleted once the domain lapses.
- **Google Analytics:** property `G-NKYBVC72ZT` can be archived.
- No env vars, databases, email addresses, OAuth redirects, webhooks, or forms
  were tied to this domain (the feedback button was a mailto to
  ask@openmirrorllc.com, which is shared LLC mail and unaffected).
