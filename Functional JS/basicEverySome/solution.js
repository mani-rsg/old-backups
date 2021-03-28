function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        // SOLUTION GOES HERE
        return submittedUsers.every(user=>{
            return goodUsers.some(data => user.id === data.id);
        });
    };
}

module.exports = checkUsersValid