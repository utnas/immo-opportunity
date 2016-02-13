import DS from 'ember-data';
import Ember from "ember";

export default DS.Model.extend({
  name:             DS.attr('string'),
  type:             DS.attr('number'),
  sellingPrice:     DS.attr('number'),
  numberOfFlats:    DS.attr('number'),
  propertyTax:      DS.attr('number'),
  schoolTax:        DS.attr('number'),
  annualGrossRent:  DS.attr('number'),
  description:      DS.attr('string'),
  rev:              DS.attr('string'),

  multiplierOfGrossRevenu: Ember.computed(function() {
    return this.get('sellingPrice') / this.get('annualGrossRent');
  }),

  pricePerFlat: Ember.computed(function() {
    return this.get('sellingPrice') / this.get('numberOfFlats');
  }),

  netValuesOfRents: Ember.computed(function() {
    return (this.get('annualGrossRent') + this.assessmentFactor()) - (this.provisionForBadDebt() + this.vacancyRate());
  }),

  assessmentFactor: function(){
    return this.get('annualGrossRent') * 0.02;
  },

  provisionForBadDebt: function(){
    return this.get('annualGrossRent') * 0.01;
  },

  vacancyRate: function(){
    return this.get('annualGrossRent') * 0.03;
  }
});
