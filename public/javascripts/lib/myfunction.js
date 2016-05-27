	//获取元素属性值
	function getStyle(obj,attr ){
		return obj.getcurrentStyle ? obj.getcurrentStyle[attr] : getComputedStyle(obj)[attr];  
		}
		
	//移动	
	function doMove(obj,attr,spe,tar,endFn) {
		spe=parseInt(getStyle(obj,attr))<tar?spe: -spe;  //spe正负判断
		clearInterval(obj.timer);	//开始前清除定时器，obj.timer为定义的一个obj属性，用于存放定时器。
		//alert(parseInt(getStyle(oDiv,'left')));
		obj.timer=setInterval(function(){
		var speed=parseInt(getStyle(obj,attr))+spe;
		if (speed>tar&&spe>0||speed<tar&&spe<0){
			speed=tar;
		}
		obj.style[attr]=speed+'px';
		if (speed===tar) {
			clearInterval(obj.timer);
			endFn&&endFn();   //回调函数判断
			}
		     },20);
		}

	//抖动	
	function fnShake() {
		var _this=this;
		Shake(_this,'left',20,50,function() {
			Shake(_this,'top',20,50);
			});
		}
	
	function Shake(obj,attr,speed,freq,endFn) {
		clearInterval(obj.shake);
		var arr=[],
		    num=0;
	    for (var i=speed;i>0;i-=2) {
		    arr.push(i,-i);
	    }
		    arr.push(0);
		obj.shake=setInterval(function() {
		obj.style[attr]=(parseInt(getStyle(obj,attr))+arr[num])+'px';
		num++;
		if (num===arr.length) {
			clearInterval(obj.shake);
			endFn&&endFn();
			}
		},freq);
		}

	//透明
	function doOpacity(obj,ospe) {
		clearInterval(obj.opa);
		//ospe=ospe>=0&&ospe<=1 ? -ospe : ospe;
			obj.opa = setInterval(function() {
				var speed = parseFloat(getStyle(obj,'opacity')) + ospe;  //如果是parseInt()会因为其特性将值瞬间变为0，达不到渐变的效果。
				//alert(speed);
				if (speed <= 0) {
					speed = 0;
				  }
				obj.style.opacity = speed;
				if (speed === 0) {
					clearInterval(obj.opa);
					}
				},70);
		}

	//两位数时间
	function fnTwo(time) {
		if (time<10) {
			return '0'+time;
			}else {
				return ''+time;
				}
		}

	//随机产生num个x~y之间不重复的整数
	function randomNum ( num,x,y ) {
		var arr=[];
		for( var n=0;n<num;n++ ){
			arr.push( Math.round(Math.random()*(y-x)+x) );
			for(var i=0;i<arr.length;i++){
				for(var j=i+1;j<arr.length;j++){
					if( arr[i]==arr[j] ){
						arr.splice(j,1);
						j--;
						n--;
						}
					}
				}
		}
	}

	//检测数组中是否存在重复项
	function repeatNo (arr) {
			var repeatArr = 1;
		                for (var i=0;i<arr.length;i++) {
							for (var j=i+1;j<arr.length;j++) {
								if ( arr[i]==arr[j] ) {
									repeatArr = 0;            //查找重复项
									}
							}
		               }
			if ( repeatArr==0 ) {
			alert('数组中有重复项');
			} else {
				alert('数组中没有重复项');
				}
		}

	/*//适用于数组的indexOf()方法
	function arrIndexOf ( arr,elem,arrDamage ){        //arrDamage确定是否破坏原数组，0为不破坏，1为破坏（破坏后需要手动复原）
		for ( var i=0;i<arr.length;i++ ){
		if ( arr[i]==elem ){
			var arr_bak = arr.splice( i,arr.length-(i+1) );     //splice返回值为被删除的数组
			if(arrDamage == 0){                             
			    alert( arr.length-1 );
			  } 
			else if( arrDamage == 1 ){
				return arr.length;
				} 
			else{
				alert( arr.length-1 );
				}
			//  return arr.length;           //使用该项将导致数组无法复原。
			}
		}
	    arr.splice( arr.length-1,0,arr_bak );       //用splice方法将被删除的数组添加回去，复原数组项和内容
		}
	//indexOf()方法选择破坏原数组后的修复方法
	function arrIndexOfFix ( arr ){
		arr.splice( arr.length-1,0,arr_bak ); 
		}
		*/
	
	//适用于数组的indexOf()方法
	function arrIndexOf( arr,elem ){
		for( var i=0;i<arr.length;i++ ){
			if( arr[i] == elem ){
				return i;
				}
			}
	}

	//上升排序
	function compareUp(value1,value2) {
		if ( value1 < value2 ) {
			return -1;
		    } 
		else if ( value1>value2 ) {
			return 1;
		    } 
		else {
			return 0;
		    } 
    }

    //选取class的节点，oParent是要选取元素节点的父节点，sClass为要选取的class值
	function getByClass(oParent,sClass) {
		var nodelists = oParent.childNodes;
		var result = [];
		for(var i=0;i<nodelists.length;i++) {
			if (nodelists[i].className === sClass) {
				result.push(nodelists[i]);
				}
			}
		return result;
		}
	
	//用于事件的封装函数
	var EventUtil = {
		//添加句柄   （对象，事件，函数）例如：EventUtil.addHander(oBtn,'click',showMes);
		addHander: function(element,type,fn) {
			if (element.addEventListener) {
				element.addEventListener(type,fn,false);
				}
			else if (element.attachEvent) {
				element.attachEvent('on'+type,fn);
				}
			else {
				element['on'+type] = fn;
				}
			},
		
		//getEvent	
		getEvent: function(event) {
			return event ? event : window.event;
			},
		
		//getTarget	
		getTarget: function(event) {
			return event.tagret || event.srcElement;
			},
		
		//阻止事件默认行为
		preventDefault: function(event) {
			if (event.preventDefault) {
				event.preventDefault;
				}
			else {
				event.returnValue = false;
				}
			},
			
		
		//删除句柄
		removeHander: function(element,type,fn) {
			if (element.removeEventListener) {
				element.removeEventListener(type,fn,false);
				}
			else if (element.detachEvent) {
				element.detachEvent('on'+type,fn);
				}
			else {
				element['on'+type] = null;
				}
			},
			
		//阻止事件冒泡
		stopPropogation: function(event) {
			if (stopPropogation) {
				event.stopPropogation();
				}
			else {
				cancelBubble = true;
				}
			}		
        }

    // 设置cookie
    function setCookie(name,value,time) {
		var oDate = new Date();
		oDate.setDate(oDate.getDate() + time);
		document.cookie = name + '=' +value + ';expires=' + oDate;
	}

	// 读取cookie
	function getCookie(name) {
		var arr = document.cookie.split('; ');    //注意： ; 后面有一个空格
		for (var i=0; i<arr.length;i++) {
			var arr2 = arr[i].split('=');
			if (arr2[0] === name) {
				return arr2[1];
			}
		}
		return '';
	}

	// 移除cookie
	function removeCookie(name) {
		setCookie(name,'1',-1);
	}

	// 日期与时间
	var src_date = '';
	fnTime();
	setInterval(fnTime,1000);
	function fnTime() {
			var iTime = new Date();
			var iYear = iTime.getFullYear();
			var iMonth = iTime.getMonth()+1;
			var iDay = iTime.getDate();
			var iWeek = iTime.getDay();
			switch (iWeek){
				case 0:
					iWeek = '星期日';
					break;
				case 1:
					iWeek = '星期一';
					break;
				case 2:
					iWeek = '星期二';
					break;
				case 3:
					iWeek = '星期三';
					break;
				case 4:
					iWeek = '星期四';
					break;
				case 5:
					iWeek = '星期五';
					break;
				case 6:
					iWeek = '星期六';
					break;
				}
			var iHours = iTime.getHours();
			var iMin = iTime.getMinutes();
			var iSec = iTime.getSeconds();
			str_date = iYear + '年' + fnTwo(iMonth) + '月'+fnTwo(iDay) + '日' + iWeek + '' + fnTwo(iHours) + ':'+fnTwo(iMin) + ':' + fnTwo(iSec);
			//alert(str);
			return str_date;
		}
		

	// 继承
	function inheritPrototype(subType,superType) {
		var prototype = Object(superType.prototype);
		prototype.constructor = subType;
		subType.prototype = prototype;
    }