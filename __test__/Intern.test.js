const Intern = require('../lib/Intern');

test('create intern object', () => {
    const intern = new Intern('Danny', 1, 'Danny@gmail.com', 'School');
    expect(intern.name).toBe('Danny');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test('get intern role', () => {
    const intern = new Intern('Danny', 1, 'Danny@gmail.com', 'School');
    expect(intern.getRole()).toBe('Intern');
})

test('get intern school', () => {
    const intern = new Intern('Danny', 1, 'Danny@gmail.com', 'School');
    expect(intern.getSchool()).toBe('School');
})