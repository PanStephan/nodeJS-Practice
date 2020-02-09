const fs = require('fs')

const removeNote = (title) => {
  const notes = loadNotes()

  const keepNotes = notes.filter(note => note.title !== title) 

  saveNotes(keepNotes)
}

const addNote = (title, body) => {
  const notes = loadNotes()

  const filteredNotes = notes.filter(note => note.title !== title) 

  filteredNotes.push({
    title,
    body
  })

  saveNotes(filteredNotes)
}

const saveNotes = (notes) => {
  const data = JSON.stringify(notes)
  fs.writeFileSync('notes.json', data)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    return JSON.parse(dataBuffer.toString())
  } catch(e) {
    return []
  }
}

const showNote = (title) => {
  const notes = loadNotes()
  
  console.log(notes.filter(note => note.title === title))
}

const showNotes = () => {
  const notes = loadNotes()
  console.log('Your notes:')
  notes.map(note => {
    if(note.body) console.log(note.title, note.body)
    else console.log(note.title)
  })
}

module.exports = {
  addNote,
  removeNote,
  showNotes,
  showNote
}

