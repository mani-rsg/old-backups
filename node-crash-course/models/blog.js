const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

//* the name we keep here is important coz it will search the pluralized word in the db by default here in this case it will search for 'blogs'. So there is no need to find the blogs collection as it will be automatically fetched.
const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog;


