let cartprod = []

// fetch("https://sht-wrld.herokuapp.com/auth", {
//   method: "post",
//   body: JSON.stringify({
//     username: "Zaid",
//     password: "skimask999",
//   }),
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => {
//     (storage = window.localStorage),
//       console.log(json["access_token"]),
//       storage.setItem("jwt-token", json["access_token"]);
//   });

fetch("https://sht-wrld.herokuapp.com/get-blogs/")
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch("https://sht-wrld.herokuapp.com/get-blogs/")
  .then((response) => response.json())
  .then((json) => {
    console.log(json.data);
    json.data.forEach((item) => {
      console.log(item);
      console.log(item[1]);
    });
    renderproducts(json.data);
  });

function renderproducts(products) {
  let productContainer = document.querySelector("#container");
  productContainer.innerHTML = "";

  products.forEach((product) => {
    productContainer.innerHTML += `
      <div class="products">
        <h3 class="product-name items">${product[1]}</h3>
        <h3 class="product-price items">${product[2]}</h3>
        <h3 class="product-amount items">${product[3]}</h3>
        <div class="btn">
        <button class="add-btn" onclick="addTocart(${product[0]})">Add to cart</button>
        </div>

        <div class="Delete">
        <button class="del-btn" onclick="del(${product[0]})">DELETE</button>
        </div>


    `;
  });
}

function del(id) {
  fetch(`https://sht-wrld.herokuapp.com/delete-post/${id}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    window.location.reload()
  })
  
}

function add() {
  let name = document.getElementById("productName").value;
  let price = document.getElementById("Price").value;
  let quantity = document.getElementById("quantity").value;
  console.log(name, price, quantity);
  fetch("https://sht-wrld.herokuapp.com/create-blog/",{
    method: 'POST',
    body: JSON.stringify({
      prod_name: name,
      prod_price: price,
      amount: quantity,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((json) => {
    // window.location.reload()
  });
}

function addTocart(id) {
  fetch("https://sht-wrld.herokuapp.com/get-blogs/")
  .then((response) => response.json())
  .then(data => {
    cartprod = data.data
   let cart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []
  //  console.log(beats); 
   let product = cartprod.find((prod) => {
     return prod[0] == id
   });
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("add");
  })  
}
