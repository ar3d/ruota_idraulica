$(document).ready(function() {

	$(".popup-me_5").click(function(){

		pop_init_5( "Due corone circolari, larghe un piede, fermavano le estremità delle pinne su entrambi i lati mediante tre cavicchi, in modo che l'interasse tra le pale fosse pari a 14 digiti, cioè 26 cm." );

	});

});

function pop_init_5( my_content ) {

	var pop_height = 'auto';
        var pop_html = '<div class="pop-bg"></div><div class="pop-wrap"><p class="pop-x">X</p><div class="pop-content"></div></div>';

	$("model-viewer").prepend( pop_html );

	$(".pop-wrap").animate({ "height" : pop_height }, 250).click(function(event){
		event.stopPropagation();
	});

	$(".pop-bg, .pop-x").bind("click", function(event) {
		pop_close();
	});

	$(".pop-content").text(my_content);

}

function pop_close() {
	$(".pop-bg, .pop-wrap").remove();
	$("model-viewer").unbind("click");
}