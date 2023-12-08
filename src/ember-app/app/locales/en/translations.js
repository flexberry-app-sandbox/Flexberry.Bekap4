import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISBekap_4ВизитLForm from './forms/i-i-s-bekap-4-визит-l';
import IISBekap_4ДолжностиLForm from './forms/i-i-s-bekap-4-должности-l';
import IISBekap_4КлиентLForm from './forms/i-i-s-bekap-4-клиент-l';
import IISBekap_4сотрудникLForm from './forms/i-i-s-bekap-4-сотрудник-l';
import IISBekap_4ТоварLForm from './forms/i-i-s-bekap-4-товар-l';
import IISBekap_4УслугаLForm from './forms/i-i-s-bekap-4-услуга-l';
import IISBekap_4ВизитEForm from './forms/i-i-s-bekap-4-визит-e';
import IISBekap_4ДолжностиEForm from './forms/i-i-s-bekap-4-должности-e';
import IISBekap_4КлиентEForm from './forms/i-i-s-bekap-4-клиент-e';
import IISBekap_4сотрудникEForm from './forms/i-i-s-bekap-4-сотрудник-e';
import IISBekap_4ТоварEForm from './forms/i-i-s-bekap-4-товар-e';
import IISBekap_4УслугаEForm from './forms/i-i-s-bekap-4-услуга-e';
import IISBekap_4ВизитModel from './models/i-i-s-bekap-4-визит';
import IISBekap_4ДолжностиModel from './models/i-i-s-bekap-4-должности';
import IISBekap_4ЗаписьВизитаModel from './models/i-i-s-bekap-4-запись-визита';
import IISBekap_4КлиентModel from './models/i-i-s-bekap-4-клиент';
import IISBekap_4СоставУслугиModel from './models/i-i-s-bekap-4-состав-услуги';
import IISBekap_4сотрудникModel from './models/i-i-s-bekap-4-сотрудник';
import IISBekap_4ТоварModel from './models/i-i-s-bekap-4-товар';
import IISBekap_4УслугаModel from './models/i-i-s-bekap-4-услуга';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-bekap-4-визит': IISBekap_4ВизитModel,
    'i-i-s-bekap-4-должности': IISBekap_4ДолжностиModel,
    'i-i-s-bekap-4-запись-визита': IISBekap_4ЗаписьВизитаModel,
    'i-i-s-bekap-4-клиент': IISBekap_4КлиентModel,
    'i-i-s-bekap-4-состав-услуги': IISBekap_4СоставУслугиModel,
    'i-i-s-bekap-4-сотрудник': IISBekap_4сотрудникModel,
    'i-i-s-bekap-4-товар': IISBekap_4ТоварModel,
    'i-i-s-bekap-4-услуга': IISBekap_4УслугаModel
  },

  'application-name': 'Bekap_4',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Bekap_4',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Bekap_4',
          title: 'Bekap_4'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'справочник-услуги': {
          caption: 'Справочник услуги',
          title: 'Справочник услуги',
          'i-i-s-bekap-4-услуга-l': {
            caption: 'Услуга',
            title: ''
          }
        },
        'запись-на-визит': {
          caption: 'Запись на визит',
          title: 'Запись на визит',
          'i-i-s-bekap-4-визит-l': {
            caption: 'Визит',
            title: 'Визит'
          }
        },
        'справочник-сотрудники': {
          caption: 'Справочник сотрудники',
          title: 'Справочник сотрудники',
          'i-i-s-bekap-4-сотрудник-l': {
            caption: 'сотрудник',
            title: 'Сотрудник'
          },
          'i-i-s-bekap-4-должности-l': {
            caption: 'Должности',
            title: 'Должности'
          }
        },
        'справочник-клиенты': {
          caption: 'Справочник клиенты',
          title: 'Справочник клиенты',
          'i-i-s-bekap-4-клиент-l': {
            caption: 'Клиент',
            title: 'Клиент'
          }
        },
        'справочник-товары': {
          caption: 'Справочник товары',
          title: 'Справочник товары',
          'i-i-s-bekap-4-товар-l': {
            caption: 'Товар',
            title: 'Товар'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-bekap-4-визит-l': IISBekap_4ВизитLForm,
    'i-i-s-bekap-4-должности-l': IISBekap_4ДолжностиLForm,
    'i-i-s-bekap-4-клиент-l': IISBekap_4КлиентLForm,
    'i-i-s-bekap-4-сотрудник-l': IISBekap_4сотрудникLForm,
    'i-i-s-bekap-4-товар-l': IISBekap_4ТоварLForm,
    'i-i-s-bekap-4-услуга-l': IISBekap_4УслугаLForm,
    'i-i-s-bekap-4-визит-e': IISBekap_4ВизитEForm,
    'i-i-s-bekap-4-должности-e': IISBekap_4ДолжностиEForm,
    'i-i-s-bekap-4-клиент-e': IISBekap_4КлиентEForm,
    'i-i-s-bekap-4-сотрудник-e': IISBekap_4сотрудникEForm,
    'i-i-s-bekap-4-товар-e': IISBekap_4ТоварEForm,
    'i-i-s-bekap-4-услуга-e': IISBekap_4УслугаEForm
  },

});

export default translations;
