<?php 

header('Content-Type: text/html;charset:utf-8');
$page = 'index';
$html = '发现音乐网页内容';
// $_GET['page'] = 'page';
// var_dump($_GET);
if(isset($_GET['page'])){
    $page = $_GET['page'];
	// return false;
}



if($page==='my'){
	$html = '我的音乐网页';
}


if($page==='friend'){
	$html = '朋友网页内容';
}
//返回的字符串
echo '{"html":"'.$html.'","page":"'.$page.'"}';

//{"html":"$html","page":"$page"}