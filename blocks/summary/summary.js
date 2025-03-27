export default function decorate(block) {
  const metadata = window.pageMetadata || {};
  const summary = metadata['Product Summary'];

  if (summary) {
    block.innerHTML = `<p>${summary}</p>`;
  } else {
    console.warn("⚠️ 'Product Summary' not found in pageMetadata.");
    block.innerHTML = `<p>No summary available.</p>`;
  }
}
