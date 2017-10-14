<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html>
    <head>
        <base href="<%=basePath%>">
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<link rel="stylesheet" type="text/css" href="/record/css/myTask.css">
    </head>
    <body>
    	<div class="wrap">
			<div class="baseinfo-head">
				<span class="baseinfo-title">我提起的申诉列表</span>
			</div>
			<table border="" cellspacing="" cellpadding="">
				<tr>
					<th>序号</th>
					<th>审批内容</th>
					<th>提起审批日期</th>
					<th>当前审批人</th>
					<th>操作</th>
				</tr>
				<tr>
					<td>1</td>
					<td>接受监督情况-接受公诉监督情况-新增记录</td>
					<td>2017-10-12</td>
					<td>王某</td>
					<td><a href="#">查看</a>&nbsp;&nbsp;<a href="#">撤回</a></td>
				</tr>
				<tr>
					<td>2</td>
					<td>接受监督情况-接受公诉监督情况-修改记录</td>
					<td>2017-10-8</td>
					<td>王某</td>
					<td><a href="#">查看</a></a>&nbsp;&nbsp;<a href="#">撤回</a></td>
				</tr>
				<tr>
					<td>3</td>
					<td>接受监督情况-接受公诉监督情况删除记录</td>
					<td>2017-9-30</td>
					<td>王某</td>
					<td><a href="#">查看</a>&nbsp;&nbsp;<a href="#">撤回</a></td>
				</tr>
			</table>
		</div>
 	</body>
</html>