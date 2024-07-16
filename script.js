const mobileBtn = document.getElementById('mobile_btn')
const burgerMenu = document.getElementById('burguer-menu')
const cross = document.getElementById('cross')
mobileBtn.addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobile_menu')
    if(mobileMenu.classList.contains('active')){
        mobileMenu.classList.remove('active')
        cross.classList.add('hidden')
        burgerMenu.classList.remove('hidden')
    } else {
        mobileMenu.classList.add('active')
        cross.classList.remove('hidden')
        burgerMenu.classList.add('hidden')
    }
})