/**
 * Created by Administrator on 2016/12/9.
 */
$(function () {

    $('img').css('opacity',0).css('transition','2s');
    $('p').css('opacity',0).css('transition','2s');
   setTimeout(function () {
       location.href = "./index/index.html";
   },2000);
});

//$.ajax({
//	url:'/api/user/login',
//	type:'POST',
//	dataType:'json',
//	data:{
//		username:"admin",
//		passwd:"123456"
//	},
//	success:function(result){
//		console.log('result',result)
//	},
//	complete:function(res){
//		console.log('res',res)
//	}
//})
