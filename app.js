const express = require("express");
const path = require("path");
const hbs = require('hbs');
require("./DB/conn");

const Resisters = require('./models/resisters');
const { log } = require("console");
const exp = require("constants");

const app = express();
const port = process.env.PORT || 80;

// setting the Path
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../views");
const partialPath = path.join(__dirname, "../partials");

app.use(express.static('public'));

console.log(path.join(__dirname, '../public'));

app.use(express.json());
// app.use(express, express.urlencoded({extended:false}));

app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')));
app.use('/css', express.static(path.join(__dirname, '../node_modules/jquery/dist')));

app.use(express.static(staticPath))

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);

// routing
app.get('/', (req, res) =>{
    res.render("index");
})

app.get('/about', (req, res) =>{
    res.render("about");
})
app.get('/blog', (req, res) =>{
    res.render("blog");
})
app.get('/login', (req, res) =>{
    res.render("login");
})

app.post('/login', async(req, res) =>{
    try {
        console.log(req.body.email);
        res.send(req.body.email);
        const password = req.body.password;
        const resisteruser = new Resisters({
            email : req.body.email,
            password : req.body.password
        })
        await Resisters.insertMany([resisteruser]);
        res.render("index")

        // const resistered = await resisteruser.save();
        // res.status(201).render('index', {email : req.body.email})

    } catch (error) {
        res.status(400).send(error)
    }
})

// creating a server
app.listen(port, () =>{
    console.log(`its running at port ${port}`);
})