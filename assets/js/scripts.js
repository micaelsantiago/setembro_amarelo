window.onload = function(){
	document.querySelector(".menu_mobile").addEventListener("click", function(){
		if(document.querySelector(".menu").style.display == 'flex') {
			document.querySelector(".menu").style.display = 'none';
		} else {
			document.querySelector(".menu").style.display = 'flex';
		}
	});
};