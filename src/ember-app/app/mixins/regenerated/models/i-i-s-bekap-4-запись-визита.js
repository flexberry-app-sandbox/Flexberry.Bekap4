import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  комментарий: DS.attr('string'),
  стоимость: DS.attr('decimal'),
  сотрудник: DS.belongsTo('i-i-s-bekap-4-сотрудник', { inverse: null, async: false }),
  услуга: DS.belongsTo('i-i-s-bekap-4-услуга', { inverse: null, async: false }),
  визит: DS.belongsTo('i-i-s-bekap-4-визит', { inverse: 'записьВизита', async: false })
});

export let ValidationRules = {
  комментарий: {
    descriptionKey: 'models.i-i-s-bekap-4-запись-визита.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-bekap-4-запись-визита.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-bekap-4-запись-визита.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  услуга: {
    descriptionKey: 'models.i-i-s-bekap-4-запись-визита.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  визит: {
    descriptionKey: 'models.i-i-s-bekap-4-запись-визита.validations.визит.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьВизитаE', 'i-i-s-bekap-4-запись-визита', {
    стоимость: attr('Стоимость', { index: 0 }),
    комментарий: attr('Комментарий', { index: 1 }),
    услуга: belongsTo('i-i-s-bekap-4-услуга', 'Услуга', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' }),
    сотрудник: belongsTo('i-i-s-bekap-4-сотрудник', 'Сотрудник', {
      фИО: attr('ФИО', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фИО' })
  });
};
