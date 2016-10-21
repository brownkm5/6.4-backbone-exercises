var $ = require('jquery');
var Backbone = require('backbone');

var PersonFormView = Backbone.View.extend({
  events : {
    'submit': 'addPerson'
  },
  addPerson: function(e){
    e.preventDefault();

    var personFirstName = $('.first-name').val();
    var personLastName = $('.last-name').val();
    var personAddress = $('.address').val();
    var phoneNumber = $('.phone-number').val();

    this.collection.create({
      firstName: personFirstName,
      lastName: personLastName,
      address: personAddress,
      phoneNumber: phoneNumber
    });

    console.log(this.collection);

    $('.first-name').val('');
    $('.last-name').val('');
    $('.address').val('');
    $('.phone-number').val('');
  }
});

module.exports = {
  PersonFormView: PersonFormView
}
