<script>
  import { getTextWidth } from 'common/utils.js';
  export let value = '';
  export let placeholder = '';
  export let id;
  export let name = '';
  export let pattern = null;
  export let error = false;
  export let disabled = false;
  export let type = 'text';
  export let decoration = '';
  export let readonly = false;
  export let fitContent = false;
  let previous = value;
  let input = null;

  $: {
    if (value && pattern && !value.match(pattern)) {
      value = previous;
    } else {
      previous = value;
    }
  }

  $: inputTextWidth = getTextWidth(value);
</script>

<div
  class="outer"
  class:error="{error}"
  class:disabled="{disabled}"
  style="{`width: ${fitContent ? inputTextWidth + 28 + 'px' : 'auto'}`}"
>
  <slot name="pre" />
  <div class="inner" on:click="{() => input.focus()}">
    <slot name="left" />
    {#if type === 'text'}
      <input
        {...$$restProps}
        bind:this="{input}"
        type="text"
        on:blur
        on:change
        on:focus
        on:input
        on:keydown
        on:keypress
        on:keyup
        bind:value="{value}"
        disabled="{disabled}"
        name="{name || id}"
        id="{id}"
        placeholder="{placeholder}"
        readonly="{readonly}"
      />
    {/if}
    {#if type === 'password'}
      <input
        bind:this="{input}"
        on:change
        type="password"
        on:blur
        on:change
        on:focus
        on:input
        on:keydown
        on:keypress
        on:keyup
        bind:value="{value}"
        disabled="{disabled}"
        name="{name || id}"
        id="{id}"
        placeholder="{placeholder}"
        readonly="{readonly}"
      />
    {/if}
    <div class="decoration" style="{`padding-left: ${inputTextWidth + 8}px;`}">
      {decoration}
    </div>
    <slot name="right" />
  </div>
  <slot name="post" />
</div>

<style>
  input {
    box-sizing: border-box;
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: var(--p);
    font-family: var(--font-family-sans-serif);
    color: inherit;
  }

  input:-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:active,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  .outer {
    display: flex;
    background-color: #ffffff;
    border: var(--input-outer-border, 1px solid var(--input-border));
    border-radius: var(--input-outer-radius, 2px);
  }

  .outer:focus-within {
    border: var(--input-outer-border-focus, 1px solid var(--primary));
  }

  .disabled {
    background-color: var(--disabled);
  }

  .error {
    border: 1px solid var(--danger);
  }

  .inner {
    position: relative;
    display: flex;
    flex: 1 0 0;
    padding: 0.375rem 0.75rem;
    gap: 0.375rem;
    cursor: text;
  }

  .decoration {
    position: absolute;
    color: var(--disabled);
    font-size: var(--p);
    top: 7px;
  }
</style>
