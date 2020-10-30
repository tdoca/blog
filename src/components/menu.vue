<template>
  <div id="menu">
    <router-link to="/">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconhome" />
      </svg>
    </router-link>
    <router-link to="/archive">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconcalendar" />
      </svg>
    </router-link>
    <a style="cursor: pointer;">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icondiscount" />
      </svg>
    </a>
    <router-link to="/about">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconusercenter" />
      </svg>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "NavMenu",
};
</script>
<style>
#menu {
  top: 10px;
  right: 10%;
  position: fixed;
  width: 8.8em;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

#menu::-webkit-scrollbar {
  display: none;
}

#menu a {
  font-size: 2.2em;
  color: black;
  text-decoration: none;
  transition: background-color 0.3s;
}

#menu a:hover {
  background-color: #4b4b4b80;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>