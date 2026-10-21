# Medora - Sasti Dawai, Sahi Jaankari

Medora turns a branded medicine name into the two things a patient actually needs to know: **what molecule is this, and what should it cost?**

A patient is handed a prescription of brand names, takes it to a chemist, and pays what they are told. For a large share of those drugs an identical generic exists at a fraction of the price - the same molecule, the same strength, a different name on the box. Jan Aushadhi Kendras stock them and publish their prices openly. Medora makes that gap visible *before* the money is paid.

Built for **GDG On Campus SRMCEM Hackfest, Lucknow** - Problem Statement 3: *The Prescription You Cannot Read* (Pharmacy Retail).

## The headline

```
₹240 → ₹28
```

The saving is the product. Everything else is detail.

## What it does

- **Fuzzy medicine search** - type a brand name or a molecule, with misspellings, missing strength, or a half-read word (`paracitamol`, `dolo 65`, `pantp`). Plain string matching is not used; results are scored with Levenshtein-based similarity and every result shows its match confidence.
- **Generic + strength + price** - returns the generic (molecule) name, strength, pack size, branded MRP and the indicative Jan Aushadhi price, with the saving as the headline.
- **Whole prescription at once** - add medicines to a prescription list and see the total branded cost vs total generic cost and the total saving.
- **Speak and Listen Mode** - Hindi/English voice search, and the result is read aloud in Hindi: generic name, price and saving.
- **Counter Shield Mode** - one tap shows a full-screen, big-text Hindi card to silently show the chemist: *"Kripya mujhe iska generic dijiye"* with the molecule, strength and Jan Aushadhi price.
- **Chronic Saving Calculator** - for medicines taken every month, it shows the monthly, yearly and 10-year saving.
- **Nearest Jan Aushadhi Kendra - live** - 10 real Lucknow Kendras bundled in `data/kendras.json` (names, addresses and coordinates from official Jan Aushadhi / PMBI listings). Tap **Use My Location** and the list re-sorts by real distance from the user (browser Geolocation + haversine, no API key), nearest first, with the distance shown. Every Kendra also has a **Get Directions button that opens Google Maps with the Kendra set as the destination**, a View on Map button, and a tap-to-call phone number where publicly listed. The same page also carries the **complete published all-India Kendra list: 16,912 Kendras** in `data/kendras-india.json` (Kendra code, contact person, phone, state, district, pincode and address, parsed from the published PMBI Kendra list PDF, Oct 2025 edition). It loads on demand (2.5 MB, not on first paint), is searchable by state, district, pincode, name or address, and every result has tap-to-call plus Google Maps Directions / View on Map buttons. Kendra details change as new stores open; verify on the official PMBI locator before travelling far.
- **10 languages, English by default** - a language selector in the header switches the whole interface (and the voice language) between English, Hindi, Telugu, Tamil, Bengali, Marathi, Kannada, Malayalam, Gujarati and Punjabi. Longer text falls back to English where a translation is not yet available - contributions welcome.
- **Light / dark theme toggle** - saved on the device, like the language choice.
- **Icons, no emojis** - the interface uses Bootstrap Icons throughout.
- **Printable sheet + WhatsApp share** - a clean sheet to hand across the counter, or a list to send to family.
- **Works fully offline** - a Progressive Web App (PWA). All data ships inside the app as JSON; no server, no sign-up, works on a cheap phone with a bad signal. Installable to the home screen.

## Photo reading and Gemma 4 (Best Use of Gemma track)

Medora uses **Gemma 4** (open-weights, by Google) for one specific job it is genuinely needed for: **reading the printed brand name off a photograph of a medicine strip or box**, including correcting a mis-read or misspelt name before it is matched against the dataset.

- **Which model:** a Gemma 4 vision model served through Google AI Studio. The exact model ID is entered by the user in the app's Gemma section, together with their own free AI Studio API key. Both are stored only on that device (`localStorage`) - nothing is uploaded to any Medora server; there is no Medora server.
- **Where it runs:** on Google AI Studio's hosted endpoint, called directly from the browser.
- **What it is asked to do:** one narrow prompt - *"Read only the printed medicine brand name and strength from this photo. Reply with just the name and strength."*
- **What it never does:** Gemma never generates drug information in Medora. Every molecule, strength and price shown comes only from the bundled Jan Aushadhi dataset in `data/drugs.json`. If a medicine is not in the dataset, Medora says so - it never invents a price.
- **Honest limits:** OCR on handwriting is genuinely hard, so photo reading is for *printed* strips and boxes only. Typing is always available and always works, with or without a Gemma key.

## Disclaimer

Medora shows **price and molecule information only. It is not medical advice** and it never suggests a substitution decision. Prices are indicative: branded MRP versus the published Jan Aushadhi price for the same molecule and strength. **Always confirm with your doctor or pharmacist** before buying a generic alternative.

## Data

- `data/drugs.json` - a hand-curated subset of common medicines: brand name, molecule (generic), strength, pack, indicative branded price and Jan Aushadhi price.
- Sources: PM Jan Aushadhi (PMBI) published product list and prices; National Pharmaceutical Pricing Authority (NPPA) ceiling prices.
- Curating a smaller set well was a deliberate choice - it keeps the app fast, offline and verifiable. Contributions adding verified entries are welcome (see `CONTRIBUTING.md`).

## Run it

No build step, no install.

```bash
# Option 1 - just open it
# Open index.html in a browser

# Option 2 - local server (recommended, enables offline PWA)
npx serve .
# or
python -m http.server 8000
```

Then open the local address on your phone or computer, search for `Dolo`, and try a misspelling like `paracitamol`.

## Environment (optional, Gemma photo reading only)

The app runs with no configuration at all. To enable Gemma photo reading on your own machine:

```bash
cp .env.example .env
```

Then fill in your own values in `.env`:

```
GEMMA_API_KEY=your-free-google-ai-studio-key
GEMMA_MODEL_ID=your-gemma-4-vision-model-id
```

**Never commit `.env`.** It is listed in `.gitignore` on purpose: this is a public repository, and a committed API key will be scraped and can be revoked automatically by the provider's secret scanning. Only `.env.example` (with empty values) belongs on GitHub. On a deployed site without a `.env`, the same key and model ID can instead be entered on the About page, where they are stored only on that device.

## Deploy

Any static host works - GitHub Pages, Netlify, Vercel. Publish the repository root as-is.

## Project structure

Medora is a multi-page app - each page is a real route, sharing one stylesheet and small focused scripts:

```
medora/
  index.html          Search page - fuzzy search, voice, photo, result, Counter Shield
  prescription.html   My Prescription - list, total saving, Chronic Calculator, print, WhatsApp
  kendras.html        Nearest Jan Aushadhi Kendras
  about.html          About, data sources, Gemma 4 settings, disclaimer
  css/
    style.css         Shared mobile-first design for all pages
  js/
    common.js         Shared logic - fuzzy search, data loading, prescription storage (localStorage)
    i18n.js           Translations for 10 languages, language selector and theme toggle
    home.js           Search page behaviour
    prescription.js   Prescription page behaviour
    about.js          Gemma settings on the About page
    kendras.js        Kendra list rendering, geolocation and distance sorting
  data/
    drugs.json        Curated medicine dataset (brand, molecule, strength, prices)
    kendras.json      Lucknow Jan Aushadhi Kendras with addresses and coordinates
  icons/
    icon.svg          App icon
  manifest.json       PWA manifest
  sw.js               Service worker - caches all pages and data for offline use
```

The prescription is stored in the browser (`localStorage`), so it stays intact as the user moves between pages, with no account and no server.

## Tech

- Plain HTML, CSS and JavaScript - zero dependencies, zero build, so it loads on slow connections and never breaks at demo time.
- Fuzzy matching: normalised Levenshtein similarity over brand and molecule names, with a strength bonus, implemented in `js/common.js`.
- PWA: `manifest.json` + service worker (`sw.js`) caching all pages and the dataset for offline use.
- Voice: Web Speech API (`SpeechRecognition` + `speechSynthesis`), Hindi first.
- Photo reading: Gemma 4 vision via the Google AI Studio API (optional, user-supplied key).

## Credits

- Problem statement: GDG On Campus SRMCEM Hackfest, Lucknow (MLH track: Best Use of Gemma 4).
- Data: PM Jan Aushadhi / PMBI and NPPA, Government of India.
- Model: Gemma 4 by Google (open weights, Apache 2.0), accessed via Google AI Studio.
- Built with the help of Muse (Meta AI assistant) - scaffold, dataset formatting and code assistance during the hackathon build window.

## Licence

MIT - see `LICENSE`.
