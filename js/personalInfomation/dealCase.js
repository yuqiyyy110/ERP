$(function() {


	$(".edit").on("click", function(){
		$("#content").load(uri.dealElseOperation);
	});
	$("#begin").on("click", function(){
		laydate.skin('molv');//切换皮肤，请查看skins下面皮肤库
		laydate({elem: '#begin'});//绑定元素
	});
	$("#end").on("click", function(){
		laydate.skin('molv');//切换皮肤，请查看skins下面皮肤库
		laydate({elem: '#end'});//绑定元素
	});
	$(".tab li").on("click",function(){
		var _this = $(this);
		_this.addClass("active").siblings().removeClass("active")
	});
	$(".toolsbar-btns a").on("click",function(){
		var _this = $(this);
		var _index = $(this).index();
		_this.addClass("active").siblings().removeClass("active");
		$(".toolsbar-content > div").eq(_index).show().siblings().hide();
	});
	
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('pie1'));
	// 基于准备好的dom，初始化echarts实例
	var myChart2 = echarts.init(document.getElementById('pie2'));
	// 指定图表的配置项和数据
	var option = {
		title: {
			text: '办理数（业务类别）',
			subtext: '纯属虚构',
			x: 'center'
		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient: 'vertical',
			left: 'left',
			data: ['起草立法建议', '制定检察业务指导性，规范性文件', '制法指导性案例', '开展检察业务法律政策调研', '开展案件流程管理，案件质量评查和分析、通报检察业务运营情况', '其他']
		},
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: '55%',
			center: ['50%', '60%'],
			data: [{
					value: 335,
					name: '起草立法建议'
				},
				{
					value: 310,
					name: '制定检察业务指导性，规范性文件'
				},
				{
					value: 234,
					name: '制法指导性案例'
				},
				{
					value: 135,
					name: '开展检察业务法律政策调研'
				},
				{
					value: 312,
					name: '开展案件流程管理，案件质量评查和分析、通报检察业务运营情况'
				},
				{
					value: 1548,
					name: '其他'
				}
			],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		}]
	};
	var option2 = {
		title: {
			text: '办理数（办理形式）',
			subtext: '纯属虚构',
			x: 'center'
		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient: 'vertical',
			left: 'left',
			data: ['个人办理', '组织办理', '指导办理', '参与办理', '审查核实', '签发文书']
		},
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: '55%',
			center: ['50%', '60%'],
			data: [{
					value: 335,
					name: '个人办理'
				},
				{
					value: 310,
					name: '组织办理'
				},
				{
					value: 234,
					name: '指导办理'
				},
				{
					value: 135,
					name: '参与办理'
				},
				{
					value: 423,
					name: '审查核实'
				},
				{
					value: 1548,
					name: '签发文书'
				}
			],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		}]
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
	myChart2.setOption(option2);
})