import Ember from 'ember';

export default Ember.Route.extend({
  return this.store.findRecord('building', params.building_id);
});
