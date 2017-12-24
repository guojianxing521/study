<template>
<div>
  <div id="slider" class="mui-slider">
		<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted" >
			<div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms;">
				<a v-for="item in dataList" :key="item.id" :class="['mui-control-item',item.id==0?'mui-active':'']" href="#item1mobile" data-wid="tab-top-subpage-1.html" @click="getdata02(item.id)">
					{{ item.title }}						 
				</a>
			</div>
		</div>
	</div>
	<!-- 图片详情部分 -->
  <ul>
     <router-link tag="li" v-for="item in dataList02" :key="item.id" :to="'/home/photoinfo/'+item.id">
	      <img v-lazy="item.img_url">
         <div class="info">
			    	<h1>{{item.title }}</h1>
						<p>{{ item.zhaiyao }}</p>
				</div>
  	</router-link>
 </ul>


</div>
</template>

<script>
    import mui from "../../../lib/mui/js/mui.min.js"
    export default{
      data(){
          return {
            dataList:[],
			dataList02:[]
          }
      },
	  created(){
        this.getdata01();
		this.getdata02(0);
	  },
      methods:{ 
		  async getdata01(){

			  const { data } = await this.$http.get('/api/getimgcategory');
			//   console.log(data)
			  if(data.status==0){
				  data.message.unshift({title:"全部",id:0})
				  this.dataList = data.message;
				  // console.log(this.dataList)
			  }
		  },
		    async getdata02(id){

			  const { data } = await this.$http.get('/api/getimages/'+id);
			  console.log(data)
			  if(data.status==0){
			    this.dataList02 = data.message
			  }
		  }
	  },
       mounted(){
              mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
      }
    }
</script>

<style scoped lang="scss">
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
ul{
	text-align: center;
	margin: 0;
	padding: 0;
	padding: 10px;
}
li{
	list-style: none;
	background-color: #ccc;
	position: relative;
	img{
		width: 100%;
		vertical-align: middle;
	}
	&+li{
		margin-top: 10px;
	}
	.info{
		position: absolute;
		bottom: 0;
		left: 0;
		max-height: 86px;
		background-color: rgba(0,0,0,0.4);
		overflow: hidden;
    h1{
		font-size:14px;
		color: #fff;
	}
	p{
		font-size: 13px;
		color: #fff;
		text-align: left;
		text-indent: 2em;
	}
	}
	
}
</style>
