const yargs = require('yargs')
const notes = require('./notes')

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: false,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body)
  }
})

yargs.command({
  command: 'show_notes',
  describe: 'Show notes',
  builder: {},
  handler: () => {
    notes.showNotes()
  }
})

yargs.command({
  command: 'show_note',
  describe: 'Show note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
  },
  handler: ({title}) => {
    notes.showNote(title)
  }
})

yargs.command({
  command: 'remove',
  describe: 'Remove a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.removeNote(argv.title)
  }
})

yargs.parse()