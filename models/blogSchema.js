const mongoose=require('mongoose');
const marked=require("marked")
const slugify=require('slugify')
const createDomPurify=require('dompurify')
const {JSDOM}=require("jsdom")
const dompurify=createDomPurify(new JSDOM().window);

const commentSchema=mongoose.Schema({
    name:{type:String,required:true},
    date:{type:Date,required:true},
    comment:{type:String,required:true}
});

const blogSchema=mongoose.Schema({
   blogid:{type:String,required:true},
   title:{type:String,required:true},
   author:{type:String,required:true},
   date:{type:Date,required:true},
   image:{type:String,required:true},
   about:{type:String,required:true},
   category:[String],
   tags:[String],
   content:{type:String,required:true},
   comments:[commentSchema],
});

blogSchema.pre('validate',(next)=>{
    if(this.title){
        this.slug=slugify(this.title,{lower:true,strict:true});
    }
    if(this.markdown){
        this.sanitizedHTML=dompurify.sanitize(marked(this.markdown));
    }
    next()
});

const Blog=mongoose.model('Blog',blogSchema);
module.exports=Blog;

// https://1drv.ms/x/s!Asy2Zfcjy3FHnmdbQ-0pf9SHeuh4?e=Upn3Ue