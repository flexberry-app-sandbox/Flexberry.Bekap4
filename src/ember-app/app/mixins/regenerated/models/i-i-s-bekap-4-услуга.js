import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  длительностьМин: DS.attr('number'),
  кодУслуги: DS.attr('number'),
  наименование: DS.attr('string'),
  цена: DS.attr('decimal'),
  составУслуги: DS.hasMany('i-i-s-bekap-4-состав-услуги', { inverse: 'услуга', async: false })
});

export let ValidationRules = {
  длительностьМин: {
    descriptionKey: 'models.i-i-s-bekap-4-услуга.validations.длительностьМин.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кодУслуги: {
    descriptionKey: 'models.i-i-s-bekap-4-услуга.validations.кодУслуги.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-bekap-4-услуга.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-bekap-4-услуга.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  составУслуги: {
    descriptionKey: 'models.i-i-s-bekap-4-услуга.validations.составУслуги.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УслугаE', 'i-i-s-bekap-4-услуга', {
    кодУслуги: attr('Код услуги', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    цена: attr('Цена', { index: 2 }),
    длительностьМин: attr('Длительность мин', { index: 3 }),
    составУслуги: hasMany('i-i-s-bekap-4-состав-услуги', 'Табличная часть. Состав услуги', {
      единицы: attr('Единицы', { index: 0 }),
      количество: attr('Количество', { index: 1 }),
      товар: belongsTo('i-i-s-bekap-4-товар', 'Товар', {
        наименование: attr('', { index: 3 })
      }, { index: 2, displayMemberPath: 'производитель' })
    })
  });

  modelClass.defineProjection('УслугаL', 'i-i-s-bekap-4-услуга', {
    кодУслуги: attr('Код услуги', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    цена: attr('Цена', { index: 2 }),
    длительностьМин: attr('Длительность мин', { index: 3 })
  });
};
