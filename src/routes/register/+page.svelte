<script>
   export let form;
   export let data;
</script>

<form style="text-align: center; display:flex; flex-direction :column; align-items:center; gap:20px" method="POST">
    <h3>Register a user </h3>
 <input type="text" placeholder="username" name="username" />
 <input type="email" placeholder="email" name="email" />
 <input type="password" placeholder="password" name="password" />
 <button>Sign up</button>
</form>

<h3 style="text-align: center;">Already Registered ?  <a href="/login"> Login </a></h3>

<h3 style="text-align: center;">{#if form?.responseMsg!=="" && form?.responseMsg!==undefined}
      <h3>{form?.responseMsg}</h3>
{/if}</h3>