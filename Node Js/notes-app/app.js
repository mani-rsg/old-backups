const getNotes = require('./notes');
const yargs = require('yargs');
const msg = getNotes();
console.log(msg);

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: () => {
        console.log('Listing your notes..!');
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log('Reading a note: '+argv.title);
    }
})

yargs.parse();