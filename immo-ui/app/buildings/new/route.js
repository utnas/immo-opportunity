import Ember from 'ember';

export default Ember.Route.extend({

  model: function(){
    return {};
  },

  actions: {

    create: function(model){

      let building = this.store.createRecord('building', {
        name: model.name,
        type: model.type,
        sellingPrice: model.sellingPrice,
        numberOfFlats: model.numberOfFlats,
        propertyTax: model.propertyTax,
        schoolTax: model.schoolTax,
        annualGrossRent: model.annualGrossRent,
      });

      building.save().then(() => {
        this.transitionTo('buildings');
        }, function() {
          console.log('Building save failed');
      });
    }
  }
});
