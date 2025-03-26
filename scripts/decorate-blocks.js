const loadBlock = async (block) => {
  const name = block.classList[1];
  const mod = await import(`/blocks/${name}/${name}.js`);
  if (mod.default) mod.default(block);
};

export default function decorateBlocks() {
  const blocks = document.querySelectorAll('.block');
  blocks.forEach(loadBlock);
}
