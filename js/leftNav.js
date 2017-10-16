$(function() {
	if(module == "grxx") {
		$("#content").load(uri.personalInfo);
	}
	$(".nav-item").on('click', function() {
		$("#leftNav li").removeClass("active");
		$(this).addClass("active");
		switch(this.id) {
			case "grxx":
				$("#content").load(uri.personalInfo);
				break;
			case "blaj":
				$("#content").load(uri.dealCase);
				break;
			case "qtjcyw":
				$("#content").load(uri.dealCase);
				break;
			case "jsjd":
				$("#content").load(uri.jsjd);
				break;
			case "yjpj":
				$("#content").load(uri.yjpj);
				break;
			case "ryjl":
				$("#content").load(uri.ryjl);
				break;
			case "zrzj":
				$("#content").load(uri.zrzj);
				break;
			case "ywyx":
				$("#content").load(uri.ywyx);
				break;
			case "qtda":
				$("#content").load(uri.qtda);
				break;
				//我的任务
			case "tqsp":
				$("#content").load(uri.myApproval);
				break;
			case "tqss":
				$("#content").load(uri.myAppeal);
				break;
			case "sprw":
				$("#content").load(uri.myApprovalTask);
				break;
			case "fcrw":
				$("#content").load(uri.myAppealTask);
				break;
				// 系统管理
			case "sfdaManage":
				$("#content").load(uri.sfdaManage);
				break;
			case "personalQxgl":
				$("#content").load(uri.personalQxgl);
				break;
			case "jsqxManage":
				$("#content").load(uri.jsqxManage);
				break;
			case "dlxxManage":
				$("#content").load(uri.dlxxManage);
				break;
				//司法档案
			case "grjbxx":
				$("#content").load(uri.grjbxx);
				break;
			case "jsjdqk":
				$("#content").load(uri.jsjdqk);
				break;
			case "yjpjqk":
				$("#content").load(uri.yjpjqk);
				break;
			case "zrzjqk":
				$("#content").load(uri.zrzjqk);
				break;
		}
	})
})