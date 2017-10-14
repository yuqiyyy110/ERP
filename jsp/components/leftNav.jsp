<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">    
	  <link rel="stylesheet" type="text/css" href="./css/leftNav.css">
	  <script src="/record/js/uri.js" type="text/javascript" charset="utf-8"></script>
    <script type="text/javascript" src="/record/js/leftNav.js"></script>
  </head>
  <body>
	<ul id="leftNav" class="nav-content">
		<div id="grxxNav" class="subnav">
		<li id="grxx" class="nav-item active grxx">个人基本信息</li>
		<li id="blaj" class="nav-item blaj">办理案件</li>
		<li id="qtjcyw" class="nav-item qtjcyw">办理其他检察业务</li>
		<li id="jsjd" class="nav-item jsjd">接受监督</li>
		<li id="yjpj" class="nav-item yjpj">业绩评价</li>
		<li id="ryjl" class="nav-item ryjl">荣誉奖励</li>
		<li id="zrzj" class="nav-item zrzj">责任追究</li>
		<li id="ywyx" class="nav-item ywyx">业务研修</li>
		<li id="qtda" class="nav-item qtda">其他档案</li>
		</div>
		<div id="dazxNav" class="subnav">
		<li id="grjbxx" class="nav-item active grxx">个人基本信息</li>
		<li id="blaj" class="nav-item blaj">办理案件</li>
		<li id="qtjcyw" class="nav-item qtjcyw">办理其他检察业务</li>
		<li id="jsjdqk" class="nav-item jsjd">接受监督</li>
		<li id="yjpjqk" class="nav-item yjpj">业绩评价</li>
		<li id="ryjl" class="nav-item ryjl">荣誉奖励</li>
		<li id="zrzjqk" class="nav-item zrzj">责任追究</li>
		<li id="ywyx" class="nav-item ywyx">业务研修</li>
		<li id="qtda" class="nav-item qtda">其他档案</li>
		</div>
		<div id="wdrwNav" class="subnav">
		<li id="tqsp" class="nav-item active tqsp">我提起的审批</li>
		<li id="tqss" class="nav-item tqss">我提起的申诉</li>
		<li id="sprw" class="nav-item sprw">我的审批任务</li>
		<li id="fcrw" class="nav-item fcrw">我的复查任务</li>
		</div>
		<div id="xtglNav" class="subnav">
		<li id="sfdaManage" class="nav-item active grxx">司法档案管理</li>
		<li id="personalQxgl" class="nav-item blaj">个人权限管理</li>
		<li id="jsqxManage" class="nav-item qtjcyw">角色权限管理</li>
		<li id="dlxxManage" class="nav-item jsjd">登陆信息管理</li>
		<li id="xtrzManage" class="nav-item yjpj">系统日志管理</li>
		</div>
	</ul>
  </body>
</html>
