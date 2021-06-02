const express=require('express');
const blogRouter=express();
const Blog=require('../models/blogSchema');
const {blogData}=require('./data')

// route to list all blogs
blogRouter.get('/',async(req,res)=>{
    var data=await Blog.find({});
    res.render('blog',{blogData:data});
});

// route for a single blog page
// this method is only for current settings
// if anyone can post a blog on this website then we need to change this and make this unique.
blogRouter.get('/:id',async(req,res)=>{
    let allData=await await Blog.find({});
    let data=allData.find(element=>element.blogid == req.params.id);
    allData.sort((a,b)=>b.date-a.date);
    res.render('blog-single',{blogData:data,recentPosts:allData});
});


// for time being we can assume only we will add that blogs manually.
// from id we have to fetch that blog from db
// for that we need to set a manual userid for that particualr blog.
// generting user/blogid remaining.
// creating a new blog
blogRouter.post('/api/create',async(ren,res)=>{
    // blogData[0].blogid=
    // var req={body:blogData[5]};
    var result=new Blog({blogid:req.body.blogid,title:req.body.title,author:req.body.author,date:req.body.date,
        image:req.body.image,about:req.body.about,category:req.body.category,content:req.body.content,
        comments:req.body.comments});
    const blog=result.save();
    res.send("Saved");
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