
//轮播图
var wd = $(window).width();
var hg = wd * 0.85;
$("#banner").width(wd);
$("#banner").height(hg);
$("#banner #img img").width(wd);
$("#banner #img img").height(hg);

//添加滑动事件
var i = 0 ;
function next(){
	$("#img").animate({
		left:-wd+'px'
	}, 800,function(){
		$("#img img").eq(0).appendTo($("#img"));
		$("#img").css("left", 0);
	})
	i++;
	if(i >= $("#img img").length){
		i = 0;
	};
	$("#button span").removeClass("on");
	$("#button span").eq(i).addClass("on");	
}

$("#img").on('swipeLeft', next)
$("#img").on('swipeRight', function(){
	$("#img img").last().prependTo($("#img"));
	$("#img").css("left", -wd+'px');
	$("#img").animate({
		left: "0px"
	}, 800);
	i--;
	if(i<0){
		i=$("#img img").length-1
	};
	$("#button span").removeClass("on");
	$("#button span").eq(i).addClass("on");
})
var timer = setInterval(next, 3000);
$("#banner").on('touchmove',function(){
	clearInterval(timer);
})
$("#banner").on('touchend',function(){
	timer = setInterval(next, 3000);
})


//滚动条滚动
$(window).scrollTop(0)
var yy = hg-50
$(window).on('scroll',function(e){
	
	var y = parseInt($(window).scrollTop()) ;
	if(y >= 15 && !$(".top-head").hasClass('move')){
		$(".top-head").addClass('move')
		$(".banner-input").addClass('move_input')
	}else if(y < 15 && $(".top-head").hasClass('move'))	{
		$(".top-head").removeClass('move')
		$(".banner-input").removeClass('move_input')
	}
	
	if(y >= yy && !$(".query_box").hasClass('query_move')){
		$(".query_box").addClass('query_move')
	}else if(y < yy && $(".query_box").hasClass('query_move')){
		$(".query_box").removeClass('query_move')
	}
})

//下拉菜单
$(".query_block").on('touchstart',function(){
	$(window).scrollTop(yy)
	if(!$(this).find($('.text')).hasClass('text_down')){
		var index = $(this).index()
		$(".query_block").find($('.text')).removeClass('text_down')
		$(".query_block").find($('.icon')).removeClass('icon_down')
		$(this).find($('.text')).addClass('text_down')
		$(this).find($('.icon')).addClass('icon_down')
		$('.down_box').hide().eq(index).show()
	}else if($(this).find($('.text')).hasClass('text_down')){
		var index = $(this).index()
		$(this).find($('.text')).removeClass('text_down')
		$(this).find($('.icon')).removeClass('icon_down')
		$('.down_box').eq(index).hide()
	}	
})
$(".query_price").on('touchstart',function(){
	$(window).scrollTop(yy)
	if($(this).hasClass('active-down')){
        $(this).removeClass('active-down').addClass('active-up');
   	}else if($(this).hasClass('active-up')){
        $(this).removeClass('active-up');
    }else{
  	    $(this).addClass('active-down');
    }
})

$(".mask").on('touchmove',function(e){
	e.preventDefault()
	e.stopPropagation()
})
$(".ares_list").on('touchstart',function(){
	if(!$(this).hasClass('active')){
        $(".ares_list").removeClass('active');
        $(this).addClass('active')
   	}
})
//地区下拉
$(".area_list").on('touchstart',function(){
	if(!$(this).hasClass('active')){
        $(".area_list").removeClass('active');
        $(this).addClass('active')
   	}
})
$(".area_down_area").on('touchstart',function(){
	$(".mask").off('touchmove',function(e){
		e.preventDefault()
		e.stopPropagation()
	})
})
$(".area_down_area").on('touchend',function(){
	$(".mask").on('touchmove',function(e){
		e.preventDefault()
		e.stopPropagation()
	})
})
$('.project_list').on('touchstart',function(){
	$(this).parent().parent().parent().parent().hide()
	var index = $(this).parent().parent().parent().parent().index()
	console.log(index)
	$(".query_block").eq(0).find($('.text')).removeClass('text_down')
	$(".query_block").eq(0).find($('.icon')).removeClass('icon_down')
})
//搜索栏
$(".banner-input").on('touchstart',function(){
	$(".input_out").show()
})
$(".input_out_word").on('touchstart',function(){
	$(".input_out").hide()
})
$(".input_out").on('touchmove',function(e){
	e.preventDefault()
})
//回顶端
$('.move_top').on('touchstart',function(){
	$(window).scrollTop(0)
})