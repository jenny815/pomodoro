<template lang="html">
  <div id="app">
    <div class="box ">
      <ul style="list-style:none;" class="pt-5">
        <li class="d-flex flex-column col-12 p"><router-link to="/"> <font-awesome-icon icon="user-circle" size="6x"/></router-link></li>
        <li class="d-flex flex-column col-12" ><router-link to="/">JENNY</router-link></li>
        <li class="p-2 pt-3"><router-link to="/">Tasks</router-link></li>
        <li class="p-2"><router-link to="/lists">Lists</router-link></li>
        <li class="p-2"><router-link to="/settings">Settings</router-link></li>
      </ul>
    </div>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
  </div>
</template>

<style>

#app {
  width: 85%;
  height: 85%;
  background: linear-gradient(to bottom, rgb(241, 144, 131) 0%, rgb(231, 94, 84) 100%);
  position: relative;
  top: 10%;
  left: 8%;
}
.box {
  width: 15%;
  height: 90%;
  background: white;
  position: absolute;
  top: 5%;
  left: 5%;
  border-radius: 5px;
}
.p{
 position: relative;
 left: -10%;
}
</style>
