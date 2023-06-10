<script lang='ts'>
    export let message = "";
</script>

<svelte:options tag="new-alert-component" />
  
<div class="alert alert-danger" role="alert">
    {message}
</div>