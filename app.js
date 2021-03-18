const portillos = document.getElementById(`portillos`);

//q2
const images = document.getElementsByTagName(`img`)

//q3
const centered = document.getElementsByClassName(`center`)

//q4
const ginosEast = document.querySelector(`ginos`)

//q5
const pTags = document.querySelectorAll(`p`)

//Q6A
const h1 = document.querySelector(`h1`)
//Q6B
h1.innerText = `Matt's Favorite Places To Eat In Sweet Home Chicago!`

//Q7A
const others = document.getElementById(`others`)
//Q7B
others.innerHTML = `Other Favorites`

 //Q8A
 const aTag = document.querySelector('a')
 //Q8B
 aTag.href = `https://www.choosechicago.com/articles/food-drink/5-classic-chicago-foods/`

//Q9
h1.classList.add(`text-color`, `background`)

//Q10
h1.classList.remove(`background`)

//Q11A
const h4 = document.createElement(`h4`)
//Q11B
h4.innerText = `CHICAGO: A great place to eat!`
//Q11C
const body = document.querySelector(`body`)
body.prepend(h4)

//Q12A
const h5 = document.createElement(`h5`)
//Q12B
h5.innerText = `See you in the Windy City Sometime`
//Q12C
h5.insertAdjacentElement(`afterend`, aTag)

//13
const jays = document.querySelector(`li`)
jays.remove()


