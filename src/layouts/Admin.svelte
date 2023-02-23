<div class="app">
  <div class="header">
    <span>Planner B</span>
  </div>
  <div class="container">
    <div class="sidebar">
      <slot name="sidebar" />
    </div>
    <div class="content">
      <slot name="content" />
    </div>
  </div>
</div>

<style>
  .app {
    display: flex;
    flex: 1 0 0;
    flex-direction: column;
  }

  .container {
    display: flex;
    flex-direction: row;
    flex: 1 0 0;
  }

  .header {
    z-index: 1;
    display: flex;
    align-items: center;
    position: sticky;
    background-color: #fafbfc;
    top: 0;
    padding: 0 var(--s6);
    min-height: var(--header-height);
    max-height: var(--header-height);
    box-shadow: 0 0.46875rem 2.1875rem rgb(4 9 20 / 3%),
      0 0.9375rem 1.40625rem rgb(4 9 20 / 3%),
      0 0.25rem 0.53125rem rgb(4 9 20 / 5%),
      0 0.125rem 0.1875rem rgb(4 9 20 / 3%);
  }

  .sidebar {
    display: flex;
    box-sizing: border-box;
    position: sticky;
    max-height: calc(100vh - var(--header-height));
    top: var(--header-height);
    background-color: #fff;
  }

  .content {
    display: flex;
    flex: 1 0 0;
  }
</style>
