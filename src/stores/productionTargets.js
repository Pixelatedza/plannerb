import { writable } from 'svelte/store';
import { Recipes } from 'common';

// This store is purely to save state between Recipe
// navigations. I'm sure there's a better way to do
// this, but I don't know what it is yet.
export const recipeProductionTargets = writable(
  Recipes.reduce((acc, recipe) => {
    acc[recipe.id] = recipe.rate;
    return acc;
  }, {})
);
