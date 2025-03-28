export default async function decorate(block) {
  block.innerHTML = `
    <div class="product-finder">
  <input type="text" id="product-search" placeholder="Search products..." />
  <button class="search-btn">Search</button>
</div>
  `;

block.querySelector('.search-btn')?.addEventListener('click', () => {
    alert('Search clicked');
  });
    

}

