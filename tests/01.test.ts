import {describe, expect, test} from '@jest/globals';
import {binarioADecimal,decimalABinario} from '../src/01'; 

describe('binarioADecimal(num)', function() {
   it('debería retornar 2', function() {
      expect(binarioADecimal('10')).toBe(2);
   });
   it('debería retornar 7', function() {
      expect(binarioADecimal('111')).toBe(7);
   });
   it('debería retornar 181', function() {
      expect(binarioADecimal('10110101')).toBe(181);
   });
});

describe('decimalABinario(num)', function() {
   it('debería retornar "100"', function() {
      expect(decimalABinario(4)).toBe('100');
   });
   it('debería retornar "111"', function() {
      expect(decimalABinario(7)).toBe('111');
   });
   it('debería retornar "10110101"', function() {
      expect(decimalABinario(181)).toBe('10110101');
   });

});

