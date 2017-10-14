var deleteNodeTemp = new Array();	

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
	function addTreeNode(position) {
		hideRMenu();
		var uid = uuid();
		var newNode = { name:"新增节点" + (addCount++), lx:0, bh:uid, id:uid, corp:corpId, nowCorp:corpId};
		
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
			//暂存删除的节点
			var json = rebuildNode(nodes[0]);
			json["deleteType"] = "delete";
			deleteNodeTemp.push(json);

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
		if($("#treeDemo")[0].childNodes.length < 1){
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
	
	var curSrcNode;
	/**
     *
     * 设置待复制节点
     * @param treeNode 待设置节点对象
     *
     */
	function setCurSrcNode(treeNode) {
		var zTree = $.fn.zTree.getZTreeObj("treeDemo");
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
			treeNode.icon = "/plugin/ztree/css/zTreeStyle/img/loading.gif";
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