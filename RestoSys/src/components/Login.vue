<template>
    <div class="container">
        <h3 class="h3custom">Sing-in</h3>
        <hr class="line">
        <br>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>

        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
        <button type="submit" class="btn btn-danger">Cancel</button>
      </form>
    </div>
</template>

<script>

  export default {
    name:'login'
  }

</script>

<style scoped>

   .container{

    position: relative;
    top: 150px;
    width: 40%;
    border-style:solid;
    border-color:grey;
    border-radius: 5px;
    padding: 30px;

  }

  .line{
    height: 0.5px;
    background-color:gray;
  }
  .h3custom{
    color: #1a75ff;

  }




</style>
