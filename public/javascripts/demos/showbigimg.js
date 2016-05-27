function showBigImg(button,imgObj) {

    // len是图片的个数
	var len = imgObj.length;
	var imgSrcArr = [];

	// 将创建的图片dom放入数组
	for (var i = 0; i < len; i++) {
		imgSrcArr.push('<div class="newimg" style="background-image:url('+ imgObj[i].src + ')"></div>');
	}

	// 创建container和关闭按钮
	var imgContainerStr = '<div class="imgcontainer"></div>';

	button.on('click', function () {

		// 创建整体的dom
		$('body').append(imgContainerStr);
		var imgContainer = $('.imgcontainer');
		var newImg = $('.newimg');

		for (var i = 0; i < len; i++) {
			imgContainer.append(imgSrcArr[i]);
		}
		$('.newimg:last').append('<span class="imgcontainer_close">x</span>');

		// 关闭按钮的行为
		$('.imgcontainer_close').on('click', function () {
			imgContainer.remove();
		});

		$('.newimg').addClass('imgTwo');
		
		$('.newimg:last').css("position","relative");

		// 两张图片时的样式 
		if (len === 2) {
		   $('.newimg').css({
		   	    "height": "80%",
		   	    "margin-top": "5%"
		   });
		   $('.imgcontainer_close').css({
				"bottom": "-60px",
				"right": "20px"
			});
		   $('.newimg:first').css("margin-right","0.5%");
		}
		// 三张图片时的样式
		if (len === 3) {
			$('.newimg').css('height','49%');
			$('.newimg:first').css("margin-right","0.5%");
			$('.newimg:last').css({
				"position": "absolute",
				"left": "25%",
				"top": "50%"
			});
			$('.imgcontainer_close').css({
				"bottom": "0",
				"right": "-100px"
			});
		}
		if (len === 4) {
			$('.newimg').css('height','48%');
			$('.imgcontainer_close').css({
				"bottom": "50px",
				"right": "40px"
			});
		}



	});
}