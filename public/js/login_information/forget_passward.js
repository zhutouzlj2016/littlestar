$('.icon-back').eq(0).on('touchstart',function(){
	history.back()
})
var $onoff = true
$('.form-cell-button').on('touchstart',function(){
	if($onoff == true){
		$onoff = false
		var $i = 60
		var time = setInterval(function(){
			if($i > 0){
			$i--
			$('.form-cell-button').val(+$i+'s后重新发送')
			$('.form-cell-button').css('background','#C7C7C7')
			}else{
				$('.form-cell-button').text('获取验证码')
				$('.form-cell-button').css('background','#EA5404')
				$onoff = true
				clearInterval(time)
			}	
		},1000)
	}
})


$(document).on('input',function(){
	var $input = $('.form-cell-input')
	if(!$input.eq(0).val() == '' && !$input.eq(1).val() == '' && !$input.eq(2).val() == '' && !$input.eq(3).val() == ''){
		$(".login").css('background','#EA5404')
		$(".login").on('touchstart',function(){
			location.href = '../../login_information/login.html'
		})
	}else{
		$(".login").css('background','#C7C7C7')
	}
})