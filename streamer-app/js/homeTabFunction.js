const container = document.getElementsByClassName('button_container_buttons');
let home = []; 
let page;

function displayPage(id){
    

    if(home.length){
        page.style.display ="none";
        home.pop();
    }
    home.push(id);
    page = document.getElementById(home[0]);
    page.style.display = "block";

}
