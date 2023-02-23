<script>
  import Admin from 'layouts/Admin.svelte';
  import NavMenu from 'components/nav/NavMenu.svelte';
  import Router from 'svelte-spa-router';
  import { wrap } from 'svelte-spa-router/wrap';
  import { ItemRecipes } from 'common';
  export let params;

  const routes = {
    '/:itemId': wrap({
      asyncComponent: () => import('views/calculator/ItemView.svelte'),
    }),
  };

  let navConfig = Object.entries(ItemRecipes).map(([id, { item }]) => ({
    path: `/calculator/${id}`,
    text: item.name,
  }));
</script>

<Admin>
  <NavMenu slot="sidebar" title="Items" config="{navConfig}" />
  <Router slot="content" routes="{routes}" prefix="/calculator" />
</Admin>
