import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-bekap-4-визит-l');
  this.route('i-i-s-bekap-4-визит-e',
  { path: 'i-i-s-bekap-4-визит-e/:id' });
  this.route('i-i-s-bekap-4-визит-e.new',
  { path: 'i-i-s-bekap-4-визит-e/new' });
  this.route('i-i-s-bekap-4-должности-l');
  this.route('i-i-s-bekap-4-должности-e',
  { path: 'i-i-s-bekap-4-должности-e/:id' });
  this.route('i-i-s-bekap-4-должности-e.new',
  { path: 'i-i-s-bekap-4-должности-e/new' });
  this.route('i-i-s-bekap-4-клиент-l');
  this.route('i-i-s-bekap-4-клиент-e',
  { path: 'i-i-s-bekap-4-клиент-e/:id' });
  this.route('i-i-s-bekap-4-клиент-e.new',
  { path: 'i-i-s-bekap-4-клиент-e/new' });
  this.route('i-i-s-bekap-4-сотрудник-l');
  this.route('i-i-s-bekap-4-сотрудник-e',
  { path: 'i-i-s-bekap-4-сотрудник-e/:id' });
  this.route('i-i-s-bekap-4-сотрудник-e.new',
  { path: 'i-i-s-bekap-4-сотрудник-e/new' });
  this.route('i-i-s-bekap-4-товар-l');
  this.route('i-i-s-bekap-4-товар-e',
  { path: 'i-i-s-bekap-4-товар-e/:id' });
  this.route('i-i-s-bekap-4-товар-e.new',
  { path: 'i-i-s-bekap-4-товар-e/new' });
  this.route('i-i-s-bekap-4-услуга-l');
  this.route('i-i-s-bekap-4-услуга-e',
  { path: 'i-i-s-bekap-4-услуга-e/:id' });
  this.route('i-i-s-bekap-4-услуга-e.new',
  { path: 'i-i-s-bekap-4-услуга-e/new' });
});

export default Router;
