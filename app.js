const note = require("./note.js")
const yargs = require("yargs")


// create read command
yargs.command({
    command: "read",
    describe: "read a note",
    builder:{
        title:{
            describe: "Note title",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv) { 
            note.readNote(argv.title)
    }

})

// create add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder:{
        title: {
            describe: "Note title",
            demandOption:true,
            type:"string"
        },
        body: {
            describe: "Note body",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){note.addNote(argv.title, argv.body)} 
            


})

// create remove command
yargs.command({
    command: "remove",
    describe: "removing note",
    builder:{
        title: {
            describe: "Note title",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){ 
        note.removeNote(argv.title)
    }

})

// create list command
yargs.command({
    command: "list",
    describe: "lists all notes",
    handler () { 
            note.listNote()
    }

})


yargs.parse()
