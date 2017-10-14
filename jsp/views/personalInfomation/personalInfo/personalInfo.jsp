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
		<link rel="stylesheet" href="/record/css/reset.css" />
		<link rel="stylesheet" type="text/css" href="/record/css/personalInfo.css">
		<script type="text/javascript" src="/record/js/utils/jquery.min.js"></script>
		<script type="text/javascript" src="/record/js/personalInfo/personalInfo.js"></script>
	</head>

	<body>
		<div class="wrap">
			<div class="baseinfo">
				<div class="baseinfo-head">
					<span class="baseinfo-title">个人基本信息</span>
					<span class="edit"></span>
				</div>
				<div class="baseinfo-main">
					<div class="baseinfo-left">
					</div>
					<div class="baseinfo-right">
						<ul>
							<li>
								<span class="info-title">
									姓名:
								</span>
								<span class="info-main">
									王某某
								</span>
							</li>
							<li>
								<span class="info-title">
									民族:
								</span>
								<span class="info-main">
									汉族
								</span>
							</li>
							<li>
								<span class="info-title">
									性别:
								</span>
								<span class="info-main">
									男
								</span>
							</li>
							<li>
								<span class="info-title">
									政治面貌:
								</span>
								<span class="info-main">
									党员
								</span>
							</li>
							<li>
								<span class="info-title">
									出生年月:
								</span>
								<span class="info-main">
									1972-10-08
								</span>
							</li>
							<li>
								<span class="info-title">
									联系方式:
								</span>
								<span class="info-main">
									13862848268
								</span>
							</li>
							<li class="maxwidth">
								<span class="info-title">
									学历:
								</span>
								<span class="info-main">
									浙江大学
								</span>
							</li>
							<li class="maxwidth">
								<span class="info-title">
									学位:
								</span>
								<span class="info-main">
									本科
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="jobinfo">
				<div class="jobinfo-head">
					<span class="baseinfo-title">职务基本信息</span>
				</div>
				<div class="jobinfo-main">
					<ul>
						<li>
							<span class="info-title">部门:</span>
							<span class="info-main">xxx司法部门</span>
						</li>
						<li>
							<span class="info-title">部门:</span>
							<span class="info-main">科长</span>
						</li>
						<li>
							<span class="info-title">身份:</span>
							<span class="info-main">xxx</span>
						</li>
						<div class="clear"></div>
					</ul>
				</div>
			</div>
			<div class="positioninfo">
				<div class="baseinfo-head">
					<span class="baseinfo-title">岗位信息</span>
				</div>
				<div class="positioninfo-main">
					<ul>
						<li>
							<span class="postioninfo-content">
								2010年5月至2012年7月   最高人民检察院   公诉一厅   厅长
							</span>
							<span class="duty">岗位职责</span>
						</li>
						<li>
							<span class="postioninfo-content">
								2006年1月至2010年5月 北京市人民检察院 公诉一处 处长
							</span>
							<span class="duty">岗位职责</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="educationinfo">
				<div class="baseinfo-head">
					<span class="baseinfo-title">学历信息</span>
				</div>
				<div class="educationinfo-main">
					<ul>
						<li>
							<span class="educationinfo-content">
								2001年1月至2004年5月  浙江大学 、本科学历、环境与土木工程专业   获学士学位
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</body>

</html>