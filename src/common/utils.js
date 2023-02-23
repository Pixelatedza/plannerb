const defaultFont = getComputedStyle(document.body).fontFamily;
const defaultSize = getComputedStyle(document.body).fontSize;
const defaultWeight = getComputedStyle(document.body).fontWeight;

export const round = (value, decimals = 2) => {
  const multiplier = Math.pow(10, decimals);
  return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
};
export const getTextWidth = (text, styles = {}) => {
  // re-use canvas object for better performance
  const canvas =
    getTextWidth.canvas ||
    (getTextWidth.canvas = document.createElement('canvas'));
  const context = canvas.getContext('2d');
  context.font =
    styles &&
    `${styles.weight || defaultWeight} ${styles.size || defaultSize} ${
      styles.font || defaultFont
    }`;
  const metrics = context.measureText(text);
  return Math.ceil(metrics.width * 100) / 100;
};

export const addPermutations = (permutes, key, arr) => {
  const nextPermutes = [];
  for (const item of arr) {
    if (permutes.length === 0) {
      nextPermutes.push({
        [key]: item,
      });
      continue;
    }

    for (const permute of permutes) {
      nextPermutes.push({
        ...(permute || {}),
        [key]: item,
      });
    }
  }

  return nextPermutes;
};

export const permutationsFromKeys = (obj) => {
  let permutations = [];
  for (const [key, arr] of Object.entries(obj)) {
    permutations = addPermutations(permutations, key, arr);
  }
  return permutations;
};
