<script>
  import { page } from "$app/stores";
  import Card from "../../Components/card.svelte";
  let name = $page.url.searchParams.get("name");

  const arr = [
    { id: 1, title: "hey" },
    { id: 2, title: "bro" },
    { id: 3, title: "love" },
    { id: 4, title: "svelte" },
  ];
</script>

<h2>Creator's name : {name}</h2>

<h2>Mapping an array in svelte :</h2>

<Card>
  {#each arr as item (item.id)}
    <li>{item.title}</li>
  {/each}
</Card>

<style>
  h2 {
    font-size: medium;
  }
</style>
