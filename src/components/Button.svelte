<script>
  import { createEventDispatcher } from 'svelte';
  import { enterKeyUp } from 'actions/enterKey.js';

  export let variant = 'primary';
  export let type = 'button';
  export let disabled = false;
  export let fill = false;
  export let text;
  export let useEnterKey = false;

  const dispatch = createEventDispatcher();

  const onClick = (e) => {
    if (disabled) return;
    dispatch('click', e);
  };
</script>

<button
  class:fill="{fill}"
  class="{variant}"
  disabled="{disabled}"
  on:click="{onClick}"
  use:enterKeyUp="{useEnterKey}"
  type="{type}"
>
  <slot name="left" />
  {text}
  <slot name="right" />
</button>

<style>
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--s2) var(--s4);
    gap: var(--s2);
    border-radius: var(--s1);
  }

  .fill {
    width: 100%;
  }

  button:hover {
    cursor: pointer;
  }

  button:disabled {
    cursor: unset;
    user-select: none;
  }

  .primary {
    background-color: var(--primary);
    color: var(--white);
  }

  .primary:hover {
    background-color: var(--primary-dark);
  }

  .primary:active {
    background-color: var(--primary-light);
  }

  .primary:disabled {
    color: var(--type-disabled);
    background-color: var(--disabled);
  }

  .secondary {
    background-color: var(--secondary);
    color: var(--white);
    box-shadow: inset 0 0 0 1px var(--input-border);
  }

  .secondary:hover {
    background-color: var(--secondary-dark);
  }

  .secondary:active {
    background-color: var(--secondary-light);
  }

  .secondary:disabled {
    color: var(--type-disabled);
    box-shadow: none;
    background-color: var(--disabled);
  }

  .text {
    background-color: transparent;
    color: var(--primary);
    padding: 0;
  }

  .text:hover {
    color: var(--primary-dark);
    text-decoration: underline;
  }

  .text:active {
    text-decoration: underline;
  }

  .text:disabled {
    color: var(--type-disabled);
    box-shadow: none;
  }
</style>
