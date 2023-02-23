<script>
  import RecipeNode from 'components/RecipeNode.svelte';
  import { getContext, onDestroy } from 'svelte';
  import LeaderLine from 'leader-line-new';
  export let trees = [];
  export let childElement = null;
  let activeTree = trees[0];
  let nodeElement;
  let line;

  let targetProductionRate = getContext('targetProductionRate');
  const lines = getContext('lines');

  const addLine = (childElement, nodeElement) => {
    if (childElement && !line && nodeElement) {
      line = new LeaderLine(nodeElement, childElement, {
        path: 'straight',
        endPlug: 'behind',
        startSocket: 'bottom',
        endSocket: 'top',
        dash: { animation: true },
        color: 'var(--primary-lighter)',
      });
      line.__owner = activeTree.id;
      lines[line._id] = line;
    }
  };

  const removeLine = () => {
    if (line) {
      delete lines[line._id];
      line.remove();
      line = null;
    }
  };

  $: addLine(childElement, nodeElement);

  onDestroy(removeLine);

  const onVariantChange = (e) => {
    removeLine();
    activeTree = e.detail.tree;
    addLine(childElement, nodeElement);
  };

  // This has to be done after svelte has updated the activeTree.
  // If you do it in the event handler, then the components have
  // not been redrawn yet and the line positions are wrong.
  $: {
    activeTree;
    for (const _line of Object.values(lines)) {
      _line.position();
    }
  }

  $: $targetProductionRate, line && line.position();
</script>

<div class="tree">
  {#if Object.keys(activeTree.parents).length > 0}
    <div class="parent-nodes">
      {#each Object.entries(activeTree.parents) as [itemId, trees] (itemId)}
        <svelte:self trees="{trees}" childElement="{nodeElement}" />
      {/each}
    </div>
  {/if}
  <RecipeNode
    bind:ref="{nodeElement}"
    node="{activeTree}"
    variants="{trees}"
    on:variantChange="{onVariantChange}"
  />
</div>

<style>
  .tree {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    justify-content: flex-end;
  }

  .parent-nodes {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
</style>
