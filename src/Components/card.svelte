<script>
</script>

<div class="container">
  <div class="card">
    <slot>
      <em>No data found!</em>
    </slot>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    list-style: none;
    background-color: aliceblue;
    border-radius: 8px;
  }
</style>
