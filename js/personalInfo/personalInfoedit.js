$(function(){
	$("#demo").on("click", function(){
		laydate.skin('molv');//切换皮肤，请查看skins下面皮肤库
		laydate({elem: '#demo'});//绑定元素
	});
	$("#save").on("click", function(){
		$("#content").load(uri.personalInfo);
	});
	$("#submit").on("click", function(){
		$("#content").load(uri.personalInfo);
	});
	$("#cancel").on("click", function(){
		$("#content").load(uri.personalInfo);
	});
})
