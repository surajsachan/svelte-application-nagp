<svelte:options tag="my-navbar" />

<script lang="ts">
  export let logout: () => void;
</script>

<nav class="navbar navbar-light justify-content-between header">
  <div class="container">
    <span class="navbar-text text-white"> NAGP Svelte Assignment </span>
    <form class="form-inline logout-btn">
      <button
        class="btn btn-outline-primary my-2 my-sm-0"
        type="submit"
        on:click={logout}>Logout</button
      >
    </form>
  </div>
  <style>
    .header {
      background-color: #13294b;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15),
        inset 0 -1px 0 rgba(255, 255, 255, 0.15);
    }

    .logout-btn .btn {
      border-radius: 20px;
      padding: 12px 24px;
      font-size: 14px;
      line-height: 16px;
      min-width: 100px;
    }

    .logout-btn .btn-outline-primary {
      color: #fff;
      border-color: #fff;
    }
  </style>
</nav>
