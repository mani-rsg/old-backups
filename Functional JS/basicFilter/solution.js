function getShortMessages(messages) {
    // SOLUTION GOES HERE
    return messages.filter(data=> data.message.length<50).map(data=> data.message);
}

module.exports = getShortMessages