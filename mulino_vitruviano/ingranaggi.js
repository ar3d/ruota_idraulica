$(document).ready(function() {

	$(".popup-me_9").click(function(){

		pop_init_9( "Il lubecchio e la lanterna sono gli ingranaggi che permettono di trasformare il movimento di rotazione della ruota da verticale in orizzontale, per trasmetterlo alle macine, e di regolare il numero di giri della macina rispetto a quello della ruota in base al loro rapporto. Di questo meccanismo non è stata trovata traccia, per cui è possibile solo supporre che, trovandoci in presenza di una ruota rapida, il numero di giri dovesse essere ridotto con una ruota dentellata orizzontale più grande di quella verticale collegata all'albero." );

	});

});

function pop_init_9( my_content ) {

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