var Image = Backbone.Model.extend({
	defaults: {
		imageUrl: null,
		caption: null
	},
	
	validate: function(attr, options) {
		if(attr.imageUrl.length === 0){
			return 'a photo must be present';
		}
		return false;
	},
	urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/austin-zc-photo'
});