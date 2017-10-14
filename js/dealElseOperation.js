$(function() {
	simulateInit();
	$(".add-case").on('click', function(){
        alertPop("新增工作业绩", document.getElementById("subContent"));
        $("#subContent").show();
	})
	$(".close").on('click', function(){
		$("#pop").hide();
	    $(".pop-over").remove();
	})
	$("#submit").on('click', function(){
		$("#pop").hide();
	    $(".pop-over").remove();
	})
	$("#save").on('click', function(){
		$("#pop").hide();
	    $(".pop-over").remove();
	})
	$(".goBack").on('click', function(){
		$("#content").load(uri.dealCase);
	})
})