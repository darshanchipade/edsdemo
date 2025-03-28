export default async function decorate(block) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  block.innerHTML = '';

  if (cart.length === 0) {
    block.innerHTML = '<p>Your bag is empty.</p>';
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    const price = 120;
    const itemTotal = price * item.quantity;
    total += itemTotal;

    // Use thumbnail instead of main image
    const thumbnail = item.image.replace('peg_front', 'peg_side'); // simple filename swap if pattern matches

    const itemEl = document.createElement('div');
    itemEl.className = 'bag-item';
    itemEl.innerHTML = `
      <img class="thumbnail" src="${thumbnail}" alt="${item.title}">
      <div class="item-details">
        <h2>${item.title}</h2>
        <p><strong>Size:</strong> ${item.size}</p>
        <p><strong>Quantity:</strong> ${item.quantity}</p>
        <p><strong>Item Total:</strong> $${itemTotal}</p>
        <button class="remove-item" data-index="${index}">Remove</button>
      </div>
    `;
    block.appendChild(itemEl);
  });

  const totalEl = document.createElement('div');
  totalEl.className = 'checkout-summary';
  totalEl.innerHTML = `
    <h3>Total: $${total}</h3>
    <button class="checkout-button">Proceed to Checkout</button>
    <button class="return-shopping-button">Return to Shopping</button>
  `;
  block.appendChild(totalEl);

  block.querySelectorAll('.remove-item').forEach(btn => {
    btn.addEventListener('click', () => {
      cart.splice(parseInt(btn.dataset.index, 10), 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      location.reload();
    });
  });

  block.querySelector('.checkout-button')?.addEventListener('click', () => {
    alert('Proceeding to payment...');
  });
  block.querySelector('.return-shopping-button')?.addEventListener('click', () => {
    window.location.href = '/';
  });
}