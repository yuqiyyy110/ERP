<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <link rel="stylesheet" type="text/css" href="/record/css/grjbxx.css" />
        <link rel="stylesheet" type="text/css" href="/record/js/plug/ztree/css/zTreeStyle/zTreeStyle.css" />
        <script src="/record/js/plug/ztree/js/jquery.ztree.core.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="/record/js/plug/ztree/js/jquery.ztree.excheck.min.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript" src="/record/js/treeData.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript" src="/record/js/recordCenter/recordCenter.js" type="text/javascript" charset="utf-8"></script>
    </head>
    <body>
    	<div class="contLeft">
	  		<div class="search">
	  			<input type="text" placeholder="请输入人员名称"/>
	  			<span></span>
	  		</div>
	  		<div class="body">
				<ul id="zzjgTree" class="ztree ry"></ul>
			</div>
	  	</div>
	  	<div class="contRight">
	  		<div class="mytask-tab">
				<div class="mytask-option">
					<span class="mytask-title active">干警司法档案</span>
					<span class="mytask-title">干警信息填录</span>
					<span class="mytask-title">档案统计查询</span>
					<span class="mytask-title">档案一键导出</span>
				</div>
				<div class="mytask-content">
					<ul class="mytask-item">
						<li class="active">
							干警司法档案
					    </li>
					    <li>
							干警信息填录
					    </li>
					    <li>
							档案统计查询
					    </li>
					    <li>
							档案一键导出
					    </li>
					</ul>
				</div>
			</div>
	  	</div>
 	</body>
</html>