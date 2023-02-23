<script>
  export let error = false;
  export let label = false;
</script>

<div>
  {#if label}
    <span class="label">{label}</span>
  {/if}
  <slot />

  {#if error}
    <span class="error">Errors</span>
  {/if}
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
  }

  .label {
    font-size: var(--small);
    font-weight: 600;
    padding-bottom: 0.5rem;
    text-transform: capitalize;
  }

  .error {
    padding-top: 0.25rem;
    font-size: var(--small);
    color: var(--danger);
  }
</style>
