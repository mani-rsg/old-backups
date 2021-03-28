const fs = require('fs');

//reading files
fs.readFile('./docs/test.txt', (error, data) => {
    if (error) {
        console.error(error, 'unable to read file');
        return;
    }
    console.log(data.toString());
})

//write files

fs.writeFile('./docs/test.txt', 'Hello World', (error) => {
    if (error) {
        console.log(error, 'unable to write file');
        return;
    }
    console.log('Wrote successfully');
})

//directories
if (!fs.existsSync('./docs')) {
    fs.mkdir('./docs', (err) => {
        if (err) {
            console.error(err, 'unable to create a directory');
            return;
        }
        console.log('Folder Created');
    })
}
else{
    fs.rmdir('./docs', (err)=>{
        if(err){
            console.error(err, 'unable to delete a folder');
        }
    })
}

// deleting files

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (error)=>{
        if(error){
            console.error(error, 'unable to delete file');
            return;
        }
        console.log('file deleted');
    })
}
