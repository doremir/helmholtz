var test = require('tape'),
  helmholtz = require('../');

test('parsing helmholtz notation', function(t) {
  t.deepEqual(helmholtz('a\''), [0, 0]);
  t.deepEqual(helmholtz(',,C'), [-33, -57]);
  t.deepEqual(helmholtz('c#'), [-12, -20]);
  t.deepEqual(helmholtz('D'), [-18, -31]);
  t.deepEqual(helmholtz('Ebb,,'), [-31, -55]);
  t.deepEqual(helmholtz('gx\'\'\''), [13, 24]);
  t.deepEqual(helmholtz('fb'), [-9, -17]);
  t.end();
});
