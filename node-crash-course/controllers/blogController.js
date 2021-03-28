// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete
const Blog = require('../models/blog'); //* Blog Model
const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('blogs/index', { title: 'All Blogs', blogs: result })
        })
        .catch(error => {
            console.error(error);
        })
};

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('blogs/details', { blog: result, title: 'Blog Details' });
        })
        .catch(error => {
            console.error(error);
        })
}

const blog_create_get = (req, res) => {
    res.render('blogs/create', { title: 'New Blog' });
}

const blog_create_post = (req, res) => {
    // console.log(req.body);
    const blog = new Blog(req.body);

    blog.save()
        .then(() => {
            res.redirect('/blogs');
        })
        .catch(error => {
            console.error(error);
        })
}

const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(() => {
            res.json({ redirect: '/blogs' });
        })
        .catch(error => {
            console.error(error);
        })
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}