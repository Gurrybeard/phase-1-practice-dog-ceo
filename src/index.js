console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded',()=>{
    console.log('dom loaded');
    loadDogs();
    loadBreeds();
    })


function loadDogs(){
    fetch(imgUrl)
    .then(resp=>resp.json())
    .then(data=>{
        data.message.forEach(element => {
            const contain = document.getElementById('dog-image-container');
            const img = document.createElement('img'); 
            img.setAttribute("src",element)
            contain.appendChild(img);
        });
       });
}

function loadBreeds(){
    fetch(breedUrl)
    .then(resp=>resp.json())
    .then(data=>{
      //  console.log(Object.keys(data.message));
        let dogar = Object.keys(data.message);
        const ul = document.getElementById('dog-breeds');
        loadAllBreeds(dogar,ul);
        //filtering using dropdown
        document.getElementById('breed-dropdown').addEventListener("change",()=>{
            let dropdownValue = document.getElementById('breed-dropdown').value;
            let filterDogAr = dogar.filter((array)=>{
                return array.startsWith(dropdownValue);
             })
             console.log(filterDogAr);
             loadAllBreeds(filterDogAr,ul);

        })
       });
}

function loadAllBreeds(dogar,ul){
    ul.innerHTML=""
    dogar.forEach(element => {
        const li = document.createElement('li');
        li.innerHTML = Object.values(element).join("");
    /*adds red color clickthing */    li.addEventListener("click",()=> li.style.color ="red");
        ul.appendChild(li);
    });
}
