var xhttp=new XMLHttpRequest();
 xhttp.open("GET","/api/covid/getData",true);
 xhttp.setRequestHeader('Content-type',"application/json");
 xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        displayData(JSON.parse(this.responseText));
    }
  };
xhttp.send();

const states=document.getElementsByClassName('states');
const stateName=document.getElementsByClassName('state-name');
const cases=document.getElementsByClassName('no-of-cases');
const recovered=document.getElementsByClassName('no-of-recovered');
const deaths=document.getElementsByClassName('no-of-deaths');
const oxygen=document.getElementsByClassName('oxygen');
const beds=document.getElementsByClassName('beds');
const noOfVaccines=document.getElementsByClassName('no-of-vaccines');
const vaccineAvalability=document.getElementsByClassName('vaccine-availability');
const waste=document.getElementsByClassName('waste');



function displayData(data){
    for(let i=0;i<data.length-1;i++){
        stateName[i].innerHTML=data[i+1][0];
        cases[i].innerHTML=data[i+1][1];
        recovered[i].innerHTML=data[i+1][2];
        deaths[i].innerHTML=data[i+1][3];
        oxygen[i].innerHTML=data[i+1][4];
        beds[i].innerHTML=data[i+1][5];
        noOfVaccines[i].innerHTML=data[i+1][6];
        vaccineAvalability[i].innerHTML=data[i+1][7];
        waste[i].innerHTML=data[i+1][8];
    }   
}
