$('.icon-back').eq(0).on('touchstart',function(){
	history.back()
})
$('.login_box').on('touchstart',function(){
	$('.mast').show()
})
$('.yesno').on('touchstart',function(){
	location.href = '../../login_information/login.html'
})
