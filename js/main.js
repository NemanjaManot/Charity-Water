$(document).ready(function(){
/*

	//Dropdown Nav (used CSS, no jQuery for that)
	$('.parent >li ').hover(function(){
		$(this).find('ul.child').show(200);
	}, function() {
		$(this).find('ul.child').hide(200);
	})

*/

	/* --- Modal for Navigation menu ---- */
	$('.menuIcon').click( function(event){
	    event.stopPropagation();
	    $('.modalNavigation').toggle(300);
	});

	$(document).click( function(){
	    $('.modalNavigation').hide(300);
	});


	/* --- Modal for Video ---- */
	$('.pustiVideo').click(function()
	{
		$('.videoHide').show(500);
	});

	$('.exitVideoHide').click(function()
	{
		$('.videoHide').hide(500);
	});

});