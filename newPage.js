


const foodBtn = document.getElementById('foodRandomizer')
const foodArr=[]
foodBtn.addEventListener('click',()=>{
const resterauntElements = document.querySelectorAll('.resteraunts li')

resterauntElements.forEach(element=>{
    foodArr.push(element.textContent)
})
    alert(foodArr[Math.floor(Math.random()*foodArr.length)])
})