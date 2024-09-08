// task 1

// Створіть об'єкт JSON з інформацією про книгу. Книга повинна мати наступні поля:
// назва книги
// автор книги
// рік видання
// жанр

import book from './book.json';

try {
    const bookObject = JSON.stringify(book);
    console.log('is valid', bookObject);
} catch (error) {
    console.error('is invalid', error);
}


// task 2

// Запросіть у вашого користувача ім'я та вік за допомогою input. 
// Створіть об'єкт JSON з інформацією про користувача, використовуючи дані, які ви отримали від користувача. 
// Перевірте, що ваш JSON є коректним за допомогою методу JSON.parse().

const form = document.getElementById('form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();

    const formData = {
        name: e.target.name.value,
        age: e.target.age.value,
    };

    const stringifiedData = JSON.stringify(formData);

    try {
        const parsedData = JSON.parse(stringifiedData);

        console.log('is valid', parsedData);
    } catch (error) {
        console.error('is invalid', error);
    }
}


// task 3

// Створіть об'єкт JSON, який містить дані про фільми. Кожен об'єкт повинен мати наступні поля:

// назва фільму
// рік випуску
// режисер
// жанр
// актори

// Використовуйте метод JSON.stringify(), щоб перетворити об'єкт у рядок JSON. 
// Збережіть отриманий рядок у файл з розширенням ".json". 
// Перевірте, що ваш JSON є коректним за допомогою методу JSON.parse().

import movies from './movies.json';

const stringifiedMovies = JSON.stringify(movies);

console.log(typeof stringifiedMovies);

try {
    const parsedMovies = JSON.parse(stringifiedMovies);

    console.log('is valid', parsedMovies);
} catch (error) {
    console.error("is invalid", error);
}