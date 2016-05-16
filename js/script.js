$(document).ready(function() {

var slideToggle = $('.slider-toggle > div');

var sliderContainerWidth = $(".slider-container").css('width');

var slideWidth = $(".slider-offset > div");
	
	slideWidth.css('width', sliderContainerWidth);

	$(window).resize(function() {
		sliderContainerWidth = $(".slider-container").css('width');

		slideWidth.css('width', sliderContainerWidth);
		
	});

	var PosPx, PosPer, newPos = 0;

	var rightArrow = $(".right-arrow");

	var counter = 1;

	rightArrow.click(function() {

		$(".slider-offset").stop();
		
		if ( parseFloat(newPos) >= -300) {
		
		PosPx = $(".slider-offset").css('left');
		
		PosPer = (Math.round(parseFloat(PosPx))/parseFloat(sliderContainerWidth)) * 100;
		
		newPos = (PosPer - 100) + "%";
		
		$(".slider-offset").css('left', newPos);

		counter++;

		slideToggle.removeClass('checked-toggle');

		slideToggle.each(function() {
			if ( $(this).attr("id") === (counter + '-toggle') ) {
				$(this).addClass('checked-toggle');
			}
		});
		
		}

	});

	var leftArrow = $(".left-arrow");

	leftArrow.click(function() {

		$(".slider-offset").stop();
		
		if ( parseFloat(newPos) <= -100) {
		
		PosPx = $(".slider-offset").css('left');
		
		PosPer = (Math.round(parseFloat(PosPx))/parseFloat(sliderContainerWidth)) * 100;
		
		newPos = (PosPer + 100) + "%";
		
		$(".slider-offset").css('left', newPos);

		counter--;

		slideToggle.removeClass('checked-toggle');

		slideToggle.each(function() {
			if (  $(this).attr("id") === (counter + '-toggle') ) {
				$(this).addClass('checked-toggle');
			}
		});
		
		}

	});

slideToggle.click(function() {
	slideToggle.removeClass('checked-toggle');
	
	$(this).addClass('checked-toggle');

	var count = parseInt($(this).attr('id'));

	newPos = ((count - 1) * (-100)) + "%";

	counter = count;

	$(".slider-offset").css('left', newPos);

});

var dropdown = $(".country-select");

dropdown.click(function() {
	$(this).find(".dropdown-arrow").toggleClass('rotate');
	$(this).toggleClass('visible-list');
});


var selectedItem = $(".country-select li");

var listContent = $(".country-select").html();

selectedItem.click(function() {

	if ($(this).css('background') !== "none") {

selectedItem.css('background', '#fff');

selectedItem.css({
	borderLeft: '1px solid #c4c4c4',
	borderRight: '1px solid #c4c4c4',
	borderTop: '1px solid #c4c4c4'

});

$(this).prependTo('.country-select').css({
	background: 'none',
	border: 'none'
});

$(".country-select li.country").css('display', 'none');

dropdown.removeClass('rotate');

}

});

$(".small-menu").click(function() {
	
	$(".menu").stop();

	$(".menu").slideToggle(300);
});

$(".menu a").click(function() {
	
	if (document.documentElement.clientWidth + 21 <= 590) {
	
	$(".menu").slideToggle(10);
	
	}
});


$(window).resize(function() {

	if ( document.documentElement.clientWidth + 21 > 590 ) {
			$(".menu").css({
				display: 'block'
			});
		}

		else {
			$(".menu").css({
				display: 'none'
			});
		}
});


});