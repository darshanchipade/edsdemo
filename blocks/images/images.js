export default async function decorate(block) {
  const productId = window.pageMetadata?.ProductID;
  if (!productId) return;

  try {
    const res = await fetch('/data/runningshoespdp.json');
    const data = await res.json();
    const product = data[productId];

    if (!product || !product.images) {
      block.innerHTML = `<p>No images available.</p>`;
      return;
    }

    const gallery = product.images.map(img =>
      `<img src="${img.src}" alt="${img.alt}" />`
    ).join('');

    block.innerHTML = `<div class="image-gallery">${gallery}</div>`;
  } catch (err) {
    console.error("Failed to load images:", err);
  }
}
