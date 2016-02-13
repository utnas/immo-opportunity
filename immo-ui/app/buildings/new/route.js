import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.store.createRecord('building');
  },

  actions: {
    create: function (model) {
      model.save().then(() => {
          console.log('Building saved with success');
        }, () => {
          console.log('Building save failed');
      });
      this.transitionTo('buildings');
    },
    // other actions
  }
});
