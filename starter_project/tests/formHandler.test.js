const { checkFormInput } = require('../src/client/js/formHandler');
test('Valid URL should return true', () => {
    expect(checkFormInput('https://valid-url.com')).toBe(true);
  });
  
  test('Invalid URL should return false', () => {
    expect(checkFormInput('invalid-url')).toBe(false);
  });