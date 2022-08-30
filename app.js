// load all data
const loadData = async function (name,dataLimit) {
  const url = `https://openapi.programming-hero.com/api/phones?search=${name}`;
  const data = await fetch(url);
  const res = await data.json();
  displayPhones(res.data,dataLimit);
};
// displayPhones
const displayPhones = (data,dataLimit) => {
  const cardContainer = document.getElementById("show-phones");
  const error = document.getElementById("error");
  const showBtn = document.getElementById("show")
  cardContainer.innerHTML = "";
  if(dataLimit && data.length > 10){
    data = data.slice(0,10)
    showBtn.classList.remove("d-none") 
  }else{
    showBtn.classList.add("d-none")
  }
   
  if(data.length == 0){
    error.classList.remove("d-none")
  }else{
    error.classList.add("d-none")
  }

  
  data.map((data) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div class="card h-100 p-3">
              <img src="${data.image}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${data.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
        `;
    cardContainer.appendChild(div);
  });
};
// get input field value and call load function
const inputField = (dataLimit) => {
  const input = document.getElementById("input-field");
  const inputValue = input.value;
  loadData(inputValue,dataLimit);
  
};
// load data with searchBtn
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", () => {
  inputField(10);
});
// handle enter button
const input = document.getElementById("input-field");
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    inputField(10);
  }
});
const showAll = document.getElementById("show-btn")
showAll.addEventListener("click",() =>{
    inputField()
})