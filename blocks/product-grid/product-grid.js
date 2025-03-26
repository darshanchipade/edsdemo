export default async function decorate(block) {
  block.innerHTML = '<div class="loading">Loading products...</div>';

  try {
    const resp = await fetch('/data/products.json');
    if (!resp.ok) throw new Error('Failed to load product data');

    const products = await resp.json();

    const html = products.map((product) => `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
        <a class="product-button" href="${product.link}" target="_blank">View Product</a>
      </div>
    `).join('');

    block.innerHTML = html;
  } catch (e) {
    block.innerHTML = `<p class="error">Failed to load products.</p>`;
    console.error(e);
  }
}
