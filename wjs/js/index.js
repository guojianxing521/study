// //nav区域的下边框效果
// var oUl = document.querySelector('.nav_ul');
// var aLi = oUl.querySelectorAll('li');

// console.log(aLi);
// oUl.addEventListener('mouseover',function(e){
// 	var target = e.target || e.srcElement;
// 	if(target.nodeName==='A'){
// 		// console.log(target);
// 		for(var i = 0;i<aLi.length;i++){
// 			aLi[i].children[0].classList.remove('now');
// 			// console.log(aLi[i].children[0].classList);
// 			// console.log(aLi[i].classList)
// 		}
// 		target.classList.add('now');
// 	}
// 	// console.log(e);
// })
$(function(){
	banner();
  iscroll();
})

var banner = function(){
 
	//获取数据，请求
var getData = function(callback){

  if(window.data){
    callback&&callback(window.data);
    return;
  }
   $.ajax({

   	type:'get',
   	url:'js/data.json',
   	dataType:'json',
   	data:{},
   	success:function(data){
   		// console.log(data);
      window.data = data;
   		callback&&callback(window.data);
   	}


   })
}
// 渲染页面
var render = function(){

	getData(function(data){
       // console.log(data);
        
       //区别移动端 客户端的变量
       var isM = $(window).width() < 768? 1:0;

       var pointHTML = template('point',{list:data});
       var imageHTML = template('image',{list:data,isMobile:isM});
      // console.log(pointHTML);
       //放入页面中
       $('.carousel-indicators').html(pointHTML);

       $('.carousel-inner').html(imageHTML);
	});
}
render();
//测试，窗口大小改变时，重新渲染页面
$(window).on('resize',function(){
  render();
  //渲染页面时，总是重新请求数据，所以先判断数据存不存在，存在就不再发请求
})

//手势切换
var start = 0;
var end = 0;
var isMove = false;
var distanceX = 0;
$('.wjs_banner').on('touchstart',function(e){
  
     start = e.originalEvent.touches[0].clientX;
});
$('.wjs_banner').on('touchmove',function(e){
     isMove = true;
     distanceX = start - end;
     end = e.originalEvent.touches[0].clientX;
});
$('.wjs_banner').on('touchend',function(e){
     if(isMove&&Math.abs(distanceX)>50){
       if(distanceX>0){
        $('.carousel').carousel('next');
       }else{
        $('.carousel').carousel('prev');

       }
       
       }
     start = 0;
     end = 0;
     isMove = false
     distanceX = 0;
    })
   

}

// 区域滚动
var iscroll = function(){
      //获取元素
      var $big = $('.nav-tabs-parent .nav-tabs');
      var $small =$big.find('li');
      // console.log($small);
      //获取每个li的长度
      var smallWidth=0;
      $small.each(function(i,item){
        // console.log(item);
        smallWidth+= $(item).outerWidth(true);
      })
      // console.log(smallWidth);
      //设置宽度给元素
      $big.width(smallWidth);

      // new IScroll($('.nav-tabs-parent'),{
      //   scrollX:true,
      //   scrollY:false
      // })
       new IScroll($('.nav-tabs-parent')[0],{
        scrollX:true,
        scrollY:false
    });
} 