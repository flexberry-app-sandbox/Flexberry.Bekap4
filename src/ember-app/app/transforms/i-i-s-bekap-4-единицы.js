import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ЕдиницыEnum from '../enums/i-i-s-bekap-4-единицы';

export default FlexberryEnum.extend({
  enum: ЕдиницыEnum,
  sourceType: 'IIS.Bekap_4.Единицы'
});
