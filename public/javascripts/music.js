$(function () {
	var isShowAll = false;
    var isPlay = [];
	for (var i = 0, musicLength = $('.musicplay').length; i < musicLength; i++) {
		isPlay.push(false);
	}
	var musicArr = [
	'<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=298 height=52 src="http://music.163.com/outchain/player?type=2&id=34274307&auto=1&height=32"></iframe>',
	'<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=298 height=52 src="http://music.163.com/outchain/player?type=2&id=26090132&auto=1&height=32"></iframe>',
	'<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=298 height=52 src="http://music.163.com/outchain/player?type=2&id=17466356&auto=1&height=32"></iframe>',
	'<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=298 height=52 src="http://music.163.com/outchain/player?type=2&id=25657148&auto=1&height=32"></iframe>',
	'<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=298 height=52 src="http://music.163.com/outchain/player?type=2&id=3405868&auto=1&height=32"></iframe>',
	'<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=298 height=52 src="http://music.163.com/outchain/player?type=2&id=122672&auto=1&height=32"></iframe>'
	];

	$('.showall').click(function () {
		if (!isShowAll) {
			$(this).parent().find('.show').css('height', 'auto');
			$(this).html('收起<span>&nbsp;∧</span>');
			isShowAll = true;
		}
		else {
			$(this).parent().find('.show').css('height', '126px');
			$(this).html('显示全部<span>&nbsp;∨</span>');
			isShowAll = false;
		}
	});

	$('.musicplay').each(function (index) {
		$(this).click(function () {
			$('.audiocontrol').html('');
			$('.musicplay').html('▶');
			if (!isPlay[index]) {
				$(this).html('■');
				$(this).parent().parent().find('.audiocontrol').css('visibility', 'visible');
				$(this).parent().parent().find('.audiocontrol').html(musicArr[index]);
				$(this).parent().parent().find('iframe').parent().css('top','10px');
				isPlay[index] = true;
			}
			else {
				$(this).html('▶');
				isPlay[index] = false;
				$(this).parent().parent().find('.audiocontrol').html('');
			}
		});
	});
});