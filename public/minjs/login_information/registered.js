$(".icon-back").eq(0).on("touchstart",function(){history.back()});var $onoff=!0;$(".form-cell-button").on("touchstart",function(){if(1==$onoff){$onoff=!1;var o=60,t=setInterval(function(){o>0?(o--,$(".form-cell-button").val(+o+"s后重新发送"),$(".form-cell-button").css("background","#C7C7C7")):($(".form-cell-button").text("获取验证码"),$(".form-cell-button").css("background","#EA5404"),$onoff=!0,clearInterval(t))},1e3)}}),$(".form-cell5").on("touchstart",function(o){var t=$(".form-cell-input");o.preventDefault(),t.hasClass("active")?($(".name").hide(),t.removeClass("active")):($(".name").show(),t.addClass("active")),""==!t.eq(0).val()&&""==!t.eq(1).val()&&""==!t.eq(2).val()&&""==!t.eq(3).val()&&""==!t.eq(4).val()?($(".login").css("background","#EA5404"),$(".login").on("touchstart",function(){location.href="../../login_information/registered_agents.html"})):$(".login").css("background","#C7C7C7")}),$(".identity").on("touchstart",function(){var o=$(this).text();$(".form-cell-input").eq(4).val(o)}),$(document).on("input",function(){var o=$(".form-cell-input");""==!o.eq(0).val()&&""==!o.eq(1).val()&&""==!o.eq(2).val()&&""==!o.eq(3).val()&&""==!o.eq(4).val()?($(".login").css("background","#EA5404"),$(".login").on("touchstart",function(){location.href="../../login_information/registered_agents.html"})):$(".login").css("background","#C7C7C7")});