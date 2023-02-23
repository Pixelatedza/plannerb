<script>
  import AdminContent from 'layouts/AdminContent.svelte';
  import Recipe from 'components/Recipe.svelte';
  import { ItemRecipes } from 'common';
  export let params = {};
  let item, recipes;
  $: ({ item, recipes } = ItemRecipes[params.itemId] || {});
</script>

<AdminContent>
  <h1>{item.name}</h1>
  {#each recipes as recipe (recipe.id)}
    <Recipe recipe="{recipe}" />
  {/each}
</AdminContent>

<style>
  h1 {
    padding: 0;
    margin: 0;
  }
</style>
