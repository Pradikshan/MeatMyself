var addToCartBtn = document.getElementsByClassName("addToCart");
var removeFromCartBtn = document.getElementsByClassName("removeFromCart");
var quantity = document.getElementsByClassName("quantity");

// get the stored quantity from local storage
for(var i = 0; i < addToCartBtn.length; i++) {
  if (localStorage.getItem("quantity" + i)) {
      quantity[i].innerHTML = "Quantity: " + localStorage.getItem("quantity" + i);
  }
  addToCartBtn[i].addEventListener("click", decreaseQuantity);
  removeFromCartBtn[i].addEventListener("click", increaseQuantity);
}

function decreaseQuantity(e) {
  var currentQuantity = parseInt(e.target.parentElement.previousElementSibling.innerHTML.split(" ")[1]);
    if (currentQuantity > 0) {
        currentQuantity--;
        e.target.parentElement.previousElementSibling.innerHTML = "Quantity: " + currentQuantity;
        localStorage.setItem("quantity" + i, currentQuantity);
    }
}

function increaseQuantity(e) {
  var currentQuantity = parseInt(e.target.parentElement.previousElementSibling.innerHTML.split(" ")[1]);
    currentQuantity++;
    e.target.parentElement.previousElementSibling.innerHTML = "Quantity: " + currentQuantity;
    localStorage.setItem("quantity" + i, currentQuantity);
}
