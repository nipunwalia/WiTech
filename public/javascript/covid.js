$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});
var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {
  var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);
  var index = 0, time = 3000;
  slides[index].classList.add('active');  
  setInterval( () => {
    slides[index].classList.remove('active');
    index++;
    if (index === slides.length) index = 0; 
    slides[index].classList.add('active');
  }, time);
}

async function getCovidData(){
    var xhttp=new XMLHttpRequest();
    xhttp.open("GET","/covid/api/getData",true);
    xhttp.setRequestHeader('Content-type',"application/json");
    xhttp.onreadystatechange = async function() {
        if (this.readyState == 4 && (this.status == 200 || this.status == 304)) {
             await displayData(JSON.parse(this.responseText));
             await changeMapStateColor(JSON.parse(this.responseText),stateIndex);
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
const stateAnchor=document.getElementsByClassName('map-state-link');

// array for statewise index of path for svgs.
var stateIndex = [ [30],[11],[32,35],[33],[0],[26],[6],[27],[28],[10],[8],[17],
[20],[31,34,36,37,38,39],[2],[13],[14],[5],[9],[23],[25],[22],[24],[7],[29],[18],
[3],[1],[15],[12],[21],[16],[19],[4] ];


statesDropDown.addEventListener('change',()=>{
  searchStatesInDropDown(statesDropDown.value);
});

async function displayData(data){ 
        for(let i=0;i<data.length-2;i++){
            stateName[i].innerHTML=data[i+2][0];
            cases[i].innerHTML=data[i+2][1];
            recovered[i].innerHTML=data[i+2][2];
            deaths[i].innerHTML=data[i+2][3];
            oxygen[i].innerHTML=data[i+2][4];
            beds[i].innerHTML=data[i+2][5];
            noOfVaccines[i].innerHTML=data[i+2][6];
            vaccineAvalability[i].innerHTML=data[i+2][7];
            waste[i].innerHTML=data[i+2][8];
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
     ScrollInterval  = setInterval('scrollDiv()', ScrollRate);
}

// debug loop
// for(let i=0;i<stateAnchor.length;i++){
//     console.log(`${i} ${stateAnchor[i].getAttribute('xlink:title')}`)
// }
async function changeMapStateColor(data,stateIndex){    
    // let path=stateAnchor[0].getElementsByTagName('path');
    for(let i=0;i<data.length-2;i++){
        for(let j=0; j < stateIndex[i].length ; j++){
            let value=parseInt(data[i+1][1].split(',').join(""));
            
            if(value > 1000000){    
                stateAnchor[stateIndex[i][j]].getElementsByTagName('path')[0].setAttribute('fill','red');
            }
            if(value > 500000 && value < 1000000){
                stateAnchor[stateIndex[i][j]].getElementsByTagName('path')[0].setAttribute('fill','orange');
            }
            if(value < 500000){
                stateAnchor[stateIndex[i][j]].getElementsByTagName('path')[0].setAttribute('fill','green');
            }
        }
    }
}



