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
		<link rel="stylesheet" type="text/css" href="/record/css/sfdaManage.css">
		<link rel="stylesheet" type="text/css" href="/record/plugin/calendar/js/need/laydate.css">
		<script type="text/javascript" src="/record/js/utils/util.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript" src="/record/js/personalQxSystem.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript" src="/record/js/utils/jquery.min.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript" src="/record/plugin/calendar/js/laydate.js"></script>
  </head>
  <body>
  	<table border="" cellspacing="" cellpadding="">
		<tr>
			<th>序号</th>
			<th>档案名称</th>
			<th>档案时间范围</th>
			<th>归档状态</th>
			<th>开启状态</th>
			<th>操作</th>
		</tr>
		<tr>
			<td>01</td>
			<td>2017年度档案</td>
			<td>2017年1月1日至2017年12月31日</td>
			<td>未归档</td>
			<td>
				<div class="slipRadio">
					<input name="release" class="release" type="checkbox"/>
					<label>
					</label>
				</div>
			</td>
			<td>
				<a href="#">编辑</a>&nbsp;&nbsp;
				<a href="#">查看</a>&nbsp;&nbsp;
				<a href="#">删除</a>&nbsp;&nbsp;
				<a href="#">归档</a>
			</td>
		</tr>
		<tr>
			<td>02</td>
			<td>2016年度档案</td>
			<td>2016年1月1日至2016年12月31日</td>
			<td>已归档</td>
			<td>
				<div class="slipRadio">
					<input name="release" class="release" type="checkbox"/>
					<label>
					</label>
				</div>
			</td>
			<td>
				<a href="#">查看</a>
			</td>
		</tr>
	</table>
	<div class="addSfda">新建司法档案</div>
	<div id="addSfda">
		<div class="contBox">
			<dl>
				<dt class="title">档案周期：</dt>
				<dt>
					<div class="h30"><input type="radio" value="年度" /></div>
					<div class="h30"><input type="radio" value="季度" /></div>
					<div class="h30"><input type="radio" value="其他" /></div>
				</dt>
			</dl>
			<dl>
				<dt class="title">档案名称：</dt>
				<dt>
					<input placeholder="请输入档案名称" />
				</dt>
			</dl>
			<dl>
				<dt class="title" style="vertical-align: middle;">档案时间范围：</dt>
				<dt class="dataBox">
					<input class="laydate-icon edit-main mytask-date" id="demo1" value="1972-10-08">
					<span>至</span>
					<input class="laydate-icon edit-main mytask-date" id="demo2" value="1972-10-08">
				</dt>
			</dl>
		</div>
		<div class="btnBox">
			<span id="cancel">取消</span>
			<span>确定</span>
		</div>
	</div>
  </body>
</html>
