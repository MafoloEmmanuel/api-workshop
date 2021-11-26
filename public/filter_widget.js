document.addEventListener('DOMContentLoaded', ()=>{
const filterBtn = document.querySelector('.filterBtn')
const brandList = document.querySelector('.brandlist');
const colorList = document.querySelector('.colorlist');
const carList = document.querySelector('.carList')

//handlebars
const carTemplateElem =  document.querySelector('.list').innerHTML;
const carTemplate = Handlebars.compile(carTemplateElem)
filterBtn.addEventListener('click', ()=>{
   // console.log(brandList.innerHTML)
    console.log(brandList.value)
    var theBrand = brandList.value;
    var theColor= colorList.value;


var specificMake= axios.get('https://api-tutor.herokuapp.com/v1/cars/make/:make')

    axios.get('https://api-tutor.herokuapp.com/v1/cars')
    .then(res=>{
if(theBrand =='ford'){
    console.log('hi ford')
axios.get('https://api-tutor.herokuapp.com/v1/cars/make/ford')
.then(res=>{
    console.log('there ford')

    console.log(res)
    carList.innerHTML= carTemplate({
        data: res.data
    })
})

} else if(theBrand=='vw'){
    axios.get('https://api-tutor.herokuapp.com/v1/cars/make/volkswagen')
.then(res=>{
    console.log('there vw')

    console.log(res)
    carList.innerHTML= carTemplate({
        data: res.data
    })

})
}
else if(theBrand=='toyota'){
    axios.get('https://api-tutor.herokuapp.com/v1/cars/make/toyota')
.then(res=>{
    console.log('there toyota')

    console.log(res)
    carList.innerHTML= carTemplate({
        data: res.data
    })

})
}
else if(theBrand=='nissan'){
    axios.get('https://api-tutor.herokuapp.com/v1/cars/make/nissan')
.then(res=>{
    console.log('there nissan')

    console.log(res)
    carList.innerHTML= carTemplate({
        data: res.data
    })

})
}
else if(theColor=='blue'){

    axios.get('https://api-tutor.herokuapp.com/v1/cars/color/blue')
    .then(res=>{
    
        console.log(res)
        carList.innerHTML= carTemplate({
            data: res.data
        })
    
    })
}else if(theColor=='red'){

    axios.get('https://api-tutor.herokuapp.com/v1/cars/color/red')
    .then(res=>{
    
        console.log(res)
        carList.innerHTML= carTemplate({
            data: res.data
        })
    
    })
}else if(theColor=='orange'){

    axios.get('https://api-tutor.herokuapp.com/v1/cars/color/orange')
    .then(res=>{
    
        console.log(res)
        carList.innerHTML= carTemplate({
            data: res.data
        })
    
    })
}else if(theColor=='white'){

    axios.get('https://api-tutor.herokuapp.com/v1/cars/color/white')
    .then(res=>{
    
        console.log(res)
        carList.innerHTML= carTemplate({
            data: res.data
        })
    
    })
}else if(theColor=='grey'){

    axios.get('https://api-tutor.herokuapp.com/v1/cars/color/grey')
    .then(res=>{
    
        console.log(res)
        carList.innerHTML= carTemplate({
            data: res.data
        })
    
    })
}
else{
    carList.innerHTML= carTemplate({
        data: res.data
    })

}
    })

    
})
})
///v1/cars/make/:make 
///v1/cars/color/:color