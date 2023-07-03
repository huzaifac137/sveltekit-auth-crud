<script>
   export let onConfirm;
   export let onCancel;
   export let responseMsg;
   import {goto} from "$app/navigation";

   const handleGoBackAfterSuccess=()=>{
       onCancel();
        goto("/");
   }

</script>

<div class="modalContainer"> 
    <div class="modal"> 
           {#if responseMsg===""}
           <h3>Do you want to confirm?</h3>
           <button on:click={onConfirm}>YES </button>
           <button on:click={onCancel}>Go back </button>
           {:else}
           <h3>{responseMsg!=="" ? responseMsg : ""}</h3>
           <button on:click={handleGoBackAfterSuccess}>Go back </button>
           {/if}
       
               
         </div>
  </div>

  <style>
       .modalContainer
       {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              position: fixed;
              z-index: 1;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              backdrop-filter: blur(2px);
              width: 100vw;
              height: 100vh;
       }

       .modal{
              background-color: rgb(177, 184, 187);
              width: 30%;
              height:30%;
              border-radius: 8px;
              display : flex;
              flex-direction : column;
              align-items :center;
       }

       button
       {
              margin-top: 20px;
       }
     
  </style>