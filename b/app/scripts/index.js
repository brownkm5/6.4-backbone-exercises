var $ = require('jquery');
// var Backbone = require('backbone');

var view = require('./views/views.js');
var model = require('./models/model.js');

var personCollection = new model.PersonCollection();
console.log(personCollection);

var newPerson = new view.PersonFormView({collection: personCollection});
newPerson.setElement($('.person-form')[0]);
console.log('person', newPerson);

personCollection.fetch().then(function(){
  console.log('fetch', personCollection);
});
