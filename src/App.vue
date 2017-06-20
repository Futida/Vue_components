<template>
  <div>
    <div class="container">
      <nav class="navbar navbar-light" style="background-color: #e3f2fd">
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active">
              <router-link to="/">Home</router-link>
            </li>

            <li class="active">
              <router-link to="/todos">Todos</router-link>
            </li>
            <li class="active">
              <router-link to="/photos">Photos</router-link>
            </li>
          </ul>
          <router-view></router-view>
        </div><!-- /.navbar-collapse -->
      </nav>
    </div><!-- /.container-fluid -->
  </div>
</template>

<script>
  export default{

  }
</script>


<style>
  body {
    /*!*height: 100px;*!*/
    /*width: 1200px;*/
    /*margin: 0 auto;*/
    /*font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;*/
    /*line-height: 1.4em;*/
    /*background: #f5f5f5;*/
    /*color: #4d4d4d;*/
    /*min-width: 230px;*/
    /*max-width: 550px;*/
    /*margin: 0 auto;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-font-smoothing: antialiased;*/
    /*font-smoothing: antialiased;*/
    /*font-weight: 300;*/
  }

  #home:hover .popupContainer {
    z-index: 20;
    display: block;
  }

  ul.sidenav {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 25%;
    background-color: #f1f1f1;
    position: fixed;
    height: 100%;
    overflow: auto;
  }

  ul.sidenav li a {
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
    display: block;
  }

  ul.sidenav li a.active {
    background-color: #4CAF50;
    color: white;
  }

  ul.sidenav li a:hover:not(.active) {
    background-color: cornsilk;
    color: brown;
  }

  div.content {
    margin-left: 25%;
    padding: 1px 16px;
    height: 1000px;
  }

  @media screen and (max-width: 2000px) {
    ul.sidenav {
      width: 100%;
      height: auto;
      position: initial;
    }

    ul.sidenav li a {
      float: left;
      padding: 15px;
    }

    div.content {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 400px) {
    ul.sidenav li a {
      text-align: center;
      float: none;
    }
  }

  .router-link-exact-active {
    background-color: azure;

  }

  .popupContainer {
    display: none;
    position: absolute;
    top: 49px;
    color: red;
  }

  .popup {
    display: block;
    padding: 0 0px 0px 0px;
    list-style-type: none;
  }

  ul.popup li a {
    font-style: italic;
    font-size: 13px;
    display: block;
    width: 50px;
  }
</style>
