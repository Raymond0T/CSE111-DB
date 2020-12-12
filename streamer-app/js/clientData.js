
window.onload = function(){
   populateLocation();
   populateStreamerTeam();
   populateSponsor();
}



function populateLocation(){
   let selLocation= document.getElementById('location_container');
   

   const API_URL = 'http://127.0.0.1:8092/api/location/nation';
   axios.get(`${API_URL}`)
      .then(response => {
         //console.log(response.data.data);
         
         for (x=0; x<response.data.data.length; x++) {
            //console.log(response.data.data[x].s_team);

            option = document.createElement('option');
            option.classList.add('ff');
            option.value = response.data.data[x].n_name;
            option.text = response.data.data[x].n_name;
            selLocation.appendChild(option);
         }
      })
      .catch(error =>
         console.error('populateLocation', error)
      )
}

function populateStreamerTeam() {
    let selStreamerTeam = document.getElementById('team_container');
    

    const API_URL = 'http://127.0.0.1:8092/api/streamers/team';
    axios.get(`${API_URL}`)
       .then(response => {
          //console.log(response.data.data);
          
          for (x=0; x<response.data.data.length; x++) {
             //console.log(response.data.data[x].s_team);

             option = document.createElement('option');
             option.classList.add('ff');
             option.value = response.data.data[x].s_team;
             option.text = response.data.data[x].s_team;
             selStreamerTeam.appendChild(option);
          }
       })
       .catch(error =>
          console.error('populateStreamerTeam', error)
       )
 }

 function populateSponsor() {
   let selSponsor = document.getElementById('sponsor_container');
   
   const API_URL = 'http://127.0.0.1:8092/api/sponsor/company';
   axios.get(`${API_URL}`)
      .then(response => {
         //console.log(response.data.data);
         
         for (x=0; x<response.data.data.length; x++) {
            //console.log(response.data.data[x].s_team);

            option = document.createElement('option');
            option.classList.add('ff');
            option.value = response.data.data[x].spon_company;
            option.text = response.data.data[x].spon_company;
            selSponsor.appendChild(option);
         }
      })
      .catch(error =>
         console.error('populateSponsor', error)
      )
}


//Get data from the server and databasr
 function runQuery() {
   let selGender = document.getElementById('gender_container').value;
   let selLocation = document.getElementById('location_container').value;
   let selAge = document.getElementById('age_container').value;
   let selPlatform = document.getElementById('platform_container').value;
   let selTeam = document.getElementById('team_container').value;
   let selSponsor = document.getElementById('sponsor_container').value;
   let selGames = [...document.querySelectorAll('input[name=games]:checked')].map((x) => x.value);
   let selSearch = document.getElementById('search_bar').value;
   
   let userInput =[['/gender/',selGender],['/location/',selLocation],['/age/',selAge],['/platform/',selPlatform],['/team/',selTeam],['/sponsor/',selSponsor],['/games/',selGames]];
   let API_URL = 'http://127.0.0.1:8092/api/search/streamer';
   let endpoints;


   //get all user's input and store them in variable endpoints
   for(let i = 0; i < userInput.length; i++){
      for(let j = 1; j < 2; j++){
         if(userInput[i][j] != "" && endpoints == null){
            endpoints = userInput[i][0] + userInput[i][j];
         }
         else if(userInput[i][j] != ""){
            endpoints += userInput[i][0] + userInput[i][j];
         }
      }
   }
   //Add the endpoint to the URL

   if(endpoints != null){
      endpoints = endpoints.replace(/,/g,'-');
      API_URL += endpoints;
   }
   else if(selSearch != null || selSearch != ""){
      API_URL = `http://127.0.0.1:8092/api/search/streamer/input/${selSearch}`;
   }
   console.log(selSearch);

   let result = document.getElementById('result');
   result.innerHTML = "";



   console.log(API_URL);
    //const API_URL = `http://127.0.0.1:8092/api/search/streamer-all/${selLocation}`;
    
   axios.get(`${API_URL}`)
      .then(response => {

         if (response.data.data.length == 0) {
            return;
         }

         let thead = result.createTHead();
         let row = thead.insertRow();
         for (key in response.data.data[0]) {
             //console.log(key);

            let th = document.createElement("th");
            let text = document.createTextNode(key);
            th.classList.add('tbl-header');
            th.appendChild(text);
            row.appendChild(th);
         }
          
         for (x=0; x<response.data.data.length; x++) {
             //console.log(response.data.data[x].maker);

            let row = result.insertRow();
            
            for (k in response.data.data[x]) {
               console.log(k);    
               let cell = row.insertCell();
               let text = document.createTextNode(response.data.data[x][k]);
               cell.appendChild(text);
               cell.classList.add('tbl-data');
            }
         }
      
      })
      .catch(error =>
         console.error('runQuery', error)
      )
}


//To deal with login activities
function login(){
   let type = [...document.querySelectorAll('input[name=loginAs]:checked')].map((x) => x.value);
   let username = document.getElementById('userValue').value;
   let password = document.getElementById('passValue').value;
   let acc;
   for(let i = 0; i < type.length; i++){
      if(type[0]){
         acc = type[0];
      }
      else{
         break;
      }
   }
   let logBtn = document.getElementById('accHomeBtn');
   let logDisplay = document.getElementById('logIn_container');
   let homeResult = document.getElementById('nameFromServer');
   let infoResult = document.getElementById('user_streamer_Info');
   let infoBtn = document.getElementById('infoHomeBtn');
   result.innerHTML = "";

   
   const API_URL = `http://127.0.0.1:8092/api/account/login/${acc}/${username}-${password}`;
   

   axios.get(`${API_URL}`)
      .then(response => {

         if (response.data.data.length == 0) {
            return;
         }

          //Display the name of the user at the home tab
         for (x=0; x<response.data.data.length; x++) {

            for (k in response.data.data[x]) {
               //console.log(k);    
               let text = document.createTextNode(response.data.data[x][k]);
               homeResult.innerHTML += "Welcome, ";
               homeResult.appendChild(text);
               break;
            }
         }

         //Display the user infomation
         let thead = infoResult.createTHead();
         let row = thead.insertRow();
         for (key in response.data.data[0]) {
             //console.log(key);

            let th = document.createElement("th");
            let text = document.createTextNode(key);
            th.classList.add('tbl-header');
            th.appendChild(text);
            row.appendChild(th);
         }
          
         for (x=0; x<response.data.data.length; x++) {
            let row = infoResult.insertRow();
            
            for (k in response.data.data[x]) {
               console.log(k);    
               let cell = row.insertCell();
               let text = document.createTextNode(response.data.data[x][k]);
               cell.appendChild(text);
               cell.classList.add('tbl-data');
            }
         }

         logDisplay.style.display="none";
         logBtn.style.display="none";
         infoBtn.style.display="block";
      
      })
      .catch(error =>
         console.error('login', error)
      )


}

function editData(){
   let editPage = document.getElementById('editDataPage');
   let infoPage = document.getElementById('myinfo_container');

   infoPage.style.display ="none";
   editPage.style.display ="block";
}

function updateData(){
   let gender = document.getElementById('genderUpdate').value;
   let data = [...document.querySelectorAll('input[name=edit]')].map((x) => x.value);
   let text = document.getElementById('nameFromServer').textContent;
   let name = text.split(" ");
   let streamer = name[1];
   
   //remove the edit page section
   let editPage = document.getElementById('editDataPage');
   let infoPage = document.getElementById('myinfo_container');

   infoPage.style.display ="block";
   editPage.style.display ="none";

   console.log(streamer);
   let API_URL = `http://127.0.0.1:8092/api/account/update/${gender}-${streamer}-${data[1]}-${data[3]}`;
   let endpoint = 'update/';
   console.log(API_URL);
   /*
   if(gender === 'none'){
      endpoint += '-';
   }

   for(let i = 0; i < data.length; i++){
      if(data[i] == "" && i != data.length - 1){
         endpoint += '-';
      }
      else if(data[i] == "" && i == data.length -1){
         endpoint += '--';
      }
      else if(data[data.length - 1] != "" && i == data.length -1){
         endpoint += '-';
      }
      else{
         endpoint += data[i];
      }
   }
*/
   //API_URL += endpoint;

   axios.get(`${API_URL}`)
      .then(response => {

         if (response.data.data.length == 0) {
            return;
         }

         let thead = result.createTHead();
         let row = thead.insertRow();
         for (key in response.data.data[0]) {
             //console.log(key);

            let th = document.createElement("th");
            let text = document.createTextNode(key);
            th.classList.add('tbl-header');
            th.appendChild(text);
            row.appendChild(th);
         }
          
         for (x=0; x<response.data.data.length; x++) {
             //console.log(response.data.data[x].maker);

            let row = result.insertRow();
            
            for (k in response.data.data[x]) {
               console.log(k);    
               let cell = row.insertCell();
               let text = document.createTextNode(response.data.data[x][k]);
               cell.appendChild(text);
               cell.classList.add('tbl-data');
            }
         }
      
      })
      .catch(error =>
         console.error('update', error)
      )



}

