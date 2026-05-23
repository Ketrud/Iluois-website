# Iluõis – Next.js / Vercel projekt

Professionaalne mitmeleheline veebileht brändile **Iluõis**.

## Sisaldab
- Next.js 14 App Router
- eraldi lehed: avaleht, massaaž, teraapia, jooga, hooldusteenused, kontakt
- eesti ja inglise keel: `/et` ja `/en`
- SEO metaandmed igal lehel
- Google leitavuse jaoks `sitemap.ts`, `robots.ts`, structured data
- mobiilimenüü
- broneerimis-/kontaktvorm
- API route e-maili saatmiseks
- GDPR/cookie banner
- professionaalsed animatsioonid Framer Motioniga
- logo fail `public/logo.png`

## Käivitamine arvutis

```bash
npm install
npm run dev
```

Ava brauseris:

```bash
http://localhost:3000
```

## Vercelisse laadimine

1. Laadi kogu kaust GitHubi.
2. Ava Vercel.
3. Import Project.
4. Vali GitHub repository.
5. Vajuta Deploy.

## Kontaktvormi e-maili seadistus

Lisa Vercelis Environment Variables alla:

```bash
SMTP_HOST=sinu-smtp-server
SMTP_PORT=587
SMTP_USER=sinu-emaili-kasutaja
SMTP_PASS=sinu-emaili-parool
CONTACT_TO=ketrudtyhane@gmail.com
```

Kui SMTP andmeid pole veel, vorm töötab kasutajaliideses, aga e-maili saatmine vajab serveri seadistust.

## Logo

Logo on lisatud:

```bash
public/logo.png
```

## Domeen

Hiljem saad Vercelis lisada oma domeeni, näiteks `iluois.ee`.
