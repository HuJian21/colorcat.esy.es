window.onload=function(){
	var oImg=document.getElementById('imgtab');
	var arrUrl=['../../images/demos/shanhu_logo.png','../../images/demos/2.jpg','../../images/demos/3.jpg','../../images/demos/4.jpg','../../images/demos/5.jpg'];
	var oPrev=document.getElementById('prev');
	var oNext=document.getElementById('next');
	var oMiniUl=document.getElementById('minipic');
	var aMiniLi=oMiniUl.getElementsByTagName('li');
	var aMiniPic=oMiniUl.getElementsByTagName('img');

	var oNav=document.getElementById('nav');
	var oNavUl0=document.getElementById('navul0');
	var aNavLi=oNav.getElementsByTagName('li');
	var aNavUl=oNavUl0.getElementsByTagName('ul');
	var about=document.getElementById('about');
	var num=0;	
	
//picTab 轮播
	oImg.src = arrUrl[num];
	oPrev.onclick = function() {
		num--;
		if (num<0) {
			num = 0;
			}
		oImg.src = arrUrl[num];
		
		
		}
	oNext.onclick=function() {
		num++;
		if(num>arrUrl.length-1) {
			num=arrUrl.length-1;
			}
		oImg.src = arrUrl[num];
		
		}
	for (var i = 0;i<aMiniLi.length;i++) {
		aMiniLi[i].index = i;
		aMiniPic[i].src = arrUrl[i];
        aMiniLi[0].style.border = '1px solid #F60';
		aMiniLi[i].onmouseover = aMiniLi[i].onmouseout = function() {
			oImg.src = arrUrl[this.index];
			for (var i = 0;i<aMiniLi.length;i++ ) {
				aMiniLi[i].style.border = '1px solid #FFF';
			}
			this.style.border='1px solid #F60';		
			}
	}

// nav 导航
	for (var i = 0;i<aNavLi.length;i++) {
		aNavLi[i].index = i;	
		aNavLi[i].onmouseover = function() {
			aNavUl[this.index].style.display = 'block';
			}
		aNavLi[i].onmouseout = function() {
			aNavUl[this.index].style.display = 'none';
			}
		}
	
// slider 日期
    var oDate_str = '';
    var oWeek_str = '';

    getDate_this();
    function getDate_this () {
		oDate_str = fnTime().substring(0,11);
		oWeek_str = fnTime().substring(11,14);
	}
	setInterval(getDate_this,86400);

	$('#date_text').html('<strong>◎</strong>' + oDate_str);
	$('#week_text').html(oWeek_str);
	
// tabContent1 选项卡
    // 重用函数
    function contentChange(obj) {
    	var arr = [$('#caynews')[0],$('#wedo')[0],$('#caydoc')[0],$('#ct1photo')[0]];
    	for (var i = 0; i < arr.length;i++) {
    		if (getStyle(arr[i],'display') === 'block') {
    		    arr[i].style.display = 'none';
    	    }
    	}
    	obj.style.display = 'block';
    }

    function contentChange2(obj) {
        var arr = [$('#member_photo')[0],$('#member_collected')[0],$('#member_donate')[0],$('#gov_support')[0]];
        for (var i = 0; i < arr.length;i++) {
            if (getStyle(arr[i],'display') === 'block') {
                arr[i].style.display = 'none';
            }
        }
        obj.style.display = 'block';
    }

    function colorChangeOn(obj,color) {
    	obj.css('backgroundColor',color);
    }

    // 逻辑

    $('#ct1>.column>li')[0].style.backgroundColor = 'white';

    function caynews(_this) {
    	colorChangeOn($('#ct1>.column>li'),'#C9EC96');
    	this.style.backgroundColor = 'white';
    	contentChange($('#caynews')[0]);
    }
    function wedo() {
    	colorChangeOn($('#ct1>.column>li'),'#C9EC96');
    	this.style.backgroundColor = 'white';
    	contentChange($('#wedo')[0]);
    }
    function caydoc() {
    	colorChangeOn($('#ct1>.column>li'),'#C9EC96');
    	this.style.backgroundColor = 'white';
    	contentChange($('#caydoc')[0]);
    }
    function ct1photo() {
    	colorChangeOn($('#ct1>.column>li'),'#C9EC96');
    	this.style.backgroundColor = 'white';
    	contentChange($('#ct1photo')[0]);
    }

    EventUtil.addHander($('#ct1>.column>li')[0],'mouseover',caynews);
    EventUtil.addHander($('#ct1>.column>li')[1],'mouseover',wedo);
    EventUtil.addHander($('#ct1>.column>li')[2],'mouseover',caydoc);
    EventUtil.addHander($('#ct1>.column>li')[3],'mouseover',ct1photo);



    // tabContent2
     $('#ct2>.column>li')[0].style.backgroundColor = 'white';

    function member_photo(_this) {
    	colorChangeOn($('#ct2>.column>li'),'#F60');
    	this.style.backgroundColor = 'white';
    	contentChange2($('#member_photo')[0]);
    }
    function member_collected() {
    	colorChangeOn($('#ct2>.column>li'),'#F60');
    	this.style.backgroundColor = 'white';
    	contentChange2($('#member_collected')[0]);
    }
    function member_donate() {
    	colorChangeOn($('#ct2>.column>li'),'#F60');
    	this.style.backgroundColor = 'white';
    	contentChange2($('#member_donate')[0]);
    }
    function gov_support() {
    	colorChangeOn($('#ct2>.column>li'),'#F60');
    	this.style.backgroundColor = 'white';
    	contentChange2($('#gov_support')[0]);
    }

    EventUtil.addHander($('#ct2>.column>li')[0],'mouseover',member_photo);
    EventUtil.addHander($('#ct2>.column>li')[1],'mouseover',member_collected);
    EventUtil.addHander($('#ct2>.column>li')[2],'mouseover',member_donate);
    EventUtil.addHander($('#ct2>.column>li')[3],'mouseover',gov_support);








}