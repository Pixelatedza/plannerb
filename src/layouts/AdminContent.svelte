<div class="main">
  <div class="head">
    <slot name="header" />
  </div>
  <div class="content">
    <slot />
  </div>
</div>

<style>
  .main {
    display: flex;
    flex-direction: column;
    flex: 1 0 0;
    height: 100%;
  }
  .head {
    flex: 0 0 auto;
  }
  .content {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.9rem;
    flex: 0 0 auto;
    overflow: auto;
  }
</style>
