const {addition, division, aireRectangle, puissance3} = require("./math")

test('test de la fonction division', () => {
    expect(division(4,2)).toBe(2)
});

test('test de la fonction addition', () => {
    expect(addition(5,2)).toBe(7)
});

test("test du calcul de l'aire d'un rectangle", () => {
    expect(aireRectangle(11,3)).toBe(33)
});

test('test de la puissance 3', () => {
    expect(puissance3(2)).toBe(8)
});
