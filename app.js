
const userInput = document.getElementById("search-box");
const detailsParent = document.getElementById("details-card");

document.getElementById("search-btn").addEventListener("click", search => {
    if((userInput.value).length===0){
        errorDisplay();
    }
    else{
        searchApi(userInput.value);
    }
})
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

const allCards = document.getElementById("all-cards");
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
                    <ul>
                        <li>${data.meals[0].strIngredient1}</li>
                        <li>${data.meals[0].strIngredient2}</li>
                        <li>${data.meals[0].strIngredient3}</li>
                        <li>${data.meals[0].strIngredient4}</li>
                        <li>${data.meals[0].strIngredient5}</li>
                        <li>${data.meals[0].strIngredient6}</li>
                        <li>${data.meals[0].strIngredient7}</li>
                        <li>${data.meals[0].strIngredient8}</li>
                        <li>${data.meals[0].strIngredient9}</li>
                        <li>${data.meals[0].strIngredient10}</li>
                    </ul>
                </div>
        </div> 
        `;
        detailsParent.innerHTML = detailsCard;
        })
}
const errorDisplay = () =>{
    allCards.innerHTML = "";
    detailsParent.innerHTML = "";
    document.getElementById("alertH3").style.display = "block";
}