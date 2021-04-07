const express=require('express');
const app=express();
const port=5000;

app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/home',(req,res)=>{
    // route for home page
    res.send("This is Home Page");
})

app.get('/about',(req,res)=>{
    // route for about page
    res.send("This is About Page");
})

app.listen(port,()=>console.log(`App is listening at ${port}`));