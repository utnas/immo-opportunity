import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('buildings', function() {
    this.route('new');
    //Other routes here ...
    this.route('show', {path: '/:building_id'});
  });
});

export default Router;
