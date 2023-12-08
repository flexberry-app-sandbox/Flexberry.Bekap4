import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник-услуги.caption'),
          title: i18n.t('forms.application.sitemap.справочник-услуги.title'),
          children: [{
            link: 'i-i-s-bekap-4-услуга-l',
            caption: i18n.t('forms.application.sitemap.справочник-услуги.i-i-s-bekap-4-услуга-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-услуги.i-i-s-bekap-4-услуга-l.title'),
            icon: 'folder open',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.запись-на-визит.caption'),
          title: i18n.t('forms.application.sitemap.запись-на-визит.title'),
          children: [{
            link: 'i-i-s-bekap-4-визит-l',
            caption: i18n.t('forms.application.sitemap.запись-на-визит.i-i-s-bekap-4-визит-l.caption'),
            title: i18n.t('forms.application.sitemap.запись-на-визит.i-i-s-bekap-4-визит-l.title'),
            icon: 'phone',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник-сотрудники.caption'),
          title: i18n.t('forms.application.sitemap.справочник-сотрудники.title'),
          children: [{
            link: 'i-i-s-bekap-4-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.справочник-сотрудники.i-i-s-bekap-4-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-сотрудники.i-i-s-bekap-4-сотрудник-l.title'),
            icon: 'calendar',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник-клиенты.caption'),
          title: i18n.t('forms.application.sitemap.справочник-клиенты.title'),
          children: [{
            link: 'i-i-s-bekap-4-клиент-l',
            caption: i18n.t('forms.application.sitemap.справочник-клиенты.i-i-s-bekap-4-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-клиенты.i-i-s-bekap-4-клиент-l.title'),
            icon: 'calendar',
            children: null
          }]
        }
      ]
    };
  }),
})