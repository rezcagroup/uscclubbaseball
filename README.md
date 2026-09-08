# Gamecock Club Baseball

Static marketing site for the University of South Carolina's NCBA club baseball program (D1 &amp; D2), modeled on the structure of gamecockrugby.com.

## Structure

Plain HTML/CSS/JS, no build step — deployable as-is on Vercel, Netlify, GitHub Pages, or any static host.

- `index.html` — home
- `about.html` — club history, D1/D2 overview, board members
- `roster.html` — D1 / D2 roster tables
- `schedule.html` — standings, stat leaders, links to live NCBA/GameChanger schedules
- `donate.html` — GoFundMe + Venmo
- `join.html` — interest form + tryout FAQ
- `404.html`
- `assets/css/style.css` — shared styles (garnet/black theme, Anton + Inter)
- `assets/js/main.js` — mobile nav + roster tab toggle

## Local preview

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173

## Live site

https://gamecockclubbaseball.com/ (GitHub Pages, deploys automatically on every push to `main`)

## Content sources (Sept 2026)

Rosters, board members, standings, and donate/social links were pulled from the club's own public pages and the official [NCBA D1](https://clubbaseball.org/league/team/?team=7fcff00f-5335-44d5-b48e-d39ed31f0968) / [D2](https://div2.clubbaseball.org) team pages.

## SEO

Every page has a canonical URL, Open Graph + Twitter Card tags, and shares `assets/img/og-image.png` as the social preview image. The homepage also carries `SportsTeam` JSON-LD structured data. `robots.txt` and `sitemap.xml` point at the live GitHub Pages URL.

**Still worth doing:**
- Submit `sitemap.xml` to Google Search Console once the club has (or can access) a Google account for the domain
- Consider a custom domain instead of the `github.io` subdomain — it ranks a little better and is easier to put on a jersey
- Rosters and standings are current as of Sept 2026 — refresh each semester/season
- Regenerate `assets/img/og-image.png` if the brand mark or colors ever change
