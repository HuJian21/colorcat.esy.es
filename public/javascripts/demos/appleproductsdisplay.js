window.onload = function () {
	var controllers = document.getElementById('js-controller').getElementsByTagName('a');
	var caret = document.getElementById('js-controller').getElementsByTagName('span')[0];
	var items = document.getElementById('js-display-box').getElementsByTagName('li');
	//alert(items.length);
	var len = items.length;
	var timer = null;

    //转化为定位
	for (var i = 0; i < len; i++) {
		items[i].index = i;
		items[i].style.position = 'absolute';
		items[i].style.left = i * 140 + 'px';
	}

	controllers[1].onclick = function () {

		var i = 0;
		clearTimeout(timer);

		function itemsMove() {			
			if (i < len/2) {
				doMove(items[i],'left',70,-140);
				timer = setTimeout(itemsMove,100);
				i++;
			}
			else {
				timer = setTimeout(itemsMove2,100);    //后面len/2个items出现的时间
			}
		}

		function itemsMove2() {
			if (i < len) {
				doMove(items[i],'left',70,(i - 6)*140);
				timer = setTimeout(itemsMove2,100);
				i++;
			}
		}

		itemsMove();

		controllers[0].className = '';
		this.className = 'show';
		doMove(caret,'left',10,520);
					
	}

	controllers[0].onclick = function () {

		var i = len-1;
		clearTimeout(timer);

		function itemsMove() {			
			if (i < len/2) {
				doMove(items[i],'left',70,-140);
				timer = setTimeout(itemsMove,100);
				i--;
				if (i === 0) {
					i = 0;
				}
			}
			else {
				timer = setTimeout(itemsMove2,100);
			}
		}

		function itemsMove2() {
			if (i >= 0) {
				doMove(items[i],'left',70,i*140);
				timer = setTimeout(itemsMove2,100);
				i--;
			}
		}

		itemsMove();

		controllers[1].className = '';
		this.className = 'show';
		doMove(caret,'left',10,420);
	}

	


}