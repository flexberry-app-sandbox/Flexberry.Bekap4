import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-bekap-4-визит', 'Unit | Serializer | i-i-s-bekap-4-визит', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-bekap-4-визит',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-bekap-4-единицы',
    'transform:i-i-s-bekap-4-пол',

    'model:i-i-s-bekap-4-визит',
    'model:i-i-s-bekap-4-должности',
    'model:i-i-s-bekap-4-запись-визита',
    'model:i-i-s-bekap-4-клиент',
    'model:i-i-s-bekap-4-состав-услуги',
    'model:i-i-s-bekap-4-сотрудник',
    'model:i-i-s-bekap-4-товар',
    'model:i-i-s-bekap-4-услуга',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
