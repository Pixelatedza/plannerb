<script>
  import NavItem from 'components/nav/NavItem.svelte';
  export let title;
  export let config = {};
</script>

<div class="menu">
  {#if title}
    <span class="title">{title}</span>
  {/if}
  <div class="nav">
    {#each Object.values(config) as item}
      <NavItem item="{item}" />
    {/each}
  </div>
</div>

<style>
  .nav {
    display: flex;
    flex-direction: column;
  }

  .title {
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--primary);
    white-space: nowrap;
    position: relative;
  }

  .menu {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 1rem 1.5rem;
    gap: 0.75rem;
    min-width: 280px;
  }
</style>
