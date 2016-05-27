$(function(){
	var openBtn = $("#choose_btn"),
		closeBtn = $("#goods_select_close"),
		gooSel = $("#goods_select"),
		gooCan = $("#goods_select_cancel");
	// 打开筛选
	openBtn.on('click', function(event) {
		gooSel.show();
	});
	// 关闭筛选
	closeBtn.on('click', function(event) {
		gooSel.hide();
	});
	gooCan.on('click',function(event) {
		var dl = gooSel.find('dl'),
			span = dl.children('dt').children('span');
		dl.data('value', -1);
		span.html("全部");
	});
	// 打开子筛选
	gooSel.on('click', 'dt', function(event) {
		var son = $(this).parent("dl").find('.goods_select_son');
		son.show();
	});
	// 关闭子筛选
	gooSel.on('click', '.goods_select_close , .enter', function(event) {
		var son = $(this).parent().parent('.goods_select_son');
		son.hide();
	});
	// 点击子筛选列表时,将值赋予到父筛选 dl 元素上(最终根据所有的dl的 data-value 值进行筛选工作)
	gooSel.on('click', 'li', function(event) {
		var li = $(this),
			liVal = li.data('value'),
			liName= li.html(),
			dl = li.parent("ul").parent("section").parent("div").parent("dd").parent('dl');
		li.addClass('on').siblings('li').removeClass('on');
		dl.data('value',liVal);
		dl.children('dt').children('span').html(liName);
		// console.log(dl.data('value'));
	});
	// 子筛选 点击取消时,恢复默认
	gooSel.on('click', '.cancel', function(event) {
		var li = $(this).parent("footer").siblings('section').find('li').eq(0),
			liVal = li.data('value'),
			liName= li.html(),
			dl = $(this).parent("footer").parent("div").parent("dd").parent("dl");
		li.addClass('on').siblings('li').removeClass('on');
		dl.data('value',liVal);
		dl.children('dt').children('span').html(liName);
	});
})