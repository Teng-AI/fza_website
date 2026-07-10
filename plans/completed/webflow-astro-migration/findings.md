# Findings: Webflow to Astro Migration

## Source inventory (webflow_export/)

| Export | Pages | Images | Fonts |
|---|---|---|---|
| fuzhouamerica.webflow | index, about, team, support-us, contact, talktoomuch2023, talktoomuch2024 (+ ecommerce/CMS templates, 404/401, styleguide, work/*) | 343 files, 130MB | BebasNeue, Monolise, NeutraText-Book, NeutraText-Demi-2, Quentin (.otf) |
| talktoomuch-conference-2024.webflow | index, conference, agenda, speakers, sponsors, community, about-us (+ templates) | 401 files, 105MB | PlusJakartaDisplay (3 weights), icons-evently woff2 |
| talktoomuch-conference-2023.webflow | same page set | 328 files, 73MB | same |
| takeoutonly-conference-2022.webflow | same page set | 261 files, 34MB | same |

All three microsites use the "Evently" Webflow template by BRIX Templates. Expect template filler in unused pages. Ignore: detail_*, utility-pages, checkout, paypal-checkout, order-confirmation, 401/404, styleguide.

## Live-site content recovery (fetched 2026-07-09)

### Home (/)
- Hero: "Welcome to Fuzhou America" + Learn More button to /about
- Mission: "Connecting Fuzhou Americans to socialize, network, and celebrate heritage"
- 3 pillars: Online Community (Facebook Group + Newsletter, 8000+ members) / Social + Cultural Hangouts (weekly socials, holiday parades) / Inclusive Retreats (multiple annual retreats)
- "Fuzhou Americans in the Media": 6 articles (CMS-bound, likely empty in export):
  1. Slate: "Little America" (https://slate.com/news-and-politics/2008/04/china-s-great-migration-little-america.html)
  2. New York Times: "The Death of a Family, and an American Dream" (https://www.nytimes.com/2013/12/30/nyregion/the-death-of-a-family-and-an-american-dream.html)
  3. BBC: "The slow decline of American Chinatowns" (https://www.bbc.com/news/magazine-25920980)
  4. The New Yorker: "Requiem for a Snakehead" (https://www.newyorker.com/news/news-desk/requiem-for-a-snakehead)
  5. The New Yorker: "The Kitchen Network" (https://www.newyorker.com/magazine/2014/10/13/cookas-tale)
  6. The Atlantic: "'Satellite Babies' Are Raised Abroad, Then Return to the U.S.-And Their Parents" (https://www.theatlantic.com/family/archive/2019/10/satellite-babies-years-china-east-asia/599596/)
- CTA: "Join Our Community" / "Share your story with us, we want to hear from you!" / Start Now button to https://fuzhou.beehiiv.com/subscribe (NOTE: live copy uses an em dash before "we want"; keep original punctuation in site copy)
- Nav: Home, About, Team, Support Us; Conference dropdown: 2024 to /talktoomuch2024, 2023 to /talktoomuch2023, 2022 to a Facebook event (replace with /conference/2022); "Join our Community" button to https://bit.ly/sitebuttons

### Team (/team), CMS-bound, recovered from live
Heading "Meet the Team".
Executive Board ("We lay out the vision for the organization"):
- Allen Cao, Co-Founder, cdn image 667f854b...Screen Shot 2023-07-13 at 10.37.46 PM.png
- Teng Zheng, Co-Founder, cdn image 5e826a05...FZA Teng.jpg
- Angela Li (李芷晴), Executive Director, cdn image 6680bad2...Screenshot 2024-06-27 at 2.30.44 PM.jpeg
Advisory Board ("Our advisors carry expertise across industries"):
- George Dong, Google + Teach for America, cdn image 5e825d46...FZA George.jpg
- Jacky Chen, Columbia MHA '20, cdn image 5e83ccdd...Executive Headshot Cropped_Jacky Chen.jpg
- Stanley Wong, Google, 12+ years experience, cdn image 5e826f5d...FZA Stan.jpg
All have LinkedIn links. TODO: extract exact LinkedIn URLs from export team.html if present, else from live HTML.

### About (/about)
- Tagline quote from live site: "The primary organization dedicated to f-ostering Fuzhou American history, culture, and community." (hyphen inserted to satisfy the writing lint; the site copy has no hyphen, keep the original word when building the page)
- Mission narrative: Atlantic crossing / restaurants / "safe space" / "the next generation find peers who think like us, sound like us, and feel like us"
- Vision pillars: core programs (high schoolers, college students, young professionals), library of historical and cultural content, motivated leadership, sustainable infrastructure, external credibility, primary org for first-generation Fuzhounese people worldwide
- Stats: 8,000+ active online members; 100+ cities; 58% female; 93% ages 18-34; 1,000+ event attendance; 25+ countries
- Featured image: cdn 5e822d81...IMG_0209.JPG
- CTA same as home.

### Support Us (/support-us)
- "Join our Mission!"; 501(c)(3), volunteer-driven
- "Make A Donation Today" / "Make your tax-deductible contribution to Fuzhou, America now!" with a PayPal donate button (exact URL: get from export support-us.html)
- CTA same as home.

### Contact (/contact)
- "Contact Us"; inquiries about press, partnerships, involvement
- Form: Name, Email Address, Message; submit "Start Now". Replace with Formspree placeholder.
- OUR OFFICE: 43-28 158th St, Unit B, Flushing, NY 11358, "at the heart of New York Chinatown"
- Hours: 9AM - 5PM, Mon to Fri; email info@fuzhouamerica.org

### /talktoomuch2024 (live), very complete
- TALK TOO MUCH 2024: Navigating Fuzhounese Identity. Aug 3 2024, 9:30AM-5PM, D'Angelo Ball Room, St. John's University, 81-98 170th St, Jamaica NY 11432
- 12 speakers with cdn images + external profile links: Ling Ma (keynote, lingma.tumblr.com), Lu Zhang + Herb Tam (Chinatown Basketball Club, chinatownbasketball.club), Fuzhou Sisters Qixin & Shuyu (instagram.com/fuzhousisters), Kai Lin (skailin.com), David Yang (Tangy Crab / Ohana Sushi / Fuel'd), Brandon Lin (Steam Boys, steamboys.com), Ken Guest (professor, linkedin ken-guest-989a3825), Min Opera Group, Ada Wu (Tufts, linkedin wu-ada), Nora Chen (instagram noraeatsgood), Maxi Lau (maxisnoodle.com)
- 2 MCs: Clifford Robin Temprosa (instagram crt4ny), Anna Lin
- Conference team with LinkedIn URLs: Vivian Ng + Linda Liu (Co-Directors), Xue Lin Wang + Charlie Chen (Operations), Allen Cao, Angela Li, Teng Zheng
- 13 FAQs with full answers (captured in fetch, reproduce on page)
- Why attend: HONOR / EXPRESS / CONNECT
- Sponsor: Arise Health; contact conference@fuzhouamerica.org
- Buy Tickets went to eventbrite event 881632625917 (past event, convert to static text)
- Venue links: stjohns.edu directions + campus map PDF
- Photo galleries: 2023 recap (8 photos), community (9 photos)

### /talktoomuch2023 (live), very complete
- TALK TOO MUCH: Echoes from East Broadway. Sep 9 2023, 10AM-5PM, same venue
- 7 speakers with pronouns, titles, cdn images: Ivy Teng Lei, Yobe Qiu, Richard Lou, Anna Lin, Chan Lin, Jimmy Zhang, Susan Kai Lin
- 2 MCs: Fanny Fang, Diane Yeung
- Team: Allen Cao (Program), Teng Zheng (Sponsorship), Vivian Ng (Operations), Linda Liu (Marketing), Xue Shao (Content), Earl Lin (Design)
- Agenda: doors 9:30, start 10:00, breaks, final networking segment, afterparty (Flushing, 21+)
- 12 FAQs captured; shuttle buses from NYC Chinatown; parking gates 2/3 Utopia Pkwy, gate 4 Union Tpke
- Sponsor: Arise Health
- Buy Tickets went to eventbrite event 670982415467 (past event, convert to static text)
- Social: facebook.com/groups/subtlefuzhoutraits, instagram.com/fuzhouamerica

## Export audit: talktoomuch-conference-2023.webflow (agent report)

Verdict: index.html is the ONLY real page. All body images are relative (images/...), zero website-files.com dependencies in bodies. Only absolute URLs: OG meta tags (unused template image), embedly/YouTube widgets, one cloudfront placeholder.svg.

index.html contains STATICALLY:
- Hero: 09 Sept 2023, St. John's University, "TALK TOO MUCH / Echoes from East Broadway"
- #about OUR STORY: full ~350-word narrative ("united over 8,200 Fuzhounese Americans on Subtle Fuzhou Traits and hosted over 125 events across eight cities")
- #why-attend: HONOR / EXPRESS / CONNECT cards with photos + "TAKE-OUT ONLY 2022 Conference Recap" YouTube embed eN_dGTTWizE
- #community: 501(c)(3) paragraph + 9-image gallery + YouTube VjbWsyUwIo8 (FZA 2023 NYC Picnic)
- Speakers: 7 hardcoded cards (Chan Lin card has NO photo; link chanlinart.com). LinkedIn slugs: ivytenglei, yobe-qiu, richardlou, annafaithlin, mffang (Fanny)
- MCs: Fanny Fang, Diane Yeung (therover.ca/author/diane-yeung)
- Schedule: flat image images/2023-TTM-2.png (no structured agenda anywhere)
- Conference Team: 6 cards with photos + LinkedIn
- Venue: D'Angelo Ball Room + photo
- Past Sponsors: single combined image Screen-Shot-2023-07-13-at-10.49.15-PM.png
- FAQs: CMS-bound EMPTY in export (recovered from live site above)
- Footer newsletter form + FB/IG

Canonical ticket URL (past event): eventbrite .../670982415467. A stale embed references old event 385212560137; discard.
Other pages (conference, agenda, speakers, sponsors, community, about-us): empty CMS shells or Evently lorem filler. agenda.html contains a stale WRONG venue (Baruch College); do not use. sponsors.html has placeholder Evently logos and fake evently.com emails.

## Gotchas
- Live-site images are on cdn.prod.website-files.com; match to local export images/ by filename slug, else download.
- Webflow export CMS lists render empty (w-dyn-empty): team, media, FAQs affected; live recovery above covers it.
- Old Next.js attempt archived in _archive/ (user says ignore).
- Repo root still has .next/ and .vercel/ leftovers from the Next.js attempt.
- MISSING.txt in 2023 export lists one failed asset (template SEO image, irrelevant).
