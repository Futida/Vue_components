<template>
  <div>
    <nav class="navbar navbar-light" style="background-color: #e3f2fd">
      <div class="container">
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active">
              <router-link to="/">Home</router-link>
            </li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown"><b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li><a href="#">Действие</a></li>
                <li><a href="#">Другое действие</a></li>
                <li><a href="#">Что-то еще</a></li>
                <li class="divider"></li>
                <li><a href="#">Отдельная ссылка</a></li>
                <li class="divider"></li>
                <li><a href="#">Еще одна отдельная ссылка</a></li>
              </ul>
            </li>
            <!--<li class="active">-->
            <!--<router-link to="/todos">Todos</router-link>-->
            <!--</li>-->
            <li class="active">
              <router-link to="/photos">Photos</router-link>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div>
    </nav>
    <router-view></router-view>
  </div><!-- /.container-fluid -->
</template>

<script>
  export default{}
</script>


<style>

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
