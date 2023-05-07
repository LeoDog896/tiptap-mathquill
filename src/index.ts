import { Node } from '@tiptap/core'

const MathquillExtension = Node.create({
  name: 'mathquill',

  content: 'inline*',
  group: 'inline',
  inline: true,
  selectable: false,
  atom: true,

  // do your stuff here
})

export { MathquillExtension }

export default MathquillExtension