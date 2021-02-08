
const userInput = document.getElementById("search-box");
const detailsParent = document.getElementById("details-card");
const allCards = document.getElementById("all-cards");

//getting user input and calling appropriate function
document.getElementById("search-btn").addEventListener("click", search => {
    if((userInput.value).length===0){
        errorDisplay();
    }
    else{
        searchApi(userInput.value);
    }
})

//fetching search result and calling appropriate function
const searchApi = searchMeal => {
    document.getElementById("alertH3").style.display = "none";
    let api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`
    fetch(api)
        .then(res => res.json())
        .then(data => {
            makeCard(data.meals);
        })
        .catch(error => {
            errorDisplay();
        })
}

//making card for every meal
const makeCard = content => {
    allCards.innerHTML = "";
    detailsParent.innerHTML ="";
    content.forEach(element => {
        const singleCard = `
            <div onclick = "detailsView('${element.idMeal}')" class="card border-0" style="width: 14rem; height: 16rem;">
                <img src="${element.strMealThumb}" class="card-img-top h-75 w-100" alt="...">
                <div class="card-body overflow-auto ">
                    <p class="card-text text-center fw-bold">${element.strMeal}</p>
                </div>
            </div>
        `;
        allCards.innerHTML += singleCard;
    });
}

//making list of ingredients
const detailsView = mealId => {
    let api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(api)
        .then(res => res.json())
        .then(data => {
            const detailsCard = `
        <div class="card border-0" style="width: 26rem;">
            <img class="card-img-top h-75 w-100" src="${data.meals[0].strMealThumb}" >
                <div id="ingredient-list"  class="card-body overflow-auto">
                    <h1 class="card-text fs-3 fw-bold" >${data.meals[0].strMeal}</h1>
                    <p class="card-text fw-bold">Ingredients</p>
                    
                </div>
        </div> 
        `;
        detailsParent.innerHTML = detailsCard;
        
        //Creating ingredients list
        const div = document.getElementById("ingredient-list");
        const ul = document.createElement("ul");
        ul.className = "ul-ingredient";
        
        for(let i=1;i<=20;i++){
            if(data.meals[0]["strIngredient"+i] =="")
            {
                break;
            }
            else{
                const li = document.createElement("li");
                li.innerText = "✔" + data.meals[0]["strIngredient"+i];
                ul.appendChild(li);
            }
        }
        div.appendChild(ul);
        })
}

//function for error handling
const errorDisplay = () =>{
    allCards.innerHTML = "";
    detailsParent.innerHTML = "";
    document.getElementById("alertH3").style.display = "block";
}

//Thank You
