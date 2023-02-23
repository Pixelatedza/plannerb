import { Buildings } from 'common/buildings';
import { Items } from 'common/item';

export const Recipes = [
  {
    building: Buildings.Extractor,
    rate: 15,
    outputs: [
      {
        item: Items.IronOre,
        amount: 1,
      },
    ],
  },
  {
    building: Buildings.Extractor,
    rate: 15,
    outputs: [
      {
        item: Items.SulfurOre,
        amount: 1,
      },
    ],
  },
  {
    building: Buildings.Extractor,
    rate: 15,
    outputs: [
      {
        item: Items.AluminiumOre,
        amount: 1,
      },
    ],
  },
  {
    building: Buildings.Factory,
    rate: 30,
    inputs: [
      {
        item: Items.IronOre,
        amount: 3,
      },
    ],
    outputs: [
      {
        item: Items.SteelBar,
        amount: 1,
      },
    ],
  },
  {
    building: Buildings.Factory,
    rate: 30,
    inputs: [
      {
        item: Items.SulfurOre,
        amount: 3,
      },
    ],
    outputs: [
      {
        item: Items.Concrete,
        amount: 1,
      },
    ],
  },
  {
    building: Buildings.Factory,
    rate: 30,
    inputs: [
      {
        item: Items.AluminiumOre,
        amount: 3,
      },
    ],
    outputs: [
      {
        item: Items.AluminiumBar,
        amount: 1,
      },
    ],
  },
  {
    building: Buildings.Factory,
    rate: 30,
    inputs: [
      {
        item: Items.SteelBar,
        amount: 1,
      },
      {
        item: Items.Concrete,
        amount: 1,
      },
    ],
    outputs: [
      {
        item: Items.ReinforcedConcrete,
        amount: 1,
      },
    ],
  },
  {
    building: Buildings.Factory,
    rate: 30,
    inputs: [
      {
        item: Items.SteelBar,
        amount: 1,
      },
    ],
    outputs: [
      {
        item: Items.MechanicalParts,
        amount: 1,
      },
    ],
  },
  {
    building: Buildings.AtmosphericExtractor,
    rate: 12,
    outputs: [
      {
        item: Items.O2,
        amount: 1,
      },
    ],
  },
  {
    building: Buildings.AtmosphericExtractor,
    rate: 12,
    outputs: [
      {
        item: Items.Carbon,
        amount: 1,
      },
    ],
  },
  {
    building: Buildings.Factory,
    rate: 30,
    inputs: [
      {
        item: Items.Carbon,
        amount: 3,
      },
    ],
    outputs: [
      {
        item: Items.PolymerBar,
        amount: 1,
      },
    ],
  },
  {
    building: Buildings.RecycleCenter,
    rate: 30,
    inputs: [
      {
        item: Items.PlasticWaste,
        amount: 2,
      },
    ],
    outputs: [
      {
        item: Items.PolymerBar,
        amount: 1,
      },
    ],
  },
  {
    building: Buildings.Factory,
    rate: 90,
    inputs: [
      {
        item: Items.AluminiumBar,
        amount: 2,
      },
      {
        item: Items.PolymerBar,
        amount: 1,
      },
    ],
    outputs: [
      {
        item: Items.HighTechParts,
        amount: 3,
      },
    ],
  },
  {
    building: Buildings.IceExtractor,
    rate: 5,
    outputs: [
      {
        item: Items.Nitrogen,
        amount: 1,
      },
    ],
  },
  {
    building: Buildings.IceExtractor,
    rate: 5,
    outputs: [
      {
        item: Items.Water,
        amount: 1,
      },
    ],
  },
  {
    building: Buildings.PumpingStation,
    rate: 30,
    outputs: [
      {
        item: Items.Water,
        amount: 1,
      },
    ],
  },
  {
    building: Buildings.Factory,
    rate: 30,
    inputs: [
      {
        item: Items.Carbon,
        amount: 2,
      },
      {
        item: Items.Nitrogen,
        amount: 1,
      },
    ],
    outputs: [
      {
        item: Items.Compost,
        amount: 1,
      },
    ],
  },
  {
    building: Buildings.WasteDisposal,
    rate: 0,
    outputs: [
      {
        item: Items.MetallicWaste,
        amount: 1,
      },
    ],
  },
  {
    building: Buildings.WasteDisposal,
    rate: 0,
    outputs: [
      {
        item: Items.PlasticWaste,
        amount: 1,
      },
    ],
  },
  {
    building: Buildings.WasteDisposal,
    rate: 0,
    outputs: [
      {
        item: Items.OrganicWaste,
        amount: 1,
      },
    ],
  },
  {
    building: Buildings.RecycleCenter,
    rate: 60,
    inputs: [
      {
        item: Items.MetallicWaste,
        amount: 3,
      },
    ],
    outputs: [
      {
        item: Items.SteelBar,
        amount: 2,
      },
      {
        item: Items.AluminiumBar,
        amount: 1,
      },
    ],
  },
  {
    building: Buildings.RecycleCenter,
    rate: 30,
    inputs: [
      {
        item: Items.OrganicWaste,
        amount: 5,
      },
      {
        item: Items.Nitrogen,
        amount: 1,
      },
    ],
    outputs: [
      {
        item: Items.Compost,
        amount: 1,
      },
    ],
  },
  {
    building: Buildings.GreenHouse,
    rate: 60,
    inputs: [
      {
        item: Items.Water,
        amount: 4,
      },
      {
        item: Items.Compost,
        amount: 1,
      },
    ],
    outputs: [
      {
        item: Items.Food,
        amount: 2,
      },
    ],
  },
  {
    building: Buildings.Factory,
    rate: 90,
    inputs: [
      {
        item: Items.SteelBar,
        amount: 4,
      },
      {
        item: Items.Nitrogen,
        amount: 1,
      },
    ],
    outputs: [
      {
        item: Items.TemperedSteel,
        amount: 3,
      },
    ],
  },
  {
    building: Buildings.Factory,
    rate: 30,
    inputs: [
      {
        item: Items.TemperedSteel,
        amount: 1,
      },
      {
        item: Items.PolymerBar,
        amount: 1,
      },
    ],
    outputs: [
      {
        item: Items.Composite,
        amount: 1,
      },
    ],
  },
];

export const getOutputRates = (targetRate, outputs) => {
  // The game seems to use the highest output item for the per annum
  // calculation in the tooltip. So in the case of recycling metallic waste,
  // the recipe produces 2 steel bars and 1 aluminium bar. These are produced
  // at a rate of 60 per annum, but you aren't getting 60 aluminimum per annum,
  // you're only getting 30. Also, for the steel bars, 2 steel bars at a rate of
  // 60 per annum, is the same as 1 steel bar at a rate of 30 per annum.
  const largestOutput = Math.max(...outputs.map((o) => o.amount));
  return outputs.map((output) => ({
    ...output,
    rate: targetRate * (output.amount / largestOutput),
  }));
};

// Track recipes so that we can detect duplicates
const recipeIds = new Set();

/* Creates a map from item to recipes {item.id: [Recipes]}
 */
export const ItemRecipes = Recipes.reduce((acc, recipe) => {
  recipe.buildingName = recipe.building.replace(/([A-Z])/g, ' $1').trim() ?? '';
  recipe.name =
    recipe.outputs.map((output) => output.item.name).join(', ') +
    ` - ${recipe.buildingName}`;
  recipe.id = recipe.name.replaceAll(' ', '');

  if (recipeIds.has(recipe.id)) {
    console.error(`Duplicate recipe ${recipe.id}`);
    return acc;
  }
  recipeIds.add(recipe.id);

  recipe.largestOutput = Math.max(...recipe.outputs.map((o) => o.amount));
  recipe.outputs = getOutputRates(recipe.rate, recipe.outputs);
  for (const output of recipe.outputs) {
    acc[output.item.id] = {
      item: output.item,
      recipes: [...(acc[output.item.id]?.recipes || []), recipe],
    };
  }
  return acc;
}, {});
