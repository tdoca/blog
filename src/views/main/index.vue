<template>
  <div class="main-view">
    <section id="left-side" ondragstart='return false' onselectstart ='return false'>
      <music-player></music-player>
      
      <!-- <slot name="left-side"></slot> -->
    </section>
    <section id="content-side">
      <!-- <navMenu></navMenu> -->
      <router-view />
      <div id="footer">
        <div>&copy;2020-2020 by tdoca</div>
        <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
          <img
            alt="知识共享许可协议"
            style="border-width:0"
            src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png"
          />
        </a>
      </div>
    </section>
  </div>
</template>
<script>
import musicPlayer from '../../components/musicPlayer'
export default {
  name: 'main-page',
  components: {
    musicPlayer
  }
}
</script>
<style scoped>
#left-side {
  position: fixed;
  width: 200px;
  height: calc(100% - 40px);
  padding: 10px;
  border-right: 1px dashed black;
}

#content-side {
  width: calc(100% - 236px);
  margin-left: 221px;
  padding: 0 10px;
  min-height: 100%;
}

#footer {
  text-align: center;
  background-clip: content-box;
  bottom: 10px;
}
</style>