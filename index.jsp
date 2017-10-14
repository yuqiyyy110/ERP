<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>

	<head>
		<base href="<%=basePath%>">

		<title>档案</title>
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
		<meta http-equiv="description" content="This is my page">
		<jsp:include page="./jsp/components/common.jsp" />
		<link rel="stylesheet" type="text/css" href="./css/reset.css">
		<link rel="stylesheet" type="text/css" href="./css/index.css">
		<link rel="stylesheet" type="text/css" href="./css/common.css">
		<script type="text/javascript" src="/record/js/index.js"></script>
	</head>

	<body>
		<div class="bg">
			<div class="bg-header">
				<jsp:include page="./jsp/components/header.jsp" />
			</div>
			<div class="bg-content">
				<div class="left-nav">
					<jsp:include page="./jsp/components/leftNav.jsp" />
				</div>
				<div class="content" id="content">
				</div>
			</div>
			<div id="pop" class="pop">
    			<div class="pop-header">
    				<p id="popTitle"></p>
    				<span class="close"></span>
    			</div>
    			<div id="popContent">
    			</div>
    		</div>
		</div>
	</body>
</html>