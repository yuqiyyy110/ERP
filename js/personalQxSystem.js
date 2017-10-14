$(function() {
	let sum = $('#innerBox').children().length
	$('#innerBox').width(sum * 270)
	$('.resetPassword').click(function() {
		alertPop("恢复初始密码", document.getElementById("resetPasswordBox"));
		$('#resetPasswordBox').show();
	})
	$('.addSfda').click(function() {
		alertPop("恢复初始密码", document.getElementById("addSfda"));
		$('#addSfda').show();
	})
	simulateInit();
	//时间控件
	$("#demo1").on("click", function(){
		laydate.skin('molv');//切换皮肤，请查看skins下面皮肤库
		laydate({elem: '#demo1'});//绑定元素
	});
	$("#demo2").on("click", function(){
		laydate.skin('molv');//切换皮肤，请查看skins下面皮肤库
		laydate({elem: '#demo2'});//绑定元素
	});
})
