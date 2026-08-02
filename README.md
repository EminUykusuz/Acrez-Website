<img width="1878" height="923" alt="image" src="https://github.com/user-attachments/assets/87e38afa-21c1-454c-8da0-59d2efe403db" />


# Acrez Website

This repository contains the Acrez marketing website built with Vite, React and Tailwind CSS.

## Quick start

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Notes
- `public/robots.txt` and `public/sitemap.xml` were added; replace `example.com` with your actual domain.
- Language support is implemented via `src/context/LanguageContext.jsx` with `nl`, `en`, `de` translations.
- Selected language is persisted to `localStorage` under key `acrez_lang`.

## Deploy
Push to your repository and use your preferred hosting (Vercel, Netlify, GitHub Pages, etc.).

## GitHub remote push (example)

If the remote is not set, run:

```bash
git remote add origin https://github.com/EminUykusuz/Acrez-Website.git
git branch -M main
git add -A
git commit -m "chore: remove favicon, add README"
git push -u origin main
```

If `origin` already exists, just run:

```bash
git add -A
git commit -m "chore: remove favicon, add README"
git push origin main
```

# Acrez Web 2

Bu proje, Acrez marka için hazırlanmış modern bir React + Vite landing page uygulamasıdır.

## Kurulum

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Özellikler

- React Router ile çok sayfalı yapıda gezinme
- Lenis ve GSAP tabanlı yumuşak scroll animasyonları
- İletişim formu için EmailJS entegrasyonu hazırlığı
- Tailwind tabanlı modern tasarım

## Not

İletişim formunu aktif etmek için proje kökünde şu ortam değişkenlerini tanımlayabilirsin:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
