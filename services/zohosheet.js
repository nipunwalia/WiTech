const axios=require('axios');
const url=require('url');
const dotenv=require('dotenv');
dotenv.config();
const crypto = require("crypto");
const { callbackify } = require('util');
const algorithm = "aes-192-cbc";

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
}

exports.encryptData=async function encrypt(text){
     //generate encryption key using the secret.
  result=crypto.scrypt(process.env.TOKEN_KEY, 'salt', 24, (err, key) => {
    if (err) throw err;
    //create an initialization vector
    let result=crypto.randomFill(new Uint8Array(16), (err, iv) => {
      if (err) throw err;

      const cipher = crypto.createCipheriv(algorithm, key, iv);

      let encrypted = '';
      cipher.setEncoding('hex');
      cipher.on('data', (chunk) => encrypted += chunk);
      cipher.on('end', (value) => {new Encrypt(encrypted)})
      cipher.on('error', (err) => console.log(err))
     
      cipher.write(text);
      cipher.end();
    });
  });
}

exports.decryptData=async function decrypt(encrypted, iv){
    var decode;
    crypto.scrypt(process.env.SECRET, 'salt', 24, (err, key) => {
        if (err) throw err;
    
        //create decipher object
        const decipher = crypto.createDecipheriv(algorithm, key, iv);
    
        let decrypted = '';
        decipher.on('readable', () => {
          while (null !== (chunk = decipher.read())) {
            decrypted += chunk.toString('utf8');
          }
        });
        decipher.on('end', () => console.log(decrypted));
        decipher.on('error', (err) => console.log(err))
    
        decode=decipher.write(encrypted, 'hex');
        decipher.end();
      })
}


 class Encrypt{
    static encryptedCookie;
    static decryptCookie;

    constructor(value){
        encrypt(value);
    }
    static encrypt(text){
        //generate encryption key using the secret.
     result=crypto.scrypt(process.env.TOKEN_KEY, 'salt', 24, (err, key) => {
       if (err) throw err;
       //create an initialization vector
       let result=crypto.randomFill(new Uint8Array(16), (err, iv) => {
         if (err) throw err;
   
         const cipher = crypto.createCipheriv(algorithm, key, iv);
   
         let encrypted = '';
         cipher.setEncoding('hex');
         cipher.on('data', (chunk) => encrypted += chunk);
         cipher.on('end', (value) => {this.encryptedCookie=encrypted;})
         cipher.on('error', (err) => console.log(err))
        
         cipher.write(text);
         cipher.end();
       });
     });
   }
}