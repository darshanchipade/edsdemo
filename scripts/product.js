console.log("✅ product.js loaded");
export default async function decoratePage(doc) {
  const metadata = window.pageMetadata;
  const productId = metadata.ProductID;

  // Load product data from JSON
  const response = await fetch('/data/runningshoespdp.json');
  const products = await response.json();
  const product = products[productId];

  // Render images
  const imagesSection = document.querySelector('.images');
  product.images.forEach(img => {
    const imageEl = document.createElement('img');
    imageEl.src = img.src;
    imageEl.alt = img.alt;
    imagesSection.appendChild(imageEl);
  });

  // Render price
  const priceSection = document.querySelector('.price');
  priceSection.textContent = `Price: ${product.price.US}`; // You can geo-detect if needed

  // Render sizes
  const sizeSection = document.querySelector('.sizes');
  product.sizes.forEach(size => {
    const sizeEl = document.createElement('span');
    sizeEl.className = 'size';
    sizeEl.textContent = size;
    sizeSection.appendChild(sizeEl);
  });

  // Render availability
  const avail = document.querySelector('.availability');
  avail.textContent = `Available in: ${product.availability.join(', ')}`;

  // Render features from Google Doc list
  const featureSection = document.querySelector('.features');
  const features = doc.querySelectorAll('ul li');
  features.forEach(li => {
    const featureEl = document.createElement('p');
    featureEl.textContent = li.textContent;
    featureSection.appendChild(featureEl);
  });
}

