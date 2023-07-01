<script>
  import { page } from "$app/stores";
  let name = $page.url.searchParams.get("name");
</script>

<h2>{name}</h2>
