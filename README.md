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

## Content sources (Sept 2026)

Rosters, board members, standings, and donate/social links were pulled from the club's own public pages: the [legacy Google Sites page](https://sites.google.com/view/scclubbaseball/home), [Garnet Gate org page](https://garnetgate.sa.sc.edu/organization/scclubbaseball), and the official [NCBA D1](https://clubbaseball.org/league/team/?team=7fcff00f-5335-44d5-b48e-d39ed31f0968) / [D2](https://div2.clubbaseball.org) team pages.

**Before launch, double check / update:**
- Roster (currently Spring 2025 — refresh each semester)
- Standings and stat leaders (currently live as of Sept 2026 — will change)
- `robots.txt` sitemap URL and `sitemap.xml` (add once a domain is chosen)
- Contact email, if the club wants one listed beyond social/the interest form
