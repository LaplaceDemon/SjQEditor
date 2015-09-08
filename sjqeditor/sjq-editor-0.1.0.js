(function($){
	/**
	* 定义编辑器。
	*/
	$.fn.sjqEditor = function(){
		
		/**
		 * 以下两个函数来自 http://www.jeasyuicn.com/to-obtain-the-iframe-window-object-and-document-object.html
		 */
		function getFrameDocument(frame){
			return frame && typeof(frame)=='object' && frame.tagName == 'IFRAME' && frame.contentDocument || frame.contentWindow && frame.contentWindow.document || frame.document;
		}
		function getFrameWindow(frame){
			return frame && typeof(frame)=='object' && frame.tagName == 'IFRAME' && frame.contentWindow;
		}
		
		function _createButton(title,callback){
			/*var $btn = $("<div><a href='javascript:void(\""+title+"\");'>"+title+"</a></div>").addClass("button");*/
			var $btn = $("<div><input value='"+title+"' type='button'/></div>").addClass("button");
			$btn.click(callback);
			return $btn;
		}
		
		var iframeDocumentHTML =  '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">'+
		'<html><head></head><body></body></html>';
		
		//声明基本jQuery对象。
		var $this = this;
		$this.addClass("sjqEditor");
		var $toolbar = $("<div></div>").addClass("toolbar");
		var $editArea = $("<div></div>").addClass("editarea");
		var $iframe = $("<iframe></iframe>").addClass("editframe");
		
		var _iframeDocument = null;
		var _iframeWindow = null;
		//创建按钮。
		var $btn0 = _createButton("加粗",function(){
			_iframeDocument.execCommand("Bold");
		});
		var $btn1 = _createButton("斜体",function(){
			_iframeDocument.execCommand("Italic");
		});
		var $btn2 = _createButton("下划线",function(){
			_iframeDocument.execCommand("Underline");
		});
		var $btn3 = _createButton("水平分割条",function(){
			_iframeDocument.execCommand("InsertHorizontalRule");
		});
		var $btn4 = _createButton("带数字的列表",function(){
			_iframeDocument.execCommand("InsertOrderedList");
		});
		var $btn5 = _createButton("带点的列表",function(){
			_iframeDocument.execCommand("InsertOrderedList");
		});
		var $btn6 = _createButton("置中",function(){
			_iframeDocument.execCommand("JustifyCenter");
		});
		var $btn7 = _createButton("置左",function(){
			_iframeDocument.execCommand("JustifyLeft");
		});
		var $btn8 = _createButton("置右",function(){
			_iframeDocument.execCommand("JustifyRight");
		});
		var $btn9 = _createButton("置全",function(){
			_iframeDocument.execCommand("JustifyFull");
		});
		var $btn10 = _createButton("缩进",function(){
			_iframeDocument.execCommand("Indent");
		});
		var $btn11 = _createButton("缩退",function(){
			_iframeDocument.execCommand("outdent");
		});
		var $btn12 = _createButton("清除格式",function(){
			_iframeDocument.execCommand("RemoveFormat");
		});
		var $btn13 = _createButton("选中所有",function(){
			_iframeDocument.execCommand("SelectAll");
		});
		var $btn14 = _createButton("删除线",function(){
			_iframeDocument.execCommand("StrikeThrough");
		});
		var $btn15 = _createButton("下标",function(){
			_iframeDocument.execCommand("Subscript");
		});
		var $btn16 = _createButton("上标",function(){
			_iframeDocument.execCommand("Superscript");
		});
		var $btn17 = _createButton("链接",function(){
			var link = _iframeWindow.prompt("请输入链接.");
			_iframeDocument.execCommand("CreateLink",false,link);
		});
		var $btn18 = _createButton("取消链接",function(){
			_iframeDocument.execCommand("Unlink");
		});
		var $btn19 = _createButton("字体颜色",function(){
			var color = _iframeWindow.prompt("请输入颜色.");
			_iframeDocument.execCommand("ForeColor",false,color);
		});
		var $btn20 = _createButton("背景色",function(){
			var color = _iframeWindow.prompt("请输入颜色.");
			_iframeDocument.execCommand("BackColor",false,color);
		});
		var $btn21 = _createButton("插入图片",function(){
			var url = _iframeWindow.prompt("请输入图片链接地址.");
			_iframeDocument.execCommand("InsertImage",false,url);
		});
		
		//构建基本html。
		//添加按钮。
		$toolbar.append($btn0,$btn1,$btn2,
						$btn3,$btn4,$btn5,
						$btn6,$btn7,$btn8,
						$btn9,$btn10,$btn11,
						$btn12,$btn13,$btn14,
						$btn15,$btn16,$btn17,
						$btn18,$btn19,$btn20,$btn21
		);
		$editArea.append($iframe);
		$this.append($toolbar);
		$this.append($editArea);
		
		//大小设置
		var height0 = $this.innerHeight();
		var height1 = $toolbar.outerHeight();
		var dh = height0-height1;
		$editArea.height(dh);
		$iframe.height(dh);
		
		var iframeDocument = getFrameDocument($iframe[0]);
		var iframeWindow = getFrameWindow($iframe[0]);
		_iframeDocument = iframeDocument;
		_iframeWindow = iframeWindow;
		//设置iframe的document对象。
		iframeDocument.open();
		iframeDocument.write(iframeDocumentHTML);
		iframeDocument.close();
		iframeDocument.designMode = 'on';
		$("body",iframeDocument).css("margin","0px");
	}
})(jQuery);