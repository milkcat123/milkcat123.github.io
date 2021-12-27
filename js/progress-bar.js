//追蹤滑動進度條
window.onload= function(){
	let html_ = document.documentElement;
	let html_height = html_.scrollHeight;
	
	function progress_calc(){
		let window_scrolltop = html_.scrollTop;
		let progress_bar_height = document.querySelector('.progress-bar').offsetHeight;
		let window_height = window.innerHeight;
		let percent = Number(window_scrolltop / (html_height- window_height)); //減掉視窗高度，滑到底才會是百分之百
		console.log(`網頁滑動的高度: ${window_scrolltop}px`);
		console.log(`瀏覽器的高度: ${window_height}px`);
		console.log(`進度條的高度: ${progress_bar_height}px`);
		document.querySelector('.progress-bar .running').style.height = `${percent * 100 * 0.8}vh`; //要打八折，因為父元素是80vh
		
	}
	console.log(`網頁整體的高度: ${html_height}px`)
	
	window.onscroll= progress_calc;
	window.onresize= progress_calc;
	progress_calc();








}

