const express=require('express');
const blogRouter=express();
const Blog=require('../models/blogSchema');
const {blogData}=require('./data')

// route to list all blogs
blogRouter.get('/',async(req,res)=>{
    var data=await Blog.find({});
    let category=req.query.category || "";
    let tags=req.query.tags || "";
    res.render('blog',{blogData:data,category:category,tags:tags});
});

// route for a single blog page
// this method is only for current settings
// if anyone can post a blog on this website then we need to change this and make this unique.
blogRouter.get('/:id',async(req,res)=>{
    let allData= await Blog.find({});
    let data=allData.find(element=>element.blogid == req.params.id);
    res.render('blog-single',{blogData:data,recentPosts:allData});
});


blogRouter.post('/api/create',async(ren,res)=>{
    // var req={body:blogData[6]};
    var result=new Blog({blogid:req.body.blogid,title:req.body.title,author:req.body.author,date:req.body.date,
        image:req.body.image,about:req.body.about,category:req.body.category,tags:req.body.tags,content:req.body.content,
        comments:req.body.comments});
    const blog=result.save();
    if(blog){
        res.send('Saved');
    }else{
        res.status(404).send("Error");
    }
});

// route for posting comment.
blogRouter.post('/api/comment',(req,res)=>{
    var r=Blog.updateOne({title:req.body.title},{$push:{comments:[{name:req.body.name,date:req.body.date,comment:req.body.comment}]}},(err,result)=>{
        if(err){
            res.status(404).send("Error");
        }else{
            res.send("Saved");
        }
    });
})

// route for adding dummy data to db
blogRouter.post('/api/seed',(req,res)=>{
    var r=Blog.insertMany(blogData);
    res.send("Saved");
})


module.exports=blogRouter;