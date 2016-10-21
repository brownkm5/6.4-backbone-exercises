var $ = require('jquery');
var Backbone = require('backbone');



var BlogFormView = Backbone.View.extend({
  events:{
    'submit': 'addPost'
  },
  addPost: function(e){
    e.preventDefault();

    //values from the text boxes
    var postTitle = $('.form-title').val();
    var postText = $('.post-text').val();

    //create new post in the blogCollection with the values from the text boxes
    this.collection.create({
      title: postTitle,
      text: postText
    });
    console.log(this.collection);

    //clear the text from the text boxes
    $('.form-title').val('');
    $('.post-text').val('');
  }
});

module.exports = {
  BlogFormView: BlogFormView
}
