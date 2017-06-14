$(function(){
	$('#example-one').addClass('highlight');

	$('.example-two').css('border', '4px solid gray');

	$('h5').click(function(){
		$('h5').fadeOut('slow', 'linear');
	});

	$('#id-combo-demo, .class-combo-demo, #draggable').draggable();

	$('li:contains("sad")').click(function(){
		$(this).hide();
	});
});