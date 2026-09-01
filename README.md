# MediCare Plus — Pharmacy Website 💊

A modern, production-quality **React + Vite** pharmacy website for Pakistan, featuring a stunning landing page and a full product shop.

## 🔗 Live Demo
https://static.teamily.ai/sites/7a540d25-b8ec-4c95-a46e-c12d11d61cc2/webpages/pharmacy-website_v2/index.html

## ✨ Features

### Landing Page
- **Hero** — animated typewriter headline, gradient CTAs, parallax background, floating stat cards, pulse badge
- **Services** — 6 animated service cards (prescription refills, express delivery, consultations, reminders, billing, health records)
- **Stats** — animated number counters (250K+ customers, 12,000+ products, 150+ cities, 98% on-time)
- **Why Us** — trust points with floating "12+ years" badge
- **Testimonials** — customer reviews with star ratings + trust badges (DRAP, SSL, payments, cold chain)
- **Footer** — contact info, quick links, working newsletter signup

### Product Shop
- **25 products** across 7 categories (Skin Care incl. real ARCU GLEAM Face Wash, Pain & Fever, Antibiotics, Vitamins, Diabetes Care, Heart & BP, Skin & Allergy)
- Realistic **PKR pricing** with discounts and ratings
- **Category filter chips** + live **search**
- **Product detail modal** — description, dosage, quantity selector, prescription tags
- **Shopping cart** — add/remove, quantity controls, subtotal/delivery/total, free-delivery threshold, localStorage persistence

### Real Product Highlight
**ARCU GLEAM Face Wash 100ml** — Deep Clean · Oil Control · Hydration Boost for acne-prone skin. Salicylic Acid (deep cleanses & unclogs pores), Niacinamide (controls oil & improves skin tone), Hyaluronic Acid (hydrates & maintains skin barrier). Shown with its real product photo.

### Design
- Teal/green/white professional healthcare palette
- Scroll-reveal animations, hover effects, floating elements
- Fully responsive (mobile, tablet, desktop)

## 🚀 Getting Started

```bash
npm install
npm run dev      # development server
npm run build    # production build (outputs to dist/)
npm run preview  # preview the production build
```

## 📁 Structure

```
pharmacy-website/
├── index.html
├── package.json
├── vite.config.js
├── public/products/       # real product photos (ARCU GLEAM)
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data/products.js
    ├── hooks/useReveal.js
    ├── styles/global.css
    ├── styles/app.css
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Services.jsx
        ├── Stats.jsx
        ├── WhyUs.jsx
        ├── ProductCard.jsx
        ├── ProductGrid.jsx
        ├── ProductModal.jsx
        ├── Cart.jsx
        ├── Testimonials.jsx
        └── Footer.jsx
```

## 🛠 Tech Stack
React 18 · Vite 6 · CSS3 (custom properties, animations, media queries)

---
© 2026 MediCare Plus (Pvt) Ltd. — Demo project featuring real ARCU GLEAM inventory.