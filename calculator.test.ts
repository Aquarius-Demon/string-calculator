import { add } from './calculator';
import { test, expect } from '@jest/globals';

test('returns 0 for an empty string', () => {
    expect(add('')).toBe(0);
});

test('returns the number itself for a single number', () => {
    expect(add('1')).toBe(1);
});

test('returns the sum of two comma-separated numbers', () => {
    expect(add('1,5')).toBe(6);
});

test('returns the sum of any amount of numbers', () => {
    expect(add('1,2,3,4,5')).toBe(15);
});

test('handles new lines between numbers', () => {
    expect(add('1\n2,3')).toBe(6);
});

test('supports custom delimiters 1', () => {
    expect(add('//;\n1;2')).toBe(3);
});

test('supports custom delimiters 2', () => {
    expect(add('//#\n5#2#9#4#5\n7')).toBe(25);
});

test('throws an exception for negative numbers', () => {
    expect(() => add('1,-2,3,-4')).toThrow('negative numbers not allowed: -2,-4');
});

test('throws an error for invalid input', () => {
    expect(() => add('invalid')).toThrow('invalid input: invalid');
});

test('handles large numbers', () => {
    expect(add('1000,2000,3000')).toBe(6000);
});