$(document).ready(function() {

	$(".popup-me_8").click(function(){

		pop_init_8( "L'impronta dell'albero in questo punto si presentava troncata in maniera irregolare. Questa rottura fu probabilmente dovuta all'usura del punto di appoggio." );

	});

});

function pop_init_8( my_content ) {

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