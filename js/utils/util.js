function alertDiv(text) {
    var tipPop = document.createElement("div");
    tipPop.className = "tip-pop";
    tipPop.textContent = text;
    tipPop.onclick = function() {
        var obj = $(this);
        var rmoveWidth = tipPop.offsetWidth;
    	var increamWidth = 0;
    	tipPop.style.wordBreak = "keep-all";
    	tipPop.style.whiteSpace = "nowrap";
        tipPop.style.overflow = "hidden";
        var timer = setInterval(function() {
        	tipPop.style.width = rmoveWidth + "px";
        	rmoveWidth = rmoveWidth - 3;
    		if (rmoveWidth <= 0) {
    			clearInterval(timer);
    			obj.remove();
    		}
    	}, 1);
    };
    document.body.appendChild(tipPop);
    var width = tipPop.offsetWidth;
    if(width < 250){
    	width = 250;
    }
    tipPop.style.wordBreak = "keep-all";
    tipPop.style.whiteSpace = "nowrap";
    tipPop.style.overflow = "hidden";
    tipPop.style.width = 0 + "px";
    var increamWidth = 0;
    var timer = setInterval(function() {
    	tipPop.style.width = increamWidth + "px";
    	increamWidth = increamWidth + 3;
		if (increamWidth > width) {
			clearInterval(timer);
			tipPop.style.wordBreak = "";
		    tipPop.style.overflow = "";
		    tipPop.style.whiteSpace = "";
		}
	}, 1);
    setTimeout(function(){
    	var rmoveWidth = tipPop.offsetWidth;
    	var increamWidth = 0;
    	tipPop.style.wordBreak = "keep-all";
    	tipPop.style.whiteSpace = "nowrap";
        tipPop.style.overflow = "hidden";
        var timer = setInterval(function() {
        	tipPop.style.width = rmoveWidth + "px";
        	rmoveWidth = rmoveWidth - 3;
    		if (rmoveWidth <= 0) {
    			clearInterval(timer);
    			$(".tip-pop").remove();
    		}
    	}, 1);
    }, 3000)
}
function alertPop(title, divObj){
	var pop = document.createElement("div");
	pop.className = "pop-over";
	document.body.appendChild(pop);
	document.getElementById("popTitle").innerText = title;
	document.getElementById("popContent").appendChild(divObj);
	$("#pop").show();
}
function cancel(callback, args){
	$("#pop").remove();
	$(".pop-over").remove();
	callback(false, args);
}
function sure(callback, args){
	$("#pop").remove();
	$(".pop-over").remove();
	callback(true, args);
}

/*
 * 名称：组件模拟
 * 适用：所有表单组件
 */
function simulateRadio(){
	$("body").find("input[type=radio]").each(function(){
		var _radio = $(this);
		_radio.css("display","none");
		var _text = _radio.prop("value");
		var _span;
		_radio.prop('checked')?_span="<span class='radio checked'>"+_text+"</span>":_span="<span class='radio'>"+_text+"</span>";
		_radio.after(_span);
	});
	simulateRadioClick();
}
function simulateRadioClick(){
	$("body").on("click",".radio",function(){
		var _this = $(this);
		if(_this.hasClass("checked")){
		}else{
			_this.addClass('checked');
			_this.siblings(".radio").removeClass('checked');
			_this.siblings("input[type='radio']").prop('checked',false);
			_this.prev().prop('checked',true);
		}
	})
}
function simulateCheckBox(){
	$("body").find("input[type=checkbox]:not(.release)").each(function(){
		var _checkbox = $(this);
		_checkbox.css("display","none");
		var _text = _checkbox.prop("value");
		var _span;
		_checkbox.prop('checked')?_span="<span class='checkbox checked'>"+_text+"</span>":_span="<span class='checkbox'>"+_text+"</span>";
		_checkbox.after(_span);
	});
	simulateCheckBoxClick();
}
function simulateCheckBoxClick(){
	$("body").on("click",".checkbox:not(.release)",function(){
		var _this = $(this);
		if(_this.hasClass("checked")){
			_this.removeClass('checked');
			_this.prev().prop('checked',false);
		}else{
			_this.addClass('checked');
			_this.prev().prop('checked',true);
		}
	})
}
function simulateSelect(){
	$("body").find("select").each(function(){
		var _select = $(this);
		_select.css("display","none");
		var _lis="" , _text="" , _value="";
		var _options = _select.find("option");
		_value = _options[0].value;
		_text = _options[0].text;
		for(var i = 0;i<_options.length;i++){
			_lis+="<li value='"+_options[i].value+"'>"+_options[i].text+"</li>";
		}
		_selectDiv="<div class='select'>"+
		"<div><span value='"+_value+"'>"+_text+"</span><i></i></div><ul>"+_lis+"</ul></div>";
		_select.after(_selectDiv);
	})
	simulateSelectClick();
}
function simulateSelectClick(){
	$("body").on("click",".select",function(e){
		var _this = $(this);
		$(".select ul").not(_this.find("ul")).hide();
		$(".select").not(_this).removeClass('open');
		var _this = $(this);
		if(_this.hasClass("open")){
			_this.removeClass('open');
			_this.find('ul').hide();
		}else{
			_this.addClass('open');
			_this.find('ul').show();
		}
		e.stopPropagation();
	});
	$("body").on("click",".select li",function(e){
		var _clickli = $(this);
		var _select = $(this).parents('.select');
		_select.find('span').text(_clickli.text());
		_select.find('span').attr("value",_clickli.attr("value"));
		_select.prev().find("option[value='"+_clickli.attr("value")+"']").attr("selected",true);
		$(".select").removeClass('open');
        $(".select ul").hide();
        e.stopPropagation();
	});
	$(document).click(function(){
		$(".select").removeClass('open');
        $(".select ul").hide();
    });
}
function simulateInit(){
	simulateRadio();
	simulateCheckBox();
	simulateSelect();
}
function setPage(pageUrl) {
	localStorage.setItem('pageStorage', pageUrl);
}
$('.tabs a').click(function() {
	var _this = $(this);
	var _index = _this.index();
	_this.parent().find('span').hide();
	var _activeContent = _this.parents('.tabs').siblings('.tabContents').children('div');
	_this.addClass('active').siblings('a').removeClass('active');
	_activeContent.eq(_index).addClass('show').siblings().removeClass('show');
	_this.parent().find('span').eq(_index).show();
})
/*表格内开启状态列按钮滑动*/
$('.slipRadio input').click(function() {
	if($(this).attr('name') === 'release') {
		$('.slipRadio input').removeClass('open');
		$(this).addClass('open');
	}
})
$('#cancel').click(function() {
	$('#pop').hide();
	$('.pop-over').hide();
})