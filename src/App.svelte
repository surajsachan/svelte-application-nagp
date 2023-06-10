<svelte:options tag="my-app" />
<script>
    import { onMount } from 'svelte';
    import Navbar from './component/navbar/Navbar.svelte';
    import { loggedIn } from './store/stores';
    import Login from './component/Login/Login.svelte';
    import './component/file-folder-component/file-folder-component';

    let isLoggedIn = false;

    const handleLogout = () => {
        isLoggedIn = false;
        localStorage.clear();
    }
  
    onMount(() => {
        loggedIn.subscribe(val => {
            isLoggedIn = val;
        })
        isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    });
</script>
  
  {#if isLoggedIn}
    <Navbar logout={handleLogout}></Navbar>
    <file-folder-component></file-folder-component>
  {:else}
    <Login />
  {/if}
  <style>
    @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");
  </style>