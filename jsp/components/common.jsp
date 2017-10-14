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
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<link rel="stylesheet" type="text/css" href="/record/plugin/calendar/js/need/laydate.css">
    <script type="text/javascript" src="/record/js/utils/jquery.min.js"></script>
    <script type="text/javascript" src="/record/js/utils/util.js"></script>
    <script type="text/javascript" src="/record/plugin/calendar/js/laydate.js"></script>
  </head>
  <body>
  </body>
</html>
