const items = [];

const addToCart = (event) => {
  const button = event.target;
  const card = button.closest('.card');
  const title = card.querySelector('.card-title').textContent;
  const price = parseInt(card.querySelector('.card-subtitle').textContent.match(/\d+/));
  items.push({ title, price });
};

const viewCart = () => {
  let message = 'Items in your cart:\n';
  let totalPrice = 0;
  for (const item of items) {
    message += `- ${item.title}: Rs.${item.price}\n`;
    totalPrice += item.price;
  }
  message += `\nTotal Price: Rs.${totalPrice}`;
  alert(message);
};

const addToCartButtons = document.querySelectorAll('.addToCart');
addToCartButtons.forEach((button) => {
  button.addEventListener('click', addToCart);
});

const viewCartButton = document.querySelector('.viewCart');
viewCartButton.addEventListener('click', viewCart);
