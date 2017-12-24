<template>
<div>
  <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
					<router-link :to="'/home/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
						    <h1>{{item.title}}</h1>
							<p class="mui-ellipsis">
                                <span>发表时间：{{item.add_time |dataFormat}}</span>
                                <span>{{item.click}}次</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>
</div>
</template>
<script>
    export default{
        data(){
            return {
                newList:[]
            };
        },
        created(){
            this.getData();
        },
        methods:{
            async getData(){
                 const { data } = await this.$http.get('/api/getnewslist');
                 console.log(data)
                if(data.status ==0 ) this.newList = data.message;
            }
        }
    }
</script>
<style scoped>
.mui-ellipsis{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
}
.mui-media-body h1{
 font-size: 14px;
}

</style>
