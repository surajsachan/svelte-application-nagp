<svelte:options tag="my-login" />

<script lang="ts">
  import Alert from "../alert/Alert.svelte";
  import { loggedIn } from "../../store/stores";
  import { onMount } from "svelte";

  let email = "";
  let password = "";
  let showError = false;
  let isLoggedIn = false;

  const handleLogin = () => {
    if (email === "surajsachan@gmail.com" && password === "password") {
      isLoggedIn = true;
      localStorage.setItem("isLoggedIn", "true");
      showError = false;
      loggedIn.set(isLoggedIn);
    } else showError = true;
  };

  onMount(() => {
    loggedIn.subscribe((value) => {
      isLoggedIn = value;
    });
  });
</script>

<div class="login-container">
  <div class="card">
    <div class="card-body">
      <h4 class="card-title text-center mb-4">Sign in</h4>
      <form on:submit|preventDefault={handleLogin}>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter email"
            bind:value={email}
            required
          />
          <label for="email" class="form-label">Email address</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Enter password"
            bind:value={password}
            required
          />
          <label for="password" class="form-label">Password</label>
        </div>
        {#if showError}
          <Alert message="Invalid email or password." />
        {/if}
        <div class="d-grid login-btn">
          <button type="submit" class="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>

  <style>
    .login-container {
      display: flex;
      align-items: center;
      height: 100vh;
    }
    .card {
      width: 400px;
      margin: 0 auto;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 5px 5px 6px 2px rgba(0, 0, 0, 0.1);
    }

    .card-title {
      color: #47d7ac;
      font-weight: 500;
    }

    .login-btn .btn {
      border-radius: 20px;
      padding: 12px 24px;
      font-size: 14px;
      line-height: 16px;
      min-width: 100px;
    }

    .login-btn .btn-primary {
      margin-top: 30px;
      background-color: #13294b;
      border-color: #13294b;
    }
  </style>
</div>
