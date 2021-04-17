
$(document).ready(function()
{
    $(".multistep-container .form-box .button-row .next").click(function(){
        $(this).parents(".form-box").fadeOut('fast');
        $(this).parents(".form-box").next().fadeIn('fast');
    });
    $(".multistep-container .form-box .button-row .previous").click(function(){
        $(this).parents(".form-box").fadeOut('fast');
        $(this).parents(".form-box").prev().fadeIn('fast');
    });

});


function nameid_validation(){
    var nameid=document.forms["formm"]["mName"].value;
    var letters=/^[A-Za-z]+$/;
    if(!letters.test(nameid)){
        alert("Name can only contain alphabets!");
        nameid.focus();
        return false;
    }
    else{
        return true;
    }
}
function email_validation(){
    var email=document.forms["formm"]["mEmail"].value;
    var atpos=email.indexOf("@");
    var dotpos=email.lastIndexOf(".");
    if(atpos<1 || dotpos<atpos+2 ||dotpos+2>=email.length){
        alert("Not a valid e-mail!");
        email.focus();
        return false;
    }
    else{
        return true;
    }
}
function validation(){
    if(nameid_validation()){
        if(email_validation()){
            return true;
        }
    }
    else{
        return false;
    }
}
function dis(){
    var d=document.forms["formm"]["cw"].value;
    if(d==="No"){
        document.getElementById("dis1").disabled=true;
        document.getElementById("dis2").disabled=true;
    }
}