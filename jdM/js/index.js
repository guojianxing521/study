window.onload = function(){
  // 搜索框
   search();
   //轮播图
   banner();
   //计时器
   downTime();
}
//默认在顶部，透明度为0========================================
// 在轮播图滑动的时候，透明度需要改变，滚动的越多
//透明度越大
//在轮播图以外的区域滚动的时候，透明度保持不变
var search = function(){
   // 获取元素
   var search = document.getElementsByClassName('jd_search_box')[0];
   var banner = document.querySelector('.jd_banner');
   
   // 轮播图的高度
   var Height = banner.offsetHeight;
   // console.log(Height);
   //页面滚动事件
   var opacity = 0;
   window.onscroll = function(){
    // 获取页面卷曲的距离
    var scrollT = document.documentElement.scrollTop||document.body.scrollTop;
    // console.log(scrollT);
    //作比较
    //透明度不断变化
    if(scrollT<Height){
        opacity = scrollT/Height*0.85;
    }else{
        opacity = 0.85;

    }
    search.style.background = 'rgba(201,21,35,'+opacity+')';
    //设置给搜索容器
   }
}

//轮播图=============================================
var banner = function(){
//1.需要自动轮播，左右滑动(定时器，过渡，转换，判断索引)，并且无缝轮播
//2.轮播的过程中，点随着图片轮播改变（判断索引，修改样式，类操作classList）
//3.能随着手指来回滑动（touch相关事件）
//4.滑动的时候如果距离不足，产生的是吸附效果(过渡)
//5.足够：图片切换上一张，下一张（过渡）

//1.获取操作的元素，拿到最大的盒子，
    var banner = document.querySelector('.jd_banner');

//图片容器
    var oUl1 = banner.querySelector('ul:first-child');
//点容器
    var oUl2 = banner.querySelector('ul:last-child');
    var aLi = oUl2.querySelectorAll('li');
//获取宽度
    var img = oUl1.querySelector('li');
    var width = img.offsetWidth;
    // console.log(width);

//核心索引，兼容 性
//定时器->设置图片容器的定位->加过渡->兼容性->判断索引
//监听过渡结束事件，判断索引，判断瞬间定位到第一张->清除过渡->定位
//考虑左右滑动
//===============封装=====================================
 var removetransition = function(){
      oUl1.style.transition='none';
      oUl1.style.webkitTransition='none';
 }
 var addtransition = function(){
  // 注意过渡时间=========重点，过渡时间太长会出现空白
      oUl1.style.transition ='all 0.2s';
      oUl1.style.webkitTransition ='all 1s';
 }
 var changetranslateX = function(dis){
    oUl1.style.transform = 'translateX('+dis+'px)';
    oUl1.style.webkitTransform = 'translateX('+dis+'px)';
 }
//==================索引为0，瞬间定位================================
    var timer = null;
    var index = 1;
    timer = setInterval(function(){
        index++;
         //过渡
        addtransition();
        changetranslateX(-index*width);
    },2000);
  //监听过渡改变事件
  oUl1.addEventListener('transitionend',function(){
     // console.log(1);
     if(index>=9){
       index = 1;
      //去除过渡
      removetransition();
      //
      changetranslateX(-index*width);
      
     }else if(index<=0){
        index = 8;
        removetransition();
        changetranslateX(-index*width);
       
     }
     //这里的index值为1-8
     //改变小点的类
     point();

  })
//2.==============改变点的样式=======================
   var  point = function(){
    //清除所有的类
    for(var i=0;i < aLi.length;i++){
      aLi[i].classList.remove('now');
    }
    // console.log(index);
     aLi[index-1].classList.add('now');
    
   }

//3.==============监听触摸时间==============
//开始 移动 结束事件
//清除定时器
//拿到开始的触摸位置坐标，取第一个坐标点
//移动的过程当中拿到移动过程中X的坐标
//计算位置的改变，右滑为正，左滑为负，随着手指的移动，目标位置也改变
//先清过渡，做定位，基于原来的位置之上加上移动的定位
//保证ul有高度****
  var isMove = false;
  var startX = 0;
  var endX = 0; 
  var distance = 0;
   oUl1.addEventListener('touchstart',function(e){
     //获取初始触摸坐标
      startX = e.touches[0].clientX;
      // console.log(startX);
      // console.log(e);
      //清除定时器
      clearInterval(timer);
      timer = null;
   })
   oUl1.addEventListener('touchmove',function(e){
      isMove = true;
      //获取移动的触摸坐标
      endX = e.touches[0].clientX;
      distance = endX - startX;
      //改变oUl1的位置
      //先清除过渡
      removetransition();
      //改变位置
      changetranslateX(-index*width+distance);
   })

//4.把公共的部分提出来
//4，5功能在滑动结束的时候来做
//移动的距离为参考，以轮播图宽度的三分之一为参考
//取绝对值
//小于三分之一，变为原来的定位，过渡，定位
//else，两个方向
//开关
   oUl1.addEventListener('touchend',function(){
      if(isMove){
         //触摸结束判断滑动距离
       if(Math.abs(distance)<width/3){
         addtransition();
         changetranslateX(-index*width);
       }else{
        if(distance>0){
          index--;
          console.log(index)
        }else{
          index++;
          console.log(index);
        }
         //切记加过渡，监听过渡事件会执行
         addtransition();
         changetranslateX(-index*width);
       }
     }
     isMove = false;
       //重置参数
     startX = 0;
     endX = 0; 
     distance = 0;
  //重启定时器 先清除后开启
     clearInterval(timer);
     timer = null;
     timer = setInterval(function(){
          index++;
           //过渡
          addtransition();
          changetranslateX(-index*width);
      },2000);
  //6：可能会触发浏览器默认行为
   })
}

//倒计时
//假设倒计时时间为三个小时
var downTime = function(){
   var time = 3*60*60;
   //每一秒刷新一次倒计时元素
   var ms = document.querySelector('.ms');
   var aSpan = ms.querySelectorAll('span');
   //定时器，格式化
   var timer = setInterval(function(){
      time--;
      var h = Math.floor(time/60/60);
      var m = Math.floor(time%3600/60);
      var s = Math.floor(time%60);
      // console.log(h);
      aSpan[0].innerHTML = Math.floor(h/10);
      aSpan[1].innerHTML = Math.floor(h%10);
      aSpan[3].innerHTML = Math.floor(m/10);
      aSpan[4].innerHTML = Math.floor(m%10);
      aSpan[6].innerHTML = Math.floor(s/10);
      aSpan[7].innerHTML = Math.floor(s%10);
      if(time<=0){
        clearInterval(timer);
      }
   },1000);
}