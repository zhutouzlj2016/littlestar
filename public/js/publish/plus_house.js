function testVal(){
	if($('.input01').val() != '' && $('.input02').val() != ''){
		$('.btn' ).on('tap', function(){
			$('.mask' ).show();
			$('.publish-alert' ).show();
		})
	}
	$('.confirm' ).on('tap', function(){
		location.href = '../publish/publish_house.html';
	})

}