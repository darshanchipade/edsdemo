export default async function decorate(block) {

  block.innerHTML = `
    <div class="product-finder">
  <input type="text" id="product-search" placeholder="Search products..." />
  <button id="search-btn">Search</button>
</div>
  `;
    
}
document.getElementById('search-btn')?.addEventListener('click', () => {
  const query = document.getElementById('product-search').value.trim();
  if (query) {
    console.log(`Searching for: ${query}`);
  
}
});