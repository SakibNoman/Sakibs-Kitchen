
const userInput = document.getElementById("search-box");

document.getElementById("search-btn").addEventListener("click", search => {
    searchApi(userInput.value);
})
const searchApi = searchMeal =>{

    let api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`
    fetch(api)
    .then(res => res.json())
    .then(data => {
        makeCard(data.meals);
    })
}


const allCards = document.getElementById("all-cards");
const makeCard = content =>{
    allCards.innerHTML = "";
    content.forEach(element => {
        const singleCard = `
            <div class="card border-0" style="width: 14rem; height: 16rem;">
                <img src="${element.strMealThumb}" class="card-img-top h-75 w-100" alt="...">
                <div class="card-body overflow-auto ">
                    <p class="card-text text-center fw-bold">${element.strMeal}</p>
                </div>
            </div>
        `;
        allCards.innerHTML += singleCard;
    }); 
}