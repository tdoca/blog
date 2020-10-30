<template>
  <div id="home" ref="home">
  </div>
</template>

<script>
import axios from "axios";
import marked from "marked";

export default {
  name:"Home",
  mounted:function(){
    axios.get("https://api.github.com/repos/tdoca/blog/issues",{headers:{'Authorization': 'token a18c98ec7afcf3f13dc20778f5137cf321c79e12'}}).then((res)=>{
      for(let i=0; i<res.data.length; i++){
        this.$refs.home.innerHTML+=marked(res.data[i].body);
        console.log(new Date(res.data[i].created_at));
      }
      //console.log(res.data);
      //console.log(new Date(res.data.created_at));
    }).catch((error)=>{
      console.log(error);
    })
  }
}
</script>

<style scoped>
#home{
  min-height: 500px;
  display: inline-block;
}
</style>