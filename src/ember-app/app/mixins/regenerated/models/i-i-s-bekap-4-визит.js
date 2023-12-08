import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаВизита: DS.attr('date'),
  кодВизита: DS.attr('number'),
  конецСеанса: DS.attr('string'),
  началоСеанса: DS.attr('string'),
  клиент: DS.belongsTo('i-i-s-bekap-4-клиент', { inverse: null, async: false }),
  записьВизита: DS.hasMany('i-i-s-bekap-4-запись-визита', { inverse: 'визит', async: false })
});

export let ValidationRules = {
  датаВизита: {
    descriptionKey: 'models.i-i-s-bekap-4-визит.validations.датаВизита.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодВизита: {
    descriptionKey: 'models.i-i-s-bekap-4-визит.validations.кодВизита.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  конецСеанса: {
    descriptionKey: 'models.i-i-s-bekap-4-визит.validations.конецСеанса.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  началоСеанса: {
    descriptionKey: 'models.i-i-s-bekap-4-визит.validations.началоСеанса.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-bekap-4-визит.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  записьВизита: {
    descriptionKey: 'models.i-i-s-bekap-4-визит.validations.записьВизита.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВизитE', 'i-i-s-bekap-4-визит', {
    кодВизита: attr('Код визита', { index: 0 }),
    началоСеанса: attr('Начало сеанса', { index: 1 }),
    конецСеанса: attr('Конец сеанса', { index: 2 }),
    датаВизита: attr('Дата визита', { index: 3 }),
    клиент: belongsTo('i-i-s-bekap-4-клиент', 'Клиент', {
      фИО: attr('ФИО', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фИО' }),
    записьВизита: hasMany('i-i-s-bekap-4-запись-визита', 'Табличная часть. Состав визита', {
      стоимость: attr('Стоимость', { index: 0 }),
      комментарий: attr('Комментарий', { index: 1 }),
      услуга: belongsTo('i-i-s-bekap-4-услуга', 'Услуга', {
        наименование: attr('Наименование', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'наименование' }),
      сотрудник: belongsTo('i-i-s-bekap-4-сотрудник', 'Сотрудник', {
        фИО: attr('ФИО', { index: 5, hidden: true })
      }, { index: 4, displayMemberPath: 'фИО' })
    })
  });

  modelClass.defineProjection('ВизитL', 'i-i-s-bekap-4-визит', {
    кодВизита: attr('Код визита', { index: 0 }),
    началоСеанса: attr('Начало сеанса', { index: 1 }),
    конецСеанса: attr('Конец сеанса', { index: 2 }),
    датаВизита: attr('Дата визита', { index: 3 }),
    клиент: belongsTo('i-i-s-bekap-4-клиент', 'ФИО', {
      фИО: attr('ФИО', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
