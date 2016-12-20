$('.icon-back' ).on('tap', function(){
	$('.mask' ).show();
	$('.cancel-alert' ).show();
	$('.cancel' ).on('tap', function(){
		$('.mask' ).hide();
		$('.cancel-alert' ).hide();
	});
	$('.sure' ).on('tap', function(){
		history.back();
	})
});
$('.header-publish' ).on('tap', function(){
	$('.mask' ).css('background','#A7A7AA').show();
	$('.publish-alert' ).show();

})
$('.confirm' ).on('tap', function(){
	location.href = '../publish/publish.html'
})