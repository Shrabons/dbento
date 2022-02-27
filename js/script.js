let phoneButton = document.querySelector('.phone__menu')
let phoneMenu = document.querySelector('.phone')
let closeButton = document.querySelector('.close')
let bar ;
phoneButton.addEventListener('click', function() {

    bar =+ phoneMenu.style.left = "85%"
    
})

closeButton.addEventListener('click', function() {
    phoneMenu.remove()
})