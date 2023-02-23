import { ItemRecipes } from 'common/recipe';

// Make a recipe tree
export const getTrees = (recipe, gradient = 1, amount = 1) => {
  const node = {
    id: recipe.id,
    name: recipe.name,
    recipe: recipe,
    outputs: [],
    parents: {},
    gradient, // This is the global gradient for this tree
    amount,
  };

  // Calculate the global gradient for each output
  for (const output of recipe.outputs) {
    node.outputs.push({
      item: output.item,
      gradient:
        recipe.rate > 0 ? (output.rate / recipe.rate) * gradient : gradient,
      rate: output.rate,
      amount: recipe.rate > 0 ? amount * (output.rate / recipe.rate) : amount,
    });
  }

  let trees = [];

  let inputTrees = {};
  for (const input of recipe.inputs || []) {
    for (const inputRecipe of ItemRecipes[input.item.id]?.recipes) {
      // Some buildings don't have a set or even range of rates, such
      // as waste disposal, which has a seemingly infinite rate. In
      // this case the gradient is simply the amount of items needed
      // by the child recipe. It is still useful to have this gradient,
      // even if we can't guess how many buildings are needed, we can
      // still show what the rate should be to meet the targeted
      // production rates.
      const inputGlobalGradient =
        inputRecipe.rate > 0
          ? (1 / ((recipe.rate / inputRecipe.rate) * input.amount)) * gradient
          : (1 / input.amount) * gradient;
      inputTrees[input.item.id] = [
        ...(inputTrees[input.item.id] || []),
        ...getTrees(inputRecipe, inputGlobalGradient, input.amount * amount),
      ];
    }
  }
  node.parents = inputTrees;
  trees.push(node);
  return trees;
};

// const printNodes = (root, depth = 0) => {
//   console.log(
//     '-'.repeat(depth * 2) +
//       (depth === 0 ? '# ' : ' ') +
//       root.name +
//       ` (${root.gradient})`
//   );
//   for (const [itemId, trees] of Object.entries(root.parents)) {
//     console.log(
//       '>'.repeat((depth + 1) * 2) + (depth + 1 === 0 ? '' : ' ') + itemId
//     );
//     for (const tree of trees) {
//       printNodes(tree, depth + 1);
//     }
//   }
// };
//
// for (const recipe of Recipes) {
//   console.log('-'.repeat(20));
//   console.log('calculating trees for recipe', recipe.id);
//   console.log('-'.repeat(20));
//   const trees = getTrees(recipe);
//   console.log('#'.repeat(20));
//   for (const tree of trees) {
//     printNodes(tree);
//   }
//   console.log('#'.repeat(20));
// }
//
// // console.log(RecipeTrees);
