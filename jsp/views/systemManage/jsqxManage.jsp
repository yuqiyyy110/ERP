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
		<link rel="stylesheet" type="text/css" href="./css/reset.css">
		<link rel="stylesheet" type="text/css" href="./css/index.css">
		<link rel="stylesheet" type="text/css" href="./css/common.css">
		<link rel="stylesheet" type="text/css" href="./css/tabs.css">
		<link rel="stylesheet" type="text/css" href="/record/css/jsqxManage.css">
		<link rel="stylesheet" type="text/css" href="/record/js/plug/ztree/css/zTreeStyle/zTreeStyle.css" />
		<script type="text/javascript" src="/record/js/utils/util.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript" src="/record/js/personalQxSystem.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript" src="/record/js/utils/jquery.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="/record/js/plug/ztree/js/jquery.ztree.core.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="/record/js/plug/ztree/js/jquery.ztree.excheck.min.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript" src="/record/js/treeData.js" type="text/javascript" charset="utf-8"></script>
  </head>
  <body>
  	<div class="contRight">
  		<div id="innerBox">
				<div class="zhjgBox">
					<div class="headPart">角色</div>
					<div class="bodyPart">
						<ul id="roleTree" class="ztree ry"></ul>
					</div>
				</div>
				<div class="zhjgBox">
					<div class="headPart">功能权限</div>
					<div class="bodyPart">
						<ul id="funcTree" class="ztree ry"></ul>
					</div>
				</div>
				<div class="zhjgBox">
					<div class="headPart">审批权限</div>
					<div class="bodyPart">
						<ul id="spqxTree" class="ztree ry"></ul>
					</div>
				</div>
				<div class="zhjgBox">
					<div class="headPart">申诉权限</div>
					<div class="bodyPart">
						<ul id="ssqxTree" class="ztree ry"></ul>
					</div>
				</div>
				<div class="zhjgBox">
					<div class="headPart">复议权限</div>
					<div class="bodyPart">
						<ul id="fcqxTree" class="ztree ry"></ul>
					</div>
				</div>
				<div class="zhjgBox">
					<div class="headPart">数据权限</div>
					<div class="bodyPart">
						<div class="tabs tab2">
								<a class="active">档案数据权限</a>
								<a>案件数据权限</a>
							</div>
							<div class="tabContents tab2C">
								<div class="show">
									<ul id="dasjqxTree" class="ztree ry"></ul>
								</div>
								<div>
									<ul id="ajsjqxTree" class="ztree ry"></ul>
								</div>
							</div>
					</div>
				</div>
			</div>
  	</div>
  	<script type="text/javascript">
		setPage("jsqxgl");
	</script>
  </body>
</html>
