import {describe, expect, test} from '@jest/globals';
import sum from '../src/sum';

describe("Integers numbers", () => {
   it('should return 8 if adding 3 and 5', () => {
      expect(sum(3, 5)).toBe(8);
   });

   it('should return 15 if adding 7 and 8', () => {
      expect(sum(7, 8)).toBe(15);
   });
});

xdescribe('Decimal numbers', () => {
   it('should return 8.33 if adding 3.32 and 5.01', () => {
      expect(sum(3.32, 5.01)).toBe(8.33);
   });

   it('should return 15.82 if adding 7.72 and 8.1', () => {
      expect(sum(7.72, 8.1)).toBe(15.82);
   });
});

/*describe('Invalid inputs', () => {
   it('should throw a TypeError if first parameter is not a number', () => {
      expect(() => sum('Franco', 5)).toThrow(TypeError);
   });
   it('should throw a TypeError if second parameter is not a number', () => {
      expect(() => sum(3, true)).toThrow(TypeError);
   });
});
*/
