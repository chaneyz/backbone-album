$(document).ready(function() {
	var imageFeed = new ImageCollection();
	imageFeed.fetch();

	var imageBuilder = _.template($('#image-template').html());

	$('.add-form-btn a').on('click', function() {
		$('#form-container').show();
	})

	$('#btn-cancel').on('click', function() {
		$('#form-container').hide();
	})

	$('#btn-add-image').on('click', function(e) {
		e.preventDefault();
		var newImage = new Image({
			imageUrl: $('#input-url').val(),
			caption: $('#input-caption').val()
		});

		if(newImage.isValid()) {
			console.log('the image is present, it can pass');
			imageFeed.add(newImage);
			newImage.save();
		}

		else {
			console.log('fuck you');
			console.log(newImage.validationError);
		}

		$('#input-url').val('')
		$('#input-caption').val('')
	});

	imageFeed.on('add', function(model) {
		var imgCapHtml = imageBuilder(model.attributes);
		$('#img-feed').prepend(imgCapHtml);
	});	
});