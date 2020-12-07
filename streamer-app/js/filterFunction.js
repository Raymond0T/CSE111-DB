let filterBtn = document.getElementsByClassName("filter_button");
let selected = document.getElementsByClassName("selected");
let prev = [];
let selectedFilter;
for(let i = 0; i < filterBtn.length; i++){
    filterBtn[i].addEventListener("click", function(){
        
        if(selected.length){
            selected[0].className = selected[0].className.replace(" selected", "");
        }
        filterBtn[i].className += " selected";
    });
}


function displayBlock(id){
    

    if(prev.length){
        selectedFilter.style.display ="none";
        prev.pop();
    }
    prev.push(id);
    selectedFilter = document.getElementById(prev[0]);
    selectedFilter.style.display = "block";


}

