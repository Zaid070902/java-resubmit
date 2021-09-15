let cartbeats = []
cartbeats = JSON.parse(localStorage.getItem('cart'));
let theCart = document.querySelector('#container');
cartbeats.innerHTML = "";

cartbeats.forEach((product) => {
  theCart.innerHTML +=`
  <div class="products">
  <h3 class="product-name items">${product[1]}</h3>
  <h3 class="product-price items">${product[2]}</h3>
  <h3 class="product-amount items">${product[3]}</h3>
`;
});
