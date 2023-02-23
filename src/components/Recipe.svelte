<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import Card from 'components/Card.svelte';
  import ItemTag from 'components/ItemTag.svelte';
  import { push } from 'svelte-spa-router';
  import CraftTree from 'components/CraftTree.svelte';
  import { getTrees } from 'common';
  import { recipeProductionTargets } from 'stores/productionTargets.js';

  export let recipe = {};

  // Create a unique production rate for this item/tree combination,
  // and "persist" it, so we can keep it between navigation events.
  const targetProductionRate = writable($recipeProductionTargets[recipe.id]);
  setContext('targetProductionRate', targetProductionRate);
  setContext('lines', {});

  const updateRecipeProductionTargets = (newRate) => {
    $recipeProductionTargets = {
      ...$recipeProductionTargets,
      [recipe.id]: newRate,
    };
  };
  $: updateRecipeProductionTargets($targetProductionRate);
  $: inputs = recipe.inputs || [];
</script>

<Card title="{`${recipe.name}`}">
  <table>
    <tr>
      <td>Ingredients</td>
      <td>
        <div class="item-tags">
          {#each inputs as input}
            <ItemTag
              item="{input.item}"
              amount="{input.amount}"
              on:click="{push(`/calculator/${input.item.id}`)}"
            />
          {/each}
        </div>
      </td>
    </tr>
    <tr>
      <td>Building</td>
      <td>{recipe.buildingName}</td>
    </tr>
    <tr>
      <td>Production Rate</td>
      <td>
        {#each recipe.outputs as output}
          <div>{output.rate} - {output.item.name}</div>
        {/each}
      </td>
    </tr>
  </table>
  {#key recipe.id}
    <CraftTree trees="{getTrees(recipe)}" />
  {/key}
</Card>

<style>
  .item-tags {
    display: flex;
    flex-direction: row;
    gap: var(--s2);
  }

  table {
    border: none;
    border-collapse: collapse;
  }

  td:first-child {
    width: 1%;
    white-space: nowrap;
    padding-right: 1rem;
    font-weight: bold;
  }

  td {
    vertical-align: top;
    padding: var(--s1) 0;
  }
</style>
