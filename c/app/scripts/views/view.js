var $ = require('jquery');
var Backbone = require('backbone');

var blogTitleHolder = require('../../templates/blog-title-holder.hbs')
var blogTitlesTemplate = require('../../templates/blog-titles.hbs');
var selectedBlogTemplate = require('../../templates/selected-blog.hbs');

  var BlogTitleContainer = Backbone.View.extend({
    tagName: 'ul',
    className: 'blog-titles',
    template: blogTitleHolder,
    initialize: function(){
      this.listenTo(this.collection, 'add', this.renderTitleHolder);
      //console.log('this', this.collection);
    },
    render: function(){
      this.$el.html(this.template());
      return this;
    },
    renderTitleHolder: function(blog){
      console.log('blog', blog);
      var titles = new BlogTitleView({model: blog});
      this.$el.append(titles.render().el);
    }
  });

  var BlogTitleView = Backbone.View.extend({
    tagName: 'li',
    className: 'blog-title',
    initialize: function(){
      this.listenTo(this.model, 'destroy', this.remove);
    },
    events: {
      'click .remove-blog': 'removeBlog'
    },
    template: blogTitlesTemplate,
    render: function(){
      var context = this.model.toJSON();
      // console.log('context', context);
      var blogTitle = this.template(context);
      this.$el.html(blogTitle);
      return this;
    },
    removeBlog: function(){
      this.model.destroy();
    }
  });



  var BlogTextView = Backbone.View.extend({
    tagName: 'p',
    template: selectedBlogTemplate,
    initialize: function(){
      //console.log('this', this.model);
      this.listenTo(this.model, 'changed', this.render);
    },
    render: function(){
      var context = this.model.toJSON();
      var blogText = this.template(context);
      this.$el.html(blogText);

      return this;
    }
  });


module.exports = {
  BlogTitleContainer: BlogTitleContainer,
  BlogTitleView: BlogTitleView,
  BlogTextView: BlogTextView
}
