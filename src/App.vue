<template>
  <div id="app">
    <ul id="container" class="sidenav">
      <li id="home">
        <router-link to="/">Home</router-link>
        <div class="popupContainer">
          <ul class="popup">
            <li>
              <router-link to="/contacts">Contacts</router-link>
            </li>
            <li>
              <router-link to="/#">About</router-link>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <router-link to="/todos">Todos</router-link>
      </li>
      <li>
        <router-link to="/photos">Photos</router-link>
      </li>
      <router-view></router-view>
    </ul>
  </div>
</template>

<script>
  export default {}
</script>


<style>

  body {
    height: 100px;
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

  #home:hover .popupContainer {
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
