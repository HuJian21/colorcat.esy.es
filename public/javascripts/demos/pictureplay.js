window.onload = function () {
	var close = document.getElementById('js-close');
	var modal = document.getElementById('js-modal');
	var items = modal.getElementsByTagName('li');
	var controller = document.getElementById('js-controller');
	var displayPic = document.getElementById('js-display');

	var picprev = getByClass(controller,'controller-picprev')[0];
	var picnext = getByClass(controller,'controller-picnext')[0];
    var numbernow = getByClass(controller,'controller-numbernow')[0];
	var prev = getByClass(controller,'controller-prev')[0];
	var next = getByClass(controller,'controller-next')[0];
	var play = getByClass(controller,'controller-play')[0];
	var displayModal = getByClass(controller,'controller-modal')[0];
	var animateLayer = document.getElementById('animate-layer');

	var len = items.length;
	var num = 0;
	var playOrNot = true;

	var aImgs = ['../../images/demos/1.jpg','../../images/demos/2.jpg','../../images/demos/3.jpg','../../images/demos/4.jpg','../../images/demos/5.jpg','../../images/demos/6.jpg'
	,'../../images/demos/7.jpg','../../images/demos/8.jpg','../../images/demos/9.jpg','../../images/demos/10.jpg','../../images/demos/11.jpg','../../images/demos/12.jpg'];
	var colors = ['#007DD2','#FF8080','#FFCE43','#B2BB2A','#D84C29','#83D843','#6F2C84'];

	var timer = null;


    //初始化
	function init() {
		var randomNumber = Math.ceil(Math.random() * colors.length);
		modal.style.backgroundColor = colors[randomNumber - 1];
		picnext.src = aImgs[num + 1];
		picprev.src = aImgs[len - 1];
		numbernow.innerHTML = num + 1 + '/' + len;
		displayPic.src = aImgs[0];
		displayModal.style.opacity = 0;
	}

	init();
	
	function picNextPrevChange() {
		displayPic.style.filter ='alpha(opacity:0)';
		displayPic.style.opacity = 0;
		if (num === 0) {
			picprev.src = aImgs[len - 1];
			picnext.src = aImgs[num + 1];
			numbernow.innerHTML = num + 1 + '/' + len;
			displayPic.src = aImgs[0];
		}
		else if (num === len - 1) {
			picprev.src = aImgs[len - 2];
			picnext.src = aImgs[0];
			numbernow.innerHTML = num + 1 + '/' + len;
			displayPic.src = aImgs[num];
		}
		else {
			picprev.src = aImgs[num - 1];
			picnext.src = aImgs[num + 1];
			numbernow.innerHTML = num + 1 + '/' + len;
			displayPic.src = aImgs[num];
		}
		doOpacity(displayPic,0.4);
	}

	function nextpic() {
		if (num === len - 1) {
			num = 0;
		}
		else {
			num++;
		}
		picNextPrevChange();
	}

	function prevpic() {		
		if (num === 0) {
			num = len - 1;
		}
		else {
			num--;
		}
		picNextPrevChange();
	}

	function keydownChange(fn) {
		clearInterval(timer);
		play.innerHTML = '||';
		playOrNot = !playOrNot;
		fn();
	}

	document.onkeydown = function (e) {
		var oEvent = EventUtil.getEvent();
		switch (oEvent.keyCode) {
			case 39:
				keydownChange(nextpic);			
				break;
			case 37:
				keydownChange(prevpic);
				break;
			case 13:
				launchFullscreen(document.documentElement);
				modalHidden();
				break;
		}
	}

	displayModal.onmouseover = play.onmouseover = next.onmouseover = prev.onmouseover = function () {
		this.style.color = 'green';
	}

	displayModal.onmouseout = play.onmouseout = next.onmouseout = prev.onmouseout = function () {
		this.style.color = 'white';
	}

	picnext.onclick = next.onclick = nextpic;

	picprev.onclick = prev.onclick = prevpic;

	play.onclick = function () {
		clearInterval(timer);
		modal.style.display = 'none';
		if (playOrNot) {
			play.innerHTML = '|>'
			timer = setInterval(nextpic,2000);
			playOrNot = !playOrNot;
		}
		else {
			play.innerHTML = '||';
			playOrNot = !playOrNot;
		}
	}

	for (var i = 0; i <= len - 1; i++) {
		items[i].index = i;
		items[i].onclick = imgMagnifying;

		function imgMagnifying() {
			num = this.index;
			modal.style.display = 'none';
			picNextPrevChange();
			doOpacity(displayModal,0.2);
		}
		items[i].onmouseover = function () {
			var randomNumber = Math.ceil(Math.random() * colors.length);
			this.style.border = '3px solid red';
			this.style.borderColor = colors[randomNumber - 1];
		}
		items[i].onmouseout = function () {
			this.style.border = '3px solid white';
		}
	}


	close.onclick = modalHidden;
	function modalHidden() {
		modal.style.display = 'none';
		doOpacity(displayModal,0.2);
	}
	
	displayModal.onclick = function () {
	    var randomNumber = Math.ceil(Math.random() * colors.length);
	    if (randomNumber !== numbernow) {
		    var numbernow = randomNumber;
			modal.style.display = 'block';
			doOpacity(this,-0.2);
			modal.style.backgroundColor = colors[randomNumber - 1];
		}
	}

	function launchFullscreen(element) {
	    if(element.requestFullscreen) {
	        element.requestFullscreen();
	    } 
	    else if(element.mozRequestFullScreen) {
	        element.mozRequestFullScreen();
	    } 
	    else if(element.webkitRequestFullscreen) {
	        element.webkitRequestFullscreen();
	    } 
	    else if(element.msRequestFullscreen) {
	        element.msRequestFullscreen();
	    }
	}


	
	
}