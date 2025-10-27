import normalizePhoneNumber from '../js/task.js';

describe('normalizePhoneNumber', () => {
  test('should correctly handle a Russian number starting with 8', () => {
    const result = normalizePhoneNumber('8 (927) 000-00-00');
    expect(result).toBe('+79270000000');
  });

  test('should correctly handle a Russian number starting with +7', () => {
    const result = normalizePhoneNumber('+7 960 000 00 00');
    expect(result).toBe('+79600000000');
  });

  test('should correctly handle a Russian number starting with 7 without plus', () => {
    const result = normalizePhoneNumber('7 999 123 45 67');
    expect(result).toBe('+79991234567');
  });

  test('should correctly handle an international number (e.g., China)', () => {
    const result = normalizePhoneNumber('+86 000 000 0000');
    expect(result).toBe('+860000000000');
  });

  test('should correctly handle an international number without plus', () => {
    const result = normalizePhoneNumber('86 123 456 7890');
    expect(result).toBe('+861234567890');
  });

  test('should remove all non-digit characters and return +digits if pattern does not match', () => {
    const result = normalizePhoneNumber('abc-123-45');
    expect(result).toBe('+12345');
  });

  test('should correctly handle a number with extra characters at start and end', () => {
    const result = normalizePhoneNumber('  ***8(999)111-22-33### ');
    expect(result).toBe('+79991112233');
  });

  test('should correctly handle an international number with a long country code', () => {
    const result = normalizePhoneNumber('+380 50 123 4567');
    expect(result).toBe('+380501234567');
  });
});
