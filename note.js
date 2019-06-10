const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body)=>{
    let notes = loadNotes()
    let duplicatedNote= notes.find(note =>
        note.title === title
    )
    debugger
    if(!duplicatedNote){
        notes.push({
            title:title,
            body:body
        })
        console.log(chalk.green.inverse(`${title} is added`))
        console.log(notes)
        saveNotes(notes)
    }else{
        console.log(`A note with the title "${title}" is already existed. Try a different name!`)
    }

}
const removeNote = (title)=>{
    let notes = loadNotes()
    let newNotes =  notes.filter(note =>note.title !== title)
    if(notes.length > newNotes.length){
        saveNotes(newNotes)
        console.log(chalk.green.inverse(`${title} is removed`))
        console.log(newNotes)
    }else{
        console.log(newNotes)
    }

}
const listNote = ()=>{
    let notes = loadNotes()
    console.log(chalk.cyan.inverse("My Notes.."))
    notes.forEach(note => {
        console.log(chalk.cyan(note.title))
    });
}
const readNote = (title)=>{
    let notes = loadNotes()
    let note = notes.find(note=>note.title===title)
    if(note){
    console.log(chalk.white.inverse(note.title))
    console.log(note.body)    
    }else{
        console.log(chalk.red.inverse(`'${title}' not found`))
    }

}
const loadNotes = ()=>{
    try{
        let dataString = fs.readFileSync('note.json').toString()
        return JSON.parse(dataString)
    }catch(err){
       return []
    }   
}
const saveNotes = (notes)=>{
    let notesJSON = JSON.stringify(notes)
    fs.writeFileSync(`notes.json`,notesJSON)    
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNote:listNote,
    readNote:readNote
}