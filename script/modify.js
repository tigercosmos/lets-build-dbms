const fs = require('fs');
const path = require('path');

const dirPaths = [
    path.join(__dirname, '../_book/'),
]

dirPaths.forEach(dirPath => {
    const dirCont = fs.readdirSync(dirPath);
    const files = dirCont.filter((elm) => elm.match(/\.html$/));
    files.forEach(file => {
        const filePath = path.join(dirPath, file);
        let data = fs.readFileSync(filePath, 'utf-8');
        data = data.replace("Published with GitBook", '');
        tmp = data.split("</head>");
        data = tmp[0] + `` +
            tmp[1];
        fs.writeFileSync(filePath, data, 'utf-8');
        console.log(file, "has been modified.");
    });
})