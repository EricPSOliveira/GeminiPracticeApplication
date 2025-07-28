const inputSystem = document.querySelector("#chatInsert");
let hasItem = false;




inputSystem.addEventListener("input", (e)=>{
  if(inputSystem.value == ""){
    inputSystem.classList.remove("verified");
  } else{
    inputSystem.classList.add("verified");
  }
})



