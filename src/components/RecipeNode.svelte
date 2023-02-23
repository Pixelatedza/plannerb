<script>
  import Input from 'components/inputs/Input.svelte';
  import { createEventDispatcher, getContext } from 'svelte';
  import { round } from 'common';
  import DropdownButton from 'components/DropdownButton.svelte';
  const dispatch = createEventDispatcher();
  export let node;
  export let variants;
  export let ref = null;

  const targetProductionRate = getContext('targetProductionRate');

  const onInput = (e, output) => {
    console.log(e.target.value, output.amount);
    $targetProductionRate = e.target.value / output.amount;
  };
  const onVariantChange = ({ detail }) => {
    dispatch('variantChange', detail);
  };
</script>

<div class="node" bind:this="{ref}">
  <div class="header">
    <span>
      {node.recipe.buildingName} ({round(
        ($targetProductionRate * node.amount) / node.recipe.rate
      )})
    </span>
    {#if variants.length > 1}
      <DropdownButton
        on:click="{onVariantChange}"
        text="Variants"
        items="{variants.map((variant) => ({
          id: variant.id,
          text: variant.recipe.name,
          tree: variant,
          active: node.id === variant.id,
        }))}"
      />
    {/if}
  </div>
  <div class="outputs">
    {#each node.outputs as output}
      <div
        class="output"
        style="{`
          --output-bg-color: var(--${output.item.id}, var(--secondary-lighter));
          --output-color: var(--${output.item.id}-type, var(--type-primary));
        `}"
      >
        {output.item.name}
        <div class="rate">
          <Input
            fitContent
            --input-outer-border="1px solid var(--primary-lighter)"
            --input-outer-radius="var(--s2)"
            id="{`${node.id}-${output.item.id}`}"
            value="{$targetProductionRate * output.amount}"
            on:input="{(e) => {
              onInput(e, output);
            }}"
          />
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .outputs {
    display: flex;
    flex-direction: row;
    gap: var(--s2);
  }

  .header {
    display: flex;
    justify-content: space-between;
    gap: var(--s2);
  }

  .output {
    display: flex;
    align-items: center;
    gap: var(--s2);
    padding: 0 0 0 var(--s4);
    border-radius: var(--s2);
    color: var(--output-color);
    white-space: nowrap;
    background: var(--output-bg-color);
  }

  .node {
    display: flex;
    flex-direction: column;
    gap: var(--s2);
    padding: var(--s2);
    border-radius: var(--s1);
    border: 1px solid var(--primary-lighter);
  }

  .rate {
    color: var(--primary-light);
  }
</style>
