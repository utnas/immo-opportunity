import DS from 'ember-data';
import Ember from "ember";

export default DS.Model.extend({
  name: DS.attr('string'),
  type: DS.attr('number'),
  sellingPrice:DS.attr('number'),
  numberOfFlats:DS.attr('number'),
  propertyTax: DS.attr('number'),
  schoolTax: DS.attr('number'),
  annualGrossRent: DS.attr('number'),

  multiplierOfGrossRevenu: Ember.computed('sellingPrice','annualGrossRent', function() {
    //return "${this.get('sellingPrice')} ${this.get('annualGrossRent')}";
    return "Que des conneries";
  }),
});
