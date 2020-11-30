<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-navbar-brand href="#"><img src="@/assets/img/logo.png" class="logo-position" alt="logo img"/></b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav>
        <b-nav-item-dropdown text="Buy" left>
          <b-dropdown-item href="#">Buy with holmesfinders</b-dropdown-item>
          <b-dropdown-item href="#">Home buying guide</b-dropdown-item>
          <b-dropdown-item href="#">Indian housing market</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Sell" left>
          <b-dropdown-item href="#">Sell with holmesfinders</b-dropdown-item>
          <b-dropdown-item href="#">Home selling guide</b-dropdown-item>
          <b-dropdown-item href="#">Holmesfinders estimates</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Cities" left>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Office Spaces" left>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Property Spaces" left>
          <b-dropdown-item href="#">Home loans</b-dropdown-item>
          <b-dropdown-item href="#">Advertise</b-dropdown-item>
          <b-dropdown-item href="#">Home cleaning</b-dropdown-item>
          <b-dropdown-item href="#">Sanitisation</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="News and Insights" left>
          <b-dropdown-item href="/#/admin">Real estate news</b-dropdown-item>
          <b-dropdown-item href="#">Home improvement</b-dropdown-item>
          <b-dropdown-item href="#">Finance</b-dropdown-item>
          <b-dropdown-item href="#">Buying</b-dropdown-item>
          <b-dropdown-item href="#">Selling</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-navbar-nav class="ml-right">
        <b-nav-item class="btn btn-danger">Post Property Free</b-nav-item>
        <b-nav-item id="btn-register" class="btn">Register/Login</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>


<style>
div nav.bg-info {
  background-color: #FFFFFF !important;
}
.navbar-brand{
  width: 240px !important;
  height: 70px !important;
}
.logo-position{
  width: 240px !important;
  height: 70px !important;
  margin-top: -12px;
}
nav.navbar>div>ul>li>a>span{
  line-height: 40px;
  height: 40px;
  padding: 0px 10px 0px 10px;
  width: auto;
  color: #222;
  text-transform: none;
  text-decoration: none;
  text-align: left;
  text-decoration: none;
  background: rgba(0, 0, 0, 0);
  border: 0;
  border-radius: 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: normal;
  outline: none;
}
nav.navbar>div>ul>li>a:hover::after{
  color: #222;
}
nav.navbar>div>ul>li>a::after{
  color: #222;
  font-size: 12px;
}
.navbar-nav > li > ul.dropdown-menu{
  opacity: 0;
  z-index: -1;
  transform: translate(0, 10px);
  transition: opacity 200ms ease-in, transform 200ms ease-in, visibility 200ms ease-in;
}

.navbar-nav > li > ul.dropdown-menu.show{
  opacity: 1;
  z-index: 1000;
  transform: translate(0, 0);
}
ul.navbar-nav.ml-right{
  margin-left: auto;
}
li.btn{
  padding:0 15px;
  height: 40px;
  margin-top: 5px;
  font-weight: 700;
  float: right;
  line-height: 40px;
}
li.btn>a{
  color: #FFF !important;
  padding: 0px;
}
li.btn#btn-register{
  background-color: transparent;
  outline: none;
  border: none;
}
li.btn#btn-register>a{
  color: #dc3545 !important;
}
@media (max-width: 992px){
  div nav.bg-info {
    background-color: #d1d1d1 !important;
  }
  nav.navbar .navbar-brand{
    position: relative;
    margin: auto;
  }
  nav.navbar .navbar-toggler{
    position: relative;
    left: 0px;
  }
  nav.navbar #nav-collapse{
    position: fixed;
    top: 86px;
    left: 0px;
    bottom: 0px;
    z-index: 10005;
    background-color: transparent;
  }
  nav.navbar #nav-collapse>ul{
    background-color: #FFF;
    z-index: -1;
    overflow-y: scroll;
    width: 300px;
    height: 100%;
  }
  nav.navbar #nav-collapse.show{
    z-index: 10005;
  }
  nav.navbar #nav-collapse>ul>li>a{
    margin: 4px;
    padding: 0px;
  }
  nav.navbar #nav-collapse ul li>a:hover{
    background-color: #4caf50;
    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
    
    border-radius: 2px;
  }
  nav.navbar #nav-collapse ul li>a:hover>span{
    color:white;
  }
  nav.navbar #nav-collapse ul li ul{
    background-color: transparent;
    display: none;
  }
  nav.navbar #nav-collapse ul li ul.dropdown-menu.show{
    display: block;
    border:none;
    margin:0px 10px;
    margin-left: 10px;
    box-shadow: none;
    visibility: visible;
  }
}
</style>
