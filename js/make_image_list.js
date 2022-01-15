$(document).ready(function(){
	//banner_1_header_img
	let banner_1 = document.querySelector('.portfolio-banner-1'),
		banner_1_length = 39, //圖片數量
		banner_1_all = "";
	
	for(let i=1; i < banner_1_length; i++){
		let banner_1_li = `<li><img src="./images/1920x600/header (${i}).jpg" alt="${i}"></li>`;
		banner_1_all = banner_1_all + banner_1_li;
	}
	banner_1.innerHTML = banner_1_all;

	// banner_2_IG_img
	let banner_IG = document.querySelector('.portfolio-banner-2'),
		banner_IG_length = 32, //圖片數量
		banner_IG_all = "";

	for(let i=1; i < banner_IG_length; i++){
		let banner_IG_li = `<li><img src="./images/IG/IG (${i}).jpg" alt="${i}"></li>`;
		banner_IG_all = banner_IG_all + banner_IG_li;
	}
	banner_IG.innerHTML = banner_IG_all;

	//banner_3_square_img
	let banner_3 = document.querySelector('.portfolio-banner-3'),
		banner_3_length = 48, //圖片數量
		banner_3_all = "";
	
	for(let i=1; i < banner_3_length; i++){
		let banner_3_li = `<li><img src="./images/square/square (${i}).jpg" alt="${i}"></li>`;
		banner_3_all = banner_3_all + banner_3_li;
	}
	banner_3.innerHTML = banner_3_all;

	//banner_4_other_img
	let banner_4 = document.querySelector('.portfolio-banner-4'),
		banner_4_length = 30, //圖片數量
		banner_4_all = "";
	
	for(let i=1; i < banner_4_length; i++){
		let banner_4_li = `<li><img src="./images/other/other (${i}).jpg" alt="${i}"></li>`;
		banner_4_all = banner_4_all + banner_4_li;
	}
	banner_4.innerHTML = banner_4_all;

	//banner_5_illustrator_img
	let banner_5 = document.querySelector('.portfolio-banner-5'),
		banner_5_length = 23, //圖片數量
		banner_5_all = "";
	
	for(let i=1; i < banner_5_length; i++){
		let banner_5_li = `<li><img src="./images/illustrator/illustrator (${i}).jpg" alt="${i}"></li>`;
		banner_5_all = banner_5_all + banner_5_li;
	}
	banner_5.innerHTML = banner_5_all;

});
