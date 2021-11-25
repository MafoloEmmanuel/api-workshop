document.addEventListener('DOMContentLoaded', ()=>{
    const colorsElem = document.querySelector('.colors');
    const brandsElem = document.querySelector('.brands');
    const carsElem = document.querySelector('.cars');

    //compile handlebars


    var template = Handlebars.compile("Handlebars <b>{{doesWhat}}</b>");
    // execute the compiled template and print the output to the console
    console.log(template({ doesWhat: "rocks!" }));
    template.innerHTML
//Get all colors
axios.get('http://api-tutor.herokuapp.com/v1/colors')
.then((res)=>{
    colorsElem.innerHTML=res.data
    console.log(res.data)
console.log(res)

});

//Get all Brands
axios.get('http://api-tutor.herokuapp.com/v1/makes')
.then((res)=>{
    brandsElem.innerHTML=res.data
    console.log(res.data)
});

//Get all cars
axios.get('http://api-tutor.herokuapp.com/v1/cars')
.then((res)=>{
  //  var allCars = res.data
 var  carsResult = JSON.stringify(res.data)
carsElem.innerHTML =carsResult


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