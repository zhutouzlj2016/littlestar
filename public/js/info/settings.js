var iconBack = document.getElementsByClassName('icon-back')
iconBack[0].addEventListener('touchstart',function(){
	history.back()
})
var infoCell = document.getElementsByClassName('info_cell')
infoCell[1].addEventListener('touchstart',function(){
	location.href = '../info/settings_about.html'
})
var infoCellFoot = document.getElementsByClassName('info-cell-foot')
infoCellFoot[0].addEventListener('touchstart',function(){
	location.href = '../info/nologin.html'
})

$(".info_cell").eq(2).on('touchstart',function(){
	$('.mast').show()
})
$('.no').on('touchstart',function(){
	$('.mast').hide()
})
$('.yes').on('touchstart',function(){
	$('.mast').hide()
	$('.hc').text('0M')
})