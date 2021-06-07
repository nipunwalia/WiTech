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
        markdown:"<h2>jatin<h2>",
        slug:" ",
        sanitizedHTML:" ",
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
        markdown:" ",
        slug:"a",
        sanitizedHTML:" ",
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
        tags:['bussiness','mac'],
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae corrupti quo nobis nulla deleniti nostrum vero repellendus quasi voluptatum ullam, natus quas quibusdam, accusamus deserunt harum, ducimus omnis tenetur.",
        markdown:" ",
        slug:"b",
        sanitizedHTML:" ",
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
        markdown:" ",
        slug:"c",
        sanitizedHTML:" ",
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
        markdown:" ",
        slug:"d",
        sanitizedHTML:" ",
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
        markdown:" ",
        slug:"e",
        sanitizedHTML:" ",
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

exports.covidData=[
    {
        "state": "Andaman and Nicobar Islands",
        "cases":"6223",
        "recovered": "5928",
        "death":"71",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine":"3",
        "vaccineAvailability": "Yes",
        "waste":"0"
      },
      {
        "state": "Andhra Pradesh",
        "cases":"1206232",
        "recovered": "1027270",
        "death": "8374",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "7.3"
      },
      {
        "state": "Arunachal Pradesh",
        "cases":"19412",
        "recovered": "17577",
        "death": "59",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "0"
      },
      {
        "state": "Assam",
        "cases":"272751",
        "recovered": "240004",
        "death": "1485",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "7.3"
      },
      {
        "state": "Bihar",
        "cases":"538677",
        "recovered": "422210",
        "death": "2987",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "8.1"
      },
      {
        "state": "Chandigarh",
        "cases":"46793",
        "recovered": "37898",
        "death": "532",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "2.79"
      },
      {
        "state": "Chhattisgarh",
        "cases":"802643",
        "recovered": "663694",
        "death": "9738",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "Yes"
      },
      {
        "state": "Dadra and Nagar Haveli and Daman and Diu",
        "cases":"8325",
        "recovered": "6722",
        "death": "4",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "Yes"
      },
      {
        "state": "Delhi",
        "cases":"1253902",
        "recovered": "1143980",
        "death": "18063",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "7"
      },
      {
        "state": "Goa",
        "cases":"104398",
        "recovered": "74991",
        "death": "1443",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "0"
      },
      {
        "state": "Gujarat",
        "cases":"633427",
        "recovered": "477391",
        "death": "7912",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "Yes"
      },
      {
        "state": "Haryana",
        "cases":"558975",
        "recovered": "440590",
        "death": "4960",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "9.74"
      },
      {
        "state": "Himachal Pradesh",
        "cases":"114787",
        "recovered": "87193",
        "death": "1692",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "0"
      },
      {
        "state": "Jammu and Kashmir",
        "cases":"196585",
        "recovered": "154447",
        "death": "2510",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "6.6"
      },
      {
        "state": "Jharkhand",
        "cases":"263115",
        "recovered": "200237",
        "death": "3346",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "Yes"
      },
      {
        "state": "Karnataka",
        "cases":"1741046",
        "recovered": "1236854",
        "death": "16884",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "6.9"
      },
      {
        "state": "Kerala",
        "cases":"1743932",
        "recovered": "1362363",
        "death": "5565",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "0"
      },
      {
        "state": "Madhya Pradesh",
        "cases":"624985",
        "recovered": "529667",
        "death": "6074",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "Yes"
      },
      {
        "state": "Maharashtra",
        "cases":"4880542",
        "recovered": "4164098",
        "death": "72662",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "1.9"
      },
      {
        "state": "Manipur",
        "cases":"33353",
        "recovered": "30262",
        "death": "434",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "7.8"
      },
      {
        "state": "Meghalaya",
        "cases":"18283",
        "recovered": "15957",
        "death": "191",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "Yes"
      },
      {
        "state": "Mizoram",
        "cases":"6964",
        "recovered": "5305",
        "death": "17",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "0"
      },
      {
        "state": "Nagaland",
        "cases":"15004",
        "recovered": "12848",
        "death": "118",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "Yes"
      },
      {
        "state": "Odisha",
        "cases":"489641",
        "recovered": "416403",
        "death": "2104",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "0"
      },
      {
        "state": "Puducherry",
        "cases":"65117",
        "recovered": "52517",
        "death": "883",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "Yes"
      },
      {
        "state": "Punjab",
        "cases":"407509",
        "recovered": "334677",
        "death": "9825",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "8.12"
      },
      {
        "state": "Rajasthan",
        "cases":"685063",
        "recovered": "483332",
        "death": "5021",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "Yes"
      },
      {
        "state": "Sikkim",
        "cases":"8919",
        "recovered": "6714",
        "death": "155",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "Yes"
      },
      {
        "state": "Tamil Nadu",
        "cases":"1272602",
        "recovered": "1129512",
        "death": "14779",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "12"
      },
      {
        "state": "Telangana",
        "cases":"475748",
        "recovered": "396042",
        "death": "2579",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "7.55"
      },
      {
        "state": "Tripura",
        "cases":"36534",
        "recovered": "34004",
        "death": "403",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "Yes"
      },
      {
        "state": "Uttar Pradesh",
        "cases":"1399294",
        "recovered":"1122669",
        "death": "14151",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "Yes"
      },
      {
        "state": "Uttarakhand",
        "cases":" 211834",
        "recovered": "149166",
        "death": "3142",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "Yes"
      },
      {
        "state": "West Bengal",
        "cases":"916635",
        "recovered":"782916",
        "death":"11847",
        "oxygenAvailability": "Yes",
        "bedsAvailability": "Yes",
        "noOfVaccine": "3",
        "vaccineAvailability": "Yes",
        "waste": "0"
      }
]