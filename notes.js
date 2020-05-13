const fs = require('fs')
const chalk = require('chalk')

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        const notes = JSON.parse(dataJSON)
        return notes
    } catch (e) {
        return []
    }
}

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJSON)
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        const note = {
            title: title,
            body: body
        }
        notes.push(note)
        saveNotes(notes)
        console.log(chalk.green.inverse('A note added!'))
    } else {
        console.log(chalk.red.inverse('ERROR: Title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const newNotes = notes.filter((note) => note.title !== title)
    
    if (notes.length > newNotes.length) {
        const newNotesJSON = JSON.stringify(newNotes)
        fs.writeFileSync('notes.json', newNotesJSON)
        console.log(chalk.green.inverse('The note removed!'))
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    if (notes.length > 0) {
        notes.forEach((note) => {
            console.log(chalk.inverse(note.title))
        })
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(chalk.inverse.bold(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
}