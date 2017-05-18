var user = require('./user'); //в user записывается объект exports из запрашываемого модуля 
// У него доступен созданный метод- exports.User = User; -->user.User

var vasya = new user.User("Вася"); // пользуемся переданным методом из модуля
var petya = new user.User("Петя"); // пользуемся переданным методом из модуля
var ivan = new User("Иван"); // пользуемся глобальнім методом

vasya.hello(petya);
ivan.hello(vasya);

// У каждого модуля свои глобальные переменные
