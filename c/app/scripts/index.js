var $ = require('jquery');
var Backbone = require('backbone');
require('./router');
// var model = require('./models/model.js');
// var view = require('./views/view.js');

$(function(){
  Backbone.history.start();
  // var postCollection = new model.BlogPostCollection();
  //
  // var blogTitleHolder = new view.BlogTitleContainer({collection: postCollection});
  // $('.holder').append(blogTitleHolder.render().el);
  //
  // var postTextView = new view.BlogTextView({model: postCollection});
  // $('.selected-blog').html(postTextView.render().el);
  //
  // postCollection.fetch().then(function(){
  //   console.log(postCollection);
  // })
});
