var Backbone = require('backbone');
var $ = require('jquery');

var Person = Backbone.Model.extend({

});

var PersonCollection = Backbone.Collection.extend({
  model: Person,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/newpersonkevin'
});

module.exports = {
  Person: Person,
  PersonCollection: PersonCollection
};
