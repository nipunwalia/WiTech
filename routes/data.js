const { mongo } = require("mongoose");

// var d=new Date();
// var mongoDate=`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}T${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`

exports.blogData=[
    {
        blogid:"1",
        title:"Blog 1",
        author:"Author-1",
        date:new Date(),
        image:"/assets/img/blog/blog-1.jpg",
        about:"Blog Info",
        category:['general','lifestyle'],
        tags:['app','it'],
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae corrupti quo nobis nulla deleniti nostrum vero repellendus quasi voluptatum ullam, natus quas quibusdam, accusamus deserunt harum, ducimus omnis tenetur.",
        comments:[
            {
                name:"User-1",
                date:"4 Jul 2021",
                comment:"Good work keep it Up"
            },
            {
                name:"User-2",
                date:"14 Jul 2021",
                comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio iure sed! Ducimus laudantium quae reiciendis distinctio porro earum, voluptatem, soluta incidunt, sint illum obcaecati cupiditate rerum accusamus quisquam harum."
            }
        ]
    },
    {
        blogid:"2",
        title:"Blog 2",
        author:"Author-2",
        date:new Date(),
        image:"/assets/img/blog/blog-2.jpg",
        about:"Blog Info",
        category:['lifestyle','travel'],
        tags:['it','bussiness'],
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae corrupti quo nobis nulla deleniti nostrum vero repellendus quasi voluptatum ullam, natus quas quibusdam, accusamus deserunt harum, ducimus omnis tenetur.",
        comments:[
            {
                name:"User-1",
                date:"4 Jul 2021",
                comment:"Good work keep it Up"
            },
            {
                name:"User-2",
                date:"14 Jul 2021",
                comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio iure sed! Ducimus laudantium quae reiciendis distinctio porro earum, voluptatem, soluta incidunt, sint illum obcaecati cupiditate rerum accusamus quisquam harum."
            }
        ]
    },
    {
        blogid:"3",
        title:"Blog 3",
        author:"Author-3",
        date:new Date(),
        image:"/assets/img/blog/blog-3.jpg",
        about:"Blog Info",
        category:['travel','design'],
        tags:['bussiness,mac'],
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae corrupti quo nobis nulla deleniti nostrum vero repellendus quasi voluptatum ullam, natus quas quibusdam, accusamus deserunt harum, ducimus omnis tenetur.",
        comments:[
            {
                name:"User-1",
                date:"4 Jul 2021",
                comment:"Good work keep it Up"
            },
            {
                name:"User-2",
                date:"14 Jul 2021",
                comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio iure sed! Ducimus laudantium quae reiciendis distinctio porro earum, voluptatem, soluta incidunt, sint illum obcaecati cupiditate rerum accusamus quisquam harum."
            }
        ]
    },
    {
        blogid:"4",
        title:"Blog 4",
        author:"Author-4",
        date:new Date(),
        image:"/assets/img/blog/blog-4.jpg",
        about:"Blog Info",
        category:['design','creative'],
        tags:['mac','design'],
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae corrupti quo nobis nulla deleniti nostrum vero repellendus quasi voluptatum ullam, natus quas quibusdam, accusamus deserunt harum, ducimus omnis tenetur.",
        comments:[
            {
                name:"User-1",
                date:"4 Jul 2021",
                comment:"Good work keep it Up"
            },
            {
                name:"User-2",
                date:"14 Jul 2021",
                comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio iure sed! Ducimus laudantium quae reiciendis distinctio porro earum, voluptatem, soluta incidunt, sint illum obcaecati cupiditate rerum accusamus quisquam harum."
            }
        ]
    },
    {
        blogid:"5",
        title:"Blog 5",
        author:"Author-5",
        date:new Date(),
        image:"/assets/img/blog/blog-1.jpg",
        about:"Blog Info",
        category:['creative','education'],
        tags:['design','office'],
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae corrupti quo nobis nulla deleniti nostrum vero repellendus quasi voluptatum ullam, natus quas quibusdam, accusamus deserunt harum, ducimus omnis tenetur.",
        comments:[
            {
                name:"User-1",
                date:"4 Jul 2021",
                comment:"Good work keep it Up"
            },
            {
                name:"User-2",
                date:"14 Jul 2021",
                comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio iure sed! Ducimus laudantium quae reiciendis distinctio porro earum, voluptatem, soluta incidunt, sint illum obcaecati cupiditate rerum accusamus quisquam harum."
            }
        ]
    },
    {
        blogid:"6",
        title:"Blog 6",
        author:"Author-6",
        date:new Date(),
        image:"/assets/img/blog/blog-2.jpg",
        about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolores labore quis quia molestias ipsum expedita deleniti magni tempore dolor, ullam vitae odit, itaque corrupti asperiores voluptatum! Animi, facilis molestias.",
        category:['education','general'],
        tags:['office','app'],
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae corrupti quo nobis nulla deleniti nostrum vero repellendus quasi voluptatum ullam, natus quas quibusdam, accusamus deserunt harum, ducimus omnis tenetur.",
        comments:[
            {
                name:"User-1",
                date:"4 Jul 2021",
                comment:"Good work keep it Up"
            },
            {
                name:"User-2",
                date:"14 Jul 2021",
                comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio iure sed! Ducimus laudantium quae reiciendis distinctio porro earum, voluptatem, soluta incidunt, sint illum obcaecati cupiditate rerum accusamus quisquam harum."
            }
        ]
    },
]