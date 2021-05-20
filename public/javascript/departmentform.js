var formGroups=document.querySelectorAll('.form-control');
var formAlert=document.getElementById('formalert');

// the forms are given code-names on basis of format: postname-department
// department codes are: finance: fin , Marketing: mark , Operations and Public Relations: opr
// logistics and operations: lgopr , technical:tech

var formtypes={
    'gen-man-fin':{fields:['name','email','contact','education','cv','q1','q2','q3','q4','q5','q6','task']},
    'account-fin':{fields:['name','email','contact','education','cv','q1','q2','q3','q4','task']},
    'social-m-mark':{fields:[]},'mar-spec-mark':{fields:[]},'con-wri-mark':{fields:[]},'grph-des-mark':{fields:[]},
    'out-pr-hd-opr':{fields:['name','email','contact','education','cv','q1','q2','task']},
    'evt-pln-opr':{fields:['name','email','contact','education','cv','q1','q2','q3','task']},
    'evt-cor-opr':{fields:['name','email','contact','education','cv','q1','q2','task']},
    'out-part-spec-opr':{fields:['name','email','contact','education','cv','q1','q2','q3','scale','task']},
    'com-build-opr':{fields:['name','email','contact','education','cv','q1','q2','q3','task']},
    'log-oper-dir-lgopr':{fields:['name','email','contact','education','cv','q1','q2','q3','q4','q5','scale','task']},
    'log-man-lgopr':{fields:['name','email','contact','education','cv','q1','q2','q3','q4','q5']},
    'opr-man-lgopr':{fields:['name','email','contact','education','cv','q1','q2','q3','q4','q5']},
    'front-tech':{fields:[]},'back-tech':{fields:[]},'con-graph-tech':{fields:[]}
};

function submitForm(formname){
    let formData={};
    let department;
    let fields=formtypes[formname].fields;
    
    let date=new Date();
    formData['date']=`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    
    let departmentCodelength=formname.split('-').length;
    let departmentCode=formname.split('-')[departmentCodelength-1];
    
    if(departmentCode == 'fin'){department='finance'}
    else if(departmentCode == 'mark'){department='marketing-creative'}
    else if(departmentCode == 'opr'){department='outreach-public'}
    else if(departmentCode == 'lgopr'){department='logs-ops'}
    else{department='technical'}
    
    for(let i=0;i<formtypes[formname].fields.length;i++){
        formData[fields[i]]=formGroups[i].value;
    }
    var xhttp=new XMLHttpRequest();
    xhttp.open("POST",`/${department}/api/${formname}/register`,true);
    xhttp.setRequestHeader('Content-type',"application/json");
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
                // document.cookie="formresponse=valid; Samesite=Strict"
                window.location.href='/forms/response';
            }
        if(this.status==404){
            formAlert.className="alert alert-danger"; 
            formAlert.innerHTML=this.responseText;
            formAlert.style.display='block';
            formAlert.scrollIntoView();
        }
        document.getElementsByTagName('form')[0].reset();
      };
      xhttp.send(JSON.stringify(formData)); 
}