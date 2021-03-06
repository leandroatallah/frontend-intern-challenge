$(function(){
	new ClipboardJS('form div#result');

	$('form').on('submit', function(e){
		// Previne o formulário de executar o submit padrão.
		e.preventDefault();
		
		// Armazena o valor do input link
		var inputLink = $('form input#link'),
		resultLink = $('form div#result'),
		btnSubmit = $('form button');
		


		if($(this).find('span.valid').is(':visible')){
			// copy to clipboard
		}


		// Check if input value is a valid URL
		if(/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(inputLink.val())) {
			// Generate and show short link
			$(this).removeClass('error');
			inputLink.fadeOut(400);
			resultLink.find('span#value').text('http://chr.dc/xyzxyz');
			resultLink.attr('data-clipboard-text', 'http://chr.dc/xyzxyz');
			resultLink.delay(400).fadeIn(400);

			btnSubmit.find('.default').fadeOut(400);
			btnSubmit.find('.valid').delay(400).fadeIn(400);
		} else {
			// Add class error to form
			$(this).addClass('error');
		}
	});

	$('form span#close').on('click', function(){
		var inputLink = $('form input#link'),
		resultLink = $('form div#result'),
		btnSubmit = $('form button');

		$('form').removeClass('error');

		resultLink.fadeOut(400);
		inputLink.delay(400).fadeIn(400);

		btnSubmit.find('.valid').fadeOut(400);
		btnSubmit.find('.default').delay(400).fadeIn(400);
	});

	$.get( './Assets/urls.json', function(data) {
		// Reorder the object by property hits
		data.sort(function compare(a,b) {
		  if (a.hits < b.hits)
		    return 1;
		  if (a.hits > b.hits)
		    return -1;
		  return 0;
		});

         data.slice(0, 5).forEach(function(o, index){
         	$('#top5 ul.top-list').append(
         		`<li class="flex justify-content-between">
         			<a href="`+o['shortUrl']+`" target="_blank">`+o['shortUrl']+`</a> <span>`+o['hits']+`</span></li>`
         	);
         });
    });
});