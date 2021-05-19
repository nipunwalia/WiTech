var formGroups=document.querySelectorAll('.form-control');
var formAlert=document.getElementById('formalert');

// the forms are given code-names on basis of format: postname-department
// department codes are: finance: fin , Marketing: mark , Operations and Public Relations: opr
// logistics and operations: lgopr , technical:tech
var formtypes=['gen-man-fin','account-fin','social-m-mark','mar-spec-mark','con-wri-mark','grph-des-mark',
    'out-pr-hd-opr','evt-pln-opr','evt-cor-opr','out-part-spec-opr','com-build-opr', 'log-oper-dir-lgopr','log-man-lgopr',
    'opr-man-lgopr','front-tech','back-tech','con-graph-tech'
];

function submitForm(formname){
    let departmentCode=formname.split('-')[2];
    let department;
    if(departmentCode == 'fin'){department='finance'}
    else if(departmentCode == 'mark'){department='marketing-creative'}
    else if(departmentCode == 'opr'){department='outreach-public'}
    else if(departmentCode == 'lgopr'){department='logs-ops'}
    else{department='technical'}

    for(let i=0;i<formtypes.length;i++){
        if(formname === formtypes[i]){}
    }

    var xhttp=new XMLHttpRequest();
    xhttp.open("POST",`/${department}/api/${formname}/register`,true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
                document.cookie="formresponse=valid; Samesite=Strict"
                window.location.href='/form/response';
            }
        if(this.status==404){
            formAlert.className="alert alert-danger"; 
            formAlert.innerHTML=this.responseText;
            formAlert.style.display='block';
            formAlert.scrollIntoView();
        }
        document.getElementsByTagName('form')[0].reset();
      };
    //   xhttp.send(JSON.stringify(formData)); 
}

