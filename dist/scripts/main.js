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

		imageFeed.add(newImage);
		newImage.save();

		console.log(newImage)
	});

	imageFeed.on('add', function(model) {
		var imgCapHtml = imageBuilder(model.attributes);
		$('#img-feed').append(imgCapHtml);
	});	
});