const fs = require('fs');

const writeFile = content => {
    fs.writeFile('./dist/index.html', content, err => {
        if (err) {
            return
        }
        console.log('The HTML was created.')
    })
}

module.exports = writeFile;