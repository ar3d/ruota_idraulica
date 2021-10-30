$(document).ready(function() {

	$(".popup-me_13").click(function(){

		pop_init_13( "Le due pietre presentavano un foro centrale per il passaggio dell'albero motore che, ancorato alla mola superiore, ne permetteva la rotazione. Il foro centrale della mola superiore, detto occhio della macina, serviva per il passaggio del materiale da macinare." );

	});

});

function pop_init_13( my_content ) {

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