const axios=require('axios');
const url=require('url');
const dotenv=require('dotenv');
dotenv.config();
const http=require('http');

exports.getToken=async function getToken(authorizationCode){
    const params=new url.URLSearchParams({
        code:authorizationCode,
        grant_type:'authorization_code',
        client_id:`${process.env.ZOHO_CLIENT_ID}`,
        client_secret:`${process.env.ZOHO_CLIENT_SECRET}`,
        redirect_uri:'http://localhost:5000/authcallback'
    });
    const data=await axios.post('https://accounts.zoho.com/oauth/v2/token',{},{params:params}).catch((error)=>{
        console.log(error);
    });
    return data.data;
    // const options={
    //     hostname:"localhost",
    //     port:5000,
    //     path:'/covid/api/getData',
    //     method:'GET'
    // }
    // const req=http.request(options,res=>{
    //     console.log(res.statusCode);
    //     res.on('data',d=>{
    //         process.stdout.write(d);
    //     });
    // });
    // req.on('error',error=>{
    //     console.log(error);
    // })
    // req.end();
}