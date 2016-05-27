// by Jian
function $(id) {
	return typeof id === 'string' ? document.getElementById(id) : id;
}

window.onload = function() {
	var tab = $('notice');
	var divs = $("notice-content").getElementsByTagName("div");
	var titles = $("notice-title").getElementsByTagName("li");
	var len = titles.length;

	if (divs.length !== titles.length) {
		return;
	}

	divs[0].style.display = 'block';
	
	var index = 0;
	var timer = null;

	function autoPlay() {
		timer = setInterval(function () {
			index += 1;
			index %=  len;
			changeOption(index);
			// index = currentIndex;
		},2000);
	}

	autoPlay();

	tab.onmouseover = function () {
		clearInterval(timer);

		for (var i = 0; i < len; i++) {
			titles[i].index = i;
			titles[i].onmouseover = function () {
				index = this.index;         //将当前页签的index给递增的index，再次移入时从新index开始
				changeOption(this.index);
			}
		}
	}

	tab.onmouseout = function () {
		autoPlay();
	}

	function changeOption(currentIndex) {
		for (var i = 0; i < len;i++) {
				titles[i].className = '';
				divs[i].style.display = 'none';
			}

			titles[currentIndex].className = 'select';
			divs[currentIndex].style.display = 'block';
	}


}