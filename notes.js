const fs = require('fs');
const { title } = require('process');

const addNote = (title,body) =>{
    const notes = loadNotes() // []    [{title:"new1",body:"body1"}]
    const dublicatetitle=notes.filter((obj)=>{
        return obj.title===title;
    })
    if(dublicatetitle.length==0){
        notes.push({  // [{title:"new1",body:"body1"},{title:"new2",body:"body2"}]
            title:title,
            body
            
        })
        saveNotes(notes)
        console.log('saved successfully')
    }
    else{
        console.log('error');
    }

}


const loadNotes = () =>{
    // error (first time run)
    // const dataBuffer = fs.readFileSync('notes.json').toString()
    // return JSON.parse(dataBuffer) // Object
    try{

    const dataBuffer = fs.readFileSync('notes.json').toString()
    // console.log(dataBuffer) //json
    return JSON.parse(dataBuffer) // Object // [{title:"new1",body:"body1"}]
    }
    catch{
        return []
    }
}

const saveNotes = (notes) =>{
    // console.log(notes)
 // [{title:"new1",body:"body1"}] --> [{"title":"new1","body":"body1"}]
 // [{title:"new1",body:"body1"},{title:"new2",body:"body2"}]
    const saveData = JSON.stringify(notes)
    // console.log(saveData)
    fs.writeFileSync('notes.json',saveData)
}


const deletenotes=(title)=>{
    const notes=loadNotes();
    const keepnotes=notes.filter((obj)=>{
        return obj.title!==title;
    })
    console.log(keepnotes);
    saveNotes(keepnotes);
    console.log('deleted');
}


const readnotes =(title)=>{
    const notes=loadNotes()
    const note=notes.find((obj)=>{
        return obj.title===title
    })
    if(note){
        console.log(note.body);
    }
    else{
        console.log('not found');
    }
}

const listnotes=()=>{
    const notes=loadNotes();
    const list=notes.forEach(element => {
        console.log(element)
        return element;
        
    });
}

module.exports = {
    addNote,
    deletenotes,
    readnotes,
    listnotes,
}