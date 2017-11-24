//原生写轮播 
var oul = document.getElementsByClassName('lunbo')[0];
var oul2 = document.getElementsByClassName('lun_dian')[0];
var aLi2 = oul2.getElementsByTagName('li');
// console.log(aLi2);
// console.log(oul);
//鼠标移上，清除定时器
oul.onmouseover = function(){
	clearInterval(timer);
	timer = null;
}
//鼠标移出，开定时器
oul.onmouseout = function(){
	timer = setInterval(fn,2000);
}
// 开一个定时器
var timer = null;
var index = 0;
timer = setInterval(fn,2000);
function fn(){

    index++;
    if(index == 7){
    	index = 1;
    }
    // console.log(index);
    var du = -12.5*index+'%';
    // console.log(du);
    oul.style.transform="translateX("+du+")";
    // aLi2.forEach(function(item,i){
    // 	console.log(item);
    // })
    for(var i=0;i<aLi2.length;i++){
    	aLi2[i].className='';
    }
    aLi2[index-1].className='now';
}

//第二种
