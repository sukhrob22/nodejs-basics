const fs = require('fs');
const path = require('path');

// fs.mkdir bu async   ko'p tavsiya qilinadi
// fs.mkdirSync bu sync

// fs.mkdir(path.join(__dirname, 'template'), (err) => {
//     if (err) throw new Error();

//     console.log('Folder was created successfuly');
// });

// fs.mkdir(path.join(__dirname, 'notes'), (err) => {
//     if (err) throw new Error();

//     console.log('Folder was created successfuly');
// });

fs.writeFile(
    path.join(__dirname, 'notes', 'december.txt'),
    'Create new course NodeJs',
    (err) => {
        if (err) throw new Error();

        console.log('File was created successfuly');

        fs.appendFile(
            path.join(__dirname, 'notes', 'december.txt'),
            ' and microservices project',
            (err) => {
                if (err) throw new Error();

                console.log('File was changed successfuly');

                fs.readFile(
                    path.join(__dirname, 'notes', 'december.txt'),
                    'utf-8',
                    (err, data) => {
                        if (err) throw new Error();
                        // console.log(Buffer.from(data).toString()); buning o'rniga optionlarimizni o'rniga utf-8 categorifka qo'ysak bo'ladi
                        console.log(data);
                    }
                );
            }
        );
    }
);
