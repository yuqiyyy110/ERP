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
		<link rel="stylesheet" type="text/css" href="/record/css/dlxxManage.css">
		<link rel="stylesheet" type="text/css" href="/record/js/plug/ztree/css/zTreeStyle/zTreeStyle.css" />
		<script type="text/javascript" src="/record/js/utils/util.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript" src="/record/js/personalQxSystem.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript" src="/record/js/utils/jquery.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="/record/js/plug/ztree/js/jquery.ztree.core.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="/record/js/plug/ztree/js/jquery.ztree.excheck.min.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript" src="/record/js/treeData.js" type="text/javascript" charset="utf-8"></script>
  </head>
  <body>
  	<!--<div class="contLeft">
  		<div class="search">
  			<input type="text" placeholder="请输入人员名称"/>
  			<span></span>
  		</div>
  		<div class="body">
			<ul id="zzjgTree" class="ztree ry"></ul>
		</div>
  	</div>-->
  	<div class="contRight">
  		<div class="contBox">
  			<dl>
  				<dt class="textRight">
  					用户名：
  				</dt>
  				<dt>
  					<input />
  				</dt>
  				<dt></dt>
  			</dl>
  			<dl>
  				<dt class="textRight">
  					密码：
  				</dt>
  				<dt>
  					<input type="password" />
  				</dt>
  				<dt>
  					<span class="resetPassword">恢复初始密码</span>
  				</dt>
  			</dl>
  		</div>
  		<div id="resetPasswordBox">
  			<div class="info">您确定恢复初始密码？</div>
  			<div class="btnBox">
  				<span id="cancel">取消</span>
  				<span>确定</span>
  			</div>
  		</div>
  	</div>
  	<script type="text/javascript">
		setPage("dlxxgl");
	</script>
  </body>
</html>
