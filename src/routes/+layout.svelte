<script>
  import { page } from "$app/stores";
  let route;
</script>

<nav>
  <a
    class={route === " " ? "active" : "simple"}
    href="/"
    on:click={() => (route = " ")}>Home</a
  >
  <a data-sveltekit-reload
    class={route === "about" ? "active" : "simple"}
    href="/about"
    on:click={() => (route = "about")}>About</a
  >
</nav>

<slot />

<style>
  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  .simple {
    color: gray;
  }

  .active {
    color: black;
  }
</style>
