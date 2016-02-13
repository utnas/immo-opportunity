import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('buildings', function() {
    this.route('buildings', {path: 'index'});
    this.route('new');
    this.route('show', {path: ':building_id'}, function(){
      // Incase of nested routes
    });
    //Other routes here ...
  });
});

export default Router;
