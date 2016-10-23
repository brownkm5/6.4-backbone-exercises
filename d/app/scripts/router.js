var $ = require('jquery');
var Backbone = require('backbone');
var model = require('./models/model.js');
var view = require('./views/view.js');

var BookmarkRouter = Backbone.Router.extend({
  routes: {
    '': 'index',

  },
  initialize: function(){
    this.collection = new model.BookmarkCollection();
    this.collection.fetch();
    console.log(this.collection);
  },
  index: function(){
    var bookmarkFormListener = new view.BookmarkFormView({collection: this.collection});
    bookmarkFormListener.setElement($('.bookmark-form')[0]);

    var bookmarkHolder = new view.BookmarkHolderView({collection: this.collection});
    $('.bookmark-holder').append(bookmarkHolder.render().el)
  }


});





var router = new BookmarkRouter();
module.exports = router;
