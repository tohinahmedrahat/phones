// load all data 
const loadData = async function  (name){
    const url = `https://openapi.programming-hero.com/api/phones?search=${name}`
    const data = await fetch(url)
    const res = await data.json()
    displayPhones(res.data)
}
// displayPhones 
const displayPhones = data => {
    const cardContainer = document.getElementById("show-phones")
    cardContainer.innerHTML = "";
    data.map(data => {
        console.log(data)
        const div = document.createElement("div")
        div.classList.add("col")
        div.innerHTML = `
        <div class="card h-100 p-3">
              <img src="${data.image}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${data.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
        `
        cardContainer.appendChild(div)
    })
}
// get input field value and call load function 
const inputField = () => {
    const input = document.getElementById("input-field")
    const inputValue=input.value
    loadData(inputValue);
    input.value = ""
}
// load data with searchBtn 
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click",() => {
    inputField()
})
// handle enter button 
const input = document.getElementById("input-field");
input.addEventListener("keypress",(e) => {
    if(e.key === "Enter"){
        inputField()
    }
})