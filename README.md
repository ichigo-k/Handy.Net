# HandyNet IT Solutions: Company Website

The marketing website for **HandyNet IT Solutions**, a Ghanaian business offering IT, electrical and security services. Visitors can browse services by category, read testimonials and FAQs, and send an enquiry straight from the site.

## What's on the site

- **Hero** with an animated service graphic and key stats.
- **Services**, browsable by category tab:
  - *IT Solutions:* CCTV installation and monitoring, laptop repairs, IT support, network and cabling
  - *Electrical Services:* domestic and industrial wiring
  - *Sales & Retail:* laptops and accessories, CCTV systems and parts, electrical supplies
- **About us**, **testimonials** carousel and an accordion **FAQ**.
- **Contact form** that sends enquiries by email through EmailJS, with toast confirmations. There's no backend.
- A custom 404 page.

## Tech stack

React · Vite · React Router · Tailwind CSS · Framer Motion · EmailJS · Lucide icons · Sonner

## Running locally

```bash
npm install
npm run dev
```

The contact form needs your EmailJS service ID, template ID and public key. Set them in `src/components/itservices/ContactForm.jsx`, or move them into `VITE_` environment variables.

```bash
npm run build     # production build to dist/
npm run preview   # serve the build locally
```

## Structure

```
src/constants/index.jsx      services, nav links and copy
src/components/itservices/   page sections (Hero, OurServices, AboutUs, Testimonials, Faq, Contact)
src/pages/                   itSolutions page and 404
```
