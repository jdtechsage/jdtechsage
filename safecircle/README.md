# SafeCircle — Website

A single-page marketing site for **SafeCircle**, a community safety information app (Flutter + Firebase). Built as a static site so it can be hosted for free on GitHub Pages.

- User app package: `com.jdtechsage.safecircle`
- Admin app package: `com.jdtechsage.safecircleadmin`

## What's included

```
index.html                 → main one-page site (hero, how it works, features, privacy, download, FAQ)
privacy-policy.html        → full privacy policy
terms-and-conditions.html  → full terms & conditions
delete-account.html        → account & data deletion instructions (Play Store requirement)
support.html                → contact / help page
404.html                    → custom not-found page
robots.txt / sitemap.xml   → SEO crawling files
assets/css/style.css        → all styling (single stylesheet, CSS variables)
assets/js/main.js           → nav, mobile menu, FAQ accordion
assets/img/                 → logo, favicon, social share image
```

No build step, no dependencies — plain HTML/CSS/JS.

## Before you publish — replace these placeholders

1. **Domain / canonical URLs** — every page has `<link rel="canonical">` and Open Graph tags pointing to `https://www.jdtechsage.com/safecircle/`. Update the domain in each HTML file (and in `robots.txt` / `sitemap.xml`) to match where you actually deploy it.
2. **Google Play link** — the Download button links to `https://play.google.com/store/apps/details?id=com.jdtechsage.safecircle`. This will resolve automatically once the app is published under that package ID; until then it will show a "not found" page on the Play Store.
3. **App Store button** — currently shown disabled ("coming soon") since no iOS bundle ID was provided. Update `index.html` once an iOS build exists.
4. **Support email** — replace `support@jdtechsage.com` throughout if that isn't the right inbox.
5. **Legal pages** — the Privacy Policy, Terms & Conditions, and account-deletion page are drafted from the app's described functionality. Have them reviewed by someone qualified before relying on them for Play Store submission or legal compliance.

## Deploying to GitHub Pages (as jdtechsage.com/safecircle)

`jdtechsage.com` is served by the `jdtechsage/jdtechsage` repo, so this folder needs to live **inside that repo** as a `safecircle/` subfolder — GitHub Pages doesn't support routing a separate repo to a subpath of an already-claimed custom domain.

1. Clone the main site repo: `git clone https://github.com/jdtechsage/jdtechsage.git`
2. Copy this entire folder into it as `jdtechsage/safecircle/` (i.e. `safecircle/index.html`, `safecircle/assets/`, etc. sit alongside your existing `blog/`, `careers/`, `pages/` folders).
3. **Add an entry to the main repo's root `sitemap.xml`**, inside the existing `<urlset>`, alongside the other `<url>` entries:
   ```xml
   <url>
     <loc>https://www.jdtechsage.com/safecircle/</loc>
     <priority>0.9</priority>
   </url>
   ```
4. **Optional but recommended:** add a link to `/safecircle/` in the main site's nav or footer (root `index.html`) so it's discoverable from your homepage, not just a standalone folder.
5. Commit and push to `main`.
6. Within a minute or two it's live at `https://www.jdtechsage.com/safecircle/`.

Nothing needs to change in the main repo's `CNAME` or Pages settings — those already point at `jdtechsage.com` and will serve this subfolder automatically. All internal links/assets in this folder use relative paths, so it works correctly nested under any subfolder without code changes.

**Retiring the old standalone repo:** once `www.jdtechsage.com/safecircle/` is live, disable GitHub Pages on (or delete) the separate `jdtechsage/safecircle` repo currently serving `jdtechsage.github.io/safecircle/` — leaving both live is duplicate content and will hurt SEO.

## SEO notes

- Every page targets the keyword **"SafeCircle"** in the title, meta description, headings, and image alt text.
- `index.html` includes `SoftwareApplication` and `FAQPage` JSON-LD structured data for rich results.
- `sitemap.xml` and `robots.txt` are included — submit the sitemap URL in Google Search Console after deploying.
- Once you have real app screenshots or a demo video, consider adding an `ImageObject`/`VideoObject` schema and a proper Open Graph screenshot beyond the generated cover image in `assets/img/og-cover.png`.
