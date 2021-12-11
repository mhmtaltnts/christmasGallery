const previous = document.getElementById("previous")
const next = document.getElementById("next")
const img = document.getElementById("img")
const imgs = [
    {src: "images/bank.jpg",
    alt: "christmas village at night with snow and bank under trees"},
    {src: "images/christmas.jpg",
    alt: "white and gold wrapped present on white table with snowflake decorations"},
    {src: "images/snowman.jpg",
    alt: "small black dog and small beige dog looking out the window at snow next to Christmas wreath"},
    {src: "images/tree.jpg",
    alt: "small black dog and small beige dog looking out the window at snow next to Christmas wreath"},
    {src: "images/church.jpg",
    alt: "small black dog and small beige dog looking out the window at snow next to Christmas wreath"}]

let imgNum = 0

next.onclick = ()=>{  
    imgNum+=1
    if(imgNum%imgs.length<0){
        img.src = imgs[imgNum%imgs.length+imgs.length].src
        console.log(imgNum%imgs.length+imgs.length)  
    }else{
        img.src = imgs[imgNum%imgs.length].src
        console.log(imgNum%imgs.length) 
    } 
}

previous.onclick = ()=>{
    imgNum-=1
    if(imgNum%imgs.length<0){
        img.src = imgs[imgNum%imgs.length+imgs.length].src
        console.log(imgNum%imgs.length+imgs.length)  
    }else{
        img.src = imgs[imgNum%imgs.length].src
        console.log(imgNum%imgs.length) 
    }
      
}
// Task:
// - Wire up the buttons to switch through the images in the imgs array. 
// - Make sure that the gallery works no matter how many images are added.
// - Decide/implement what to do when you reach either end of the array - do nothing and disable buttons, loop back round to the other end, or something else?
// - Remember to also update the alt tags.

// Stretch goals:
// - Add transitions for a smooth effect.
// - Allow the user to zoom in and out of the images.