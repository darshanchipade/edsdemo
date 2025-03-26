export default async function decorate(block) {
  const res = await fetch('/data/products.json');
  const json = await res.json();
  const product = json[window.pageMetadata.ProductID];
  if (!product) return;

  const gallery = product.images.map(img =>
    `<img src="${img.src}" alt="${img.alt}" />`
  ).join('');
  block.innerHTML = `<div class="image-gallery">${gallery}</div>`;
}
