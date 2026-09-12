const container = document.querySelector(".members");
const listview = document.querySelector("#list-view");
const gridview = document.querySelector("#grid-view");

gridview.addEventListener("click",() =>{
    container.classList.add("grid");
    container.classList.remove("list");
});

listview.addEventListener("click",() =>{
    container.classList.add("list");
    container.classList.remove("grid");
});