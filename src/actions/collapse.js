export const collapse = (node, isOpen) => {
  node.style.height = isOpen ? node.scrollHeight + 'px' : 0;
  node.style.overflow = 'hidden';
  node.style.transition = '0.15s';
  node.classList.add('accordion');
  const notifyParents = (node, isOpen) => {
    const parentCollapse = node.parentElement.closest('.accordion');
    if (parentCollapse) {
      const parentHeight = parseInt(parentCollapse.style.height);
      isOpen
        ? (parentCollapse.style.height =
            parentHeight + node.scrollHeight + 'px')
        : (parentCollapse.style.height =
            parentHeight - node.scrollHeight + 'px');
      notifyParents(parentCollapse, isOpen);
    }
  };
  return {
    update(isOpen) {
      notifyParents(node, isOpen);
      isOpen
        ? (node.style.height = node.scrollHeight + 'px')
        : (node.style.height = 0);
    },
  };
};
