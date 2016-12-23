$(".tab_bar-cell").on('touchstart',function(){
	$(".tab_bar-cell").removeClass('active');
	$(this).addClass('active');
	var index = $(this).index();
	$('.info').hide();
	$('.info').eq(index).show()
})