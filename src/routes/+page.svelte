<script>
  let arr = { id: 0 };
  let name;
  let x = 4,
    y = 5;
  const handleClick = () => {
    arr.id = arr.id + 1;
  };

  // reactive statements

  $: name = arr.id;
</script>

<div>
  <button on:click={handleClick}>CLicked {name} {arr.id} times </button>
  <a href="/about?name={name}">About page</a>
</div>
