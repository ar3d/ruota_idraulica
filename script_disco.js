$(document).ready(function() {

	$(".popup-me_3").click(function(){

		pop_init_3( "La parte centrale della ruota era costituita da un massiccio disco in legno, del diametro di 43 digiti pari a 74 cm e sagomato con le facce convesse. Parecchie zeppe stringevano a mò di incastro il disco sull'albero." );

	});

});

function pop_init_3( my_content ) {

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