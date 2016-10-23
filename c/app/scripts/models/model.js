var $ = require('jquery');
var Backbone = require('backbone');

var BlogPost = Backbone.Model.extend({
idAttribute: '_id'
});

var BlogPostCollection = Backbone.Collection.extend({
  model : BlogPost,
  url : 'https://tiny-lasagna-server.herokuapp.com/collections/blogpostkevin'
});


module.exports = {
  BlogPost: BlogPost,
  BlogPostCollection: BlogPostCollection
};
