var formGroups=document.querySelectorAll('.form-control');
var gender=document.querySelectorAll('.mGender');
var state=document.getElementById('stateId');
var donationStatus=document.querySelectorAll('.donation');
var formData={};
var fieldArray=['vName','vEmail','vDob','vContact','vReason'];

function submitForm(e){
    for(let i=0;i<formGroups.length;i++){
        formData[fieldArray[i]]=formGroups[i].value;
        console.log(formGroups[i].value);
    }
    for(let i=0;i<gender.length;i++){
        if(gender[i].checked){
            if(i==0){
                formData["vGender"]="Male";
            }
            if(i==1){
                formData["vGender"]="Female";
            }
            if(i==2){
                formData["vGender"]="Other";
            }
        }
    }
    for(let i=0;i<donationStatus.length;i++){
        if(donationStatus[i].checked){
            if(i==0){
                formData["vDonationStatus"]="yes";
            }
            if(i==1){
                formData["vDonationStatus"]="no";
            }
        }
    }
    formData["vState"]=state.value.toString();
    var xhttp=new XMLHttpRequest();
    xhttp.open("POST","/api/forms/volunteer/register",true);
    xhttp.setRequestHeader('Content-type',"application/json");
    xhttp.send(JSON.stringify(formData));
    document.getElementsByTagName('form')[0].reset();
}