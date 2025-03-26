export default function decorate(block) {
  const [labels, values] = [...block.children];
  const data = {};

  [...labels.children].forEach((label, i) => {
    const key = label.textContent.trim().toLowerCase().replace(/\s+/g, '-');
    const valDiv = values.children[i];
    data[key] = valDiv?.innerHTML || '';
  });

  const banner = document.createElement('div');
  banner.className = 'hero-banner-block';
  banner.innerHTML = `
    <div class="hero-banner-image">${data['background-image']}</div>
    <div class="hero-banner-content">
      <h1>${data['headline-text']}</h1>
      <p>${data['sub-text']}</p>
      ${
        data['cta-text'] && data['cta-link']
          ? `<a class="hero-banner-button" href="${data['cta-link']}">${data['cta-text']}</a>`
          : ''
      }
    </div>
  `;

  block.textContent = '';
  block.append(banner);
}
