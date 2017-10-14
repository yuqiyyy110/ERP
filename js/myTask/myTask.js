$(function(){
	//时间控件
	$("#demo1").on("click", function(){
		laydate.skin('molv');//切换皮肤，请查看skins下面皮肤库
		laydate({elem: '#demo1'});//绑定元素
	});
	$("#demo2").on("click", function(){
		laydate.skin('molv');//切换皮肤，请查看skins下面皮肤库
		laydate({elem: '#demo2'});//绑定元素
	});
	//tab切换
	$('.mytask-title').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.mytask-item li').eq($(this).index()).addClass('active').siblings().removeClass('active');
		if($(this).text()=='已审批'){
			$('.mytask-sqspr').show();
		}else{
			$('.mytask-sqspr').hide();
			$('.ysp-list').show();
		    $('.sqspr-list').hide();
		}
		
	});
	//授权审批人
	$('.mytask-sqspr').click(function(){
		$('.ysp-list').hide();
		$('.sqspr-list').show();
	});
});
