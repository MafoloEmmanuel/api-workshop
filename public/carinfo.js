document.addEventListener('DOMContentLoaded', ()=>{
    const colorsElem = document.querySelector('.colors');
    const brandsElem = document.querySelector('.brands');
    const carsElem = document.querySelector('.cars')
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
  var  carsResult = JSON.stringify(res.data)
//console.log(carsResult) 
carsElem.innerHTML=carsResult
//console.log(res.data)
//console.log(res)
//console.log(carsResult)

})
})