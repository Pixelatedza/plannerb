<script>
  export let title = null;
</script>

<div class="main">
  {#if title}
    <span>{title}</span>
  {/if}
  <div class="content">
    <slot />
  </div>
</div>

<style>
  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  span {
    font-size: var(--h5);
    padding-bottom: var(--s6);
  }

  .main {
    display: flex;
    flex-direction: column;
    flex: 0 0 0;
    border-radius: var(--s1);
    background-color: #fff;
    padding: var(--card-padding, 1.25rem);
    box-shadow: 0 0.46875rem 2.1875rem rgb(4 9 20 / 3%),
      0 0.9375rem 1.40625rem rgb(4 9 20 / 3%),
      0 0.25rem 0.53125rem rgb(4 9 20 / 5%),
      0 0.125rem 0.1875rem rgb(4 9 20 / 3%);
    min-width: var(--card-min-width, 0);
  }
</style>
