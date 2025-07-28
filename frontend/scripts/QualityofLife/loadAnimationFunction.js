const loading = document.querySelector('.loading');
const labelForInsert = document.querySelector('#labelForInsert');


let isLoandingFunc = false



const isLoanding = (isValue) => {
  isLoandingFunc = isValue
    if(isLoandingFunc == false){
       loading.classList.remove("Lloading")
       loading.classList.add("dontLoading")
       labelForInsert.style.display = 'block'
      
      

    } else{
      loading.classList.remove("dontLoading")
      loading.classList.add("Lloading")
      labelForInsert.style.display = 'none'
    }
}
isLoanding(isLoandingFunc)