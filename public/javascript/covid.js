async function getCovidData(){
    var xhttp=new XMLHttpRequest();
    xhttp.open("GET","/api/covid/getData",true);
    xhttp.setRequestHeader('Content-type',"application/json");
    xhttp.onreadystatechange = async function() {
        if (this.readyState == 4 && this.status == 200) {
             await displayData(JSON.parse(this.responseText));
        }
    };
    xhttp.send();
} 

getCovidData();

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
const statesDropDown=document.getElementById("statesDropdown");
const stateSearch=document.getElementById("stateSearch");

statesDropDown.addEventListener('change',()=>{
  searchStatesInDropDown(statesDropDown.value);
});

stateSearch.addEventListener('keyup',()=>{
    var filter=stateSearch.value.toLowerCase(); 
    for(let i=0;i<states.length;i++){
        if(stateName[i].innerHTML.split(" ").join("").toLowerCase().indexOf(filter) > -1 ){
            states[i].style.display="flex";
        }else{
            states[i].style.display='none';
        }    
    }
})

async function displayData(data){
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



function searchStatesInDropDown(value){
    for(let i=0;i<stateName.length;i++){
        if(stateName[i].innerHTML.split(" ").join("").toLowerCase() == value.toLowerCase()){
            stateName[i].scrollIntoView();
        }
    }
}

var ScrollRate = 25;
function scrollDiv_init() {
     DivElmnt = document.getElementById("MyDivName");
     ReachedMaxScroll = false;
     DivElmnt.scrollTop = 0;
     PreviousScrollTop  = 0;    
     ScrollInterval = setInterval('scrollDiv()', ScrollRate);
}
function scrollDiv() {
     if (!ReachedMaxScroll) {
          DivElmnt.scrollTop = PreviousScrollTop;
          PreviousScrollTop++;
          ReachedMaxScroll = DivElmnt.scrollTop >= (DivElmnt.scrollHeight - DivElmnt.offsetHeight);
     }
}
function pauseDiv() {
     clearInterval(ScrollInterval);
}
function resumeDiv() {
     PreviousScrollTop = DivElmnt.scrollTop;
     ScrollInterval    = setInterval('scrollDiv()', ScrollRate);
}
