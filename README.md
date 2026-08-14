# Deshmukh Coaching Institute

Production website for **Deshmukh Coaching Institute** — a premium, student-focused coaching brand with the tagline *Learn. Prepare. Achieve.*

Built with Next.js, TypeScript, Tailwind CSS, and Lucide icons. All public copy, photos, faculty, courses, results, and contact details are editable from one file.

## Edit website content

Open [`src/content/site.ts`](src/content/site.ts) and replace placeholder values with verified institute information:

- Institute name, tagline, SEO title/description, and website URL
- Phone, WhatsApp, email, address, opening hours
- Google Maps embed URL (`contact.mapEmbedUrl`)
- Hero stats, courses, subjects, faculty, results, achievers, testimonials, FAQs, and blog posts
- Social media URLs

Replace images in `public/images/` while keeping the same filenames, or update the `src` paths in `site.ts`. Faculty and student cards are labelled as placeholders until real photos and permissions are added.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm run start
npm run lint
```

## Connect the enquiry form

`POST /api/enquiry` currently validates submissions and returns success. Connect this route to email, WhatsApp Business, or a CRM before launch.

## Notes before going live

- Replace sample results, testimonials, and faculty biographies with verified content.
- Do not publish unverified ranks or photographs of students without consent.
- Have the Privacy Policy and Terms pages reviewed.
- Update `site.url` so Open Graph tags, sitemap, and structured data use the real domain.
