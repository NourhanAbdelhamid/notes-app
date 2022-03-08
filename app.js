
//Modules(allow you to add functiolaity in your program)
/**
Core Module FileSystem
 */

// require
// terminal --> new terminal 
// run node program    node app.js  node index.js
// ctrl c 
// cls 

// const fs = require('fs')
// fs.writeFileSync('notes.txt','Hellooo')

// // readFileSync return buffer    buffer --> string (toString)
// console.log(fs.readFileSync('notes.txt').toString())

// // appendFileSync
// fs.appendFileSync('notes.txt',' farah')

// console.log(fs.readFileSync('notes.txt').toString())
// ///////////////////////////////////////////////////////////////////////

// //Your own modules

// const x = require('./data')
// console.log(x)
// console.log(x.lName)
// console.log(x.firstName)
// console.log(x.sum(5,5))

// ////////////////////////////////////////////////////////////////////////////

// /**
//  * NPM (Node package manger)
//  * npm init -y Intaize npm (One time)
//  * npm i validator 
//  * return node_module npm i
//  */

// const validator = require('validator')
// console.log(validator.isEmail('osama')) // false
// console.log(validator.isEmail('osama@gmail.com')) // true

// //////////////////////////////////////////////////////////////////////////////

// // Input terminal
// // process.argv
// console.log(process.argv)
// console.log(process.argv[2])
// const command = process.argv[2]

// if(command === 'add'){
//     console.log('Add item')
// }
// else if(command === 'delete'){
//     console.log('Delete item')
// }
// else {
//     console.log('Error')
// }

// node app.js --key="value" 
//////////////////////////////////////////////////////////////////////////

// yargs parse 
// npm i yargs
// Version 1
// node app.js add --title="data" --body="data"
const yargs = require('yargs')
// add
// yargs.command({
//     command:'add',
//     describe:'Add note',
//     handler:()=>{
//         console.log('Add notesss')
//     }
// })
// // delete
// yargs.command({
//     command:'delete',
//     describe:'Delete note',
//     handler:()=>{
//         console.log('Delete notees')
//     }
// })

// // list
// yargs.command({
//     command:'list',
//     describe:'List note',
//     handler:()=>{
//         console.log('List notees')
//     }
// })

// // read

// yargs.command({
//     command:'read',
//     describe:'Read note',
//     handler:()=>{
//         console.log('Read notees')
//     }
// })
///////////////////////////////////////////////////////////////////////////////

// Version 2

// yargs.command({
//     command:'add',
//     describe:'Add note',
//     // Options command deal with
//     builder:{
//         title:{
//             describe:'This is title dsecription in add command',
//             demandOption:true,
//             type:'string'
//         },
//         body:{
//             describe:'This is body dsecription in add command',
//             demandOption:true,
//             type:'string'
//         }
//     },
//     handler:()=>{
//         console.log('Add notesss')
//     }
// })
// // delete
// yargs.command({
//     command:'delete',
//     describe:'Delete note',
//     builder:{
//         title:{
//             describe:'This is title desc in delete command',
//             demandOption:true,
//             type:'string'
//         }
//     },
//     handler:()=>{
//         console.log('Delete notees')
//     }
// })

// // list
// yargs.command({
//     command:'list',
//     describe:'List note',
//     handler:()=>{
//         console.log('List notees')
//     }
// })

// // read

// yargs.command({
//     command:'read',
//     describe:'Read note',
//     builder:{
//         title:{
//             describe:'This is title desc in read command',
//             demandOption:true,
//             type:'string'
//         }
//     },
//     handler:()=>{
//         console.log('Read notees')
//     }
// })
///////////////////////////////////////////////////////////////////////////

// Version 3
const notes = require('./notes')
yargs.command({
    command:'add',
    describe:'Add note',
    // Options command deal with
    builder:{
        title:{
            describe:'This is title dsecription in add command',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'This is body dsecription in add command',
            demandOption:true,
            type:'string'
        }
    },
    handler:(x)=>{
        // console.log(x) // object
      notes.addNote(x.title,x.body)
    }
})
// delete
yargs.command({
    command:'delete',
    describe:'Delete note',
    builder:{
        title:{
            describe:'This is title desc in delete command',
            demandOption:true,
            type:'string'
        }
    },
    handler:(x)=>{
        notes.deletenotes(x.title);
    }
})

// list
yargs.command({
    command:'list',
    describe:'List note',
    handler:()=>{
        notes.listnotes();
    }
})

// read

yargs.command({
    command:'read',
    describe:'Read note',
    builder:{
        title:{
            describe:'This is title desc in read command',
            demandOption:true,
            type:'string'
        }
    },
    handler:(x)=>{
        notes.readnotes(x.title);
    }
})
// console.log(yargs.argv) // handler & object
yargs.parse() // handler

