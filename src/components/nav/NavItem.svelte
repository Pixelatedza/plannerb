<script>
  import { collapse } from 'actions/collapse.js';
  import { push, location } from 'svelte-spa-router';
  export let item = {};
  let isOpen = false;

  const onClick = () => {
    if (item.items?.length > 0) {
      isOpen = !isOpen;
      return;
    }

    push(item.path);
  };
</script>

<div class="main">
  <div class="item" on:click="{onClick}">
    {#if item.icon}
      <i class="{`pe-7s-${item.icon}`}"></i>
    {/if}
    <span
      class="item-text"
      class:bold="{isOpen || $location.startsWith(item.path)}">{item.text}</span
    >
    {#if item.items?.length > 0}
      <i class="{'pe-7s-angle-down'}" class:rotate="{isOpen}"></i>
    {/if}
  </div>
  <div class="row" use:collapse="{isOpen}">
    <div class="guide"></div>
    <div class="sub-menu">
      {#each Object.values(item.items || []) as child}
        <svelte:self item="{child}" />
      {/each}
    </div>
  </div>
</div>

<style>
  i {
    font-size: 1.5rem;
    color: #000;
    opacity: 0.3;
    text-align: center;
    width: 32px;
    transition: 0.15s;
  }

  .bold {
    font-weight: bold;
  }

  .guide {
    min-width: 3px;
    background: var(--primary-light);
  }

  .row {
    display: flex;
    flex-direction: row;
    padding: 0 0 0 1.46rem;
  }

  .rotate {
    transform: rotate(-180deg);
  }

  .sub-menu {
    display: flex;
    flex-direction: column;
    flex: 1 0 0;
  }

  .main {
    display: flex;
    flex-direction: column;
  }

  .main:not(:last-child) {
    margin-bottom: 2px;
  }

  .item {
    font-size: 0.88rem;
    border-radius: 0.25rem;
    padding: 0.55rem 0.55rem;
    display: flex;
    flex: 0 0 auto;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
    transition: 0.2s;
    cursor: pointer;
  }

  .sub-menu * .item {
    padding: 0.55rem 0 0.55rem 1.5rem;
  }

  .item:hover {
    background: var(--primary-lighter);
  }

  .item-text {
    flex: 1 0 0;
  }
</style>
