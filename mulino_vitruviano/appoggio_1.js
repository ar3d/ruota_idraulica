$(document).ready(function() {

	$(".popup-me_7").click(function(){

		pop_init_7( "A 10 digiti, su uno dei lati della ruota, l'impronta dell'albero presentava un assottigliamento a strie dovuto probabilmente all'attrito del cuscinetto o al deterioramento delle ghiere di rivestimento del legno in corrispondenza di uno dei punti di appoggio della ruota." );

	});

});

function pop_init_7( my_content ) {

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