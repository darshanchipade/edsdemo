export default async function decorate(block) {
  const productId = window.location.pathname.split('/').pop();
  const res = await fetch('/data/pdpproducts.json');
  const json = await res.json();
  const product = json[productId];
  if (!product?.images) return;

  const mainImage = document.createElement('img');
  mainImage.className = 'main-image';
  mainImage.src = product.images[0].src;
  mainImage.alt = product.images[0].alt;

  const thumbnails = document.createElement('div');
  thumbnails.className = 'thumbnails';

  product.images.forEach(img => {
    const thumb = document.createElement('img');
    thumb.src = img.src;
    thumb.alt = img.alt;
    thumb.className = 'thumbnail';
    thumb.addEventListener('click', () => {
      mainImage.src = img.src;
      mainImage.alt = img.alt;
    });
    thumbnails.appendChild(thumb);
  });

  block.appendChild(mainImage);
  block.appendChild(thumbnails);
}