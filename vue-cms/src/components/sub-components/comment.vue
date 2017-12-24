<template>
  <div>
      <h4>发表评论</h4>
      <hr>
      <textarea placeholder="请输入评论内容(最多吐槽120字)" maxlength="120" v-model="usercomment"> </textarea>
      <!-- <button type="button" class="mui-btn mui-btn-primary mui-btn-block">发表评论</button> -->
      <mt-button type="primary" size="large" @click = "writeMessage">发表评论</mt-button>
  
  <!-- 评论区域 -->
    <div class="cmt-list">
    <div class="cmt-item" v-for="(item,i) in commentsData" :key ="i">
      <div class="cmt-item-title">第 {{ i+1 }}楼&nbsp;用户：{{ item.user_name }}&nbsp;发表时间：{{ item.add_time | dataFormat}}</div>
      <div class="cmt-item-body">{{ item.content}} </div>
    </div>
  </div>
    <mt-button type="danger" size="large" @click = "moreLoading">加载更多</mt-button>



  </div>
</template>

<script>
 //按需导入
 import { Toast } from "mint-ui"
    export default{
        data(){
            return {
                commentsData:[],
                page: 1,
                usercomment:''
            }
        },
        created(){
            this.getCommentsData()
        },
        methods:{
            async getCommentsData(){
                const { data } = await this.$http.get('/api/getcomments/'+this.commentId+'?pageindex='+this.page)
                console.log(data)
                if(data.status==0) this.commentsData = this.commentsData.concat(data.message)
            },
            //点击提交评论触发事件
            // 写入评论，发送请求
            async writeMessage(){
                // 先对用户输入的内容进行校验
                if(this.usercomment.trim().length<=0) return Toast('请填写评论');
                const { data} = await this.$http.post('/api/postcomment/'+this.commentId,{ content:this.usercomment.trim()});
                // console.log(data)
                if(data.status == 0){
                   this.commentsData.unshift({
                           add_time: new Date(),
                           content:this.usercomment.trim(),
                           user_name:"匿名用户"
                    })
                }
                this.usercomment = ''
        },
        //加载更多
        moreLoading(){
            this.page++;
            this.getCommentsData()


        }
        },
        props:["commentId"]
    }
</script>

<style lang="scss" scoped>
 textarea{
     font-size:14px;
     margin: 0;

 }
 .cmt-list {
  margin-top: 4px;
  .cmt-item {
    line-height: 30px;
    .cmt-item-title {
      font-size: 14px;
      background-color: #ddd;
    }
    .cmt-item-body {
      font-size: 13px;
      text-indent: 2em;
    }
  }
}
</style>
