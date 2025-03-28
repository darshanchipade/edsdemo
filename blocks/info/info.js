export default async function decorate(block) {
  const productId = window.location.pathname.split('/').pop();
  const res = await fetch('/data/pdpproducts.json');
  const json = await res.json();
  const product = json[productId];
  if (!product) return;

  const summary = product.summary || 'No summary available.';
  const description = product.description || 'No description available.';
    const cta = document.createElement('div');
cta.className = 'add-to-bag';
cta.innerHTML = '<button>Add to Bag</button>';
    
    const btn = cta.querySelector('button');
  btn.addEventListener('click', () => {
    const selectedSize = document.querySelector('.size-options button.selected')?.dataset.size;
    const quantity = document.querySelector('#quantity')?.value || 1;

    if (!selectedSize) {
      alert('Please select a size.');
      return;
    }

    const productId = window.location.pathname.split('/').pop();
    const title = document.querySelector('h1')?.textContent;
    const image = document.querySelector('.main-image')?.getAttribute('src');
    const description = document.querySelector('.product-summary p')?.textContent;

    const item = {
      productId,
      title,
      image,
      description,
      size: selectedSize,
      quantity: parseInt(quantity, 10)
    };

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Added to bag!');
    window.location.href = '/checkout/checkout'
  });


  block.innerHTML = `
    <div class="product-summary">
      
      <p>${summary}</p>
    </div>
    <div class="product-description">
      <h3>Product Details</h3>
      <p>${description}</p>
    </div>
<div class="product-sizes">
  <label>Select Size:</label>
  <div class="size-options">
    <button data-size="US7">US 7</button>
    <button data-size="US8">US 8</button>
    <button data-size="US9">US 9</button>
    <button data-size="US10">US 10</button>
    <button data-size="US11">US 11</button>
  </div>
</div>

  <div class="quantity-group">
  <label for="quantity">Quantity:</label>
  <select id="quantity" name="quantity">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
</div>
  `;
    document.querySelectorAll('.size-options button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.size-options button').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  });
});

    block.appendChild(cta);
}