var viewUri = "./jsp/views/",
    componentUri = "./jsp/components/";
    var viewUriGrxx = viewUri + "personalInfomation/";
    var viewUriDazx = viewUri + "recordCenter/";
var uri = {
	/************个人信息************/
	"personalInfo":viewUriGrxx+"personalInfo/personalInfo.jsp",
	"personalInfoedit":viewUriGrxx+"personalInfo/personalInfoedit.jsp",
	"dealCase":viewUriGrxx+"dealCase/dealCase.jsp",
	"performanceEvaluation":viewUriGrxx+"dealCase/performanceEvaluation.jsp",
	"receptionSupervisionSituation":viewUriGrxx+"dealCase/receptionSupervisionSituation.jsp",
	"dealElseOperation":viewUriGrxx+"dealElseOperation/dealElseOperation.jsp",
	"jsjd":viewUriGrxx+"jsjd/jsjd.jsp",//接受监督
	"qtda":viewUriGrxx+"qtda/qtda.jsp",//其他档案
	"ryjl":viewUriGrxx+"ryjl/ryjl.jsp",//荣誉奖励
	"yjpj":viewUriGrxx+"yjpj/yjpj.jsp",//业绩评价
	"ywyx":viewUriGrxx+"ywyx/ywyx.jsp",//业务研修
	"zrzj":viewUriGrxx+"zrzj/zrzj.jsp",//责任追究
	
	
	/************档案中心************/
	"dadc":viewUriDazx+"dadc/dadc.jsp",
	"datjcx":viewUriDazx+"datjcx/datjcx.jsp",
	"grjbxx":viewUriDazx+"grjbxx/grjbxx.jsp",
	"jsjdqk":viewUriDazx+"jsjdqk/jsjdqk.jsp",
	"yjpjqk":viewUriDazx+"yjpj/yjpj.jsp",
	"zrzjqk":viewUriDazx+"zrzj/zrzj.jsp",
	
	
	/************我的任务************/
	"myAppeal":viewUri+"myTask/myAppeal.jsp",
	"myAppealTask":viewUri+"myTask/myAppealTask.jsp",
	"myApproval":viewUri+"myTask/myApproval.jsp",
	"myApprovalTask":viewUri+"myTask/myApprovalTask.jsp",
	
	
	/************系统管理************/
	"sfdaManage":viewUri+"systemManage/sfdaManage.jsp",
	"personalQxgl":viewUri+"systemManage/personalQxManage.jsp",
	"jsqxManage":viewUri+"systemManage/jsqxManage.jsp",
	"dlxxManage":viewUri+"systemManage/dlxxManage.jsp"
}