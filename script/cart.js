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

            <button class = "remove-cart-from-btn" data-name = "${item.name}">Remover</button>
       </div>`

       total += item.price * item.quantity
       cartItemsContainer.appendChild(cartItemElement)
    })

    cartTotal.textContent = total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}

//função para remover item do carrinho
cartItemsContainer.addEventListener('click', (event) => {
    if(event.target.classList.contains('remove-cart-from-btn')){
        const name = event.target.getAttribute("data-name")
        
        removeItemCart(name)
    }
})

function removeItemCart(name){
    const index = cartList.findIndex(item => item.name === name)
    
    if(index !== -1){
        const item = cartList[index]

        if(item.quantity > 1){
            item.quantity -= 1
            updateCartModal()
            return
        }

        cartList.splice(index, 1)
        updateCartModal()
    }
}

//verificaa se o campo input do endereço possue algum valor
addressInput.addEventListener("input", (event) => {
    let inputValue = event.target.value

    if(inputValue !== ""){
        addressInput.classList.remove("border-red-500")
        addressWarning.cartList.add("hidden")
    }
})

//adiciona efeitos para caso o endereço seja colocado corretamente
checkoutBtn.addEventListener('click', () => {
    if(cartList.length === 0) return
    if(addressInput.value === ""){
        addressWarning.classList.remove("hidden")
        addressInput.classList.add("border-red-500")
        return
    }

    //envia pedido para API whatsapp
    const cartItems = cartList.map((item) => {
        return(
            `${item.name} Quantidade: (${item.quantity}) Preço: R$${item.price} |`
        )
    }).join("")

    const message = encodeURIComponent(cartItems)
    const phone = "38991465507"

    //redireciona para a API do whastapp
    window.open(`https://wa.me/${phone}?text=${message} Endereço:${addressInput.value}`, "_blank")
    //limpa o carrinho
    cartList = []
    updateCartModal()
})