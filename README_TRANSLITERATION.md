# Hebrew Transliteration Integration

## Current Status

This repository contains experimental work on integrating Hebrew transliteration functionality into Sefaria. The work is currently in a standalone format and needs guidance on proper integration into the existing Sefaria framework.

## What's Working

- **Standalone trilingual page**: `trilingual_format_v2.html`
- **Transliteration server**: `transliteration_server.js`
- **Hebrew-Transliteration-English display** with mostly maintained 1:1 word correspondence
- **Custom schema support** using Charles Loder's hebrew-transliteration library
- **Print optimization** for different orientations

## Current Implementation

### Files
- `trilingual_format_v2.html` - Standalone page showing trilingual format
- `transliteration_server.js` - Express server providing transliteration API

### Features
- Fetches Hebrew text from Sefaria API v3
- Generates transliteration using [hebrew-transliteration](https://github.com/charlesLoder/hebrew-transliteration) library (MIT licensed)
- Displays Hebrew, transliteration, and English in responsive layout
- Supports custom JSON schema uploads
- Print-optimized CSS for portrait/landscape modes

### Dependencies
```bash
npm install hebrew-transliteration express cors
```

### Running
```bash
# Start transliteration server
node transliteration_server.js

# Open trilingual_format_v2.html in browser
```

## Integration Challenge

**Current Issue**: This work exists as a standalone page and is NOT integrated into the existing Sefaria codebase. 

**Need Help With**:
- How to properly integrate transliteration into existing Sefaria page structure
- Architecture guidance for adding transliteration to the React components
- API integration approach
- User preference handling for different transliteration schemas

## Technical Approach

Using Charles Loder's hebrew-transliteration library which:
- Supports multiple schemas (SBL Academic, etc.)
- Allows custom transliteration schemas
- Provides excellent Hebrew-to-Latin transliteration
- Is MIT licensed and actively maintained

The current approach generates transliteration on-demand in the browser, but this could be optimized based on Sefaria team guidance.

## Questions for Sefaria Team

1. Is there existing transliteration work in progress?
2. What's the best way to integrate this into the existing page structure?
3. Should transliteration be client-side, server-side, or cached?
4. Where should transliteration functionality live in the current React codebase?
5. How should user preferences for transliteration schemas be handled?

---

*This is experimental work seeking guidance on proper integration approach.*