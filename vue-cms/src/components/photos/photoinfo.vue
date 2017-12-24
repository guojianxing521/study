<template>
  <div class="photoinfo-container">
      <h4 class="title">{{ data.title}}</h4>
      <p class="info">
      <span>发表时间：{{ data.add_time | dataFormat }}</span>
      <span>点击：{{ data.click }}次</span>
    </p>
<!-- 缩略图区域 -->

    <div class="thumb-img-list">
      <!-- 使用 v-for 循环渲染缩略图 -->
       <img class="preview-img" v-for="(item, index) in imgData" :src="item.src" height="100" @click="$preview.open(index, imgData)" :key="index">
   
    </div>




    <!-- 内容区域 -->
    <div class="content" v-html="data.content"></div>


    <!-- 子组件:需要接受父组件的ID值 -->
    <comment :commentId ="id"></comment>
  </div>
</template>

<script>
import comment from "../sub-components/comment.vue"
    export default{
        data(){
            return {
                data:{},
                imgData:[]
            }
        },
        created(){
            this.getData01(),
            this.getData02()
        },
        methods:{
            //获取数据
            async getData01(){
                const { data } = await this.$http.get('/api/getimageInfo/'+this.id);
                // console.log(data);
                if( data.status == 0) this.data = data.message[0];
            },
            //获取缩略图
            async getData02(){
                const { data } = await this.$http.get('/api/getthumimages/'+this.id);
                // console.log(data)
                //循环数组每一项，添加宽和高的属性
                data.message.forEach(item=> {
                      item.w = 600;
                      item.h = 400;
                });
                 if( data.status == 0) this.imgData = data.message;
                 console.log(data.message)
            }
        },
        props:['id'],
        components:{
            comment
        }
    }
</script>

<style scoped lang ="scss">
  .photoinfo-container {
  padding: 3px;
}
.title {
  font-size: 15px;
  text-align: center;
  margin: 15px 0;
  color: #26a2ff;
}
.info {
  font-size: 13px;
  display: flex;
  justify-content: space-between;
}
.content {
  font-size: 13px;
  line-height: 30px;
}
.thumb-img-list {
  img {
    margin: 10px;
    box-shadow: 0 0 7px gray;
  }
}
</style>
