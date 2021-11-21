generateCard = employee => {
    let individualInfo = ''
    if (employee.constructor.name === 'Manager'){
        individualInfo = 'Office Number: ' + employee.officeNumber;
    } else if (employee.constructor.name === 'Engineer'){
        individualInfo = 'GitHub: ' + `<a href="${employee.getGithub()}"> ${employee.github} </a>`;
    } else if (employee.constructor.name === 'Intern'){
        individualInfo = 'School: ' + employee.school;
    }
        return `
        <section class='card'>
            <div class='card-header'>
            <h2 class='name'>${employee.name}</h2>
            <h2 class='title'>${employee.getRole()}</h2>
            </div>
            <ul class='list-group'>
            <li class='id list-group-item'>Employee ID: ${employee.id}</li>
            <li class='email list-group-item'>Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
            <li class='info list-group-item'>` + individualInfo + `</li>
            </ul>
        </section>
        `
    
}

//entire HTML export
module.exports = employeesList => {
    let employeeCards = [];
    for (let i = 0; i < employeesList.length; i++) {
        employeeCards += generateCard(employeesList[i]);
    }
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css">
        <link rel="stylesheet" href="./style.css">
        <title>Team Generator</title>
    </head>
    <body>
        <header>
            <h1>Team</h1>
        </header>
        <main>
            ${employeeCards}
        </main>
    </body>
    </html>
    `
}