<script>
  import { clickOutside } from 'actions/clickOutside';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export let text;
  export let variant = 'text';
  export let items = {};
  let dropdownOpen = false;
</script>

<div class="container" use:clickOutside="{() => (dropdownOpen = false)}">
  <div class="button" on:click="{() => (dropdownOpen = !dropdownOpen)}">
    <span class="underline">{text}</span>
    <div class="arrow" class:arrow-close="{dropdownOpen}">^</div>
  </div>
  {#if dropdownOpen}
    <div class="dropdown">
      {#each items as item}
        <div
          class="dd-item"
          class:active="{item.active}"
          on:click="{() => {
            dispatch('click', item);
            dropdownOpen = false;
          }}"
        >
          {item.text}
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .underline:hover {
    text-decoration: underline;
  }

  .active {
    background: var(--primary-lighter);
  }

  .button {
    cursor: pointer;
    display: flex;
    font-size: var(--small);
    background: var(--primary);
    padding: var(--s1) var(--s2);
    border-radius: var(--s1);
    gap: var(--s1);
    color: white;
  }

  .container {
    position: relative;
  }

  .dd-item {
    padding: var(--s2) var(--s2);
    cursor: pointer;
    white-space: nowrap;
  }

  .dd-item:hover {
    background-color: var(--primary-light);
    color: white;
  }

  .arrow {
    transform: rotate(180deg) translateY(2px);
    text-decoration: none;
  }

  .arrow-close {
    transform: rotate(0deg) translateY(2px);
  }

  .dropdown {
    display: flex;
    flex-direction: column;
    border-radius: var(--s1);
    background-color: #fff;
    overflow: hidden;
    box-shadow: 0 0.46875rem 2.1875rem rgb(4 9 20 / 3%),
      0 0.9375rem 1.40625rem rgb(4 9 20 / 3%),
      0 0.25rem 0.53125rem rgb(4 9 20 / 5%),
      0 0.125rem 0.1875rem rgb(4 9 20 / 3%);
    margin-top: var(--s2);
    position: absolute;
    z-index: 1;
  }
</style>
