
const typeContainer = document.getElementById('accTypeContainer');
const formType = document.getElementById('accTypeSelected');
const account = document.getElementsByName('accountType');
const displayForm = document.getElementsByClassName('login-form-container');

const sForm = document.getElementById('streamer-form');
const vForm = document.getElementById('viewer-form');

const sFormLayer = document.getElementById('streamer-form').querySelectorAll('.steps');
const vFormLayer = document.getElementById('viewer-form').querySelectorAll('.steps');

const sFormArray = Array.from(sFormLayer);
const vFormArray = Array.from(vFormLayer);

let sCurrentIndex = 0;
let vCurrentIndex = 0;
let accType;

//Transition from login page to create account page
function createAccount(cur,id){
    const loginPage = document.getElementById(cur)
    const accType = document.getElementById(id);

    loginPage.style.display="none";
    accType.style.display="block";
    
}

//Determine which form the streamer selected
function selectedAccount(){
    
    typeContainer.style.display = "none";

    for(let i = 0; i < account.length; i++){
        if(account[i].checked){
            accType = account[i].value;
        }
    }
        displayStreamerForm();

}

//Displays the correct form
function displayStreamerForm(){

    if(accType === 'streamer'){
        displayForm[0].style.display ="block";
        displayForm[0].getElementsByClassName('steps')[0].className += " active";
    }
    else if(accType === 'viewer'){
        displayForm[1].style.display ="block";
        displayForm[1].getElementsByClassName('steps')[0].className += " active";
    }
    
}

function previousStep(index,selected){
    let prevMaxIndexStream = Array.from(sForm.getElementsByClassName('prev-btn'));
    let prevMaxIndexView = Array.from(vForm.getElementsByClassName('prev-btn'));

    if(accType='streamer' && selected == 0){
        if(sCurrentIndex <= prevMaxIndexStream.length){
            displayForm[0].getElementsByClassName('steps')[sCurrentIndex].classList.remove("active");
            sCurrentIndex += index;
        }
        displayForm[0].getElementsByClassName('steps')[sCurrentIndex].classList.add("active");
    }

    else if(accType='viewer' && selected == 1){
        if(vCurrentIndex <= prevMaxIndexView.length){
            displayForm[1].getElementsByClassName('steps')[vCurrentIndex].classList.remove("active");
            vCurrentIndex += index;
        }
        displayForm[1].getElementsByClassName('steps')[vCurrentIndex].classList.add("active");
    }
}
function nextStep(index,selected){
    let nextMaxIndexStream = Array.from(sForm.getElementsByClassName('next-btn'));
    let nextMaxIndexView = Array.from(sForm.getElementsByClassName('next-btn'));

    if(accType='streamer' && selected == 0){
        if(sCurrentIndex < nextMaxIndexStream.length){
            displayForm[0].getElementsByClassName('steps')[sCurrentIndex].classList.remove("active");
            sCurrentIndex += index;
        }
        displayForm[0].getElementsByClassName('steps')[sCurrentIndex].classList.add("active");
    }

    else if(accType='viewer'&& selected ==1){
        if(vCurrentIndex < nextMaxIndexView.length){
            displayForm[1].getElementsByClassName('steps')[vCurrentIndex].classList.remove("active");
            vCurrentIndex += index;
        }
        displayForm[1].getElementsByClassName('steps')[vCurrentIndex].classList.add("active");
    }
}




