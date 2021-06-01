const express=require('express');
const blogRouter=express();
const Blog=require('../models/blogSchema');
const {blogData}=require('./data')

blogRouter.get('/',async(req,res)=>{
    var data=await Blog.find({});
    res.render('blog',{blogData:data});
});

// route for a single blog page
blogRouter.get('/single',(req,res)=>{
    res.render('blog-single');
})

// creating route
blogRouter.post('/api/create',async(ren,res)=>{
    var result=new Blog({title:req.body.title,author:req.body.author,date:req.body.date,
        image:req.body.image,category:req.body.category,content:req.body.content,
        comments:req.body.comments});
    const blog=result.save();
    res.send("Saved");
});

module.exports=blogRouter;