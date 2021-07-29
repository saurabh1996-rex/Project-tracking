const menu = ()=>{
const menuBtn = document.querySelector(".menu")
const closeBtn = document.querySelector(".close")
const navigation =document.querySelector("nav")
menuBtn.addEventListener("click", ()=>{
    closeBtn.style.display="block"
    menuBtn.style.display="none"
    navigation.style.display="block"
})
closeBtn.addEventListener("click", ()=>{
    closeBtn.style.display="none"
    menuBtn.style.display="block"
    navigation.style.display="none"
})
}

menu()