var $ = require('jquery');
var Backbone = require('backbone');
var model = require('./models/model.js');
var view = require('./views/view.js');

var BlogRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'post/:id/': 'addText'
  },
  initialize: function(){
    this.collection = new model.BlogPostCollection();
    this.collection.fetch();
    //console.log(this.collection);
  },
  index: function(){
    var blogTitleHolder = new view.BlogTitleContainer({collection: this.collection});
    var blogTitleView = new view.BlogTitleView({collection: this.collection});

    $('.holder').append(blogTitleHolder.render().el);
    $('.blog-titles').append(blogTitleView.el);
  },

  addText: function(id){
    var post = this.collection;
    var blog = this.collection.get(id);

    var postTextView = new view.BlogTextView({model: blog});

    $('.selected-blog').html(postTextView.render().el);

  }

  // addText: function(model){
  //   console.log(this);
  //   var title = this.collection.get('title');
  //   console.log(title);
  //   // var textView = new view.BlogTextView({model: id});
  //
  //   //$('.selected-blog').html(textView.render().el);
  //   console.log('text appended');
  // }

});

var router = new BlogRouter();

module.exports = router;
