export function enterKeyUp(node, enabled) {
  if (!enabled) {
    return;
  }

  const handle = (event) => {
    if (event.keyCode !== 13) {
      return;
    }

    node.click();
  };

  // mousedown to avoid conflicts with mouseup/click events from layerd content.
  document.addEventListener('keyup', handle, true);

  return {
    destroy() {
      document.removeEventListener('keyup', handle, true);
    },
  };
}
