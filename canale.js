$(document).ready(function() {

	$(".popup-me_1").click(function(){

		pop_init_1( "Sul sito vennero individuati anche porzioni di muratura molto superficiali di un probabile canale che doveva condurre l’acqua alla ruota. Questa veniva azionata grazie all'energia cinetica fornita dal salto di circa 4 metri tra la quota del canale a monte e la base della ruota a valle." );

	});

});

function pop_init_1( my_content ) {

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