# tiptap-mathquill

> **Warning** all docs below are theoretical. I have yet to implement this (as I'm writing these docs on the move).

tiptap extension for editing math in MathQuill, using dynamic script injection

## How does it work?

MathQuill is not built to handle the modern module-dependent web. It uses classic CDN modules instead. This causes some problems when trying to import it as a package, thus it instead requires dynamic mathquill script injection.

## Usage

```ts
import MathquillExtension, { load } from "tiptap-mathquill"

// on your mount function or similar, call load:
await load();

// then, you can use the mathquill extension similar to any tiptap extension
```

This, by default, gets scripts from a CDN. If you want to load it in with your own scripts (e.g. imported from node_modules or similarlly), inject them into your own app. The MathQuill extension will error out if any of the two global variables necessary (jQuery's `$` or `MathQuill` are not present. Thus, if you do this manually, make sure to load both jQuery and MathQuill
