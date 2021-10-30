$(document).ready(function() {

	$(".popup-me_4").click(function(){

		pop_init_4( "Intorno all'orlo del disco erano inserite 18 pale, spesse 2,5 digiti pari a 4,6 cm, a doppia coda di rondine, di cui la più piccola era incastrata nel disco per 6 digiti, cioè 11,1 cm, seguendone il profilo curvo delle facce. L'altra coda si allargava gradualmente per altri 12 digiti pari a 22,3 cm fino a terminare in una pala rettangolare lunga 18 digiti, cioè 33,4 cm e larga esattamente un piede, pari a 29,77 cm. La forma di queste estremità giustifica la denominazione “pinna” adoperata da Vitruvio." );

	});

});

function pop_init_4( my_content ) {

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