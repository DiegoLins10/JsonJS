

function chamar(){
let url = "/json/dados.json";
let input = document.querySelector("#pesq");
let value = input.value;

fetch (url)
    .then ((resp) => resp.json())
    .then (function(data) {
            const div= document.querySelector('[data-js="pessoa"]');
            const fem =  "fem";
            const masc =  "masc";
            div.innerHTML = '';
            
            

            let results = (data.results);
            console.log(results);

         var filter = results.filter(function (entry) {
            return entry.name.last.toLowerCase().includes(value.toLowerCase());
        });  
            console.log(filter);
            filter.forEach(function(result) {
                let cor = "";
                if(result.gender == 'male'){
                    cor = masc;
                }
                else{
                    cor = fem;
                }
                div.innerHTML += `
                <li class="card ${cor}">
                <img class="card-image" alt="${name}" src =${result.picture.large}  />
                    <h2 class="card-title">${result.name.first + " " + result.name.last}</h2>
                    <p class="card-subtitle">${result.location.city}</p>
                    <p class="card-subtitle">${result.location.state}</p>
                    <p class="card-subtitle">${result.location.country}</p>
                    <div class= "linha">
                    <p class="email">${result.email}</p>
                    </div>
                </li>
                
                `


            });             
           
    })
            .catch(function(error) {
                console.log(error);    
            })   ;
             
        }
