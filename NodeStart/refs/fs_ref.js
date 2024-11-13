const fs = require('fs')
const path = require('path')

// // Создаём папку 'notes'. Если ошибка при создании папки, она будет выброшена.
// fs.mkdir(path.join(__dirname, 'notes'), err => {
//     if (err) throw err

//     console.log('Папка была создана')
// })

// // Создаём файл 'mynotes.txt' в папке 'notes' с текстом 'Hello world'.
// fs.writeFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     'Hello world',
//     (err) => {
//         if (err) throw err
//         console.log('Файл был создан')

//         // Добавляем в файл строку ' From append file'.
//         fs.appendFile(
//             path.join(__dirname, 'notes', 'mynotes.txt'),
//             ' From append file',
//             err => {
//                 if (err) throw err
//                 console.log("Файл был изменён")

//                 // Читаем содержимое файла и выводим в консоль.
//                 fs.readFile(
//                     path.join(__dirname, 'notes', 'mynotes.txt'),
//                     'utf-8',
//                     (err, data) => {
//                         if (err) throw err
//                         console.log(data)
//                     }
//                 )
//             }
//        )
//     }
// )

// fs.rename(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     path.join(__dirname, 'notes', 'notes.txt'),
//     err => {
//         if (err) throw err

//         console.log('Файл переименован')
//     }
// )

fs.mkdir(path.join(__dirname, 'test'), err => {
    if (err) throw err

    console.log('Папка была создана')
})

fs.writeFile(
    path.join(__dirname, 'test', 'test.txt'),
    'SPTV',
    (err) => {
        if (err) throw err
        console.log('Файл был создан')

        fs.appendFile(
            path.join(__dirname, 'test', 'test.txt'),
            '24',
            err => {
                if (err) throw err
                console.log("Файл был изменён")

                fs.readFile(
                    path.join(__dirname, 'test', 'test.txt'),
                    'utf-8',
                    (err, data) => {
                        if (err) throw err
                        console.log(data)
                    }
                )
            }
       )
    }
)