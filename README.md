# pb-email-prefs

A small TypeScript utility library for managing email preference flags using bitwise operations.

Allows multiple toggle-able preferences to be stored in a single integer database column.

## Install

```bash
npm install https://github.com/hex248/pb-email-prefs.git
# or
pnpm add https://github.com/hex248/pb-email-prefs.git
```

## Usage
```ts
import {
	EmailPreference,
	addPreference,
	removePreference,
	hasPreference,
	preferencesAsMap,
} from "pb-email-prefs";

let prefs = 0;

// add some preferences
prefs = addPreference(prefs, EmailPreference.Newsletter);
prefs = addPreference(prefs, EmailPreference.Marketing);

// check that preference is set
console.log(hasPreference(prefs, EmailPreference.Marketing)); // true

// remove a preference
prefs = removePreference(prefs, EmailPreference.Newsletter);

// map all preference to booleans (for populating menus etc.)
console.log(preferencesAsMap(prefs));
// -> { Newsletter: false, ProductUpdates: false, Marketing: true, Events: false }
```

## License

MIT License
