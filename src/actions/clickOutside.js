export function clickOutside(node, callback) {
  const handleClick = (event) => {
    if (!node.contains(event.target)) {
      typeof callback === 'function' && callback(event);
      node.dispatchEvent(new CustomEvent('clickOutside'));
    }
  };

  // mousedown to avoid conflicts with mouseup/click events from layerd content.
  document.addEventListener('mousedown', handleClick, true);

  return {
    destroy() {
      document.removeEventListener('mousedown', handleClick, true);
    },
  };
}
