# Ahli Baba's Website Content Brief

This brief lists every text/image field referenced in the Tailwind prototype. Fill in each placeholder and send the info back so we can swap it into the build.

## Global Info Needed
- **Meta descriptions (per page):** 1–2 sentences that include location + offerings.
- **Brand statements:** short tagline, founding year confirmation, mission sentence.
- **Stats:** e.g., years in business, stand footprints, number of concepts, festivals served per year.
- **Image alt text:** concise description for each hero/menu image to keep the site accessible.

## Home (index.html)
- **Hero kicker / headline / paragraph:** quick summary of Ahli Baba’s story + reach.
- **CTA wording:** text for “Book a Stand” and “Find the Truck” (if different).
- **Stat tiles:** three numbers with labels (e.g., “35+ Years”, “3 Concepts”, “20x20 Footprint”).
- **Overview section:** kicker, headline, paragraph explaining the three business arms.
- **Card content (3 cards):** tag, title, 1–2 sentence description, CTA text for Restaurant, Truck, Vending.
- **Brick & Mortar section:** kicker, headline, paragraph, four bullet points about what makes the restaurant special, plus confirmation of the image/alt text used.

## Menu (menu.html + assets/js/app.js#L1-L48)
- **Meta description + hero text:** kicker, headline, overview paragraph, three badges.
- **Signature section:** kicker, headline, supporting paragraph, CTA text.
- **Pillars (3 cards):** titles + supporting copy (ingredient standards, dietary promises, event scale, etc.).
- **Menu highlights (JS array `menuHighlights`):**
  - For each featured dish: name, 1–2 sentence description, badges (dietary callouts, popularity notes), preferred photo (defaults supplied now).
- **Categories/table structure (if needed later):** list of menu sections, price ranges, seasonal notes.

## Online Ordering (ordering.html + assets/js/app.js#L50-L82)
- **Hero kicker/headline/paragraph:** explain channels (restaurant, truck, festival pre-orders).
- **Primary/secondary CTA text:** e.g., “Request access”, “View ordering options”.
- **Section kicker/headline paragraph:** describe integrations, lead times, staff workflow.
- **Four ordering steps:** bullet sentences describing the process from setup → analytics.
- **Channel cards:** titles + descriptions for Restaurant Pickup, Campus Truck, Event/Crew Meals (or other channels).
- **Button text + contact email/URL:** specify real ordering links or forms once available.

## Vending (vending.html + assets/js/app.js#L84-L116)
- **Hero kicker/headline/paragraph:** highlight geography, festival resume, logistics strengths.
- **Fact tiles (3):** labels + short details (territory, availability, amenities, etc.).
- **Concepts section:** kicker, headline, explanatory paragraph, supporting detail subtext.
- **Concept cards (`vendingConcepts`):** for each concept (Ahli Baba’s, Burger Ranch, Poncho’s, etc.) provide summary, top 2–3 specialties, available footprints.
- **CTA section:** kicker, headline, paragraph describing booking process, CTA button text.

## Food Truck (truck.html + assets/js/app.js#L118-L162)
- **Hero kicker/headline/paragraph:** schedule, vibe, signature items for the truck.
- **Primary CTA + secondary CTA text:** e.g., “Book the truck”, “Pre-order pickup”.
- **Truck stop cards (`truckStops`):** title + detail for each regular location (UVM Green, Burlington nights, private events, etc.). Include days/hours + any ordering instructions.
- **Supporting pillars (3 cards):** highlight campus service, private bookings, technology, or staffing.

## Contact & Booking (contact.html)
- **Tagline/headline/intro paragraph:** set expectations for response time and services.
- **Badges:** quick facts (response time, service area, season, etc.).
- **Direct contact details:** phone, general email, vending email, truck coordinator, PR contact.
- **Social handles:** final IG/FB/TikTok URLs (update placeholders in markup if different).
- **Form labels/content:** example name/email placeholders, textarea prompt, button copy, any privacy note.

## Supporting Content Wishlist
- **Testimonials or press quotes:** optional slider later.
- **Awards or festival list:** for future SEO sections.
- **Ordering platform logos:** confirm partners (Toast, Square, etc.) if we should display them.

Once this doc is filled out, send it back and I’ll import everything into the Tailwind templates + data objects.
