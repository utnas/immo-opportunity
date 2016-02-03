import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  type: DS.attr('number'),
  sellingPrice:DS.attr('number'),
  numberOfFlats:DS.attr('number'),
  propertyTax: DS.attr('number'),
  schoolTax: DS.attr('number'),
  annualGrossRent: DS.attr('number')
});
