import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import MathquillExtension from "./src/index"

new Editor({
  element: document.querySelector('.element'),
  extensions: [
    StarterKit,
    MathquillExtension
  ],
  content: '<p>Hello World!</p>',
})