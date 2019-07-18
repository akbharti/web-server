let express = require('express');
let app  = express();
let PORT = 3000;

// app.get('/', (req,res) => {
//     res .send('Hello Abhishek');
// });

let middleware = {
    requireAuthentication : (req,res,next) => {
        console.log("private route hit");
        next();
    },
    logger : (req,res,next) => {
        console.log(`Request method : ${req.method} url:${req.originalUrl}`);
        next();
    }
};

app.use(middleware.logger);

//app.use(middleware.requireAuthentication);  // Appln level middleware(execute when every route hit or on every hit)

app.get('/about',middleware.requireAuthentication,(req,res) =>{
        res.send('about us ');
})

app.use(express.static(__dirname + '/public'));  // server will use this file if non is specified

app.listen(PORT,()=>
{
    console.log(`Express server started on PORT no.${PORT}`);
});    