import Util from '@/helper/util';

it('set the precision', () => {
  expect(Util.toFixed(5.535, 2)).toEqual(5.54);
});
