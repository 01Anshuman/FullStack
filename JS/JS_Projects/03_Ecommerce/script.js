document.addEventListener('DOMContentLoaded',()=>{
    //creating the products array and creating the objects inside it for inserting in Product List
    const products = [
        {id: 1,name: "Product 1",price:20.23},
        {id: 2,name: "Product 2",price:92.89},
        {id: 3,name: "Product 3",price:56.25},
    ];

    //creating an empty cart array 
    //selecting the items and storing in variables
    const cart = []
    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMessage = document.getElementById("empty-cart");
    const cartTotalMessage = document.getElementById("cart-total");
    const totalPriceDisplay = document.getElementById("total-price");
    const checkOutBtn = document.getElementById("checkout-btn");

    //for Each product in Product List creating new div for that and then inserting HTMl content using innerHTML
    products.forEach(product =>{
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
        <span>${product.name}- ${product.price.toFixed(2)}</span>
        <button data-id ="${product.id}"> Add to cart</button>`;
        productList.appendChild(productDiv);
    });

    //Targetting the button tag on the product list
    //extracting the id of the clicked product from product list after click the button
    productList.addEventListener("click",(e)=>{ 
        if(e.target.tagName === 'BUTTON'){
        const productId = parseInt(e.target.getAttribute("data-id"));
        const product = products.find(p => p.id === productId);
        addToCart(product);
        }
    });


    //creating a function to push the selected product item to Cart
    function addToCart(product){
        cart.push(product);
        renderCart(cart);
    }
    

    //creating the function to render the selected cart item to the screen 
    function renderCart(){
        let totalPrice = 0;
        if(cart.length>0){
            emptyCartMessage.classList.add("hidden")
            cartTotalMessage.classList.remove("hidden")
            cart.forEach((item, index) =>{
                totalPrice += item.price
                const cartItem = document.createElement('div')
                cartItem.innerHTML = `
                ${item.name} - $${item.price.toFixed(2)}`
                cartItems.appendChild(cartItem);
                totalPriceDisplay.textContent  = `${totalPrice.toFixed(2)}`
            });
        }else{
           emptyCartMessage.classList.remove("hidden");
           totalPriceDisplay.textContent  = `0.00`;
        }  
    }
    

    //defining the event listener for the checkout Btn
    checkOutBtn.addEventListener("click", ()=>{
        cart.length = 0;
        alert("Checkout Succesfully");
        renderCart();
    });
});