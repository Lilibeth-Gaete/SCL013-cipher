// Importamos el objeto `cipher`, que contiene los métodos `encode` y `decode`
import cifrado from '../src/cipher.js';

describe('cifrado', () => {

  test('should be an object', () => {
    expect(typeof cifrado).toBe('object');
  });

  describe('cifrado.encode', () => {

    test('should be a function', () => {
      expect(typeof cifrado.encode).toBe('function');
    });

    test('should return "ABCDEFG" for "CDEFGHI" with offset 2', () => {
      expect(cifrado.encode(2, "ABCDEFG")).toBe("CDEFGHI");

    });
    test("debe retornar la letra B , al recibir una A con un offset de 1  ", () => {
      expect(cifrado.encode(1, "A")).toBe("B");
    });

  });

  describe('cifrado.decode', () => {

    test('should be a function', () => {
      expect(typeof cifrado.decode).toBe('function');
    });


    test('should return "CDEFGHI" for  "ABCDEFG" with offset 2', () => {
      expect(cifrado.decode(2, "CDEFGHI")).toBe("ABCDEFG");
    });

  });

});
