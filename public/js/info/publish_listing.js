$('.icon-back').eq(0).on('touchstart',function(){
	history.back()
})

$('.cells').on('swipeLeft', function(){
	$(this).animate({
		right : "65px"
	}, 500)
})
$('.cells').on('swipeRight', function(){
	$(this).animate({
		right : "0px"
	}, 500)
})
$('.cell_delete').on('touchstart',function(){
	$(this).parent().remove()
})
