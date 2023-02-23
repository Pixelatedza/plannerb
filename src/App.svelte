<script>
  import Router from 'svelte-spa-router';
  import { wrap } from 'svelte-spa-router/wrap';
  import Default from 'views/Default.svelte';

  const routes = {
    '/calculator': wrap({
      asyncComponent: () => import('views/calculator/Calculator.svelte'),
    }),
    '/calculator/*': wrap({
      asyncComponent: () => import('views/calculator/Calculator.svelte'),
    }),
    '*': Default,
  };
</script>

<Router routes="{routes}" />
