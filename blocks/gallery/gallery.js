export default async function decorate(block) {
  const productId = window.location.pathname.split('/').pop();
  const res = await fetch('/data/pdpproducts.json');
  const json = await res.json();
  const product = json[productId];
  if (!product?.images) return;

  const galleryWrapper = document.createElement('div');
  galleryWrapper.className = 'carousel-wrapper';

  const mainImage = document.createElement('img');
  mainImage.className = 'main-image';
  mainImage.src = product.images[0].src;
  mainImage.alt = product.images[0].alt;

  const thumbnails = document.createElement('div');
  thumbnails.className = 'thumbnails';

  product.images.forEach((img, index) => {
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

  galleryWrapper.appendChild(mainImage);
  galleryWrapper.appendChild(thumbnails);
  block.appendChild(galleryWrapper);
}