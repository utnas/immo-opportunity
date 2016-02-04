import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.store.createRecord('building');
  },

  actions: {
    create: function (model) {
      model.save().then(() => {
          this.transitionTo('buildings');
        }, () => {
          console.log('Building save failed');
      });
    },
    // other actions
  }
});
