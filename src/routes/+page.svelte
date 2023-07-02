<script>
  let name = "";

  const handleClick = (e) => {
    name = e.target.value;
  };
</script>

<div>
  <input
    type="text"
    placeholder=" enter the name"
    value={name}
    on:input={handleClick}
  />
  <h2>Welcome to my first svelte</h2>
  <a href="/about?name={name}">About page</a>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    gap: 20px;
  }

  a {
    text-decoration: none;
    color: gray;
    cursor: pointer;
  }
</style>
