	function alertWindow(dialog) {

			var dialogContent = null;   // 一个常用到的全局DOM对象
			var oBody = $('body');
			var maskLayer = null;


		    // 将对象转化为数组进行遍历
		    function transform(obj){
			    var arr = [];
			    for(var item in obj){
			        arr.push(obj[item]);
			    }
			    return arr;
			}

		    // 设置默认值
		    (function setDefault() {
		    	if (typeof dialog.buttonNum === 'undefined') {
			    	dialog.buttonNum = 1;
			    	dialog.buttonText = {
						text1: '确定'
					}
			    }

			    if ((dialog.buttonNum === 2) && (typeof dialog.buttonText === 'undefined')) {
			    	dialog.buttonText = {
			    		text1: '确定',
						text2: '取消'
			    	}
			    }

			    if (typeof dialog.Title === 'undefined') {
			    	dialog.Title = false;
			    }

			    if (typeof dialog.titleType === 'undefined') {
			    	dialog.titleType = 'text';
			    }

			    if (typeof dialog.contentType === 'undefined') {
			    	dialog.contentType = 'text';
			    }

			    if (typeof dialog.eventType === 'undefined') {
			    	dialog.eventType = 'click';
			    }

		    })();
		    
		    //创建按钮
		    function makeButton() {

		    	var buttonTexts = transform(dialog.buttonText);
		    	var dialogButtons = $('.dialog-buttons');
		    	// 创建文档碎片减少append次数
		    	var oFragment = document.createDocumentFragment();

		    	if (typeof dialogButtons === 'object') {
		    		dialogButtons.html('');
		    	}
		    	
		    	for (var i = 1; i <= dialog.buttonNum; i++) {
		    		var newButton = '<div class="button" id="js-button' + i + '"></div>';
		    		$(oFragment).append(newButton);
		    	}
		    	dialogButtons.append(oFragment);

		    	$('.button').each(function (index) {
					$(this).html(buttonTexts[index]);
				});
		    }

		    //创建标题

		    function makeTitle() {
		    	var dialogTitle = $('.dialog-title');

		    	dialogTitle.html('');
		    	var newTitle = '<h3 class="dialog-title"></h3>';
		    	$(newTitle).insertBefore(dialogContent);
		    }

		    //创建弹窗
			function makeWindow() {

				//创建弹窗的dom结构
				var sWindow = '<div class="masklayer"><div class="dialog"><img src="../../images/demos/close_ico.png" class="close"><div class="dialog-content"></div><div class="dialog-buttons"><div class="button"></div></div></div>';
				maskLayer = $('.masklayer');
				maskLayer.remove();
				$('body').append(sWindow);
				//修正弹窗宽度为小数时，按钮出现不能占满弹窗的Bug
				var parseIntWidth = $('.dialog').css('width');
				$('.dialog').css("width",parseIntWidth);
				
				dialogContent = $('.dialog-content');

				//将按钮加入dom
				makeButton();

				//将标题加入dom
				if ((dialog.Title === true) && (dialog.contentType === 'text')) {
					makeTitle();
					dialogContent.addClass('dialog-content-titletrue');
				}

				else if (dialog.Title === true) {
					makeTitle();
				}
				 
				else if (dialog.Title === false) {
					dialogContent.addClass('dialog-content-titlefalse');
				}
		    }

		    var makeWindowLock = true;

			if (dialog.eventType === 'click') {
		    	dialog.ClickButton.click(function () {
		    		if (makeWindowLock === true) {
		    			setWindow();
		    			makeWindowLock = false;
		    		}
		    	});
		    }
		    else if (dialog.eventType === 'callback') {
		    	if (makeWindowLock === true) {
		    		setWindow();
		    		makeWindowLock = false;
		    	}
		    }

		    // 设置弹窗内容和行为
			function setWindow() {

				// 创建弹窗
				makeWindow();

				// 设置标题内容
				if (dialog.Title) {
					if (dialog.titleType === 'text') {
						$('.dialog-title').html(dialog.titleContent);
					}
					else if (dialog.titleType === 'html') {
						$('.dialog-title').html('').append(dialog.titleContent);
					}	
				}	

				// 设置content内容
				if (dialog.contentType === 'text') {
					dialogContent.html(dialog.content);
				}

				else if (dialog.contentType === 'html') {
					dialogContent.html('').append(dialog.content);
				}
				
				// 显示弹窗
				maskLayer.css('display','block');

                // 按钮点击的行为
				$('#js-button2, .close').on('click',function () {
					$('.masklayer').css('display','none');
					makeWindowLock = true;
				});

				$('#js-button1').on('click',function () {
					$('.masklayer').css('display','none');
					makeWindowLock = true;
					if (dialog.clickFn instanceof Function) {
						dialog.clickFn();
					}
				});

				
			}
	}
