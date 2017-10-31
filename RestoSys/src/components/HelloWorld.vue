<template>
  <div class="hello">

    <img src="../assets/mainimg1.png"  class='imgdetails'alt="">


      <div class="foodandbevrage allbox">
          <h3>Food and Bavrage</h3>
          <hr class="line">
            <div class="row">
               <div class="col-md-8">
                <p>CSS (Cascading Style Sheets) allows you to create great looking web pages, but how does it work under the hood? This article explains what CSS is, how the browser turns HTML into a Document Object Model (DOM), how CSS is applied to parts of the DOM, some very basic syntax examples, and what code is used to actually include our CSS in our web page.</p>
              </div>
              <div class="col-md-4">
                <p>Image Goes Here</p>
              </div>
            </div>

      </div>



      <div class="services allbox">
        <h3>Services</h3>
        <hr class="line">
          <div class="row">
              <div class="col-md-8">
                <p>CSS (Cascading Style Sheets) allows you to create great looking web pages, but how does it work under the hood? This article explains what CSS is, how the browser turns HTML into a Document Object Model (DOM), how CSS is applied to parts of the DOM, some very basic syntax examples, and what code is used to actually include our CSS in our web page.</p>
              </div>
              <div class="col-md-4">
                <p>Image Goes Here</p>
              </div>
          </div>

      </div>



  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .imgdetails{

    border: 0;
    width: 100%;

  }

  .allbox{
    position: relative;
    top: 15px;
    left: 10px;
    height: 20%;
  }

  .hello{
    background: white;
  }

  .line{
    height: 0.5px;
    background-color: gray;
  }



</style>
