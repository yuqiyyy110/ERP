$(function() {
	$(".tab-item").on('click', function(){
		$("#headerNav li").removeClass("active");
		$(this).addClass("active");
		module = this.id;
		if(module == 'grxx'){
			$(".subnav").hide();
			$("#grxxNav").show();
			$("#content").load(uri.personalInfo);
		} else if(module == "dazx"){
			$(".subnav").hide();
			$("#dazxNav").show();
		} else if (module == "wdrw") {
			$(".subnav").hide();
			$("#wdrwNav").show();
			$("#content").load(uri.myApproval);
		} else if (module == "xtgl") {
			$(".subnav").hide();
			$("#xtglNav").show();
			$("#content").load(uri.sfdaManage);
		}
	})
})