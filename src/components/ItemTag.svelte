<script>
  export let item = {};
  export let amount;
</script>

<div
  class="tag"
  on:click
  style="{`
    --item-tag-bg-color: var(--${item.id}, #666);
    --item-tag-bg-hover-color: var(--${item.id}-dark, #333);
    --item-tag-color: var(--${item.id}-type, var(--type-primary));
  `}"
>
  {item.name}
  {#if amount !== undefined}({amount}){/if}
</div>

<style>
  .tag {
    padding: var(--s1) var(--s2);
    font-size: var(--tiny);
    border-radius: var(--s6);
    background-color: var(--item-tag-bg-color);
    color: var(--item-tag-color);
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
  }

  .tag:hover {
    background-color: var(--item-tag-bg-hover-color);
  }
</style>
