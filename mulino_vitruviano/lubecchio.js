$(document).ready(function() {

	$(".popup-me_10").click(function(){

		pop_init_10( "«...i mulini ad acqua...tengono in un capo dell'asse una ruota dentata attaccatavi, e questa, posta in coltello, gira insieme con l'asse». Vitruvio, De architectura X 5,2" );

	});

});

function pop_init_10( my_content ) {

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