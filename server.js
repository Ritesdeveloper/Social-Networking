const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;
// set up view engine
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
    res.render('login',{
        title:'Login'
    });
});
app.get('/register',(req,res)=>{
    res.render('register',{
        title:'Sign Up'
    });
});
app.listen(port,()=>{
    console.log('Server is running'+port);
})