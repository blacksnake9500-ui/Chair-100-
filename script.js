const four_box = document.querySelector(".four_box")
const two_like = document.querySelector(".two_like")
const showMore = document.querySelector(".showMore")
const darkButton = document.querySelector(".darkButton")
const body = document.querySelector("body")

darkButton.addEventListener("click",()=>{
    body.classList.toggle("darkmode")
})


let applink = "https://fakestoreapi.com/products"

const dataBase = async (link) => {
    const request = await fetch(link)
    const response = await request.json()
    writeData(response);
}

dataBase(applink)

const writeData = (data) => {
    data.map((item) => {
        return four_box.innerHTML += `
     <div class="four_card">    
        <img src= ${item.image}    alt="">
        <div class="category">
            <p>${item.category}</p>
        </div>
        <div class="two_like">
            <i class="fa fa-heart" aria-hidden="true"></i>  ${item.id}
        </div>
        <p class="two_p">${item.title.slice(0, 20) + "..."}</p>
        <p>${item.description.slice(0, 30) + "..."}</p>
        <h2>${item.price}$<span>${item.rating.rate}</span>    <span>${item.rating.count}</span></h2>
    </div>
    `

    })
}

showMore.addEventListener("click", () => {
    four_box.classList.toggle("hidden")
})
