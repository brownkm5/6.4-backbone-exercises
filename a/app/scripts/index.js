var $ = require('jquery');
var views = require('./views/blog.js');
var models = require('./models/blog.js');

$(function(){
var blogCollection = new models.BlogPostCollection();

var blogForm = new views.BlogFormView({collection: blogCollection});
blogForm.setElement($('.blog-form')[0]);

blogCollection.fetch().then(function(){
  console.log(blogCollection);
});

});
