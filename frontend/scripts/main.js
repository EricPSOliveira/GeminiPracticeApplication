
const chatInsert = document.querySelector("#chatInsert")
const chat_content = document.querySelector(".chat_content")
let memories = new BeeMind();
// memories.setMemory("1")
// memories.setMemory("102")
// memories.setMemory("66")
// memories.setMemory("7")
// memories.setMemory("222")
// memories.setMemory("100")
// memories.setMemory("29")
// memories.setMemory("23")
// memories.setMemory("10")
// memories.setMemory("23")
// memories.getLastfiveMemories()

document.addEventListener("keydown", (e) => {
  let alvo = e.key

  if (alvo == "Enter") {


    if (chatInsert.value == "") {
      return null;
    } else {
      
      let isChecked = memories.haveMemory()
      console.log(isChecked)

 
      let insertContentAlterated
      if (isChecked == true) {
        let mindSet = memories.haveFiveMemories()

        if(mindSet == true){
          console.log(mindSet, memories.getLastfiveMemories())
        }


        let getLastMemory = memories.getLastMemory()
        let valus = getLastMemory.memory
        insertContentAlterated = valus +  " " +  chatInsert.value
        
        userContent = chatInsert.value
        
      } else {
        insertContentAlterated = chatInsert.value
        userContent = chatInsert.value
      }

      console.log(insertContentAlterated)
      
      chatInsert.setAttribute("disabled", true)
      inputSystem.classList.remove("verified");
      chatInsert.value = ""

      
      let orderUsertoAPI = document.createElement("div")
      chat_content.appendChild(orderUsertoAPI)
      orderUsertoAPI.classList.add("orderUsertoAPI")

      let user = document.createElement("div");
      orderUsertoAPI.appendChild(user)
      user.textContent = userContent
      user.classList.add("user")

      isLoanding(true)
      const forward = document.querySelector('.chat_content')
      // more visibility
      chatTop(orderUsertoAPI, forward)
      
      
      let apiContent = fetch("http://127.0.0.1:5000/tequila/mercado", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ content: insertContentAlterated })
      }).then(response => response.json().then(data => {

        //loading animation
        isLoanding(false)

        
        let apiContenResponse = data.response
        console.log(apiContenResponse)
        memories.setMemory(apiContenResponse)


        marked.setOptions({
          highlight: function (code, lang) {
            return hljs.highlightAuto(code, [lang]).value;
          }
        });


        let formatapiContent = formatText(apiContenResponse)
        let api = document.createElement("div")
        orderUsertoAPI.appendChild(api)
        api.classList.add("api")
        api.innerHTML = formatapiContent
        chatInsert.removeAttribute("disabled")
        hljs.highlightAll();



      }))



    }
  }
})



{/* <div class="chat_content">
<div class="orderUsertoAPI">
  <div class="user">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aperiam aliquid consectetur
    omnis quam iusto at, ducimus atque. Consequatur autem doloribus quidem maxime porro a dignissimos nihil omnis
    commodi facere? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem fuga at hic quibusdam
    consectetur explicabo officiis voluptate harum assumenda, reprehenderit mollitia? Aperiam aliquid similique ut
    mollitia ullam excepturi eius. Eligendi?</div>
  <div class="api"></div>
</div>
</div> */}
