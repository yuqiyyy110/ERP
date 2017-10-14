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
		<link rel="stylesheet" href="/record/css/reset.css" />
		<link rel="stylesheet" href="/record/css/common.css" />
		<link rel="stylesheet" type="text/css" href="/record/plugin/calendar/js/need/laydate.css">
		<link rel="stylesheet" type="text/css" href="/record/css/myTask.css">
		<script type="text/javascript" src="/record/js/utils/jquery.min.js"></script>
		<script type="text/javascript" src="/record/plugin/calendar/js/laydate.js"></script>
		<script type="text/javascript" src="/record/js/myTask/myTask.js"></script>
    </head>
    <body>
    	<div class="wrap">
    		<div class="baseinfo-main">
    			<div class="mytask-wrap">
    				<ul class="common-formInfo">
						<li>
							<div class="mytask-area">
								<span class="info-title">
									提起审批人:
								</span>
								<input type="" name="" id="" value="" class="edit-main mytask-input" />
							</div>
							<div class="mytask-area">
								<span class="info-title">
									审批结论:
								</span>
								<select name="" class="edit-main mytask-select">
									<option value="">汉族</option>
									<option value="">满族</option>
								</select>
							</div>
							<div class="mytask-area">
								<span class="info-title">
									审批日期:
								</span>
								<input class="laydate-icon edit-main mytask-date" id="demo1" value="1972-10-08">
							</div>
							<div class="mytask-area">
								<span  class=" info-title mytast-z">至</span>
								<input class="laydate-icon edit-main mytask-date" id="demo2" value="1972-10-08">
							</div>
						</li>
					</ul>
					<button class="mytask-query">查询</button>
    		    </div>
			</div>
			<div class="mytask-tab">
				<div class="mytask-option">
					<span class="mytask-title active">待审批</span>
					<span class="mytask-title">已审批</span>
					<button class="mytask-sqspr">授权审批人</button>
				</div>
				<div class="mytask-content">
					<ul class="mytask-item">
						<li class="active">
							<div class="baseinfo-head">
								<span class="baseinfo-title">我的待审批任务列表</span>
							</div>
							<table>
								<tr>
									<th>序号</th>
									<th>待审批内容</th>
									<th>审批日期</th>
									<th>提起审批人</th>
									<th>审批结论</th>
									<th>操作</th>
								</tr>
								<tr>
									<td>1</td>
									<td>接受监督情况-接受公诉监督情况-新增记录</td>
									<td>2017-10-12</td>
									<td>李某某</td>
									<td><span class="agreen">同意</span></td>
									<td><a href="#">查看</a></td>
								</tr>
								<tr>
									<td>2</td>
									<td>接受监督情况-接受公诉监督情况-修改记录</td>
									<td>2017-10-8</td>
									<td>刘某</td>
									<td><span class="suggestion">意见</span></td>
									<td><a href="#">查看</a></td>
								</tr>
								<tr>
									<td>3</td>
									<td>接受监督情况-接受公诉监督情况删除记录</td>
									<td>2017-9-30</td>
									<td>赵某</td>
									<td><span class="suggestion">意见</span></td>
									<td><a href="#">查看</a></td>
								</tr>
							</table>
						</li>
						<li>
							<div class="baseinfo-head">
								<span class="baseinfo-title">我的已审批任务列表</span>
							</div>
							<table class="ysp-list">
								<tr>
									<th>序号</th>
									<th>待审批内容</th>
									<th>审批日期</th>
									<th>提起审批人</th>
									<th>审批结论</th>
									<th>操作</th>
								</tr>
								<tr>
									<td>1</td>
									<td>接受监督情况-接受公诉监督情况-新增记录</td>
									<td>2017-10-12</td>
									<td>李某某</td>
									<td><span class="agreen">同意</span></td>
									<td><a href="#">查看</a></td>
								</tr>
								<tr>
									<td>2</td>
									<td>接受监督情况-接受公诉监督情况-修改记录</td>
									<td>2017-10-8</td>
									<td>刘某</td>
									<td><span class="agreen">同意</span></td>
									<td><a href="#">查看</a></td>
								</tr>
								<tr>
									<td>3</td>
									<td>接受监督情况-接受公诉监督情况删除记录</td>
									<td>2017-9-30</td>
									<td>赵某</td>
									<td><span class="suggestion">意见</span></td>
									<td><a href="#">查看</a></td>
								</tr>
							</table>
							<table class="sqspr-list">
								<tr>
									<th>我的审批权限</th>
									<th>授权审批人</th>
									<th>操作</th>
								</tr>
								<tr>
									<td>个人基本信息审批权限</td>
									<td>孙某，郑某某</td>
									<td><a href="#">新增</a>&nbsp;&nbsp;<a href="#">删除</a></td>
								</tr>
								<tr>
									<td>办理案件情况审批权限</td>
									<td>孙某，郑某某</td>
									<td><a href="#">新增</a>&nbsp;&nbsp;<a href="#">删除</a></td>
								</tr>
							</table>
						</li>
					</ul>
				</div>
			</div>
		</div>
 	</body>
</html>