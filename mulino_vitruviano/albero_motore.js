$(document).ready(function() {

	$(".popup-me_6").click(function(){

		pop_init_6( "L'albero motore era l'elemento che trasmetteva il movimento della ruota all'apparato di macinazione. In corrispondenza del mozzo, l'albero aveva sezione quadrata di 10 digiti di lato, cioè 18,6 cm, mentre la sezione diventa circolare con un diametro sempre di 10 digiti nelle porzioni non incastrate nella ruota." );

	});

});

function pop_init_6( my_content ) {

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