export default async function decorate(block) {
  const productId = window.location.pathname.split('/').pop();
  const res = await fetch('/data/pdpproducts.json');
  const json = await res.json();
  const product = json[productId];
  if (!product) return;

  const summary = product.summary || 'No summary available.';
  const description = product.description || 'No description available.';

  block.innerHTML = `
    <div class="product-summary">
      <h2>Summary</h2>
      <p>${summary}</p>
    </div>
    <div class="product-description">
      <h2>Description</h2>
      <p>${description}</p>
    </div>
  `;
}