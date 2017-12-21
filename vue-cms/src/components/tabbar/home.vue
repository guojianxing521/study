<template>
<div>
 <mt-swipe :auto="4000">
  <mt-swipe-item v-for="(item,i) in lunbo" :key="i">
    <img :src="item.img" alt="">
  </mt-swipe-item>
</mt-swipe>
</div>
   
</template>
<script>
    export default{
      data(){
        return {
          lunbo:[]
        }
      },
      created(){
        this.getData()
      },
      methods:{
        async getData(){

          const {data} = await this.$http.get('/api/getlunbo');
          console.log(data)
          if(data.status==0) this.lunbo = data.message;

        }
      }


    }
</script>

<style >
 .mint-swipe{
  height: 180px;
 }
 img {
      width: 100%;
      height: 100%;
    }
</style>
