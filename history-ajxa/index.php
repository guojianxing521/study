<?php
      $html = '发现音乐网页内容';
      $page = 'index';
      // include 'template.html'

  ?>
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>history</title>
    <style>
        *{
            padding: 0;
            margin: 0;
        }
        body {
            background-color: #F7F7F7;
            font-family: Arial;
        }
        header {
            background: #242424;
            border-bottom: 1px solid #000;
        }
        .wrapper{
            width: 1100px;
            height: 70px;
            margin: 0 auto;
        }
        header .wrapper h1{
            float: left;
            width: 176px;
            height: 69px;
            background: url(images/topbar.png) no-repeat 0 0;
            font-size: 0;
        }
        header .wrapper ul{
            list-style:none;
        }
        header .wrapper ul li{
            float: left;
            height: 70px;
        }
        header .wrapper ul li.now,
        header .wrapper ul li:hover{
            background: #12b7f5;
        }
        header .wrapper ul li a{
            padding: 0 20px;
            display: block;
            color: #fff;
            line-height: 70px;
            text-decoration: none;
        }

        .content{
            width: 1100px;
            margin: 0 auto;
            font-size: 100px;
            text-align: center;
        }

    </style>
</head>
<body>
<header>
    <div class="wrapper">
        <h1>网易云音乐</h1>
        <ul>
            <li data-page="index" class="<?php echo $page=='index'?'now':'' ?>" ><a href="index.php">发现音乐</a></li>
            <li data-page="my"  class="<?php echo $page=='my'?'now':'' ?>"><a href="my.php">我的音乐</a></li>
            <li data-page="friend" class="<?php echo $page=='friend'?'now':'' ?>"><a href="friend.php">朋友</a></li>
        </ul>
    </div>
</header>
<div class="content">
    <?php echo $html ?>
</div>
<script src="js/jquery.min.js"></script>
<script src="js/index.js"></script>
<script>
	
//第一件事：发送AJAX请求数据，不再进行页面跳转，阻止A的默认行为,添加类，获取内容
//第二件事：
//=====================================
//点击a时添加点击事件

// $('.wrapper').on('click','a',function(e){

//     e = e ||event;
//     //发送请求
//     var page = $(this).parent().data('page');
   
//     $.ajax({
//     	type: 'get',
//         url:'api/data.php',
//         data:{
//             page:page
//         },
//         dataType: 'json',
//         success: function(data){
//           // console.log(data);
//           //清除所有元素的类
//           $('[data-page]').removeClass('now');
//           //给当前的添加类
//           $('[data-page="'+data.page+'"]').addClass('now');
//           //把当前的内容替换
//           $('.content').html(data.html);

//         }
//     });
//     //阻止a的自动跳转
//     return false;
// })

</script>
</body>
</html>