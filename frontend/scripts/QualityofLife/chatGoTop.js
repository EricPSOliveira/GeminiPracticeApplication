



const chatTop = (chatAU, background) =>{

    let hei = chatAU.offsetTop
    let container = window.getComputedStyle(background).height;
    let numHei = parseInt(hei);
    let numContainer = parseInt(container.replace(/px/g, ""));


    let diference = hei - 100
    background.scrollTo(0, hei);
    

}