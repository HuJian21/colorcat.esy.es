window.onload = function () {
	var container = document.getElementsByTagName('ul')[0];
	var hover = container.getElementsByTagName('li');

	var len = hover.length;
	var distance = 30;    //图片间隔
	var maxWidth = hover[0].offsetWidth;

	//用js设置了样式
	for (var i = 1; i < len; i++) {
		hover[i].style.left = (maxWidth - (len - 1)*distance) + (i-1)*distance + 'px';
	}

	for (var i = 0; i < len; i++) {
		hover[i].index = i;
		hover[i].onmouseover = function () {
			for (var i = 0; i < len; i++) {
				//对 <= this.index的 i 执行 doMove 函数 向左运动
				if (i <= this.index) {
					console.log(i);
					doMove(hover[i],'left',20,i*distance);
				}
				//对 > this.index的 i 执行 doMove 函数 向右运动
				else {
					doMove(hover[i],'left',20,(maxWidth - (len - 1)*distance + (i-1) * distance));
				}
			}
		}
	}
}