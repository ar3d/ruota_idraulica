$(document).ready(function() {

	$(".popup-me_12").click(function(){

		pop_init_12( "Costituite da due grandi dischi di pietra vulcanica sovrapposti, probabilmente estratti dal vulcano spento di Roccamorfina, avevano un diametro di 80 cm e uno spessore di 25 cm. La mola inferiore fissa, detta “fondo” o “dormiente”, aveva la superficie concava, mentre quella superiore mobile, detta “corritoia”, era convessa. Le facce a contatto risultavano molto scabre e irregolari." );

	});

});

function pop_init_12( my_content ) {

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