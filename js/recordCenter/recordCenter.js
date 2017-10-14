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