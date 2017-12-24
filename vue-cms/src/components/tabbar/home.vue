<template>
<div>
 <mt-swipe :auto="4000">
  <mt-swipe-item v-for="(item,i) in lunbo" :key="i">
    <img :src="item.img" alt="">
  </mt-swipe-item>
</mt-swipe>

<!-- 九宫格 -->
<ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newList"
                >
		                    <img src="../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photoList"
                >
		                   <img src="../../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newList"
                >
		                    <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newList"
                >
		                    <img src="../../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newList"
                >
		                    <img src="../../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newList"
                >
		                    <img src="../../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></router-link></li>
		        </ul>
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

<style scoped>
 .mint-swipe{
  height: 180px;
 }
.mint-swipe-items-wrap img {
      width: 100%;
      height: 100%;
}
.mui-table-view-cell img{
  width: 60px;
  height: 60px;
}
.mui-grid-view.mui-grid-9{
  background-color: #fff;
  border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border: none;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
  font-size: 13px;
}
</style>
