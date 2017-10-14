<!-- 业务研修 -->
<div class="deal-case">
	<a class="edit"></a>
	<div class="search-area">

	</div>
	<div class="tab clearfix">
		<ul>
			<li class="active">学习情况</li>
			<li>业务培训情况</li>
			<li>理论研究情况</li>
		</ul>
	</div>
	<div class="tab-content">
		<div class="sun-top">
			<p class="title">学习情况</p>
			<button class="add-case">新增学习情况</button>
		</div>
		<div class="table">
			<table>
				<thead>
					<tr>
						<th>序号</th>
						<th>项目名称</th>
						<th>是否脱产</th>
						<th>时间</th>
						<th>地点</th>
						<th>组织部门</th>
						<th>审批部门</th>
						<th>主要内容</th>
						<th>主要收获</th>
						<th>主要成果</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td>
							<a>编辑</a>
							<a>查看</a>
							<a>审批</a>
							<a>删除</a>
						</td>
					</tr>
					<tr>
						<td>2</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>
<div id="subContent">
	<div class="pop-content">
		<div>
			<span>项目名称：</span>
			<input type="text" id="" value="" />
		</div>
		<div>
			<span>是否脱产：</span>
			<input type="radio" name="radio1" id="" value="是" />
			<input type="radio" name="radio1" id="" value="否" />
		</div>
		<div>
			<span>起始时间：</span>
		</div>
		<div>
			<span>结束时间：</span>
		</div>
		<div>
			<span>地点：</span>
			<input type="text" id="" value="" />
		</div>
		<div class="ver">
			<span>组织部门：</span>
			<input type="radio" name="radio" id="" value="个人" />
			<input type="radio" name="radio" id="" value="本院部门" />
			<input type="radio" name="radio" id="" value="其他单位" />
		</div>
		<div>
			<span>审批部门：</span>
			<select name="">
				<option value="本院部门列表">本院部门列表</option>
			</select>
		</div>
		<div>
			<span>主要内容：</span>
			<textarea name="" rows="" cols=""></textarea>
		</div>
		<div>
			<span>主要收获：</span>
			<textarea name="" rows="" cols=""></textarea>
		</div>
		<div>
			<span>主要成果：</span>
			<textarea name="" rows="" cols=""></textarea>
		</div>
		<div>
			<span>附件列表：</span>
			<textarea name="" rows="" cols=""></textarea>
		</div>
	</div>
	<div class="footer-btn">
		<button id="save" class="middle-btn">暂存</button>
		<button id="submit" class="middle-btn">提交审核</button>
	</div>
</div>
<link rel="stylesheet" type="text/css" href="./css/ywyx.css" />
<script type="text/javascript">
	$(function(){
		simulateInit();
	})
	$(".add-case").on('click', function() {
		alertPop("新增学习情况", document.getElementById("subContent"));
		$("#subContent").show();
	})
	$(".close").on('click', function(){
		$("#pop").hide();
	    $(".pop-over").remove();
	})
	$("#submit").on('click', function(){
		$("#pop").hide();
	    $(".pop-over").remove();
	})
	$("#save").on('click', function(){
		$("#pop").hide();
	    $(".pop-over").remove();
	})
</script>