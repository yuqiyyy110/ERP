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
	  <link rel="stylesheet" type="text/css" href="/record/css/header.css">
    <script type="text/javascript" src="/record/js/header.js"></script>
  </head>
  <body>
      <div class="header">
        <div class="header-logo"></div>
        <div class="header-right">
          <div class="right-top">
            <span>退出</span>
            <span>修改密码</span>
            <span>您好，王某某</span>
            <span>数据统计截止：2017年09月05日</span>
          </div>
          <ul id="headerNav" class="right-tab">
            <li id="xtgl" class="tab-item">系统管理</li>
            <li id="nmly" class="tab-item">匿名留言</li>
            <li id="wdrw" class="tab-item">我的任务</li>
            <li id="dazx" class="tab-item">档案中心</li>
            <li id="grxx" class="tab-item active">个人信息</li>
          </ul>
          <div></div>
        </div>
      </div>
  </body>
</html>
