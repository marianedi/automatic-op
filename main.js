
let textContent;

function chooseDoctor(department,chosenDoctor) {

  
    // console.log("Department : ",department);
    // console.log("chosenDoctor : ",chosenDoctor);
    let departments;
    // departments[department][chosenDoctor]++;
    // console.log("Token Count is : ",departments[department][chosenDoctor]);
    // console.log(departments);

    // const tokenNumber = departments[department][chosenDoctor];
    // const tokenInfo = { department, doctor: chosenDoctor, token: tokenNumber };
    // const updatedDepartments = JSON.stringify(departments); 

    if(sessionStorage.getItem('department')){
        departments = JSON.parse(sessionStorage.getItem('department'));
    }else{
        departments = {
            Lungs: { doc1: 0, doc2: 0 },
            Gyno: { doc1: 0, doc2: 0 },
            Heart: { doc1: 0, doc2: 0 }
        };
    }
    console.log("Departments is :",departments);
    departments[department][chosenDoctor]++;

    sessionStorage.setItem('department', JSON.stringify(departments));

    sessionStorage.setItem('tokenCount',departments[department][chosenDoctor]);

        setTimeout(() => {
            window.location.href = 'final.html';
        }, 2000);

     
   
    // textContent = tokenInfo.token;
    // localStorage.setItem('tokenContent', textContent);
       
    
}


function redirectToPreviousPagep(){
    window.location.href = "nextpage4.html";
}
function redirectToNextPage() {
    window.location.href = "nextpage4.html"; // Replace with the URL of the next page
}


function updateTokenDisplay() {
    const tokenDisplay = document.getElementById('tokenCount');
    tokenDisplay.innerText = textContent;
  }
