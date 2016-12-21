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