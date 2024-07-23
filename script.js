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

//captura todas as minhas sections
const sections = document.querySelectorAll('section')
//captura todos os meus itens da minha nav bar
const navItens = document.querySelectorAll('.nav-item')

//cria um ouvidor de evento para o rolamento da página
document.addEventListener('scroll', () => {
    //captura o header da página
    const header = document.querySelector('header')
    const headerHeight = header.getBoundingClientRect() //retorna um objeto com valores e propriedades do elemento header
    const scrollPosition = window.scrollY - headerHeight.height //captura a posição do meu scroll e subtrai o header para criar a animação
    
    //adiciona um sombra ao header
    if(scrollPosition <= 0){
        header.style.boxShadow = "none"
    } else {
        header.style.boxShadow = "5px 1px 5px rgba(0, 0, 0, 0.1)"
    }

    let activeSectionIndex = 0
    //passa por todos os elementos da minha seção
    sections.forEach((section, i) => {
        const sectionTop = section.offsetTop - 96 //calcula a posição superior descontando o header
        const sectionBottom = sectionTop + section.offsetHeight //calcula a posição inferior da seção 

        //verifica a posição do scroll e se ela está dentro dos limites
        if(window.scrollY >= sectionTop && window.scrollY < sectionBottom){
            activeSectionIndex = i
            return false
        }
    })

    //passa por todos os itens da navegação
    navItens.forEach((navItem, index) => {
        if(index === activeSectionIndex){
            navItem.classList.add('active') //adiciona a classe active aos meus itens da navbar
        } else {
            navItem.classList.remove('active') //remove a classe active dos meu itens da navbar
        }
    })
})

