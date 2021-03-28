const fs = require('fs');

const book = {
    title: "Mani's Book",
    Author: 'Mani'
}

const bookJSON = JSON.stringify(book);

fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
console.log(dataBuffer.toString());
const bookData = JSON.parse(dataBuffer.toString())

console.log(bookData.Author);