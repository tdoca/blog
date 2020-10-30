<template>
  <div id="app">
    <div id="main">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
*::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}

*::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.1);
}

// image{
//   user-select:none;
//   -webkit-user-seletct:none;
//   -moz-user-seletct:none;
//   -ms-user-seletct:none;
// }

a {
  text-decoration: none;
  color: black;
}

#app {
  position: absolute;
  width: 100%;
  height: 100%;
  background: no-repeat 50% 50%;
  // https://s2.ax1x.com/2020/03/10/8CQoFO.png
  // https://i1.100024.xyz/i/2020/10/12/k9nht5.jpg
  background-image: url("https://i1.100024.xyz/i/2020/10/12/k9nht5.jpg");
  background-size: cover;
}

#main {
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  width: 80%;
  height: calc(100% - 20px);
  margin: 10px 0 10px 0;
  padding: 0 10% 0 10%;
  background-clip: content-box;
  background-color: #9696964d;
}
</style>
