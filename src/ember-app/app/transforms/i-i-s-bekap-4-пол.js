import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ПолEnum from '../enums/i-i-s-bekap-4-пол';

export default FlexberryEnum.extend({
  enum: ПолEnum,
  sourceType: 'IIS.Bekap_4.Пол'
});
