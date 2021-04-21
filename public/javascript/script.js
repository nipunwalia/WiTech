
var Next1=document.getElementById("Next1");
var Next2=document.getElementById("Next2");
var Back1=document.getElementById("Back1");
var Back2=document.getElementById("Back2");
var submitButton=document.getElementById('mentor-submit-button');
var formValues=document.querySelectorAll('.form-control');
var mGender=document.querySelectorAll('.mGender');
var countryId=document.getElementById('countryId');
var stateId=document.getElementById('stateId');
var cw=document.querySelectorAll('.cw');
var formData={};
var fieldArray=['mName','mEmail','mDob','mContact','mDegree','mCollege','mJobTitle','mJobDesc','mInterest','mskill_1',"mskill_1_rating",'mSocialFb','mSocialLn','mSocialOt'];


// event handlers for currently working field
cw[1].addEventListener('click',()=>{
    // No
    document.getElementById('dis1').style.display="none";
    document.getElementById('dis2').style.display="none";
    document.querySelectorAll('.job-label')[0].style.display="none";
    document.querySelectorAll('.job-label')[1].style.display="none";
});

cw[0].addEventListener('click',()=>{
    // yes
    document.getElementById('dis1').style.display="block";
    document.getElementById('dis2').style.display="block";
    document.querySelectorAll('.job-label')[0].style.display="inline";
    document.querySelectorAll('.job-label')[1].style.display="inline";
});


function submitForm(){
    for(let i=0;i<formValues.length;i++){
        formData[fieldArray[i]]=formValues[i].value;
    }
    for(let i=0;i<mGender.length;i++){
        if(mGender[i].checked){
            if(i==0){
                formData["mGender"]="Male";
            }
            if(i==1){
                formData["mGender"]="Female";
            }
            if(i==2){
                formData["mGender"]="Other";
            }
            formData['countryId']=countryId.value.toString();
            formData['stateId']=stateId.value.toString();
        }
    }
    for(let i=0;i<cw.length;i++){
        if(cw[i].checked){
            if(i==0){
                formData["cw"]="Yes";
            }
            if(i==1){
                formData["cw"]="No";
            }
        }
    }
    console.log(formData);
    var xhttp=new XMLHttpRequest();
    xhttp.open("POST","/api/mentor/register",true);
    xhttp.setRequestHeader('Content-type',"application/json");
    xhttp.send(JSON.stringify(formData));
}
function moveNext(stop){
    $('.form-box').each(function(i){
        if(i==stop){
            $(this).fadeOut('fast');
            $(this).next().fadeIn('fast');
            return;
        }
    });
}

function movePrevious(stop){
    $('.form-box').each(function(i){
        if(i==stop){
            $(this).fadeOut('fast');
            $(this).prev().fadeIn('fast');
            return;
        }
    });
}

function nextonSubmit(value){
    moveNext(value);
    progress.style.width="440px";
}

function next2onSubmit(){
    moveNext(1);
    progress.style.width="660px";
}

Back1.onclick=function(e)
{
    e.preventDefault();
    movePrevious(1);
    progress.style.width="220px";
}

Back2.onclick=function(e)
{
    e.preventDefault();
    movePrevious(2)
    progress.style.width="440px";
}