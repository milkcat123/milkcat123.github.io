//追蹤滑動進度條
window.onload= function(){
	let html_ = document.documentElement;//整個html的高度
	let html_height = html_.scrollHeight;//html滑動的距頂距離
	
	// console.log(`網頁整體的高度: ${html_height}px`)

	function progress_calc(){
		let window_scrolltop = html_.scrollTop;
		let window_height = window.innerHeight;
		let percent = Number(window_scrolltop / (html_height- window_height)); //減掉視窗高度，滑到底才會是百分之百
		console.log(`網頁滑動的高度: ${window_scrolltop}px`);
		console.log(`瀏覽器的高度: ${window_height}px`);
		document.querySelector('.progress-bar .running').style.width = `${percent * 100}vw`; //以瀏覽器寬度為分母，用高度的話將 width 與 vw 改成 height 與 vh 即可
	}
	
	window.onscroll= progress_calc;
	window.onresize= progress_calc;
	progress_calc();

}
