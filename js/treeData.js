/************************function***************************/

	function indexClick(event, treeId, treeNode){
		if(treeNode != null && treeNode.menu != 0){
			if($("#ywIndexName")[0]){
				$("#ywIndexName")[0].value = treeNode.name;
				$("#ywIndexName").removeAttr('readonly');
			}
			if($("#jcIndexName")[0]){
				$("#jcIndexName")[0].value = treeNode.name;
			}
		}
	}
	
	function showAnalysisReportIcon(treeId, treeNode){
		if(treeNode == null)return false;
		
		if(treeNode.nowCorp != treeNode.corp && treeNode.lx == 0){
			return true;
		}else if(treeNode.lx == 1){
			return true;
		}else{
			return false;
		}
	}
	
	function showIconBYIconAttr(treeId, treeNode){
		if(treeNode == null)return false;
		
		if(treeNode.icon){
			return true;
		}
		
		return false;
	}
	
	function onlyShowReportIcon(treeId, treeNode){
		if(treeNode == null)return false;
		
		if(treeNode.lx == 1){
			return true;
		}
		
		return false;
	}
	
	function onlyShowDim(treeId, treeNode){
		if(treeNode == null)return false;
		
		if(treeNode.lx == 1){
			return true;
		}
		
		return false;
	}
	
	function showIndexIcon(treeId, treeNode){
		if(treeNode == null)return false;
		if(treeNode.menu == 1){
			return true;
		}
		
		return false;
	}
	
	function reportClick(event, treeId, treeNode){
		if(treeNode != null && treeNode.lx != 0){
			if($(".bgDetails"))$(".bgDetails").css({"display":"block"});
		}else{
			if($(".bgDetails"))$(".bgDetails").css({"display":"none"});
		}
	}

	function addIndexClick(event, treeId, treeNode) {
		if(!treeNode.isParent) {
			$('<span class="data"></span>').text(treeNode.name).appendTo(".dragbox");
		}
	};
	
	function indexRightClick(event, treeId, treeNode){
		if(!treeNode)return;
		if (!treeNode && event.target.tagName.toLowerCase() != "button" && $(event.target).parents("a").length == 0) {
			zTree.cancelSelectedNode();
			showRMenu(treeNode.lx, zTreeBeforeDrag(treeId, new Array(treeNode)), event.clientX, event.clientY);
		} else if (treeNode && !treeNode.noR) {
			zTree.selectNode(treeNode);
			showIndexMenu(treeNode, event.clientX, event.clientY);
		}
	}
	
	/**
	 * 展现指标编辑菜单
	 * @param {Object} treeNode
	 * @param {Object} clientX
	 * @param {Object} clientY
	 */
	function showIndexMenu(treeNode, x, y){
		if(treeNode.menu == 0){
			$("#ywmenu").show();
			$("#zbmenu").hide();
			$("#menu_edit").hide();
		}else{
			$("#zbmenu").show();
			$("#ywmenu").hide();
			$("#menu_edit").show();
		}
		
		rMenu.css({"top":y-50+"px", "left":x-19+"px", "display" : "block", "position":"absolute"});

		$("body").bind("mousedown", onBodyMouseDown);
	}
	
	/**
     *
     * 右键菜单
     * @param event 事件对象
     * @param treeId 当前树节点ID
     * @param treeNode 当前树节点对象
     *
     */
	function OnRightClick(event, treeId, treeNode) {
		if(!treeNode)return;
		if (!treeNode && event.target.tagName.toLowerCase() != "button" && $(event.target).parents("a").length == 0) {
			zTree.cancelSelectedNode();
			showRMenu(treeNode.lx, zTreeBeforeDrag(treeId, new Array(treeNode)), event.clientX, event.clientY);
		} else if (treeNode && !treeNode.noR) {
			zTree.selectNode(treeNode);
			showRMenu(treeNode.lx, zTreeBeforeDrag(treeId, new Array(treeNode)), event.clientX, event.clientY);
		}
	}
	
	/**
     *
     * 展示菜单
     * @param type 当前待展示菜单节点类型
     * @param isSelf 当前节点是否属于本单位
     * @param x 当前事件发生X轴偏移量
     * @param y 当前事件发生Y轴偏移量
     *
     */
	function showRMenu(type, isSelf, x, y) {
		
		if(type == 0){
			$("#rMenu").show();
            $("#menu_add").show();
            
            if(isSelf){
            	$("#menu_del").show();
            	$("#menu_addreport").show();
            }else{
            	$("#menu_del").hide();
            	$("#menu_addreport").hide();
            }
            
            $("#menu_showreport").hide();
            $("#menu_editreport").hide();
            $("#menu_delreport").hide();
            $("#menu_copyreport").hide();        
        }else{
            if(isSelf){
            	$("#rMenu").show();
            	$("#menu_showreport").show();
            	$("#menu_editreport").show();
                $("#menu_delreport").show();
                $("#menu_copyreport").show();
            }else{
            	$("#rMenu").hide();
            }
            
            $("#menu_add").hide();
            $("#menu_del").hide();
            $("#menu_addreport").hide();
        } 
		
		rMenu.css({"top":y-50+"px", "left":x-19+"px", "display" : "block", "position":"absolute"});

		$("body").bind("mousedown", onBodyMouseDown);
	}
	
	function OnRightClick1(event, treeId, treeNode){
		if(!treeNode)return;
		if (!treeNode && event.target.tagName.toLowerCase() != "button" && $(event.target).parents("a").length == 0) {
			zTree.cancelSelectedNode();
			showRMenu1(treeNode.lx, zTreeBeforeDrag(treeId, new Array(treeNode)), event.clientX, event.clientY);
		} else if (treeNode && !treeNode.noR) {
			zTree.selectNode(treeNode);
			showRMenu1(treeNode.lx, zTreeBeforeDrag(treeId, new Array(treeNode)), event.clientX, event.clientY);
		}
	}
	
	/**
     *
     * 展示菜单
     * @param type 当前待展示菜单节点类型
     * @param isSelf 当前节点是否属于本单位
     * @param x 当前事件发生X轴偏移量
     * @param y 当前事件发生Y轴偏移量
     *
     */
	function showRMenu1(type, isSelf, x, y) {
		
		if(type == 0){
			$("#rMenu").show();
            $("#menu_add").show();
            $("#menu_addreport").show();
            
            if(isSelf){
            	$("#menu_del").show();
//          	$("#menu_addreport").show();
            }else{
            	$("#menu_del").hide();
//          	$("#menu_addreport").hide();
            }
            
            $("#menu_showreport").hide();
            $("#menu_editreport").hide();
            $("#menu_delreport").hide();
            $("#menu_copyreport").hide();        
        }else{
            if(isSelf){
            	$("#rMenu").show();
            	$("#menu_showreport").show();
            	$("#menu_editreport").show();
                $("#menu_delreport").show();
                $("#menu_copyreport").show();
            }else{
            	$("#rMenu").hide();
            }
            
            $("#menu_add").hide();
            $("#menu_del").hide();
            $("#menu_addreport").hide();
        } 
		
		rMenu.css({"top":y-50+"px", "left":x-19+"px", "display" : "block", "position":"absolute"});

		$("body").bind("mousedown", onBodyMouseDown);
	}
	
	/**
     *
     * 隐藏菜单
     *
     */
	function hideRMenu() {
		if (rMenu) rMenu.css({"display": "none"});
		$("body").unbind("mousedown", onBodyMouseDown);
	}
	
	/**
     *
     * 网页body鼠标事件
     * @param event 事件对象
     *
     */
	function onBodyMouseDown(event){
		if (!(event.target.id == "rMenu" || $(event.target).parents("#rMenu").length>0)) {
			rMenu.css({"display" : "none"});
		}
	}
	
	var addCount = 1;
	/**
     *
     *新增节点
     *
     */
	function addTreeNode(position,nodeType) {
		hideRMenu();
		var uid = uuid();
		var newNode = { name:"新增节点" + (addCount++), lx:0, bh:uid, id:uid, corp:corpId, nowCorp:corpId};
		
		if(nodeType == 'indexDetail'){
		    newNode["icon"] = "./img/icon/images/tree-icon_05.png";
		    newNode["menu"] = 1;
		    newNode["lx"] = 1;
		}else if(nodeType == "index"){
			newNode["menu"] = 0;
		}
		
		if (zTree.getSelectedNodes()[0]) {
			var nodeTemp = zTree.getSelectedNodes()[0];
			
			if(nodeTemp.level >= 4 && position == "child"){
//				Artery.showMessage("");
				Artery.showWarning("非报告节点层数最多只能为5层");
				return;
			}
			
			newNode = zTree.addNodes(nodeTemp, newNode)[0];
			
			if(position == "child"){
				newNode["pidTemp"] = nodeTemp.id;
				zTreeObj.updateNode(newNode,false);
				zTree.moveNode(nodeTemp, newNode, "inner");
			}else if(position == "up"){
				newNode["pidTemp"] = nodeTemp.pid == null ? nodeTemp.pidTemp : nodeTemp.pid;
				zTreeObj.updateNode(newNode,false);
				zTree.moveNode(nodeTemp, newNode, "prev");
			}else{
				newNode["pidTemp"] = nodeTemp.pid == null ? nodeTemp.pidTemp : nodeTemp.pid;
				zTreeObj.updateNode(newNode,false);
				zTree.moveNode(nodeTemp, newNode, "next");
			}
			
		} else {
			zTree.addNodes(null, newNode);
		}
		
		/*指标*/
		if(nodeType){}
	}
	
	function editTreeNode(){
		hideRMenu();
		var selectedNode = zTree.getSelectedNodes()[0];
		if(selectedNode){
			if($("#ywIndexName")[0]){
				$("#ywIndexName")[0].value = selectedNode.name;
				$("#ywIndexName").removeAttr('readonly');
				$(".zbPre").css({"display":"none"});
				$(".tabContents").css({"display":"block"});
			}
			if($("#jcIndexName")[0]){
				$("#jcIndexName").removeAttr('readonly');
				$("#jcIndexName")[0].value = selectedNode.name;
				$(".jczbPre").css({"display":"none"});
				$(".body").css({"display":"block"});
			}
		}
	}
	
	/**
     *
     * 删除节点
     *
     */
	function removeTreeNode() {
		hideRMenu();
		var nodes = zTree.getSelectedNodes();
		if (nodes && nodes.length>0) {

			var btn = confirm("确定要删除此节点?");
			if(btn == true){
				zTree.removeNode(nodes[0]);
			}
//			Artery.confirmMsg("提示","确定要删除此节点?",function(btn){
//	            if(btn == "yes"){
//	            	zTree.removeNode(nodes[0]);
//	            }
//          });
		}
		
		//如果所有节点都被删除，自动添加一个根节点
		if($("#treeDemo")[0] && $("#treeDemo")[0].childNodes.length < 1){
			addTreeNode();
		}
	}
	
	/**
	 *
	 * 重命名节点
	 * @param event 事件对象
	 * @param treeId 树节点ID
	 * @param treeNode 树节点对象
	 * 
	 */
	function zTreeRename(event, treeId, treeNode){
		if(treeNode == null)return;
		if(treeNode.nowCorp != treeNode.corp)return;
		
	    if(treeNode.lx == 0){
	    	zTreeObj.editName(treeNode);
	    }
	}
	
	function indexZtreeRename(event, treeId, treeNode){
		if(treeNode == null)return;
		if(treeNode.nowCorp != treeNode.corp)return;
		
	    if(treeNode.menu == 0){
	    	zTreeObj.editName(treeNode);
	    }
	}
	
	var curSrcNode;
	/**
     *
     * 设置待复制节点
     * @param treeNode 待设置节点对象
     *
     */
	function setCurSrcNode(treeNode) {
//		var zTree = $.fn.zTree.getZTreeObj("treeDemo");
		if (curSrcNode) {
			delete curSrcNode.isCur;
			var tmpNode = curSrcNode;
			curSrcNode = null;
		}
		curSrcNode = treeNode;
		if (!treeNode) return;

		curSrcNode.isCur = true;			
		zTree.cancelSelectedNode();
	}
	
	/**
     *
     * 复制报告
     *
     */
	function copyReport() {
		hideRMenu();
        
        var nodes = zTree.getSelectedNodes();
        setCurSrcNode(nodes[0]);
        
        var targetNode = nodes.length > 0 ? nodes[0] : null;
        
        var newNode = {};
        newNode["name"] = targetNode.name + "-副本";
        newNode["lx"] = targetNode.lx;
        newNode["id"] = newNode["bh"] = uuid();
        newNode["pid"] = newNode["pidTemp"] = targetNode.pid;
        newNode["corp"] = targetNode.corp;
        newNode["nowCorp"] = targetNode.nowCorp;
        newNode["repbh"] = targetNode.repbh;
        newNode["icon"] = targetNode.icon;
        
        newNode = zTree.addNodes(null,newNode)[0];
        zTree.moveNode(targetNode, newNode, "next");
        
        setCurSrcNode();
        
        delete targetNode.isCur;
        zTree.selectNode(targetNode);
        
        $("body").bind("mousedown", onBodyMouseDown);
	}
	
	/**
     *
     * 挂接报告
     * 
     */
    function addReport(){
		hideRMenu();
		
		var node = zTree.getSelectedNodes()[0].id == null ? zTree.getSelectedNodes()[0].bh : zTree.getSelectedNodes()[0].id;
		
//		Artery.openForm({
//			"formId":"d91d9868f2f703f24e30db18751f8c1e",
//			"formName":"挂接报告列表",
//			"formType":"1",
//			"target":"_window",
//			"params":{
//				"targetNode":node,
//			},
//			"targetWidth":500,
//			"targetHeight":400,
//			"modal":true,
//			"runTimeType":"insert"
//		});
    }
    
    /**
     *
     * 编辑报告
     *
     */
    function editReport(){
		hideRMenu();
    }
	
	/**
	 *
	 * 查看报告
	 *
	 */
	function showReport(){
	    hideRMenu(); 
	}
	
	/**
	 * 
	 * 标记节点状态
	 * 
	 * @param treeNode 树节点对象
	 * 
	 */
	function fontCss(treeNode) {
		var aObj = $("#" + treeNode.tId + "_a");
		aObj.css({"background-color":"#fff68f"});
		aObj[0].focus();
		
		aObj[0].lastChild.parentNode.onblur = function(){
			aObj.css({"background-color":"#000000"});
		};
	}
	
	/**
	 * 节点拖拽至目标节点控制
	 * @param treeId 节点ID
	 * @param treeNodes 被拖拽节点
	 * @param targetNode 目标节点
	 * @param moveType 移动方式
	 * @returns {Boolean}
	 */
	function zTreeBeforeDrop(treeId, treeNodes, targetNode, moveType){
		if(!treeNodes)return false;
		if(!targetNode)return false;
		
		var node = treeNodes[0];
		
		if(node.lx == 0 && targetNode.lx == 1 && moveType == "inner")return false;
		if(node.lx == 1 && targetNode.lx == 1 && moveType == "inner")return false;
		
		if(targetNode.lx == 0 && node.lx == 0){
			if(targetNode.level == 4 && moveType == "inner"){
				alert("非报告节点层数最多只能为5层");
				return false;
			}
		}
	}
	
	/**
	 * 获取所有树节点对象
	 * @returns 树节点对象集合
	 */
	function getAllTreeVal(){
		return zTreeObj.transformToArray(zTreeObj.getNodes());
	}
	
	/**
	 * 生成32位UUID
	 * @returns UUID
	 */
	function uuid(){
		var s = [];
		var hexDigits = "0123456789ABCDEF";
		
		for(var i = 0; i < 36; i++){
			s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10),1);
		}
		
		s[14] = "4";
		s[19] = hexDigits.substr((s[19] & 0x3) | 0x8,1);
		s[8] = s[13] = s[18] = s[23] = "";
		
		var uuid = s.join("");
		
		return uuid;
	}
	
	var zTree,rMenu;
	
	/**
	 * 初始化报告树
	 * @param result 初始化节点JSON数据集
	 */
	function initTree(result){
		corpId = "150000";
		zTreeObj = $.fn.zTree.init($("#treeDemo"), jcdsjZtreeSetting, result);
		zTree = $.fn.zTree.getZTreeObj("treeDemo");
		rMenu = $("#rMenu");
	}
	
	/**
	 * 添加报告
	 * @param nodeId 待添加报告节点ID
	 * @param results 待添加节点JSON结果集
	 */
	function addReports(nodeId, results){
		if(results == null || results == "")return;
		
		var parentTreeNode = zTreeObj.getNodeById(nodeId);
		zTreeObj.addNodes(parentTreeNode, results, false);
	}
	
	/**
	 * 重构节点数据
	 * @param item 树节点
	 * @returns {Obj}
	 */
	function rebuildNode(item){
        var itemJson = {};
		
		itemJson["name"] = item["name"];
		itemJson["lx"] = item["lx"];
		itemJson["corp"] = item["corp"];
		itemJson["pid"] = item["pid"] == null ? item["pidTemp"] : item["pid"];
		itemJson["bh"] = item["id"] != null ? item["id"] : item["bh"];
		itemJson["repbh"] = item["repbh"];
		itemJson["xh"] = item.getIndex();
		itemJson["level"] = item["level"];
		itemJson["nowCorp"] = item["nowCorp"];
		
		return itemJson;
	}
	
	/**
	 * 拖拽节点前拖拽控制
	 * @param treeId 节点ID
	 * @param treeNodes 被拖拽的节点
	 * @returns {Boolean}
	 */
	function zTreeBeforeDrag(treeId, treeNodes){
		if(treeNodes[0].corp == treeNodes[0].nowCorp){
			return true;
		}else{
			return false;
		}
	}
	
	/**
	 * 拖拽节点后拖拽控制
	 * @param event 事件对象
	 * @param treeId 目标节点ID
	 * @param treeNodes 被拖拽节点对象集合
	 * @param targetNode 目标节点对象
	 * @param moveType 移动位置
	 */
	function zTreeOnDrop(event, treeId, treeNodes, targetNode, moveType){
		if(!treeNodes)return false;
		if(!targetNode)return false;
		
		var node = treeNodes[0];
		
		node["pidTemp"] = targetNode["id"] == null ? targetNode["bh"] : targetNode["id"];
		
		zTreeObj.updateNode(node);
	}
	
	/**
	 * 展开节点前事件
	 * @param treeId 节点ID
	 * @param treeNode 节点对象
	 * @returns {Boolean}
	 */
	function beforeExpand(treeId, treeNode) {
		if(treeNode.zAsync){
			return true;
		}
		
		if (!treeNode.isAjaxing) {
			treeNode.times = 1;
			ajaxGetNodes(treeNode, "refresh");
			return true;
		} else {
			alert("zTree 正在下载数据中，请稍后展开节点。。。");
			return false;
		}
	}
	
	/**
	 * 通过ajax获取子节点
	 * @param treeNode 节点
	 * @param reloadType 加载方式
	 */
	function ajaxGetNodes(treeNode, reloadType) {
		if (reloadType == "refresh") {
//			treeNode.icon = "./js/plug/ztree/css/zTreeStyle/img/loading.gif";
			zTree.updateNode(treeNode);
		}
		zTree.reAsyncChildNodes(treeNode, reloadType, true);
	}
	
	/**
	 * 异步加载成功时回调函数
	 * @param event 事件
	 * @param treeId 节点ID
	 * @param treeNode 节点对象
	 * @param msg 节点数据
	 */
	function onAsyncSuccess(event, treeId, treeNode, msg) {
		if (!msg || msg.length == 0) {
			return;
		}
		
		if(treeNode == null){
			return;
		}
		
	    treeNode.icon = "";
		zTree.updateNode(treeNode);
	}
	
	/**
	 * 异步加载失败时回调函数
	 * @param event 事件
	 * @param treeId 节点ID
	 * @param treeNode 节点对象
	 * @param XMLHttpRequest ajax请求对象
	 * @param textStatus  异常标志
	 * @param errorThrown 异常
	 */
	function onAsyncError(event, treeId, treeNode, XMLHttpRequest, textStatus, errorThrown) {
//		Artery.showError("加载数据异常...");
		alert("加载数据异常...");
	}
	
	/**
	 * 根据参数获取节点
	 * @param key 参数名称
	 * @param value 参数值
	 * @param parentNode 父节点
	 */
	function getNodeByParams(key, value, parentNode){
		return zTree.getNodesByParam(key, value, parentNode)[0];
	}
	
	/**
	 * 根据路径展开树
	 * @param path 路径
	 */
	function expandNodeByPath(path){
		if(path == null){
			return;
		}
		
		var nodeIds = path.split(",");
		
		for(var index = 0; index < nodeIds.length; index++){
			var node = getNodeByParams("bh", nodeIds[index], null);
			
			if(node.isAjaxing){
				setTimeout(function(){
					expandNodeByPath(path);
				},100);
			}else{
				zTree.expandNode(node, true, false, true, false);
				zTreeObj.selectNode(node);				
			}
			
		}
	}
	
function zTreeOnClick(event, treeId, treeNode) {
	var fhqkUrl = "http://172.18.12.167:8962/WonderBI/showreport.do?id=admin&pw=admin&menutype=2&resid=QBI$30$Y5XMKY8U5IM7OWI51O3SCR81IU5V9I49$1$N7MZSXN1MB4CA3B7MAJT4TY4MX7OUJV1.qbr";
	var fyqkUrl = "http://172.18.12.167:8962/WonderBI/showreport.do?id=admin&pw=admin&menutype=2&resid=QBI$30$Y5XMKY8U5IM7OWI51O3SCR81IU5V9I49$1$CDMYUZL7L38U703DT5ES965C0ND4DWSE.qbr";
	var scqsUrl = "http://172.18.12.167:8962/WonderBI/showreport.do?id=admin&pw=admin&menutype=2&resid=QBI$30$Y5XMKY8U5IM7OWI51O3SCR81IU5V9I49$1$6U4CR54WUR8KJSRUZ9FE4C8UTOUNU7Q6.qbr";

    if(treeNode.name == "审查逮捕案件不批准逮捕后提起复核情况分析报告"){
    	$('#js_others').attr('src', fhqkUrl);
    }else if(treeNode.name == "审查逮捕案件不批准逮捕后提起复议情况分析报告"){
    	$('#js_others').attr('src', fyqkUrl);
    }else if(treeNode.name == "审查起诉案件受理审结情况分析报告"){
    	$('#js_others').attr('src', scqsUrl);
    }
};
/************************setting************************/
var clickSetting2 = {
				callback: {
					onClick: addIndexClick
				},
				view:{
					showIcon:showIndexIcon
				}
			};
/*普通*/
var setting = {
	view: {
		showIcon: false
	}
};
var zzjgSetting = {
	view: {
		showIcon: showIconBYIconAttr
	}
};
var setting1 = {
	view: {
		showIcon: showAnalysisReportIcon
	}
};
/*单击*/
var clickSetting = {
				callback: {
					onClick: zTreeOnClick
				},
				view:{
					showIcon:onlyShowReportIcon
				}
			};
/*多选*/
var checkBoxSetting = {
	view: {
		showIcon: false
	},
	check: {
		enable: true,
		chkStyle: 'checkbox',
		chkboxType: {
			"Y": "ps",
			"N": "ps"
		}
	}
};
var gjbgCheckBoxSetting = {
	view: {
		showIcon: onlyShowReportIcon
	},
	check: {
		enable: true,
		chkStyle: 'checkbox',
		chkboxType: {
			"Y": "ps",
			"N": "ps"
		}
	}
};

var roleCheckBoxSetting = {
	view: {
		showIcon: showIconBYIconAttr
	},
	check: {
		enable: true,
		chkStyle: 'checkbox',
		chkboxType: {
			"Y": "ps",
			"N": "ps"
		}
	}
};
var ryqxCheckBoxSetting = {
	view: {
		showIcon: onlyShowReportIcon
	},
	check: {
		enable: true,
		chkStyle: 'checkbox',
		chkboxType: {
			"Y": "ps",
			"N": "ps"
		}
	}
};

var dimCheckBoxSetting = {
	view: {
		showIcon: onlyShowDim
	},
	check: {
		enable: true,
		chkStyle: 'checkbox',
		chkboxType: {
			"Y": "ps",
			"N": "ps"
		}
	}
};
/*单选*/
var radioSetting = {
	view: {
		showIcon: false
	},
	check: {
		enable: true,
		chkStyle: 'radio'
	}
};
/*操作事件*/
var indexEditSetting = {
	view: {
		showIcon: showIndexIcon,
		selectedMulti: false
	},

	async: {
		autoParam: ["bh"],
		otherParam: "",
		enable: false,
		url: ""
	},

	edit: {
		enable: true,
		showRemoveBtn: false,
		showRenameBtn: false,

		drag: {
			prev: true,
			next: true,
			inner: true
		}
	},

	callback: {
		onClick: indexClick,
		onRightClick: indexRightClick,
		onDblClick: indexZtreeRename,
		beforeDrag: zTreeBeforeDrag,
		beforeDrop: zTreeBeforeDrop,
		onDrop: zTreeOnDrop,
		beforeExpand: beforeExpand,
		onAsyncSuccess: onAsyncSuccess,
		onAsyncError: onAsyncError
	},

	data: {
		simpleData: {
			enable: true,
			idKey: "bh",
			pIdKey: "pid"
		}
	}
};

/*操作事件*/
var editSetting = {
	view: {
		showIcon: showAnalysisReportIcon,
		selectedMulti: false
	},

//	async: {
//		autoParam: ["bh"],
//		otherParam: "",
//		enable: false,
//		url: ""
//	},

	edit: {
		enable: true,
		showRemoveBtn: false,
		showRenameBtn: false,

		drag: {
			prev: true,
			next: true,
			inner: true
		}
	},

	callback: {
		onRightClick: OnRightClick1,
		onDblClick: zTreeRename,
		beforeDrag: zTreeBeforeDrag,
		beforeDrop: zTreeBeforeDrop,
		onDrop: zTreeOnDrop,
		beforeExpand: beforeExpand,
		onAsyncSuccess: onAsyncSuccess,
		onAsyncError: onAsyncError
	},

	data: {
		simpleData: {
			enable: true,
			idKey: "bh",
			pIdKey: "pid"
		}
	}
};

var editSetting1 = {
	view: {
		showIcon: showAnalysisReportIcon,
		selectedMulti: false
	},

//	async: {
//		autoParam: ["bh"],
//		otherParam: "",
//		enable: false,
//		url: ""
//	},

	edit: {
		enable: true,
		showRemoveBtn: false,
		showRenameBtn: false,

		drag: {
			prev: true,
			next: true,
			inner: true
		}
	},

	callback: {
		onClick: reportClick,
		onRightClick: OnRightClick,
		onDblClick: zTreeRename,
		beforeDrag: zTreeBeforeDrag,
		beforeDrop: zTreeBeforeDrop,
		onDrop: zTreeOnDrop,
		beforeExpand: beforeExpand,
		onAsyncSuccess: onAsyncSuccess,
		onAsyncError: onAsyncError
	},

	data: {
		simpleData: {
			enable: true,
			idKey: "bh",
			pIdKey: "pid"
		}
	}
};
/************************data************************/
/*新增分析体系*/
var xzfxtxNodes = [{
	bh: "tx1",
	id: "tx1",
	corp: "150000",
	nowCorp: "150000",
	lx: 0,
	name: "分析节点"
}];
/*业务分析 ----分析体系树*/
var scqsTree = [{
				bh: "tx123",
				id: "tx123",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "审查逮捕案件不批准逮捕后提起复核情况分析报告"
			}, {
				bh: "tx1234",
				id: "tx1234",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "审查逮捕案件不批准逮捕后提起复议情况分析报告"
			}, {
				bh: "tx12345",
				id: "tx12345",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "审查起诉案件受理审结情况分析报告"
			}, {
				bh: "tx123456",
				id: "tx123456",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "改变管辖情况分析报告"
			}
];

var zchdTree = [{
				bh: "tx1234567",
				id: "tx1234567",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "公诉提出纠正侦查活动违法情况分析报告"
			}, {
				bh: "tx12345678",
				id: "tx12345678",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "证据合法性审查/调查情况分析报告"
			}];
			
var zcjdTree = [{
				bh: "tx0004567890123",
				id: "tx0004567890123",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				name: "纠正侦查活动违法情况",
				children: [{
					bh: "tx0000567890123",
					id: "tx0000567890123",
					corp: "150000",
					nowCorp: "150000",
					icon:"./img/icon/images/tree-icon_04.png",
					lx: 1,
					name: "提出纠正侦查活动违法情况分析报告"
				}, {
					bh: "tx1000567890123",
					id: "tx1000567890123",
					corp: "150000",
					nowCorp: "150000",
					icon:"./img/icon/images/tree-icon_04.png",
					lx: 1,
					name: "已纠正侦查活动违法分析报告"
				}]
			}];

/*分析体系--含报告*/
var fxtxbg = [{
		bh: "tx1",
		id: "tx1",
		corp: "1500",
		icon:"./img/icon/images/tree-icon_01.png",
		nowCorp: "150000",
		lx: 0,
		name: "公诉",
		open: true,
		children: [{
			bh: "tx12",
			id: "tx12",
			corp: "1500",
			icon:"./img/icon/images/tree-icon_01.png",
			nowCorp: "150000",
			lx: 0,
			name: "审查起诉工作情况",
			children: [{
				bh: "tx123",
				id: "tx123",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "审查逮捕案件不批准逮捕后提起复核情况分析报告"
			}, {
				bh: "tx1234",
				id: "tx1234",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "审查逮捕案件不批准逮捕后提起复议情况分析报告"
			}, {
				bh: "tx12345",
				id: "tx12345",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "审查起诉案件受理审结情况分析报告"
			}, {
				bh: "tx123456",
				id: "tx123456",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "改变管辖情况分析报告"
			}]
		}, {
			bh: "tx1234567",
			id: "tx1234567",
			corp: "1500",
			icon:"./img/icon/images/tree-icon_01.png",
			nowCorp: "150000",
			lx: 0,
			name: "侦查活动监督情况",
			children: [{
				bh: "tx1234567",
				id: "tx1234567",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "公诉提出纠正侦查活动违法情况分析报告"
			}, {
				bh: "tx12345678",
				id: "tx12345678",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "证据合法性审查/调查情况分析报告"
			}]
		}, {
			bh: "tx123456789",
			id: "tx123456789",
			corp: "1500",
			icon:"./img/icon/images/tree-icon_01.png",
			nowCorp: "150000",
			lx: 0,
			name: "审判活动监督情况",
			isParent: true
		}]
	}, {
		bh: "tx1234567890",
		id: "tx1234567890",
		corp: "150000",
		nowCorp: "150000",
		lx: 0,
		name: "侦监",
		children: [{
			bh: "tx12345678901",
			id: "tx12345678901",
			corp: "150000",
			nowCorp: "150000",
			lx: 0,
			name: "审查逮捕工作情况",
			open: true,
			children: [{
				bh: "tx123456789012",
				id: "tx123456789012",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "批准和决定逮捕情况分析报告"
			}, {
				bh: "tx1234567890123",
				id: "tx1234567890123",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "不批准和决定不捕情况分析报告"
			}]
		}, {
			bh: "tx0234567890123",
			id: "tx0234567890123",
			corp: "150000",
			nowCorp: "150000",
			lx: 0,
			name: "逮捕重点关注犯罪案件情况",
			children: [{
				bh: "tx023456789012344",
				id: "tx023456789012344",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "逮捕重点关注犯罪案件情况分析报告"
			}, ]
		}, {
			bh: "tx0034567890123",
			id: "tx0034567890123",
			corp: "150000",
			nowCorp: "150000",
			lx: 0,
			name: "侦查活动监督情况",
			children: [{
				bh: "tx0004567890123",
				id: "tx0004567890123",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				name: "纠正侦查活动违法情况",
				children: [{
					bh: "tx0000567890123",
					id: "tx0000567890123",
					corp: "150000",
					nowCorp: "150000",
					icon:"./img/icon/images/tree-icon_04.png",
					lx: 1,
					name: "提出纠正侦查活动违法情况分析报告"
				}, {
					bh: "tx1000567890123",
					id: "tx1000567890123",
					corp: "150000",
					nowCorp: "150000",
					icon:"./img/icon/images/tree-icon_04.png",
					lx: 1,
					name: "已纠正侦查活动违法分析报告"
				}]
			}]
		}]
	}, {
		bh: "tx1200567890123",
		id: "tx1200567890123",
		corp: "150000",
		nowCorp: "150000",
		lx: 0,
		name: "民行",
		isParent: true
	}

];
/*分析体系--不含报告*/
var fxtxNobg = [{
	name: "部门业务分析体系",
	children: [{
			name: "公诉",
			open: true,
			children: [{
				name: "审查起诉工作情况",
			}, {
				name: "侦查活动监督情况"
			}, {
				name: "审判活动监督情况",
				isParent: true
			}]
		}, {
			name: "侦监",
			children: [{
				name: "审查逮捕工作情况",
			}, {
				name: "逮捕重点关注犯罪案件情况",
			}, {
				name: "侦查活动监督情况",
				children: [{
					name: "纠正侦查活动违法情况"
				}]
			}]
		}, {
			name: "民行",
			isParent: true
		}

	]
}, {
	name: "办案质效分析体系"
}];
/*分析报告--含报告*//*报告权限*/
var fxbg = [{
		bh: "1",
		id: "1",
		corp: "1500",
		icon:"./img/icon/images/tree-icon_01.png",
		nowCorp: "150000",
		lx: 0,
		name: "公诉",
		open: true,
		children: [{
			bh: "123",
			id: "123",
			corp: "1500",
			icon:"./img/icon/images/tree-icon_01.png",
			nowCorp: "150000",
			lx: 0,
			name: "审查起诉工作情况",
			children: [{
				bh: "1234",
				id: "1234",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "受理情况分析报告"
			}, {
				bh: "12345",
				id: "12345",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "审查起诉办理情况分析报告"
			}, {
				bh: "123456",
				id: "123456",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "审查起诉审结情况分析报告"
			}, {
				bh: "1234567",
				id: "1234567",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "复议复核情况分析报告"
			}]
		}, {
			bh: "12345678",
			id: "12345678",
			corp: "1500",
			icon:"./img/icon/images/tree-icon_01.png",
			nowCorp: "150000",
			lx: 0,
			name: "侦查活动监督情况",
			children: [{
				bh: "123456789",
				id: "123456789",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "追诉漏罪漏犯情况分析报告"
			}, {
				bh: "1234567890",
				id: "1234567890",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "证据合法性审查/调查情况分析报告"
			}, {
				bh: "12345678901",
				id: "12345678901",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "纠正侦查活动违法情况分析报告"
			}]
		}, {
			bh: "1234567890",
			id: "1234567890",
			corp: "150000",
			nowCorp: "150000",
			lx: 0,
			name: "审判活动监督情况",
			isParent: true
		}]
	}, {
		bh: "12345678901",
		id: "12345678901",
		corp: "150000",
		nowCorp: "150000",
		lx: 0,
		name: "侦监",
		children: [{
			bh: "123456789012",
			id: "123456789012",
			corp: "150000",
			nowCorp: "150000",
			lx: 0,
			name: "审查逮捕工作情况",
			open: true,
			children: [{
				bh: "1234567890123",
				id: "1234567890123",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "受理情况分析报告"
			}, {
				bh: "12345678901234",
				id: "12345678901234",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "审结情况分析报告"
			}, {
				bh: "123456789012345",
				id: "123456789012345",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "不捕复议复核情况分析报告"
			}, {
				bh: "1234567890123456",
				id: "1234567890123456",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "捕后处理情况分析报告"
			}]
		}, {
			bh: "12345678901234567",
			id: "12345678901234567",
			corp: "150000",
			nowCorp: "150000",
			lx: 0,
			name: "对公安机关立案监督情况",
			children: [{
				bh: "123456789012345678",
				id: "123456789012345678",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "监督应当立案而不立案情况分析报告"
			}, {
				bh: "1234567890123456789",
				id: "1234567890123456789",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "监督不应当立案而立案情况分析报告"
			}, {
				bh: "0234567890123456789",
				id: "0234567890123456789",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "移交犯罪线索情况分析报告"
			}]
		}, {
			bh: "0034567890123456789",
			id: "0034567890123456789",
			corp: "150000",
			nowCorp: "150000",
			lx: 0,
			name: "侦查活动监督情况",
			children: [{
				bh: "0004567890123456789",
				id: "0004567890123456789",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "纠正漏捕情况分析报告"
			}, {
				bh: "0000567890123456789",
				id: "0000567890123456789",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "证据合法性审查/调查情况分析报告"
			}, {
				bh: "0000067890123456789",
				id: "0000067890123456789",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_04.png",
				lx: 1,
				name: "纠正侦查活动违法情况分析报告"
			}]
		}]
	}, {
		bh: "0001567890123456789",
		id: "0001567890123456789",
		corp: "150000",
		nowCorp: "150000",
		lx: 0,
		name: "民行",
		isParent: true
	}

];

/*分析报告 --------------------------功能图标*/
var funcFxbg = [{
		bh: "1",
		id: "1",
		corp: "1500",
		icon:"./img/icon/images/tree-icon_01.png",
		nowCorp: "150000",
		lx: 0,
		name: "公诉",
		open: true,
		children: [{
			bh: "123",
			id: "123",
			corp: "1500",
			icon:"./img/icon/images/tree-icon_01.png",
			nowCorp: "150000",
			lx: 0,
			name: "审查起诉工作情况",
			children: [{
				bh: "1234",
				id: "1234",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_07.png",
				lx: 1,
				name: "受理情况分析报告"
			}, {
				bh: "12345",
				id: "12345",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_07.png",
				lx: 1,
				name: "审查起诉办理情况分析报告"
			}, {
				bh: "123456",
				id: "123456",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_07.png",
				lx: 1,
				name: "审查起诉审结情况分析报告"
			}, {
				bh: "1234567",
				id: "1234567",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_07.png",
				lx: 1,
				name: "复议复核情况分析报告"
			}]
		}, {
			bh: "12345678",
			id: "12345678",
			corp: "1500",
			icon:"./img/icon/images/tree-icon_01.png",
			nowCorp: "150000",
			lx: 0,
			name: "侦查活动监督情况",
			children: [{
				bh: "123456789",
				id: "123456789",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_07.png",
				lx: 1,
				name: "追诉漏罪漏犯情况分析报告"
			}, {
				bh: "1234567890",
				id: "1234567890",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_07.png",
				lx: 1,
				name: "证据合法性审查/调查情况分析报告"
			}, {
				bh: "12345678901",
				id: "12345678901",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_07.png",
				lx: 1,
				name: "纠正侦查活动违法情况分析报告"
			}]
		}, {
			bh: "1234567890",
			id: "1234567890",
			corp: "150000",
			nowCorp: "150000",
			lx: 0,
			name: "审判活动监督情况",
			isParent: true
		}]
	}, {
		bh: "12345678901",
		id: "12345678901",
		corp: "150000",
		nowCorp: "150000",
		lx: 0,
		name: "侦监",
		children: [{
			bh: "123456789012",
			id: "123456789012",
			corp: "150000",
			nowCorp: "150000",
			lx: 0,
			name: "审查逮捕工作情况",
			open: true,
			children: [{
				bh: "1234567890123",
				id: "1234567890123",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_07.png",
				lx: 1,
				name: "受理情况分析报告"
			}, {
				bh: "12345678901234",
				id: "12345678901234",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_07.png",
				lx: 1,
				name: "审结情况分析报告"
			}, {
				bh: "123456789012345",
				id: "123456789012345",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_07.png",
				lx: 1,
				name: "不捕复议复核情况分析报告"
			}, {
				bh: "1234567890123456",
				id: "1234567890123456",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_07.png",
				lx: 1,
				name: "捕后处理情况分析报告"
			}]
		}, {
			bh: "12345678901234567",
			id: "12345678901234567",
			corp: "150000",
			nowCorp: "150000",
			lx: 0,
			name: "对公安机关立案监督情况",
			children: [{
				bh: "123456789012345678",
				id: "123456789012345678",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_07.png",
				lx: 1,
				name: "监督应当立案而不立案情况分析报告"
			}, {
				bh: "1234567890123456789",
				id: "1234567890123456789",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_07.png",
				lx: 1,
				name: "监督不应当立案而立案情况分析报告"
			}, {
				bh: "0234567890123456789",
				id: "0234567890123456789",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_07.png",
				lx: 1,
				name: "移交犯罪线索情况分析报告"
			}]
		}, {
			bh: "0034567890123456789",
			id: "0034567890123456789",
			corp: "150000",
			nowCorp: "150000",
			lx: 0,
			name: "侦查活动监督情况",
			children: [{
				bh: "0004567890123456789",
				id: "0004567890123456789",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_07.png",
				lx: 1,
				name: "纠正漏捕情况分析报告"
			}, {
				bh: "0000567890123456789",
				id: "0000567890123456789",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_07.png",
				lx: 1,
				name: "证据合法性审查/调查情况分析报告"
			}, {
				bh: "0000067890123456789",
				id: "0000067890123456789",
				corp: "150000",
				nowCorp: "150000",
				icon:"./img/icon/images/tree-icon_07.png",
				lx: 1,
				name: "纠正侦查活动违法情况分析报告"
			}]
		}]
	}, {
		bh: "0001567890123456789",
		id: "0001567890123456789",
		corp: "150000",
		nowCorp: "150000",
		lx: 0,
		name: "民行",
		isParent: true
	}

];
/*分析报告--不含报告*/
var fxbgNo = [{
		name: "公诉",
		open: true,
		children: [{
			name: "审查起诉工作情况",
		}, {
			name: "侦查活动监督情况",
		}, {
			name: "审判活动监督情况",
			isParent: true
		}]
	}, {
		name: "侦监",
		children: [{
			name: "审查逮捕工作情况",
			open: true,
		}, {
			name: "对公安机关立案监督情况",
		}, {
			name: "侦查活动监督情况",
		}]
	}, {
		name: "民行",
		isParent: true
	}

];
/*组织机构树*/
var zzjgNodes = [{
		name: "XXX省人民检察院",
		open: true,
		children: [{
			name: "信息化建设管理处",
			children: [{
				name: "齐XX",
				icon: "./img/icon/images/tree-icon_02.png"
			}, {
				icon: "./img/icon/images/tree-icon_02.png",
				name: "王XX"
			}, {
				icon: "./img/icon/images/tree-icon_02.png",
				name: "赵XX"
			}, {
				icon: "./img/icon/images/tree-icon_02.png",
				name: "张X"
			}]
		}, {
			name: "院领导",
			children: [{
				icon: "./img/icon/images/tree-icon_02.png",
				name: "马XX"
			}, {
				icon: "./img/icon/images/tree-icon_02.png",
				name: "韦XX"
			}, {
				icon: "./img/icon/images/tree-icon_02.png",
				name: "张XX"
			}, {
				icon: "./img/icon/images/tree-icon_02.png",
				name: "李XX"
			}]
		}, {
			name: "检委会办公室",
			isParent: true
		}]
	}, {
		name: "XXXX市人民检察院",
		children: [{
			name: "院领导",
			open: true,
			children: [{
				icon: "./img/icon/images/tree-icon_02.png",
				name: "王XX"
			}, {
				icon: "./img/icon/images/tree-icon_02.png",
				name: "曹XX"
			}, {
				icon: "./img/icon/images/tree-icon_02.png",
				name: "贾X"
			}, {
				icon: "./img/icon/images/tree-icon_02.png",
				name: "云XX"
			}]
		}, {
			name: "案件管理办公室",
			children: [{
				icon: "./img/icon/images/tree-icon_02.png",
				name: "赵X"
			}, {
				icon: "./img/icon/images/tree-icon_02.png",
				name: "贺XX"
			}, {
				icon: "./img/icon/images/tree-icon_02.png",
				name: "刘X"
			}, {
				icon: "./img/icon/images/tree-icon_02.png",
				name: "许XX"
			}]
		}, {
			name: "公诉处",
			children: [{
				icon: "./img/icon/images/tree-icon_02.png",
				name: "党XX"
			}, {
				icon: "./img/icon/images/tree-icon_02.png",
				name: "云X"
			}, {
				icon: "./img/icon/images/tree-icon_02.png",
				name: "云X"
			}, {
				icon: "./img/icon/images/tree-icon_02.png",
				name: "薛XX"
			}]
		}]
	}, {
		name: "XX市人民检察院",
		isParent: true
	}

];
/*单位树*/
var dwNodes = [{
	name: "全省检察院",
	open: true,
	children: [{
			name: "XXX省人民检察院"
		}, {
			name: "XXXX市",
			children: [{
				name: "XXXX市人民检察院"
			}, {
				name: "XXXX县"
			}, {
				name: "XXX县"
			}, {
				name: "XXXX县"
			}, {
				name: "XXX县"
			}, {
				name: "XXXX县"
			}, {
				name: "XXX县"
			}]
		}, {
			name: "XXXX市",
			children: [{
				name: "XXXX市人民检察院"
			}, {
				name: "XXXX县"
			}, {
				name: "XXX县"
			}, {
				name: "XXXX县"
			}, {
				name: "XXX县"
			}, {
				name: "XXXX县"
			}, {
				name: "XXX县"
			}]
		}, {
			name: "XXXX市",
			children: [{
				name: "XXXX市人民检察院"
			}, {
				name: "XXXX县"
			}, {
				name: "XXX县"
			}, {
				name: "XXXX县"
			}, {
				name: "XXX县"
			}]
		}, {
			name: "XX市"
		}

	]
}];
/*功能权限树*/
var functionNodes = [{
	name: "晓督·智慧决策辅助系统",
	open: true,
	children: [{
		icon: "./img/icon/images/tree-icon_07.png",
		name: "系统首页"
	}, {
		icon: "./img/icon/images/tree-icon_07.png",
		name: "业务分析"
	}, {
		name: "核心数据",
		children:[
			{icon: "./img/icon/images/tree-icon_07.png",name:"侦监"},
			{icon: "./img/icon/images/tree-icon_07.png",name:"公诉"},
//			{icon: "./img/icon/images/tree-icon_07.png",name:"反贪"},
//			{icon: "./img/icon/images/tree-icon_07.png",name:"反渎"},
			{icon: "./img/icon/images/tree-icon_07.png",name:"民行"},
			{icon: "./img/icon/images/tree-icon_07.png",name:"控告"},
			{icon: "./img/icon/images/tree-icon_07.png",name:"申诉"},
//			{icon: "./img/icon/images/tree-icon_07.png",name:"预防"},
			{icon: "./img/icon/images/tree-icon_07.png",name:"执检"},
			{icon: "./img/icon/images/tree-icon_07.png",name:"未检"}
		]
	}, {
		name:"专项分析",
		children:[
			{icon: "./img/icon/images/tree-icon_07.png",name:"量刑分析"},
			{icon: "./img/icon/images/tree-icon_07.png",name:"案件复杂度分析"},
			{icon: "./img/icon/images/tree-icon_07.png",name:"故意伤害案件分析"}
		]
	},{
		name: "常规分析",
		children:[
			{name:"公诉",
			children:[
				{icon: "./img/icon/images/tree-icon_07.png",name:"办案情况分析"},
				{icon: "./img/icon/images/tree-icon_07.png",name:"收结案分析"}
			]},
			{name:"侦监",
			children:[
				{icon: "./img/icon/images/tree-icon_07.png",name:"办案情况分析"},
				{icon: "./img/icon/images/tree-icon_07.png",name:"收结案分析"}
			]},
//			{name:"反贪",
//			children:[
//				{icon: "./img/icon/images/tree-icon_07.png",name:"办案情况分析"},
//				{icon: "./img/icon/images/tree-icon_07.png",name:"收结案分析"}
//			]},
//			{name:"反渎",
//			children:[
//				{icon: "./img/icon/images/tree-icon_07.png",name:"办案情况分析"},
//				{icon: "./img/icon/images/tree-icon_07.png",name:"收结案分析"}
//			]},
			{name:"民行",
			children:[
				{icon: "./img/icon/images/tree-icon_07.png",name:"办案情况分析"},
				{icon: "./img/icon/images/tree-icon_07.png",name:"收结案分析"}
			]},
			{name:"控申",
			children:[
				{icon: "./img/icon/images/tree-icon_07.png",name:"控告申诉情况分析"},
			]}
		]
	}, {
		icon: "./img/icon/images/tree-icon_07.png",
		name: "检察官档案"
	}, {
		name: "系统管理",
		children: [{
			name: "业务分析配置",
			children: [{
				icon: "./img/icon/images/tree-icon_07.png",
				name: "分析体系管理"
			}, {
				name: "分析报告管理",
				children: [{
					icon: "./img/icon/images/tree-icon_07.png",
					name: "报告列表"
				}, {
					icon: "./img/icon/images/tree-icon_07.png",
					name: "报告树"
				}]
			}]
		}, {
			icon: "./img/icon/images/tree-icon_07.png",
			name: "人员权限维护"
		}, {
			icon: "./img/icon/images/tree-icon_07.png",
			name: "角色权限维护"
		}, {
			icon: "./img/icon/images/tree-icon_07.png",
			name: "人员信息维护"
		}, {
			icon: "./img/icon/images/tree-icon_07.png",
			name: "核心数据显示配置"
		}, {
			icon: "./img/icon/images/tree-icon_07.png",
			name: "审计日志"
		}, {
			name: "其他功能配置",
			children:[
				{icon: "./img/icon/images/tree-icon_07.png",name:"数据范围配置"},
				{icon: "./img/icon/images/tree-icon_07.png",name:"外链系统配置"}
			]
		}]
	}, {
		name: "智慧决策检索权限控制",
		children: [{
			icon: "./img/icon/images/tree-icon_07.png",
			name: "案件"
		},
//		{
//			name: "文书"
//		}, 
		{
			icon: "./img/icon/images/tree-icon_07.png",
			name: "检察官"
		}, {
			icon: "./img/icon/images/tree-icon_07.png",
			name: "指标"
		}]
	}, {
		name: "消息",
		children: [{
			icon: "./img/icon/images/tree-icon_07.png",
			name: "报告变更提醒"
		}, {
			icon: "./img/icon/images/tree-icon_07.png",
			name: "指标变更提醒"
		}, {
			icon: "./img/icon/images/tree-icon_07.png",
			name: "业务分析体系变更提醒"
		},{
			icon: "./img/icon/images/tree-icon_07.png",
			name: "指标智能监控提醒"
		}]
	}]
}];
/*角色树*/
var roleNodes = [{
	icon: "./img/icon/images/tree-icon_02.png",
	name: "省院检察长"
}, {
	icon: "./img/icon/images/tree-icon_02.png",
	name: "省院院领导"
}, {
	icon: "./img/icon/images/tree-icon_02.png",
	name: "省院侦监部门领导"
}];
/*范围权限*/
var rangeNodes = [{
	name: "XXXX省",
	open: true,
	children: [{
		name: "XX人民检察院",
		children:[
			{icon: "./img/icon/images/tree-icon_07.png",name:"XX部门"},
			{icon: "./img/icon/images/tree-icon_07.png",name:"XX部门"},
			{icon: "./img/icon/images/tree-icon_07.png",name:"XXX部门"},
			{icon: "./img/icon/images/tree-icon_07.png",name:"XX部门"}
		]
	}, {
		name: "XX市",
		children: [{
			name: "XXX市人民检察院",
			children:[
				{icon: "./img/icon/images/tree-icon_07.png",name:"XX部门"},
				{icon: "./img/icon/images/tree-icon_07.png",name:"XX部门"},
				{icon: "./img/icon/images/tree-icon_07.png",name:"XXX部门"},
				{icon: "./img/icon/images/tree-icon_07.png",name:"XX部门"}
			]
		}, {
			name: "XXXX人民检察院",
			children:[
				{icon: "./img/icon/images/tree-icon_07.png",name:"XX部门"},
				{icon: "./img/icon/images/tree-icon_07.png",name:"XX部门"},
				{icon: "./img/icon/images/tree-icon_07.png",name:"XXX部门"},
				{icon: "./img/icon/images/tree-icon_07.png",name:"XX部门"}
			]
		}, {
			name: "XXXX人民检察院",
			children:[
				{icon: "./img/icon/images/tree-icon_07.png",name:"XX部门"},
				{icon: "./img/icon/images/tree-icon_07.png",name:"XX部门"},
				{icon: "./img/icon/images/tree-icon_07.png",name:"XXX部门"},
				{icon: "./img/icon/images/tree-icon_07.png",name:"XX部门"}
			]
		}, {
			name: "XXXX人民检察院",
			children:[
				{icon: "./img/icon/images/tree-icon_07.png",name:"XX部门"},
				{icon: "./img/icon/images/tree-icon_07.png",name:"XX部门"},
				{icon: "./img/icon/images/tree-icon_07.png",name:"XXX部门"},
				{icon: "./img/icon/images/tree-icon_07.png",name:"XX部门"}
			]
		}, {
			name: "XXXX人民检察院",
			children:[
				{icon: "./img/icon/images/tree-icon_07.png",name:"XX部门"},
				{icon: "./img/icon/images/tree-icon_07.png",name:"XX部门"},
				{icon: "./img/icon/images/tree-icon_07.png",name:"XXX部门"},
				{icon: "./img/icon/images/tree-icon_07.png",name:"XX部门"}
			]
		}]
	}, {
		icon: "./img/icon/images/tree-icon_07.png",
		name: "XX市"
	}, {
		icon: "./img/icon/images/tree-icon_07.png",
		name: "XX市"
	}]
}];
/*案件类别权限*/
var ajlxqxNodes = [{
	name: "侦监",
	children: [{
		icon: "./img/icon/images/tree-icon_07.png",
		name: "审查逮捕案件"
	}, {
		icon: "./img/icon/images/tree-icon_07.png",
		name: "立案监督案件"
	}, {
		icon: "./img/icon/images/tree-icon_07.png",
		name: "侦查活动监督案件"
	}]
}, {
	icon: "./img/icon/images/tree-icon_07.png",
	name: "公诉"
}, {
	icon: "./img/icon/images/tree-icon_07.png",
	name: "执检"
}, {
	icon: "./img/icon/images/tree-icon_07.png",
	name: "民行"
}, {
	icon: "./img/icon/images/tree-icon_07.png",
	name: "申诉"
}, {
	icon: "./img/icon/images/tree-icon_07.png",
	name: "案管"
}, {
	icon: "./img/icon/images/tree-icon_07.png",
	name: "监督办"
}, {
	icon: "./img/icon/images/tree-icon_07.png",
	name: "检委办"
}, {
	icon: "./img/icon/images/tree-icon_07.png",
	name: "检察技术"
}];
/*指标权限*/
var indexPermissionsNodes = [{
		name: "侦监",
		open: true,
		children: [{
			name: "不捕复议复核情况",
			children: [{
				icon: "./img/icon/images/tree-icon_07.png",
				name: "不捕复议复核（人）"
			}, {
				icon: "./img/icon/images/tree-icon_07.png",
				name: "不捕复议复核改变原决定（人）"
			}, {
				icon: "./img/icon/images/tree-icon_07.png",
				name: "不捕复议复核维持原决定（人）"
			}, {
				icon: "./img/icon/images/tree-icon_07.png",
				name: "复核结果合计（人）"
			}]
		}, {
			name: "捕后处理情况",
			children: [{
				icon: "./img/icon/images/tree-icon_07.png",
				name: "捕后撤案率（%）"
			}, {
				icon: "./img/icon/images/tree-icon_07.png",
				name: "捕后生效裁判（人）"
			}, {
				icon: "./img/icon/images/tree-icon_07.png",
				name: "捕后轻刑比率（%）"
			}, {
				icon: "./img/icon/images/tree-icon_07.png",
				name: "捕后无罪裁判率（%）"
			}]
		}, {
			name: "受理情况",
			isParent: true
		}]
	}, {
		name: "公诉",
		children: [{
			name: "刑事抗诉和法院再审情况",
			open: true,
			children: [{
				icon: "./img/icon/images/tree-icon_07.png",
				name: "提出抗诉（件）"
			}, {
				icon: "./img/icon/images/tree-icon_07.png",
				name: "撤回抗诉率（%）"
			}, {
				icon: "./img/icon/images/tree-icon_07.png",
				name: "抗诉发回重审率（%）"
			}, {
				icon: "./img/icon/images/tree-icon_07.png",
				name: "抗诉维持原判率（%）"
			}]
		}, {
			name: "受理情况",
			children: [{
				icon: "./img/icon/images/tree-icon_07.png",
				name: "受理移送审查起诉（件）"
			}, {
				icon: "./img/icon/images/tree-icon_07.png",
				name: "受理移送审查起诉（人）"
			}, {
				icon: "./img/icon/images/tree-icon_07.png",
				name: "他院受理移送起诉后改变管辖（件）"
			}, {
				icon: "./img/icon/images/tree-icon_07.png",
				name: "他院受理移送起诉后改变管辖（人）"
			}]
		}, {
			name: "延长审查起诉期限情况",
			children: [{
				icon: "./img/icon/images/tree-icon_07.png",
				name: "延长审查起诉期限合计（件）"
			}, {
				icon: "./img/icon/images/tree-icon_07.png",
				name: "一次延长审查起诉期限（件）"
			}, {
				icon: "./img/icon/images/tree-icon_07.png",
				name: "二次延长审查起诉期限（件）"
			}, {
				icon: "./img/icon/images/tree-icon_07.png",
				name: "三次延长审查起诉期限（件）"
			}]
		}]
	}, {
		name: "民行",
		isParent: true
	}

];
/*基础指标树*/
var jczbNodes = [{
		bh: "jc1",
		id: "jc1",
		corp: "150000",
		nowCorp: "150000",
		lx: 0,
		menu: 0,
		name: "侦监",
		open: true,
		children: [{
			bh: "jc12",
			id: "jc12",
			corp: "150000",
			nowCorp: "150000",
			lx: 0,
			menu: 0,
			name: "审查逮捕工作情况基础指标",
			children: [{
				bh: "jc123",
				id: "jc123",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "侦监提前介入合计（件）"
			}, {
				bh: "jc1234",
				id: "jc1234",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "介入类别/受邀介入（件）"
			}, {
				bh: "jc12345",
				id: "jc12345",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "介入类别/主动介入（件）"
			}, {
				bh: "jc123456",
				id: "jc123456",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "介入方式/提前阅卷（件）"
			}]
		}, {
			bh: "jc1234567",
			id: "jc1234567",
			corp: "150000",
			nowCorp: "150000",
			lx: 0,
			menu: 0,
			name: "捕后处理情况基础指标",
			children: [{
				bh: "jc12345678",
				id: "jc12345678",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "批准和决定逮捕（件）"
			}, {
				bh: "jc123456789",
				id: "jc123456789",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "批准和决定逮捕（人）"
			}, {
				bh: "jc1234567890",
				id: "jc1234567890",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "捕后撤销案件合计（件）"
			}, {
				bh: "jc12345678901",
				id: "jc12345678901",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "捕后撤销案件合计（人）"
			}]
		}, {
			bh: "jc123456789012",
			id: "jc123456789012",
			corp: "150000",
			nowCorp: "150000",
			lx: 0,
			menu: 0,
			name: "受理情况",
			isParent: true
		}]
	}, {
		bh: "jc1234567890123",
		id: "jc1234567890123",
		corp: "150000",
		nowCorp: "150000",
		lx: 0,
		menu: 0,
		name: "公诉",
		children: [{
			bh: "jc12345678901234",
			id: "jc12345678901234",
			corp: "150000",
			nowCorp: "150000",
			lx: 0,
			menu: 0,
			name: "审查起诉工作情况基础指标",
			open: true,
			children: [{
				bh: "jc02345678901234",
				id: "jc02345678901234",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "提前介入合计（件）"
			}, {
				bh: "jc00345678901234",
				id: "jc00345678901234",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "介入类别/受邀介入（件）"
			}, {
				bh: "jc00045678901234",
				id: "jc00045678901234",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "介入方式/案件讨论（件）"
			}, {
				bh: "jc00005678901234",
				id: "jc00005678901234",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "介入方式/其他介入（件）"
			}]
		}, {
			bh: "jc10005678901234",
			id: "jc10005678901234",
			corp: "150000",
			nowCorp: "150000",
			lx: 0,
			menu: 0,
			name: "受理情况",
			children: [{
				bh: "jc20005678901234",
				id: "jc20005678901234",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "受理移送审查起诉（件）"
			}, {
				bh: "jc30005678901234",
				id: "jc30005678901234",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "受理移送审查起诉（人）"
			}, {
				bh: "jc40005678901234",
				id: "jc40005678901234",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "他院受理移送起诉后改变管辖（件）"
			}, {
				bh: "jc41005678901234",
				id: "jc41005678901234",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "他院受理移送起诉后改变管辖（人）"
			}]
		}, {
			bh: "jc41205678901234",
			id: "jc41205678901234",
			corp: "150000",
			nowCorp: "150000",
			lx: 0,
			menu: 0,
			name: "延长审查起诉期限情况",
			children: [{
				bh: "jc43235678901234",
				id: "jc43235678901234",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "延长审查起诉期限合计（件）"
			}, {
				bh: "jc21235678901234",
				id: "jc21235678901234",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "一次延长审查起诉期限（件）"
			}, {
				bh: "jc31235678901234",
				id: "jc31235678901234",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "二次延长审查起诉期限（件）"
			}, {
				bh: "jc42235678901234",
				id: "jc42235678901234",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "三次延长审查起诉期限（件）"
			}]
		}]
	}, {
		bh: "jc45235678901234",
		id: "jc45235678901234",
		corp: "150000",
		nowCorp: "150000",
		lx: 0,
		name: "民行",
		menu: 0,
		isParent: true
	}

];
/*业务指标树*/
var ywzbNodes = [{
		bh: "yw1",
		id: "yw1",
		corp: "150000",
		nowCorp: "150000",
		lx: 0,
		menu: 0,
		name: "侦监",
		open: true,
		children: [{
			bh: "yw12",
			id: "yw12",
			corp: "150000",
			nowCorp: "150000",
			lx: 0,
			menu: 0,
			name: "不捕复议复核情况",
			children: [{
				bh: "yw123",
				id: "yw123",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_06.png",
				name: "不捕复议复核（人）"
			}, {
				bh: "yw1234",
				id: "yw1234",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "不捕复议复核改变原决定（人）"
			}, {
				bh: "yw12345",
				id: "yw12345",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "不捕复议复核维持原决定（人）"
			}, {
				bh: "yw123456",
				id: "yw123456",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "复核结果合计（人）"
			}]
		}, {
			bh: "yw1234567",
			id: "yw1234567",
			corp: "150000",
			nowCorp: "150000",
			lx: 0,
			menu: 0,
			name: "捕后处理情况",
			children: [{
				bh: "yw12345678",
				id: "yw12345678",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "捕后撤案率（%）"
			}, {
				bh: "yw123456789",
				id: "yw123456789",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "捕后生效裁判（人）"
			}, {
				bh: "yw1234567890",
				id: "yw1234567890",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "捕后轻刑比率（%）"
			}, {
				bh: "yw12345678901",
				id: "yw12345678901",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "捕后无罪裁判率（%）"
			}]
		}, {
			bh: "yw12345678901",
			id: "yw12345678901",
			corp: "150000",
			nowCorp: "150000",
			lx: 0,
			menu: 0,
			name: "受理情况",
			isParent: true
		}]
	}, {
		bh: "yw123456789012",
		id: "yw123456789012",
		corp: "150000",
		nowCorp: "150000",
		lx: 0,
		menu: 0,
		name: "公诉",
		children: [{
			bh: "yw1234567890123",
			id: "yw1234567890123",
			corp: "150000",
			nowCorp: "150000",
			lx: 0,
			menu: 0,
			name: "刑事抗诉和法院再审情况",
			open: true,
			children: [{
				bh: "yw0234567890123",
				id: "yw0234567890123",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "提出抗诉（件）"
			}, {
				bh: "yw0034567890123",
				id: "yw0034567890123",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "撤回抗诉率（%）"
			}, {
				bh: "yw0004567890123",
				id: "yw0004567890123",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "抗诉发回重审率（%）"
			}, {
				bh: "yw0000567890123",
				id: "yw0000567890123",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "抗诉维持原判率（%）"
			}]
		}, {
			bh: "yw1000567890123",
			id: "yw1000567890123",
			corp: "150000",
			nowCorp: "150000",
			lx: 0,
			menu: 0,
			name: "受理情况",
			children: [{
				bh: "yw1100567890123",
				id: "yw1100567890123",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_06.png",
				name: "受理移送审查起诉（件）"
			}, {
				bh: "yw1110567890123",
				id: "yw1110567890123",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_06.png",
				name: "受理移送审查起诉（人）"
			}, {
				bh: "yw1111567890123",
				id: "yw1111567890123",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "他院受理移送起诉后改变管辖（件）"
			}, {
				bh: "yw2111567890123",
				id: "yw2111567890123",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "他院受理移送起诉后改变管辖（人）"
			}]
		}, {
			bh: "yw3111567890123",
			id: "yw3111567890123",
			corp: "150000",
			nowCorp: "150000",
			lx: 0,
			menu: 0,
			name: "延长审查起诉期限情况",
			children: [{
				bh: "yw4111567890123",
				id: "yw4111567890123",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "延长审查起诉期限合计（件）"
			}, {
				bh: "yw5111567890123",
				id: "yw5111567890123",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "一次延长审查起诉期限（件）"
			}, {
				bh: "yw6111567890123",
				id: "yw6111567890123",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "二次延长审查起诉期限（件）"
			}, {
				bh: "yw7111567890123",
				id: "yw7111567890123",
				corp: "150000",
				nowCorp: "150000",
				lx: 0,
				menu: 1,
				icon:"./img/icon/images/tree-icon_05.png",
				name: "三次延长审查起诉期限（件）"
			}]
		}]
	}, {
		bh: "yw8111567890123",
		id: "yw8111567890123",
		corp: "150000",
		nowCorp: "150000",
		lx: 0,
		menu: 0,
		name: "民行",
		isParent: true
	}

];
/*表字段树*/
var tableColumnNodes = [{
		name: "侦监",
		open: true,
		children: [{
			name: "T0101",
			children: [{
				name: "TYSAH(统一受案号)"
			}, {
				name: "BMSAH(部门受案号)"
			}, {
				name: "XYRBH(嫌疑人编号)"
			}, {
				name: "SLRQ(受理日期)"
			}]
		}, {
			name: "T0102",
			children: [{
				name: "TYSAH(统一受案号)"
			}, {
				name: "BMSAH(部门受案号)"
			}, {
				name: "XYRBH(嫌疑人编号)"
			}, {
				name: "SXAY_DM(涉嫌案由)"
			}]
		}, {
			name: "T0203",
			isParent: true
		}]
	}, {
		name: "公诉",
		children: [{
			name: "T0202",
			open: true,
			children: [{
				name: "CBDW_DM(承办单位)"
			}, {
				name: "CBBM_DM(承办部门)"
			}, {
				name: "SAAY_DM(涉案案由)"
			}, {
				name: "BQSJDRQ_DATE(不起诉决定日期)"
			}]
		}, {
			name: "T0205",
			children: [{
				name: "YSCPRQ_DATE(一审裁判日期)"
			}, {
				name: "YSAY_DM(移诉案由)"
			}, {
				name: "QSZM_DM(起诉罪名)"
			}, {
				name: "QSQTZM_DM(起诉其他罪名)"
			}]
		}, {
			name: "T0209",
			children: [{
				name: "BJRQ_DATE(办结日期)"
			}, {
				name: "PCFFZJSLF_NUM(排除非法证据数量(份))"
			}, {
				name: "YAAY_DM(原案案由)"
			}, {
				name: "SLRQ_DATE(受理日期)"
			}]
		}]
	}, {
		name: "民行",
		isParent: true
	}

];
/*维度树*/
var dimensionNodes = [{
	name: "案由",
	children: [{
		lx: 1,
		icon:"./img/icon/images/tree-icon_03.png",
		name: "追索赡养费、抚养费、抚育费"
	}, {
		lx: 1,
		icon:"./img/icon/images/tree-icon_03.png",
		name: "道路交通事故造成人身伤害"
	}, {
		lx: 1,
		icon:"./img/icon/images/tree-icon_03.png",
		name: "其他民事案件"
	}]
}, {
	name: "职级",
	children: [{
		lx: 1,
		icon:"./img/icon/images/tree-icon_03.png",
		name: "无职级"
	}, {
		lx: 1,
		icon:"./img/icon/images/tree-icon_03.png",
		name: "未定级的干部"
	}, {
		lx: 1,
		icon:"./img/icon/images/tree-icon_03.png",
		name: "办事员"
	}, {
		lx: 1,
		icon:"./img/icon/images/tree-icon_03.png",
		name: "科员级"
	}, {
		lx: 1,
		icon:"./img/icon/images/tree-icon_03.png",
		name: "乡科级副职"
	}, {
		lx: 1,
		icon:"./img/icon/images/tree-icon_03.png",
		name: "乡科级正职"
	}]
}];
/*数据配置树*/
var dataSetNodes = [{name:"核心数据",
						open: true,
						children:[{name:"核心数据"},
								  {name:"公诉",
								  children:[
								  		{icon:"./img/icon/images/tree-icon_07.png",name:"一审案件审结率"},
										{name:"辅助数据", 
										children:[
											{icon:"./img/icon/images/tree-icon_07.png",name:"书面纠正审判违法数(件)"}
										]}
								]
								},
								{icon:"./img/icon/images/tree-icon_07.png",name:"侦监"},
//								{icon:"./img/icon/images/tree-icon_07.png",name:"反贪"},
//								{icon:"./img/icon/images/tree-icon_07.png",name:"反渎"},
								{icon:"./img/icon/images/tree-icon_07.png",name:"执检"},
								{icon:"./img/icon/images/tree-icon_07.png",name:"民行"},
								{icon:"./img/icon/images/tree-icon_07.png",name:"控告"},
								{icon:"./img/icon/images/tree-icon_07.png",name:"申诉"},
//								{icon:"./img/icon/images/tree-icon_07.png",name:"预防"},
								{icon:"./img/icon/images/tree-icon_07.png",name:"未检"}
						]
			}];
/*案件详情*/			
var ajxqNodes = [
	{
		name:"查看承前后续",
		icon: "./img/icon/images/tree-icon_07.png",
	},
	{
		name:"核心数据、常规分析",
		icon: "./img/icon/images/tree-icon_07.png",
	    children: [{
	    	name:"查看案件列表",
	    	icon: "./img/icon/images/tree-icon_07.png",
	    }, {
	    	name:"查看案件详情",
	    	icon: "./img/icon/images/tree-icon_07.png",
	    }, {
	    	name:"查看案件承前后续",
	    	icon: "./img/icon/images/tree-icon_07.png",
	    }]
	}
];
/*************************初始化************************/
$(document).ready(function() {
	var pageUrl = getPage();
	switch(pageUrl){
	/*首页面--业务分析树*/
//	case "index":
//	    $.fn.zTree.init($("#scqsTree"), clickSetting, scqsTree);
//	    $.fn.zTree.init($("#zchdTree"), clickSetting, zchdTree);
//	    $.fn.zTree.init($("#zcjdTree"), clickSetting, zcjdTree);
//	break;
	/*报告库*/
//	case "bgk":
//		corpId = "150000";
//		zTreeObj = $.fn.zTree.init($("#bgkTree"), editSetting1, fxbg);
//		zTree = $.fn.zTree.getZTreeObj("bgkTree");
//		rMenu = $("#rMenu");
//	break;
	/*新增分析体系*/
//	case "xzfxtx":
//	    corpId = "150000";
//		zTreeObj = $.fn.zTree.init($("#xzfxtxTree"), editSetting, xzfxtxNodes);
//		zTree = $.fn.zTree.getZTreeObj("xzfxtxTree");
//		rMenu = $("#rMenu");
//	break;
	/*编辑分析体系页面*/
//	case "list_edit":
//		corpId = "150000";
//		zTreeObj = $.fn.zTree.init($("#editfxtxTree"), editSetting, fxtxbg);
//		zTree = $.fn.zTree.getZTreeObj("editfxtxTree");
//		rMenu = $("#rMenu");
//	break;
	/*分析体系预览*/
//	case "list_pre":
//	    $.fn.zTree.init($("#prefxtxTree"), setting1, fxtxbg);
//	break;
	/*报告列表--分析体系无报告节点---多选*/
//	case "bglb":
//	    $.fn.zTree.init($("#bglbTree"), checkBoxSetting, fxtxNobg);
//	break;
	/*业务指标、维度-多选、组织机构-多选、基础指标*/
//	case "ywzbwh":
//		corpId = "150000";
//		zTreeObj = $.fn.zTree.init($("#ywzbTree"), indexEditSetting, ywzbNodes);
//		zTree = $.fn.zTree.getZTreeObj("ywzbTree");
//		rMenu = $("#rMenu");
//	
//	    $.fn.zTree.init($("#wdTree"), dimCheckBoxSetting, dimensionNodes);
//	    $.fn.zTree.init($("#zzjgTree"), roleCheckBoxSetting, zzjgNodes2);
//	    $.fn.zTree.init($("#jczbTree"), clickSetting2, jczbNodes);
//	break;
	/*基础指标、表字段*/
//	case "jczbwh":
//		corpId = "150000";
//		zTreeObj = $.fn.zTree.init($("#jczbTree"), indexEditSetting, jczbNodes);
//		zTree = $.fn.zTree.getZTreeObj("jczbTree");
//		rMenu = $("#rMenu");
//	    
//	    $.fn.zTree.init($("#tableTree"), setting, tableColumnNodes);
//	break;
	/*人员权限维护 组织机构、角色-多选、功能权限-多选*/
	case "ryqxwh":
	    $.fn.zTree.init($("#zzjgTree"), zzjgSetting, zzjgNodes);
	    $.fn.zTree.init($("#roleTree"), roleCheckBoxSetting, roleNodes);
	    $.fn.zTree.init($("#funcTree"), roleCheckBoxSetting, functionNodes);
	    $.fn.zTree.init($("#rangeTree"), roleCheckBoxSetting, rangeNodes);
	    $.fn.zTree.init($("#ajlxTree"), roleCheckBoxSetting, ajlxqxNodes);
	    $.fn.zTree.init($("#ajxqTree"), roleCheckBoxSetting, ajxqNodes);
	    $.fn.zTree.init($("#indexTree"), roleCheckBoxSetting, indexPermissionsNodes);
	    $.fn.zTree.init($("#fxbgTree"), ryqxCheckBoxSetting, funcFxbg);
	break;
	/*个人权限管理*/
	case "grqxgl":
	    $.fn.zTree.init($("#zzjgTree"), zzjgSetting, zzjgNodes);
	    $.fn.zTree.init($("#roleTree"), roleCheckBoxSetting, roleNodes);
	    $.fn.zTree.init($("#funcTree"), roleCheckBoxSetting, functionNodes);
	    $.fn.zTree.init($("#spqxTree"), roleCheckBoxSetting, functionNodes);
	    $.fn.zTree.init($("#ssqxTree"), roleCheckBoxSetting, functionNodes);
	    $.fn.zTree.init($("#fcqxTree"), roleCheckBoxSetting, functionNodes);
	    $.fn.zTree.init($("#dasjqxTree"), zzjgSetting, zzjgNodes);
	    $.fn.zTree.init($("#ajsjqxTree"), zzjgSetting, zzjgNodes);
	break;
	/*角色权限管理*/
	case "jsqxgl":
	    $.fn.zTree.init($("#zzjgTree"), zzjgSetting, zzjgNodes);
	    $.fn.zTree.init($("#roleTree"), roleCheckBoxSetting, roleNodes);
	    $.fn.zTree.init($("#funcTree"), roleCheckBoxSetting, functionNodes);
	    $.fn.zTree.init($("#spqxTree"), roleCheckBoxSetting, functionNodes);
	    $.fn.zTree.init($("#ssqxTree"), roleCheckBoxSetting, functionNodes);
	    $.fn.zTree.init($("#fcqxTree"), roleCheckBoxSetting, functionNodes);
	    $.fn.zTree.init($("#dasjqxTree"), zzjgSetting, zzjgNodes);
	    $.fn.zTree.init($("#ajsjqxTree"), zzjgSetting, zzjgNodes);
	break;
	/*登录信息管理*/
	case "dlxxgl":
	    $.fn.zTree.init($("#zzjgTree"), zzjgSetting, zzjgNodes);
	break;
	/*档案中心-个人基本信息*/
	case "grjbxx":
	    $.fn.zTree.init($("#zzjgTree"), zzjgSetting, zzjgNodes);
	break;
	/*档案中心-接受监督情况*/
    case "jsjdqk":
	    $.fn.zTree.init($("#zzjgTree"), zzjgSetting, zzjgNodes);
	break;
	/*角色权限维护 角色树、 （功能权限树、范围权限树、案件类别权限树、指标权限树、报告权限树）-多选*/
//	case "jsqxwh":
//	    $.fn.zTree.init($("#roleTree"), zzjgSetting, roleNodes);
//	    $.fn.zTree.init($("#funcTree"), roleCheckBoxSetting, functionNodes);
//	    $.fn.zTree.init($("#rangeTree"), roleCheckBoxSetting, rangeNodes);
//	    $.fn.zTree.init($("#ajxqTree"), roleCheckBoxSetting, ajxqNodes);
//	    $.fn.zTree.init($("#ajlxTree"), roleCheckBoxSetting, ajlxqxNodes);
//	    $.fn.zTree.init($("#indexTree"), roleCheckBoxSetting, indexPermissionsNodes);
//	    $.fn.zTree.init($("#fxbgTree"), ryqxCheckBoxSetting, funcFxbg);
//	break;
	/*核心数据显示配置 数据配置树-多选、组织机构、组织机构-多选*/
//	case "hxsjxspz":
//	    $.fn.zTree.init($("#dataTree"), roleCheckBoxSetting, dataSetNodes);
//	    $.fn.zTree.init($("#zzjgTree"), setting, dwNodes);
//	    $.fn.zTree.init($("#zzjgTree2"), checkBoxSetting, dwNodes);
//	break;
	/*人员信息维护 组织机构树、组织机构树*/
//	case "ryxxwh":
//	    $.fn.zTree.init($("#zzjgTree"), roleCheckBoxSetting, zzjgNodes);
//	    $.fn.zTree.init($("#zzjgTree2"), zzjgSetting, zzjgNodes);
//	break;
	/*新增分析报告 报告树-无报告节点-单选、 分析体系树-多体系节点-多选、组织机构树-多选*/
//	case "bglb_xzfxbg":
//	    $.fn.zTree.init($("#fxbgTree"), checkBoxSetting, fxbgNo);
//	    $.fn.zTree.init($("#fxtxTree"), checkBoxSetting, fxtxNobg);
//	    $.fn.zTree.init($("#zzjgTree"), roleCheckBoxSetting, zzjgNodes2);
//	break;
	/*挂接报告*/
//	case "pop":
//		gjbgTree = $.fn.zTree.init($("#fxbgTree"), gjbgCheckBoxSetting, fxbg);
//	break;
	}
});
var zzjgNodes2 = [{
		name: "XXX省人民检察院",
		open: true,
		children: [{
			name: "信息化建设管理处",
			children: [{
				name: "齐XX",
				icon: "./img/icon/images/tree-icon_02.png"
			}, {
				icon: "./img/icon/images/tree-icon_02.png",
				name: "王XX"
			}, {
				icon: "./img/icon/images/tree-icon_02.png",
				name: "赵XX"
			}, {
				icon: "./img/icon/images/tree-icon_02.png",
				name: "张X"
			}]
		}, {
			name: "院领导",
			children: [{
				icon: "./img/icon/images/tree-icon_02.png",
				name: "马XX"
			}, {
				icon: "./img/icon/images/tree-icon_02.png",
				name: "韦XX"
			}, {
				icon: "./img/icon/images/tree-icon_02.png",
				name: "张XX"
			}, {
				icon: "./img/icon/images/tree-icon_02.png",
				name: "李XX"
			}]
		}, {
			name: "检委会办公室",
			isParent: true
		}]
	}
];
function getPage(){
	return localStorage.getItem('pageStorage');
}
