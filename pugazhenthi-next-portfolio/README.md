# Pugazhenthi P — Next.js Portfolio

A from-scratch, responsive portfolio starter built with Next.js App Router, TypeScript, CSS animations, and Lucide icons. The visual direction is creative/dark with acid-green accents and editorial typography, aimed at freelance enquiries.

## Requirements
- Node.js 20.9+ (recommended for Next.js 15)
- npm

## Run locally
1. Extract this folder.
2. In the project folder, run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Create a Web3Forms access key at https://web3forms.com/ and put it in `.env.local` as `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=...`.
5. Run `npm run dev` and open http://localhost:3000.
6. Run `npm run build` before deployment.

The contact key is a public client-side key by design for this service. Check Web3Forms spam controls and restrictions, and do not place private API secrets in `NEXT_PUBLIC_*` variables. The old key was present in the uploaded HTML; rotate it if it is still active.

## Before publishing
- Verify every date, grade, employer, and project description.
- The source portfolio listed Unified Mentor as June–August 2024, overlapping the Shiash internship. This starter flags those dates for confirmation rather than silently assuming they are correct.
- The source project list did not include repository URLs or live demos. Add verified links and real screenshots before treating the projects as portfolio case studies.
- The original image folder was not included in the uploaded files. This design uses CSS-generated artwork so it works without those missing assets. Add a real portrait under `public/images/` if desired and update the hero.
- Replace `https://example.com` in `app/layout.tsx` with the deployed canonical URL before launch.
- Review the phone number and exact public contact details before publishing; this version intentionally uses email as the main contact route.

## Project structure
- `app/page.tsx` — page content, project data, responsive menu, reveal animation, contact form.
- `app/globals.css` — design system, responsive styles, CSS artwork, animation and reduced-motion support.
- `app/layout.tsx` — metadata and root layout.
- `.env.example` — contact form environment variable template.
