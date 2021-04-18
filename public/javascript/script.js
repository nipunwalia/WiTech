// var $j = jQuery.noConflict();
// $j(document).ready(function()
// {
    $(".multistep-container .form-box .button-row .next").click(function(){
        $(this).parents(".form-box").fadeOut('fast');
        $(this).parents(".form-box").next().fadeIn('fast');
    });
    $(".multistep-container .form-box .button-row .previous").click(function(){
        $(this).parents(".form-box").fadeOut('fast');
        $(this).parents(".form-box").prev().fadeIn('fast');
    });

// });
var Next1=document.getElementById("Next1");
var Next2=document.getElementById("Next2");
var Back1=document.getElementById("Back1");
var Back2=document.getElementById("Back2");


Next1.onclick=function()
{
    progress.style.width="440px";
}

Back1.onclick=function()
{
    progress.style.width="220px";
}
Next2.onclick=function()
{
    progress.style.width="660px";
}
Back2.onclick=function()
{
    progress.style.width="440px";
}

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
function validation(data){
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
