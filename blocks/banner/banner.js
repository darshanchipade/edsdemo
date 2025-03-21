export default function decorate(block) {
  const row = block.querySelector('tr');
  if (!row) return;

  const [textCell, imageCell, btnTextCell, linkCell] = row.querySelectorAll('td');
  const banner = document.createElement('div');
  banner.className = 'banner';

  banner.innerHTML = '
    <img src="${imageCell.textContent.trim()}" alt="Banner">
    <h2>${textCell.textContent.trim()}</h2>
    <a href="${linkCell.textContent.trim()}">${btnTextCell.textContent.trim()}</a>
 ' ;

  block.innerHTML = '';
  block.appendChild(banner);
}
