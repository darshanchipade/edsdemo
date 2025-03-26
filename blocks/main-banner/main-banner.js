export default async function decorate(block) {
  try {
    const res = await fetch('/data/main-banner.json');
    const data = await res.json();

    block.innerHTML = `
      <section class="main-banner" style="background-image: url('${data.background}')">
        <div class="main-banner-overlay">
          <div class="main-banner-content">
            <h1>${data.headline}</h1>
            ${data.subheading ? `<p class="subheading">${data.subheading}</p>` : ''}
            <a class="main-banner-button" href="${data.buttonUrl}">${data.buttonText}</a>
          </div>
        </div>
      </section>
    `;
  } catch (err) {
    console.error("Failed to load main banner data", err);
    block.innerHTML = "<p class='error'>Could not load banner.</p>";
  }
}

