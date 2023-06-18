const mongoose = require('mongoose');
// const url = 'mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority';


// creating a database
mongoose.connect("mongodb://localhost:27017/MRsingh",{
    // useCreateIndex:true,
    // useNewUrlParse:true,
    useUnifiedTopology:true
}).then(() =>{
    console.log("connection succesful");
}).catch((error) =>{
    console.log(`${error} NO connection`);
})