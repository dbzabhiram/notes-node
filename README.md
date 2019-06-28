# notes-node
Note-taking application, based upon Node.js. Inspired by Udemy Course on Node.js by Andrew Mead.
This application has four options: adding note, reading note, removing note and listing all notes.

Modules used: fs, lodash, yargs

Steps to run:

1. Download all the files.
2. Open terminal and navigate to the folder containing the above files.
3. You need to install the third-party modules used in the application. 
   This can be directly done by command 'npm install' in the terminal.
4. Start the application by command 'node app.js'
5. There are four operations provided in this application. These can be used by following steps:
   
   i.) Add: To add, just pass 'add' as argument along with title and body. 
       For ex. 'note app.js add -t="Title" -b="Body"'
   
   ii.) Remove: To remove, pass 'remove' as argument along with title. 
        For ex. 'note app.js remove -t="Title"'
   
   iii.) Read: To read, pass 'read' as argument along with title. 
         For ex. 'note app.js read -t="Title"'
   
   iv.) List: To list, pass 'list' as argument. 
        For ex. 'note app.js list'
