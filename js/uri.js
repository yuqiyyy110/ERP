var viewUri = "./html/views/",
    componentUri = "./html/components/",
    viewUriGrxx = viewUri + "personalInfomation/",
    viewUriDazx = viewUri + "recordCenter/";
var uri = {
	/************布局结构************/
	"header":componentUri+"header.html",
	"leftNav":componentUri+"leftNav.html",
	/************个人信息************/
	"personalInfo":viewUriGrxx+"personalInfo/personalInfo.html",
	"personalInfoedit":viewUriGrxx+"personalInfo/personalInfoedit.html",
	"dealCase":viewUriGrxx+"dealCase/dealCase.html",
	"performanceEvaluation":viewUriGrxx+"dealCase/performanceEvaluation.html",
	"receptionSupervisionSituation":viewUriGrxx+"dealCase/receptionSupervisionSituation.html",
	"dealElseOperation":viewUriGrxx+"dealElseOperation/dealElseOperation.html",
	"jsjd":viewUriGrxx+"jsjd/jsjd.html",//接受监督
	"qtda":viewUriGrxx+"qtda/qtda.html",//其他档案
	"ryjl":viewUriGrxx+"ryjl/ryjl.html",//荣誉奖励
	"yjpj":viewUriGrxx+"yjpj/yjpj.html",//业绩评价
	"ywyx":viewUriGrxx+"ywyx/ywyx.html",//业务研修
	"zrzj":viewUriGrxx+"zrzj/zrzj.html",//责任追究
	
	
	/************档案中心************/
	"dadc":viewUriDazx+"dadc/dadc.html",
	"datjcx":viewUriDazx+"datjcx/datjcx.html",
	"grjbxx":viewUriDazx+"grjbxx/grjbxx.html",
	"jsjdqk":viewUriDazx+"jsjdqk/jsjdqk.html",
	"yjpjqk":viewUriDazx+"yjpj/yjpj.html",
	"zrzjqk":viewUriDazx+"zrzj/zrzj.html",
	
	
	/************我的任务************/
	"myAppeal":viewUri+"myTask/myAppeal.html",
	"myAppealTask":viewUri+"myTask/myAppealTask.html",
	"myApproval":viewUri+"myTask/myApproval.html",
	"myApprovalTask":viewUri+"myTask/myApprovalTask.html",
	
	
	/************系统管理************/
	"sfdaManage":viewUri+"systemManage/sfdaManage.html",
	"personalQxgl":viewUri+"systemManage/personalQxManage.html",
	"jsqxManage":viewUri+"systemManage/jsqxManage.html",
	"dlxxManage":viewUri+"systemManage/dlxxManage.html"
}
var js = {
	"echarts":"plugin/echarts.common.min.js",
	"dealCase":"js/personalInfomation/dealCase.js",
	"dealElseOperation":"js/dealElseOperation.js",
	"personalInfo":"js/personalInfo/personalInfo.js",
	"personalInfoedit":"js/personalInfo/personalInfoedit.js",
	"core":"js/plug/ztree/js/jquery.ztree.core.min.js",
	"excheck":"js/plug/ztree/js/jquery.ztree.excheck.min.js",
	"treeData":"js/treeData.js",
	"recordCenter":"js/recordCenter/recordCenter.js"
}
