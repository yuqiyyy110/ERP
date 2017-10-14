$(function() {
	$(".edit").on("click", function(){
		$("#content").load(uri.dealElseOperation);
	});
	$("#begin").on("click", function(){
		laydate.skin('molv');//切换皮肤，请查看skins下面皮肤库
		laydate({elem: '#begin'});//绑定元素
	});
	$("#end").on("click", function(){
		laydate.skin('molv');//切换皮肤，请查看skins下面皮肤库
		laydate({elem: '#end'});//绑定元素
	});
	$(".tab li").on("click",function(){
		var _this = $(this);
		_this.addClass("active").siblings().removeClass("active")
	});
	$(".toolsbar-btns a").on("click",function(){
		var _this = $(this);
		var _index = $(this).index();
		_this.addClass("active").siblings().removeClass("active");
		$(".toolsbar-content > div").eq(_index).show().siblings().hide();
	});
})