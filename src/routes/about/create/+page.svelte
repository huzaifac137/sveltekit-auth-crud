<script>
  let loading = false;
  let responseMsg = "";
  let name = "",
    value = "";
  

  const handleSubmit = async () => {
    let responseData;
    try {
      responseMsg = "";
      loading = true;
      const response = await fetch("/api/posts/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          colorName: name,
          colorValue: value,
        }),
      });

      responseData = await response.json();

      if (response.status !== 201) {
        throw new Error(responseData.message);
      }

      responseMsg = responseData.message;
      loading = false;
    } catch (error) {
      responseMsg = error.message;
      loading = false;
    }
  };
</script>

<div class="post">
  <input type="text" placeholder="color name"   bind:value={name} />
  <input type="text" placeholder="color value"   bind:value={value} />
  <button on:click={handleSubmit}>Submit</button>

  {#if responseMsg !== ""}
    <h3>{responseMsg}</h3>
  {/if}

  {#if loading === true}
    <h3>Loading...</h3>
  {/if}
</div>

<style>
  .post {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
</style>
