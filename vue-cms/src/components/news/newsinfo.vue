<template>
 <div class="newsinfo-container">
   <h3 class="title">{{newsinfo.title }}</h3>
   <p class="info">
     <span>发表时间:{{ newsinfo.add_time | dataFormat}}</span>
     <span>点击{{ newsinfo.click }}次</span>
   </p>
   <hr>
   <div class="content"  v-html="newsinfo.content"></div>

   <comment :commentId ="id"></comment>
 </div>
</template>

<script>
//导入子组件
import comment from "../sub-components/comment.vue"
    export default{
      data(){
         return {
           newsinfo:{}
         }
      },
      created(){
        // console.log(this)
        this.getNewsInfo();
      },
      methods:{
        async getNewsInfo(){
          //从地址栏里拿ID
          //或者使用props
           const { data } = await this.$http.get('/api/getnew/'+this.id);
          //  const { data } = await this.$http.get('/api/getnew/'+this.$route.params.id);
          //  console.log(data)
           if(data.status == 0) this.newsinfo = data.message[0];
        }
      },
      props:['id'],
      components:{
        comment
      }

    }
</script>

<style lang="scss" scoped>
.newsinfo-container{
  padding: 3px;
  .title{
    font-size: 15px;
    text-align: center;
    color: red;
    margin: 15px 0;
  }
}  
.info{
  display: flex;
  justify-content: space-between;
  color: #26a2ff;
}
</style>
