document.addEventListener('DOMContentLoaded', ()=>{
    const colorsElem = document.querySelector('.colors');
    const brandsElem = document.querySelector('.brands');
    const carsElem = document.querySelector('.cars');
    

    //compile handlebars
const colorsTemplateElem = document.querySelector('.list').innerHTML;
const listTemplate = Handlebars.compile(colorsTemplateElem)

const showAllCarsTemp = document.querySelector('.allCars').innerHTML
const showAllCars = Handlebars.compile(showAllCarsTemp)
console.log(listTemplate)

axios.get('https://api-tutor.herokuapp.com/v1/colors')
.then((res)=>{
    colorsElem.innerHTML=listTemplate({
      data : res.data
    })
    console.log(res.data)


});

//Get all Brands
axios.get('https://api-tutor.herokuapp.com/v1/makes')
.then((res)=>{
    brandsElem.innerHTML=listTemplate({
      data : res.data

    })
    console.log(res.data)
});

//Get all cars
axios.get('https://api-tutor.herokuapp.com/v1/cars')
.then((res)=>{
  var allCars = res.data
 //var  carsResult = JSON.stringify(res.data)
 console.log(allCars)
carsElem.innerHTML= showAllCars({
  data: res.data
})
/*
allCars.forEach(car => {
  console.log(car.make='Toyota')
  return car.make='Toyota'
});
//console.log(res.data)
//console.log(res)
//console.log(carsResult)
*/
})
})