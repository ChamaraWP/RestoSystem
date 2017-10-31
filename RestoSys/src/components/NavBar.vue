<template>

  <div class="navComp">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Royal <small>Resturant</small></a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"><router-link to='/' >Home </router-link>  <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"> <router-link to='/resavation'>Resavation</router-link></a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#"> <router-link to='/orders'>Orders</router-link> </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#"> <router-link to='/about'>About</router-link> </a>
          </li>

        </ul>
        <form class="form-inline my-2 my-lg-0 " >
          <input class="form-control mr-sm-2 searchbox" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-primary my-2 my-sm-0 searchbox" type="submit">Search</button>

            <a class="nav-link" href="#"><router-link to='/register'>Register</router-link></a>
            <a class="nav-link" href="#"><router-link to='/login'>Login</router-link></a>

        </form>

      </div>
    </nav>
  </div>

</template>

<script>

</script>

<style>

   .navbar{
     width: 100%;
     margin: 0 ;
     border-radius: 5px;
     margin-top: 30px;
     position: absolute;

  }
  .searchbox{
     position: relative;
     right:50px ;
  }

</style>
