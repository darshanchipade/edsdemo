export default async function decorate(block) {
  try {
    const resp = await fetch('/data/hero.json');
    if (!resp.ok) throw new Error('Failed to load hero data');
    const data = await resp.json();

    block.innerHTML = `
      <div class="hero-content" style="background-image: url('${data.background}')">
        <h1>${data.title}</h1>
        <a class="hero-button" href="${data.buttonUrl}">${data.buttonText}</a>
      </div>
    `;
  } catch (e) {
    block.innerHTML = '<p class="error">Failed to load hero banner.</p>';
    console.error(e);
  }
}
