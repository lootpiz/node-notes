const yargs = require('yargs')
const notes = require('./notes.js')

yargs.command('add', 'Adding a note', {
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            tyep: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command('remove', 'Removing a note', {
    descrive: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command('read', 'Reading a note', {
    descrive: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.command('list', 'Lising all notes', {
    descrive: 'List all notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: false,
            type: 'string'
        }
    },
    handler() {
        notes.listNotes()
    }
})

yargs.parse()