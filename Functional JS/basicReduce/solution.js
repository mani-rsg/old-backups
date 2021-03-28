function countWords(inputWords) {
    // SOLUTION GOES HERE
    return inputWords.reduce((wordCount, currentWord) => {
        wordCount[currentWord] = ++wordCount[currentWord] || 1;
        return wordCount;
    }, {});
}

module.exports = countWords