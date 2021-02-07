
const userInput = document.getElementById("search-box");

document.getElementById("search-btn").addEventListener("click", search => {
    searchApi(userInput.value);
})
const searchApi = searchMeal => {

    let api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`
    fetch(api)
        .then(res => res.json())
        .then(data => {
            makeCard(data.meals);
        })
}

const allCards = document.getElementById("all-cards");
const makeCard = content => {
    allCards.innerHTML = "";
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
    const detailsParent = document.getElementById("details-card");
    let api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(api)
        .then(res => res.json())
        .then(data => {
            const detailsCard = `
        <div class="card border-0" style="width: 26rem;">
            <img class="card-img-top" src="${data.meals[0].strMealThumb}" >
                <div class="card-body">
                    <h1 class="card-text fs-3 fw-bold" >${data.meals[0].strMeal}</h1>
                    <p class="card-text fw-bold">Ingredients</p>
                    <ul>
                        <li>${data.meals[0].strIngredient1}</li>
                    </ul>
                </div>
        </div> 
        `;
        detailsParent.innerHTML = detailsCard;
        })

}
let n=1;
while("strIngredient"+n != null){
    
}
