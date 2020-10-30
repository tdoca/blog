<template>
    <div></div>
</template>
<script>
import axios from "axios"
import marked from "marked"

export default {
    name: "page",
    mounted:function(){
    axios.get("https://api.github.com/repos/tdoca/blog/issues",{headers:{'Authorization': 'token a18c98ec7afcf3f13dc20778f5137cf321c79e12'}}).then((res)=>{
      console.log(res.data);
      this.$refs.home.innerHTML=marked(res.data[0].body);
    }).catch((error)=>{
      console.log(error);
    })
  }
}
</script>