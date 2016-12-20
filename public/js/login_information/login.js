$('.icon-back').eq(0).on('touchstart',function(){
	location.href = '../../info/nologin.html'
})
$(document).on('input',function(){
	if(!$('.form-cell-input').eq(0).val() == '' && !$('.form-cell-input').eq(1).val() == ''){
		$(".login").css('background','#EA5404')
		$(".login").on('touchstart',function(){
			location.href = '../../info/after_landing.html'
		})
	}else{
		$(".login").css('background','#C7C7C7')
	}
})
$('.left').on('touchstart',function(){
	location.href = '../../login_information/registered.html'
})
$('.right').on('touchstart',function(){
	location.href = '../../login_information/forget_passward.html'
})
