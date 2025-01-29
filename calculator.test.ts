import { add } from './calculator';
import { test, expect } from '@jest/globals';

test('returns 0 for an empty string', () => {
  expect(add('')).toBe(0);
});

test('returns the number itself for a single number', () => {
    expect(add('1')).toBe(1);
});