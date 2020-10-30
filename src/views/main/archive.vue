<template>
    <div id="archive">
        <div id="archive-title">archive</div>
        <div id="archive-body" ref="archive_body"></div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name: "archive",
    data: function(){
        return{
            item: function(node,date,url,title) {
                this.node = node;
                this.date = date;
                this.url = url,
                this.title = title
            },
            items: []
        }
    },
    created: function(){
        axios.get("https://api.github.com/repos/tdoca/blog/issues",{headers:{'Authorization': 'token a18c98ec7afcf3f13dc20778f5137cf321c79e12'}}).then((res)=>{
            for(let i=0; i<res.data.length; i++){
                const time = new Date().getTime() - new Date(res.data[i].created_at).getTime();
                console.log(Math.floor(time/(24*3600*1000)));
                const item = new this.item(document.createElement("div"),new Date(res.data[i].created_at),res.data[i].url,res.data[i].title);
                item.node.className="archive-item";
                console.log(item.date);
                let b = document.createElement("b");
                b.innerText = item.title;
                item.node.appendChild(b)
                this.$refs.archive_body.appendChild(item.node)
                this.items.push(item);
            }
        }).catch((err)=>{
            console.log(err);
        })
        console.log(this.items);
    },
    // comments: function(){
    //     for(let i=0; i<this.data.items.length; i++){
    //         console.log(this.data.items[i]);
    //     }
    // }
}
</script>
<style>
#archive{
    width: 100%;
    min-height: 100%;
}
#archive-title{
    width: 100%;
    font-size: 2em;
}
#archive-body{
    width: 100%;
    min-height: 90%;
    display: flex;
}
.archive-item{
    margin-right: 1%;
    background: red;
}
.archive-item b{
    font-size: 1.7em;
}
</style>