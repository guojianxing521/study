
//第一件事：发送AJAX请求数据，不再进行页面跳转，阻止A的默认行为,添加类，获取内容
//第二件事：追加历史记录
//=====================================
//点击a时添加点击事件

$('.wrapper').on('click','a',function(e){

    e = e ||event;
    //发送请求
    var page = $(this).parent().data('page');
 
     render(page);
      //改变地址栏的地址
     var historyurl = $(this).attr('href');
     history.pushState(null,null,historyurl);
       
      //阻止a的自动跳转
      return false;

})
//监听历史记录，点击回退，前进按钮的时候能向后台请求真正的页面，让改变的地址栏信息真正的有效果
//window下面有一个方法,历史改变事件

window.onpopstate = function(){
   // console.log(location.pathname);
   var pathname = location.pathname;
  //默认page为index
     page = 'index';
   if(pathname.indexOf('index')>-1){
      page = 'index';
   }
    if(pathname.indexOf('my')>-1){
      page = 'my';
   }
    if(pathname.indexOf('friend')>-1){
      page = 'friend';
   }
   //重新发一次请求
   render(page);
}

//把请求封装一下
function render(page){
       $.ajax({
        url:'api/data.php',
        type: 'GET',
        data:{
            page:page
        },
        dataType:'json',
        success: function(data){
            // console.log(data);
          //清除所有元素的类
          $('[data-page]').removeClass('now');
          //给当前的添加类
          $('[data-page='+data.page+']').addClass('now');
          //把当前的内容替换
          $('.content').html(data.html);
        }
   })
}
