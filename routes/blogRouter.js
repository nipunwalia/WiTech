const express=require('express');
const blogRouter=express();

blogRouter.get('/',(req,res)=>{
    res.render('blog');
});

blogRouter.get('/single',(req,res)=>{
    res.render('blog-single');
})

module.exports=blogRouter;