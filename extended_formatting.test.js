const { uniqueValues, letterFrequency, sortByKey, deepClone, intersection } = require('./extended_formatting');

describe('extended formatting functions', () => {

    describe('uniqueValues', () => {
        test('gibt nur einzigartige Werte zurück', () => {
            expect(uniqueValues([1, 2, 3, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
        });

        test('gibt ein leeres Array zurück, wenn ein leeres Array übergeben wird', () => {
            expect(uniqueValues([])).toEqual([]);
        });

        test('gibt das gleiche Array zurück, wenn alle Elemente einzigartig sind', () => {
            expect(uniqueValues([1, 2, 3])).toEqual([1, 2, 3]);
        });
    });

    test('gibt ein leeres Objekt für einen leeren String zurück', () => {
        expect(letterFrequency('')).toEqual({});
    });

    test('ist case-sensitiv (Gross- und Kleinschreibung beachten)', () => {
        expect(letterFrequency('hello')).toEqual({ h: 1, e: 1, l: 2, o: 1 });
    });
});

describe('sortByKey', () => {
    test('sortiert ein Array von Objekten nach einem gegebenen Schlüssel', () => {
        const input = [
            { id: 3, name: 'John' },
            { id: 1, name: 'Jane' },
            { id: 2, name: 'Doe' }
        ];
        const output = [
            { id: 1, name: 'Jane' },
            { id: 2, name: 'Doe' },
            { id: 3, name: 'John' }
        ];
        expect(sortByKey(input, 'id')).toEqual(output);
    });

    test('gibt das gleiche Array zurück, wenn es bereits sortiert ist', () => {
        const input = [
            { id: 1, name: 'Jane' },
            { id: 2, name: 'Doe' },
            { id: 3, name: 'John' }
        ];
        expect(sortByKey(input, 'id')).toEqual(input);
    });

    test('gibt ein leeres Array zurück, wenn ein leeres Array übergeben wird', () => {
        expect(sortByKey([], 'id')).toEqual([]);
    });
});

describe('deepClone', () => {
    test('erstellt ein deepClone des Objekts', () => {
        const Object = { a: { b: { c: 1 } } };
        const cloned = deepClone(Object);
        Object.a.b.c = 2;
        expect(cloned.a.b.c).toBe(1);
    });

    test('kopiert ein Array', () => {
        const array = [{ a: 1 }, { b: 2 }];
        const cloned = deepClone(array);
        array[0].a = 3;
        expect(cloned[0].a).toBe(1);
    });

    test('geklontes Objekt ist nicht die gleiche Referenz', () => {
        const Objekt = { a: 1 };
        const cloned = deepClone(Objekt);
        expect(cloned).not.toBe(Objekt);
    });
});

describe('intersection', () => {
    test('gibt gemeinsame Werte aus zwei Arrays zurück', () => {
        const array1 = [1, 2, 3, 4, 5];
        const array2 = [4, 5, 6, 7, 8];
        expect(intersection(array1, array2)).toEqual([4, 5]);
    });

    test('gibt ein leeres Array zurück, wenn es keine gemeinsamen Elemente gibt', () => {
        const array1 = [1, 2, 3];
        const array2 = [4, 5, 6];
        expect(intersection(array1, array2)).toEqual([]);
    });

        describe('divide Funktion', () => {
            // Positivtest
            test('Teilt 10 durch 2 und ergibt 5', () => {
                expect(divide(10, 2)).toBe(5);
            });
        
            // Negativtests
            test('Wirft einen Fehler, wenn durch 0 geteilt wird', () => {
                expect(() => {
                    divide(10, 0);
                }).toThrow('Der Teiler b muss eine Zahl sein und darf nicht 0 sein.');
            });
        
            test('Wirft einen Fehler, wenn b kein Typ Number ist', () => {
                expect(() => {
                    divide(10, 'zwei');
                }).toThrow('Der Teiler b muss eine Zahl sein und darf nicht 0 sein.');
            });
        });
    });   