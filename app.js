
const userInput = document.getElementById("search-box");

document.getElementById("search-btn").addEventListener("click", function() {
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
    
    content.forEach(element => {
        const singleCard = `
            <div class="card" style="width: 14rem;">
                <img src="${element.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text text-center fw-bold">${element.strMeal}</p>
                </div>
            </div>
        `;
        allCards.innerHTML += singleCard;
    }); 
}










// /* <div class="card" style="width: 18rem;">
//                 <img src="..." class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <p class="card-text">Some quick</p>
//                 </div>
// </div> 
//item-name : data.meals[0].strMeal
//item-img : data.meals[0].strMealThumb