const path = require('path');

console.log(__filename);
// Выводит: абсолютный путь к текущему файлу


console.log(path.basename(__filename)); 
// Выводит: имя файла, т.е. 'index.js'

console.log(path.dirname(__filename));
// Выводит: путь к директории, в которой расположен текущий файл

console.log(path.extname(__filename));
// Выводит: расширение файла, '.js'

console.log(path.parse(__filename));
// Выводит объект, содержащий:
// {
//   root: '/',
//   dir: '/home/user/project',
//   base: 'index.js',
//   ext: '.js',
//   name: 'index'
// }

console.log(path.join(__dirname, 'test', 'second.html'));
// Выводит путь, объединяя текущую директорию (__dirname) с 'test' и 'second.html'.

console.log(path.resolve(__dirname, './test', '/second.html'));
// Выводит абсолютный путь, разрешая все компоненты