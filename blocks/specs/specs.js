export default async function decorate(block) {
  const res = await fetch('/data/products.json');
  const json = await res.json();
  const product = json[window.pageMetadata.ProductID];
  if (!product) return;

  const sizes = product.sizes.map(s => `<li>${s}</li>`).join('');
  block.innerHTML = `
    <h3>Available Sizes</h3>
    <ul>${sizes}</ul>
    <p>Price (US): ${product.price.US}</p>
    <p>Available in: ${product.availability.join(', ')}</p>
  `;
}
