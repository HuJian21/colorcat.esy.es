window.onload = function () {
	var marnigfyingArea = document.getElementById('js-marnifyingarea');
	var imgArea = document.getElementById('js-normal');
	var displayArea = document.getElementById('marnifying');
	var imgBig = document.getElementById('imgbig');
	imgArea.onmouseover = function () {
		marnigfyingArea.style.display = 'block';
		displayArea.style.display = 'block';
	}
	imgArea.onmouseout = function () {
		marnigfyingArea.style.display = 'none';
		displayArea.style.display = 'none';
	}
	imgArea.onmousemove = function (event) {
		var oEvent = event || window.event;
		// alert(imgArea.offsetWidth);
		var positionLeft = oEvent.clientX - imgArea.offsetLeft - marnigfyingArea.offsetWidth/2;
		var positionTop = oEvent.clientY - imgArea.offsetTop - marnigfyingArea.offsetHeight/2;

		var l = imgArea.offsetLeft;
		var t = imgArea.offsetTop;
		if (positionLeft < l) {
			positionLeft = 0;
		}
		else if (positionLeft > (imgArea.offsetWidth - marnigfyingArea.offsetWidth)) {
			positionLeft = (imgArea.offsetWidth - marnigfyingArea.offsetWidth) + 'px';
		}
		if (positionTop < t) {
			positionTop = 0;
		}
		else if (positionTop > (imgArea.offsetHeight - marnigfyingArea.offsetHeight)) {
			positionTop = (imgArea.offsetHeight - marnigfyingArea.offsetHeight) + 'px';
		}
		marnigfyingArea.style.left = positionLeft + 'px';
		marnigfyingArea.style.top = positionTop + 'px';

		imgBig.style.left = -(positionLeft + 19 + marnigfyingArea.offsetWidth/2) * 2 + 'px';  //16px margin + 3px border
		imgBig.style.top = -(positionTop + 14 + marnigfyingArea.offsetHeight/2) * 2 + 'px';
	}
}