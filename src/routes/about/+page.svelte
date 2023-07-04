<script>
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import Modal from "../../Components/modal.svelte";
  let responseMsg="";
  let modalIsOpen=false;
  let valueToDelete;

  const errorParam = $page.url.searchParams.get("error");

  const handleDelete=(value)=>{
   modalIsOpen=true;
   valueToDelete=value;
   responseMsg="";
  };

  const onCancel=()=>{
    modalIsOpen=false;
  }
  const confirmDelete=async()=>{
    let responseData;
    try {
        
         const response = await fetch(`/api/posts/delete/${valueToDelete}` , {
          method:"DELETE" ,
          headers: {
            "Content-Type" :"application/json"
          }
         });
      
         responseData = await response.json();

         if(response.status!==201)
         {
          throw new Error(responseData.message);
         }
      
        responseMsg = responseData.message;
        


    } catch (error) {
         responseMsg = error.message;
    }
  }

  export let data;
</script>

 
<h2>Loaded data from Get Request {errorParam}</h2>
<div data-sveltekit-preload-data="hover" class="container">
  {#if data?.data?.length>0}
    <div class="inner">
      {#each data.data as item (item.id)}
        <div class="item">
          <h3 style="color: gray;  ">
            {item.color}
          </h3>
          <h4>{item.value}</h4>
 
          <button on:click={()=>handleDelete(item.id)}>Delete</button>
        </div>
        {
          #if modalIsOpen===true }
             <Modal onConfirm={confirmDelete} responseMsg={responseMsg} onCancel={onCancel}  />
          {/if}
      {/each}
    </div>
  {:else if data?.data?.length===0}
    <h3>No Data available!</h3>
    {:else if data.message}
    <h3>{data.message}</h3>
  {/if}

  <h3> {responseMsg!=="" ? responseMsg : ""} </h3>
</div>




 

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .inner {
    width: inherit;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .item {
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    width: 40%;
  }
</style>
