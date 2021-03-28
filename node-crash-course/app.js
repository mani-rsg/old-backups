const express = require('express');
const morgan = require('morgan'); //* it's a logger
const mongoose = require('mongoose'); //*easier way to connect and communicate with mongoDB (schema & models)
const blogRoutes = require('./routes/blogRoutes');
//*express app
const app = express();

//*mongo db uri
const dbURI = `mongodb+srv://manirsg:manirsg16@nodecrashcourse.cjkrt.mongodb.net/node-cc?retryWrites=true&w=majority`

//*register view engine
app.set('view engine', 'ejs');

//* express would look in myViews folder instead of just views(default)
// app.set('views', 'myViews');

//*Making public folder accessible from browser so making it static
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true })); //*parsing the URL-encoded data;

//*listen for requests
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(3000))
    .catch(error => console.error(error));

// app.listen(3000) //* it is not neccessary to mention localhost as we have mentioned the port number;
//* we can also store this in a contstant incase if we wish to re use it later on something else like websockets 

// app.use((req, res, next)=>{
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// })
// app.use((req, res, next)=>{
//     console.log('in the next middleware:');
//     next();
// })



app.use(morgan('dev'));
// app.use(morgan('tiny')); 

//*mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog',
        snippet: 'about a blog',
        body: 'more about a blog'
    });

    blog.save()
        .then((result) => {
            res.send(result);
        })
        .catch(error => {
            console.error(error);
        })

})



app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch(error => {
            console.error(error);
        })
})

app.get('/single-blog', (req, res) => {
    Blog.findById('6016a57d8e35fe3fc1766a7e')
        .then((result) => {
            res.send(result);
        })
        .catch(error => {
            console.error(error);
        })
})

app.get('/', (req, res) => {
    // res.sendFile('./views/index.html', { root: __dirname }); //*old

    // const blogs = [
    //     { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    //     { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    //     { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    // ];
    // res.render('index', { title: 'Home', blogs }); //* this is how we have to render views instead using sendFiles

    res.redirect('/blogs');
})

app.get('/about', (req, res) => {
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', { title: 'About' });
})

app.get('/about-me', (req, res) => {
    res.redirect('/about');
})

app.use('/blogs',blogRoutes); //* it says the express to use the routes from there.
 
//* use method will run for any request so the position that we keep is very important.
//* here in this case, if none of the above routes matches this will run
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname });
    res.status(404).render('404', { title: '404' });
});