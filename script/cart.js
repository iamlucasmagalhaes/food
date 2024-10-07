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

let cartList = []

//abrir o modal do carrinho
cart.addEventListener("click", () =>{
    updateCartModal()
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
        const price = parseFloat(parentButton.getAttribute("data-price"))      
    
        addToCart(name, price)
    }
})

//função para adicionar itens no carrinho
function addToCart(name, price){
    //verifica se o item já existe na lista
    const existingItem = cartList.find(item => item.name === name)

    if(existingItem){
        //se o item já existe, aumenta a quantidade + 1
        existingItem.quantity += 1
    } else {
        cartList.push({
            name,
            price,
            quantity: 1
        })
    }

    updateCartModal()
}

//atualiza o carrinho da home
function updateCartModal(){
    cartItemsContainer.innerHTML = ""
    let total = 0

    cartList.forEach(item => {
        //cria um elemento do item escolhido no meu modal
       const cartItemElement = document.createElement("div")
       cartItemElement.classList.add("flex", "justify-between", "mb-4", "flex-col")

       cartItemElement.innerHTML = `
       <div class = "flex items-center justify-between"/>
            <div>
                <p class = "font-bold">${item.name}</p>
                <p>Qtd: ${item.quantity}</p>
                <p class = "font-medium mt-2">R$ ${item.price.toFixed(2)}</p>
            </div>

            <button>Remover</button>
       </div>`

       cartItemsContainer.appendChild(cartItemElement)
    })
}