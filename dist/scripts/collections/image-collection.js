var ImageCollection = Backbone.Collection.extend({
	model: Image,
	url: 'http://tiny-pizza-server.herokuapp.com/collections/austin-zc-photo'
});