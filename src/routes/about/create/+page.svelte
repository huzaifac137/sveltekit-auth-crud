<script>
  let loading = false;
   // let responseMsg;
  let name = "",
    value = "";


  export let form;
  

  // const handleSubmit = async () => {
  //   let responseData;
  //   try {
  //     responseMsg = "";
  //     loading = true;
  //     const response = await fetch("/api/posts/create", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },

  //       body: JSON.stringify({
  //         colorName: name,
  //         colorValue: value,
  //       }),
  //     });

  //     responseData = await response.json();

  //     if (response.status !== 201) {
  //       throw new Error(responseData.message);
  //     }

  //     responseMsg = responseData.message;
  //     loading = false;
  //   } catch (error) {
  //     responseMsg = error.message;
  //     loading = false;
  //   }
  // };
</script>

<form class="post" method="POST">
  <input type="text" name="color" placeholder="color name"   bind:value={name} />
  <input type="text" name="value" placeholder="color value"   bind:value={value} />
  <button> Submit </button>

  <!-- <button on:click={handleSubmit}>Submit</button> -->
</form>

<div style=" text-align: center;"> 
  {#if form?.responseMsg !== "" && form?.responseMsg!==undefined}
  <h3>{form?.responseMsg}</h3>
{/if}

<!-- {#if loading === true}
  <h3>Loading...</h3>
{/if} -->
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
