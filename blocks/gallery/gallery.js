export default async function decorate(block) {
  const productId = window.location.pathname.split('/').pop();
  const res = await fetch('/data/pdpproducts.json');
  const json = await res.json();
  const product = json[productId];
  if (!product?.images) return;

  let currentIndex = 0;

  const galleryWrapper = document.createElement('div');
  galleryWrapper.className = 'carousel-wrapper';

  const mainImage = document.createElement('img');
  mainImage.className = 'main-image';
  mainImage.src = product.images[0].src;
  mainImage.alt = product.images[0].alt;

  const thumbnails = document.createElement('div');
  thumbnails.className = 'thumbnails';

  const updateImage = (index) => {
    currentIndex = index;
    mainImage.style.opacity = '0';
    setTimeout(() => {
      mainImage.src = product.images[index].src;
      mainImage.alt = product.images[index].alt;
      mainImage.style.opacity = '1';
    }, 200);
  };

  product.images.forEach((img, index) => {
    const thumb = document.createElement('img');
    thumb.src = img.src;
    thumb.alt = img.alt;
    thumb.className = 'thumbnail';
    thumb.addEventListener('click', () => updateImage(index));
    thumbnails.appendChild(thumb);
  });

  const leftArrow = document.createElement('button');
  leftArrow.className = 'carousel-arrow left';
  leftArrow.innerHTML = '&#8592;';
  leftArrow.addEventListener('click', () => {
    const newIndex = (currentIndex - 1 + product.images.length) % product.images.length;
    updateImage(newIndex);
  });

  const rightArrow = document.createElement('button');
  rightArrow.className = 'carousel-arrow right';
  rightArrow.innerHTML = '&#8594;';
  rightArrow.addEventListener('click', () => {
    const newIndex = (currentIndex + 1) % product.images.length;
    updateImage(newIndex);
  });

  galleryWrapper.appendChild(leftArrow);
  galleryWrapper.appendChild(mainImage);
  galleryWrapper.appendChild(rightArrow);
  galleryWrapper.appendChild(thumbnails);
  block.appendChild(galleryWrapper);
}