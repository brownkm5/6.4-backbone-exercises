var Backbone = require('backbone');
var $ = require('jquery');

var BlogPost = Backbone.Model.extend({

});

var BlogPostCollection = Backbone.Collection.extend({
  model: BlogPost,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/blogpostkevin'
});

module.exports = {
  BlogPost: BlogPost,
  BlogPostCollection: BlogPostCollection
};
