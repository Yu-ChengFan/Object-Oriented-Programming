const Manager = require('../lib/Manager');

test('create manager object', () => {
    const manager = new Manager('Toby', 1, 'Toby@gmail.com', 2);
    expect(manager.name).toBe('Toby');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toBe(2);
})

test('get the manager role', () => {
    const manager = new Manager('Toby', 1, 'Toby@gmail.com', 2);
    expect(manager.getRole()).toBe('Manager');
})