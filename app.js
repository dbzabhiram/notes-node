const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('list', 'List all notes')
    .help()
    .argv;

var command = argv._[0];

if(command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log('Note created.');
        notes.logNote(note);
    } else{
        console.log('Note title taken.');
    }
} else if(command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = (noteRemoved === true ? 'Note removed.' : 'Note not found.');
    console.log(message);
} else if(command === 'read'){
    var note = notes.getNote(argv.title);
    if(note){
        console.log('Note received.')
        notes.logNote(note);
    } else{
        console.log('Note not found');
    }
} else if(command === 'list'){
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} notes.`);
    allNotes.forEach(element => notes.logNote(element));
} else {
    console.log('Command not recognized.');
}

/* Past work
//console.log('Starting app.js...');

//console.log('Process:', process.argv);
//console.log('Yargs:', yargs.argv);

//Requiring fs module
//It is saved in constant fs, since we do not to make changes to fs module.
//Requiring os module
//Requiring notes.js module, we need to specify relative path ->
// '.' represent current directory, '/{folder(s)_name}/{file_name}'
//Require _ module for lodash npm module
 
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

//User variable saves the userInfo object

var user = os.userInfo();

//To append file, we use appendFile function
//We give three arguments, first is the file name
//second is the data that is append to that file
//third is the callback function, which is necessary for non-blocking purpose of Node.js
//as we are doing I/O operations in this function.

//Original data to appendFile: 'Hello '+user.username+'!'
//We have used ES6 feature called template. It can be used by writing content in uptick(`) which is beside 1 on keyboard
//The variable is put into template by ${}.

fs.appendFile('greeting.txt', `Hello ${user.username}! You are ${notes.age}.`, function(err){
    if(err){
        console.log('Cannot write in this file');
    }
});

//Using the exported function addNotes
var res = notes.addNote();
//console.log(res);

var add = notes.add(5, -2);
//console.log(add);

//To check lodash functions isString
console.log(_.isString(true));
console.log(_.isString('Abhi'));
*/