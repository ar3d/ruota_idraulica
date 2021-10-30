$(document).ready(function() {

	$(".popup-me_2").click(function(){

		pop_init_2( "La ruota idraulica permetteva di trasformare l'energia cinetica dell'acqua in forza motrice per azionare le mole e aveva un diametro di 100 digiti, pari a 185 cm. Non essendo stati riscontrati segni di chiusura interna tra le pale si può ipotizzare che si trattasse di una ruota “di fianco” sulla quale l'acqua agiva nel quadrante inferiore." );

	});

});

function pop_init_2( my_content ) {

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