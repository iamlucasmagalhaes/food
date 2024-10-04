const dishes = document.getElementById('dishes')
const cart = document.getElementById('cart')
const cartModal = document.getElementById('cart-modal')
const cartBtn = document.getElementById('cart-btn')
const cartItemsContainer = document.getElementById('cart-items')
const cartTotal = document.getElementById('cart-total')
const checkoutBtn = document.getElementById('checkout-btn')
const closeModalBtn = document.getElementById('close-modal-btn')
const addressInput = document.getElementById('address')
const addressWarning = document.getElementById('address-warning')

//abrir o modal do carrinho
cart.addEventListener("click", () =>{
    cartModal.style.display = "flex"
})

//fecha o modal do carrinho se clicar fora do modal
cartModal.addEventListener('click', (event) => {
    if(event.target === cartModal){
        cartModal.style.display = "none"
    }
})

closeModalBtn.addEventListener('click', () => {
    cartModal.style.display="none"
})

dishes.addEventListener('click', (event) => {
    let parentButton = event.target.closest('#add-to-cart-btn')
    
    if(parentButton){
        const name = parentButton.getAttribute("data-name")
        const price = parentButton.getAttribute("data-price")      
    }
})