export default async function decorate(block) {
  const jsonUrl = '/data/reviews.json'; // Replace with EDS JSON path
  const res = await fetch(jsonUrl);
  const data = await res.json();

  block.innerHTML = `
    <div class="product-description">
      <h2>${data.description.heading}</h2>
      <p>${data.description.text}</p>
    </div>
    <div class="product-reviews">
      <h3>Customer Reviews</h3>
      ${data.reviews.map(review => `
        <div class="review">
          <p class="stars">${'★'.repeat(review.stars)}${'☆'.repeat(5 - review.stars)}</p>
          <blockquote>"${review.quote}"</blockquote>
          <cite>- ${review.author}</cite>
        </div>
      `).join('')}
    </div>
  `;
}
