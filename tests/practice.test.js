// Test 1 - ensure something matches

let sum = (num1, num2) => num1 + num2;

describe('Practice Tests', () => {
  test('sum function adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

// Test 2 - ensure something doesn't match

let sum2 = (num1, num2) => num1 + num2;

describe('Practice Tests', () => {
  test('sum function adds 2 + 5 to equal not be 8', () => {
    expect(sum(2, 5)).not.toBe(8);
  });
});

describe('Matchers Test Group', () => {
    test('This should return null', () => {
      let value = null;
      expect(value).toBeNull();
    });
  
    test('This should return undefined', () => {
      let value;
      expect(value).toBeUndefined();
    });
  
    test('This should be defined', () => {
      let value = 5;
      expect(value).toBeDefined();
    });
  
    test('This should be "truthy"', () => {
      let value = 'Hello World';
      expect(value).toBeTruthy();
    });
  
    test('This should be falsy"', () => {
      let value = 0;
      expect(value).toBeFalsy();
    });
  });