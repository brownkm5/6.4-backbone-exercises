var Backbone = require('backbone');
var $ = require('jquery');

var bookmarkHolderTemplate = require('../../templates/bookmark-list-holder.hbs');
var bookmarkListTemplate = require('../../templates/bookmark-list.hbs')

var BookmarkFormView = Backbone.View.extend({
  events:{
    'submit': 'addBookmark'
  },
  addBookmark: function(e){
    e.preventDefault();

    var bookmarkUrl = $('.url').val();
    var bookmarkTitle = $('.title').val();
    var bookmarkTag = $('.tag').val();

    this.collection.create({
      url: bookmarkUrl,
      title: bookmarkTitle,
      tag: bookmarkTag
    });

    console.log(this.collection);

    $('.url').val('');
    $('.title').val('');
    $('.tag').val('');

  }
});

var BookmarkHolderView = Backbone.View.extend({
  tagName: 'ul',
  attributes: {
    'class': 'bookmark-list'
  },
  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderBookmarkItem);
  },
  template: bookmarkHolderTemplate,
  render: function(){
    this.$el.html(this.template());
    return this;
  },
  renderBookmarkItem: function(bookmark){
    var bookmarkItem = new BookmarkItemView({model: bookmark});
    this.$el.append(bookmarkItem.render().el);
  }

});

var BookmarkItemView = Backbone.View.extend({
  tagName: 'li',
  attributes: {
    'class': 'bookmark-list-item col-sm-5'
  },
  initialize: function(){
    this.listenTo(this.model, 'destroy', this.remove);
  },
  events: {
    'click .remove-bookmark' : 'removeBookmark'
  },
  template: bookmarkListTemplate,
  render: function (){
    var context = this.model.toJSON();
    var renderTemplate = this.template(context);

    this.$el.html(renderTemplate);
    return this;
  },
  removeBookmark: function(){
    this.model.destroy();
  }
});

module.exports = {
  BookmarkFormView: BookmarkFormView,
  BookmarkHolderView: BookmarkHolderView,
  BookmarkItemView: BookmarkItemView
}
