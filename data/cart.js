export let cart =
JSON.parse(localStorage.getItem('cart'));

if(!cart){
  cart = [{
      productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity : 2,
      deliveryOptionsID: '1'
    },
    {
      productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity : 1,
      deliveryOptionsID: '2'
    }
  ];
}
  
function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId,button){
  const productContainer = button.closest('.product-container');
  const quantity = productContainer.querySelector(`.js-quantity-selector`);
  const selectedQuantity = Number(quantity?.value || 1);
  let matchingItem = cart.find(cartItem=> cartItem.productId === productId);
      if(matchingItem){
        matchingItem.quantity += selectedQuantity;
      }else{ 
          cart.push({
            productId: productId,
            quantity: selectedQuantity,
            deliveryOptionsID: '1'
          });
      }
      saveToStorage();

};

export function deleteFromCart(productId){
  const newCart = [];
  cart.forEach((cartItem)=>{
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  saveToStorage();
}

