<template>
  <div id="app">
    <ul id="container" class="sidenav">

      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/todos">Todos</router-link>
      </li>
      <li>
        <router-link to="/slides">Slides</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {}
</script>


<style>

  .router-link-exact-active {
    background-color: azure;
  }

  body {
    font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.4em;
    background: #f5f5f5;
    color: #4d4d4d;
    min-width: 230px;
    max-width: 550px;
    margin: 0 auto;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    font-smoothing: antialiased;
    font-weight: 300;
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
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
  }

  /*ul.sidenav li a.active {*/
  /*background-color: #4CAF50;*/
  /*color: white;*/
  /*}*/

  ul.sidenav li a:hover:not(.active) {
    background-color: #555;
    color: white;
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
      position: relative;
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


</style>
