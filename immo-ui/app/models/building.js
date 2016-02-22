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
  unplanned:        DS.attr('number'),
  insurance:        DS.attr('number'),
  stateEstimation:  DS.attr('number'),
  description:      DS.attr('string'),
  rev:              DS.attr('string'),

  multiplierOfGrossRevenu: Ember.computed(function() {
    return this.getMultiplierOfGrossRevenu();
  }),

  pricePerFlat: Ember.computed(function() {
    return this.get('sellingPrice') / this.get('numberOfFlats');
  }),

  netValuesOfRents: Ember.computed(function() {
    return this.getNetValuesOfRents();
  }),

  operatingExpenses: Ember.computed(function() {
    return this.getOperatingExpenses();
  }),

  currentPerformance: Ember.computed(function() {
    return this.getCurrentPerformance();
  }),

  annualPerformanceOfBuilding: Ember.computed(function() {
    return this.getCurrentPerformance() + this.getAddedValueOfBuilding();
  }),

  isMultiplierOfGrossRevenuLessTwelve: Ember.computed(function() {
    return this.getMultiplierOfGrossRevenu() < 12;
  }),

  isLessTo150Hundrud: Ember.computed(function(){
    return this.get('pricePerFlat') <= 150000;
  }),

  annualPerformanceOfDownPayment: Ember.computed(function() {
    return this.getAnnualPerformanceOfDownPayment();
  }),

  getAnnualPerformanceOfDownPayment: function(){
    return this.getCashBalance();
  },

  getCashBalance: function(){
    return this.getNetValuesOfRents() - this.getOperatingExpenses();
  },

  getCurrentPerformance: function(){
    return (((this.getNetValuesOfRents() - this.getOperatingExpenses()))/this.get('sellingPrice'))*100;
  },

  getAddedValueOfBuilding: function(){
    return ((this.get('sellingPrice') * 0.02)/this.get('sellingPrice'))*100;
  },

  getOperatingExpenses: function() {
    return this.taxes() + this.maintenanceFees() + this.get('unplanned') + this.get('insurance') + this.managementFees();
  },

  getNetValuesOfRents: function() {
    return ((this.get('annualGrossRent') / this.get('numberOfFlats'))+ this.assessmentFactor()) - (this.provisionForBadDebt() + this.vacancyRate());
  },

  maintenanceFees: function(){
    return this.get('stateEstimation') * 0.01;
  },

  managementFees: function(){
    return (this.get('annualGrossRent')/ this.get('numberOfFlats'))* 0.05;
  },

  taxes: function(){
    return this.get('propertyTax') + this.get('schoolTax');
  },

  assessmentFactor: function(){
    return this.get('annualGrossRent') * 0.02;
  },

  provisionForBadDebt: function(){
    return this.get('annualGrossRent') * 0.01;
  },

  vacancyRate: function(){
    return this.get('annualGrossRent') * 0.03;
  },

  getMultiplierOfGrossRevenu: function(){
    return this.get('sellingPrice') / this.get('annualGrossRent');
  },

});
