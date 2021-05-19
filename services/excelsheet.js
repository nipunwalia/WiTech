const {google}=require("googleapis");
 
exports.uploadData=async function uploadData(data,sheet){
    try{
        const auth=new google.auth.GoogleAuth({
            keyFile:'client_secret.json',
            scopes:"https://www.googleapis.com/auth/spreadsheets",

        });
        // Create client instance for auth
        const client=await auth.getClient();
        const googleSheets=google.sheets({version:"v4",auth:client});
        const spreadsheetId="1SZQ9bTqhlYdkxarcOFMIlFApI57Cwpan33r0kTUZzCw";
        
        var response=await googleSheets.spreadsheets.values.append({auth,spreadsheetId,range:sheet,valueInputOption:"USER_ENTERED",
        resource:{
            values:data
        }});
        return 1;
    }catch(e){
        console.log(e);
        return 0;
    }
}

exports.fetchDatafromsheet=async function fetchDatafromsheet(sheet){
    try{
        const auth=new google.auth.GoogleAuth({
            keyFile:'client_secret.json',
            scopes:"https://www.googleapis.com/auth/spreadsheets",

        });
        // Create client instance for auth
        const client=await auth.getClient();
        // // Instance of google sheets api
        const googleSheets=google.sheets({version:"v4",auth:client});
        const spreadsheetId="1SZQ9bTqhlYdkxarcOFMIlFApI57Cwpan33r0kTUZzCw";
        const getRows=await googleSheets.spreadsheets.values.get({auth,spreadsheetId,range:sheet});
        return getRows.data.values;
    }catch(e){
        return 0;
    }
}