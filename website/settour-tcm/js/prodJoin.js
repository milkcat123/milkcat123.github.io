//小分類四散的商品拆開再全部包起來
function prodJoin(wrapDiv,joinItem,contentDiv){
let allProd = $(wrapDiv).find(joinItem),
	// allProdLength = allProd.length,
	putHtmlBack = $(wrapDiv).find(contentDiv);
// console.log(`總數:${allProdLength}`);//檢查用
let allList = '';
allProd.each(function(){
	let prodHtml = $(this).html();
	
	allList =  allList + prodHtml;
});
// console.log(`${allList}`);//檢查用
putHtmlBack.html(allList);

}

prodJoin('section.tp','.ph-group','.content');
prodJoin('section.ntp','.ph-group','.content');
prodJoin('section.tc','.ph-group','.content');
prodJoin('section.tn','.ph-group','.content');