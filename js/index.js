$(function() {

	// 显示文章的内容

	// 关注博主即可阅读全文
	$("#article_content").css('height','100%');
	$('.hide-article-box.hide-article-pos.text-center').remove()

	// 显示文章的评论
	$("div[class=comment-list-box]").css('max-height','100%')
	$("div[id=btnMoreComment]").remove()

	//
	// 去广告
	$("div[class=advert]").remove() 
	$("div[class=banner-ad-box]").remove() 
	$("div[class=toolbar-advert]").remove() 
	
	$(".slide-outer.right_top").remove()
	$(".advert").remove()
	$('.right_extension.slide-outer').remove()


	$('#footerRightAds').remove()  
	$('#recommendAdBox').remove()  
	

	

})
