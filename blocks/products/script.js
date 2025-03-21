
fetch('products.json')
  .then(res => res.json())
  .then(data => {
    const gridTitle = document.getElementById('grid-title');
    const container = document.getElementById('grid-container');

    gridTitle.textContent = data.title;

    data.products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.price}</p>
        <a class="btn" href="${product.link}">View Product</a>
      `;
      container.appendChild(card);
    });
  });
