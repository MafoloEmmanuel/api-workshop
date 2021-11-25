document.addEventListener('DOMContentLoaded', ()=>{
    const brandFilter = document.querySelector('.showBrands')

    axios.get('https://api-tutor.herokuapp.com/v1/cars/color/red')
    .then(res=>{
        console.log(res.data)
  });

  document.addEventListener('click', ()=>{
      const displayBtn = document.querySelector('.display');

      axios.get('https://api-tutor.herokuapp.com/v1/cars/color/blue')
      .then(res=>{
          var list = JSON.stringify(res.data)
displayBtn.innerHTML=list
      })
      
  })
})