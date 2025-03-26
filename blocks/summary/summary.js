export default function decorate(block) {
  const summary = window.pageMetadata['Product Summary'];
  if (summary) block.innerHTML = `<p>${summary}</p>`;
}
