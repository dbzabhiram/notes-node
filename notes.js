const fs = require('fs');

var fetchNotes = () => {
    //To get existing notes from notes-data.json, we use readFileSync
    //Incase the file don't exist, then the method throws something like FileNotFoundException
    //This is handled by the try-catch blocks
    try{
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch(e){
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};
 
var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title, //ES6 format
        body
    };

    //To handle notes with duplicate titles, we use an array function called filter,
    //which check every note that already exist in the notes-data. If the title is same,
    //we take out that note and save it to duplicates. If there is a note with same title, we don't put the new note.
    //We have used the arrow function in the filter method along with ES6 notation of using no curly brackets
    //in case there is just one statement. In earlier version, it would have been
    //var duplNotes = notes.filter((note) => {
    //  return note.title === title;    
    //});

    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}

var getAll = () => {
    return fetchNotes();
}

var getNote = (title) => {
    var notes = fetchNotes();
    var note = notes.find((note) => (note.title === title));
    return note;
}

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
}

var logNote = (note) => {
    //debugger;
    console.log('------');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNote, //Using shortcut in ES-6, btw it is written as: "addNote: addNote"
    getAll,
    getNote,
    removeNote,
    logNote
};

/* Past work

//console.log('Notes.js accessed...');

//Exports is used to tell the variable (which is required by other files) that which 
//properties of the the file has it access to.

module.exports.age = 22;

//Exporting function

module.exports.addNote = () => {
    //console.log('Adding note.');
    return 'New note';
}

module.exports.add = (A,B) => {
    //console.log('Add function called!');
    return A + B;
}
*/