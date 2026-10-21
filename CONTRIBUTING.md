# Contributing to Medora

Thanks for helping make medicine prices visible to more people. Medora is an open-source Hacktoberfest project, and contributions of every size are welcome.

## The one rule that matters most

**Never invent medicine data.** Every brand, molecule, strength and price in `data/drugs.json` must come from a published source - the PM Jan Aushadhi product list or NPPA ceiling prices. If you cannot cite the source for an entry, do not add the entry. A wrong price in this app can cost a real patient real money.

Medora is price and molecule information only. Contributions must never add medical advice, dosage suggestions, drug interaction checks, or substitution recommendations.

## Ways to contribute

1. **Add verified medicines** - the most valuable contribution. Follow the data format below.
2. **Improve fuzzy search** - better handling of misspellings, transliterations (for example `bukhar` brands written in Roman Hindi), and strength parsing.
3. **Translations** - Hindi first, then other Indian languages, for the interface text.
4. **Accessibility** - larger text, better voice flows, simpler language.
5. **Jan Aushadhi Kendra data** - verified Kendra locations for more cities, with the official listing as the source.

## Data format

Each entry in `data/drugs.json`:

```json
{
  "brand": "Brand Name",
  "generic": "Molecule Name",
  "strength": "500 mg",
  "pack": "10 tablets",
  "brandedPrice": 100,
  "genericPrice": 25
}
```

- Prices are per pack, in INR, and indicative.
- One brand per entry. If two brands share a molecule and strength, add both - that comparison is the point of the app.
- Keep the file sorted roughly by brand name and keep it valid JSON (no trailing commas, no comments).

## Development

No build step and no dependencies.

```bash
python -m http.server 8000
```

Open `http://localhost:8000`, make your change, and test a search, a misspelt search (`paracitamol`), the prescription total, and offline mode (DevTools > Network > Offline, then reload) before opening a pull request.

## Pull requests

- Small, focused pull requests are easier to review and merge.
- Say what you changed and, for data changes, link the source you used.
- Use clear commit messages, for example `data: add verified Jan Aushadhi entries for thyroid medicines`.

## Code style

- Keep the code dependency-free plain HTML, CSS and JavaScript.
- Comment only where the logic is genuinely not obvious. No decorative or filler comments.

By contributing, you agree that your contribution is licensed under the MIT Licence.
