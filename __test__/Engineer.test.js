const Engineer = require('../lib/Engineer');

test('create engineer object', () => {
    const engineer = new Engineer('Danny', 1, 'Danny@gmail.com', 'github');
    expect(engineer.name).toBe('Danny');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})

test('get engineer role', () => {
    const engineer = new Engineer('Danny', 1, 'Danny@gmail.com', 'github');
    expect(engineer.getRole()).toBe('Engineer')
})

test('get engineer github', () => {
    const engineer = new Engineer('Danny', 1, 'Danny@gmail.com', 'github');
    expect(engineer.getGithub()).toBe(`https://github.com/${engineer.github}`)
})