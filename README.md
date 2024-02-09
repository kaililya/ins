![Type Script](https://img.shields.io/badge/-TypeScript-000?logo=typescript&logoColor=3178C6&style=flat)![React](https://img.shields.io/badge/-React-000?&logo=React)![Redux Toolkit](https://img.shields.io/badge/-ReduxToolkit-000?logo=Redux&logoColor=764ABC&style=flat)![React Router](https://img.shields.io/badge/-ReactRouter-000?logo=reactrouter&logoColor=CA4245&style=flat)![HTML5](https://img.shields.io/badge/-HTML5-000?&logo=HTML5)![CSS3](https://img.shields.io/badge/-CSS3-000?&logo=CSS3)![GIT](https://img.shields.io/badge/-GIT-000?&logo=GIT)![NPM](https://img.shields.io/badge/-NPM-000?logo=npm&logoColor=CC3534&style=flat)![Axios](https://img.shields.io/badge/-Axios-000?logo=axios&logoColor=red&style=flat)
# Проект: Compleon Solutions.de
## [Ссылка на сайт](https://ins-opal.vercel.app/)
#### О проекте

---

##### SPA юридической компании Compleon Solutions - это многостраничный сайт с адаптивной версткой, на котором можно найти подробную информацию о компании.

### Актуальные данные

Самый важный контент на сайте: тарифы на услуги, список законов, особенности подхода компании и прочее получается при помощи REST API, тем самым показывая актулаьную информацию о проекте.

### Поиск закона

На сайте присуствует возможность получить список законов на основе UI поиска, который дает пользователю возможность отфильтровать законы по имени.

Поиск работает как и на главной странице, так и на отдельной странице поиска. 
На главной странице поиск отправляет запрос пока автор печатает - useDebounce. Если он нажмет на кнопку справа внутри поиска, то перейдет на страницу поиска, где запрос на сервер отправляется только после нажатия на кнопку и если на главной странице до этого что-то искали (т.е. что-то написали в поле поиска).
UI закона меняется в соответсвие есть ли ссылка на закон, по который пользователь может перейти чтобы получить более поробную информацию или нет. Если ссылки нет, то при наведение на закон пропадает курсор и другие эффекты анимации, который сообщают пользователю, что он может взаимодейтствоать с сайтом.


---

### Технологии:
 + Язык программирования ![Type Script](https://img.shields.io/badge/-TypeScript-000?logo=typescript&logoColor=3178C6&style=flat)
 + В качестве фраймворка используется ![React](https://img.shields.io/badge/-React-000?&logo=React) 
 + Хранилище данных в браузере разработано при помощи ![Redux Toolkit](https://img.shields.io/badge/-ReduxToolkit-000?logo=Redux&logoColor=764ABC&style=flat)
 + Навигация на сайте разработанапри помощи ![React Router](https://img.shields.io/badge/-ReactRouter-000?logo=reactrouter&logoColor=CA4245&style=flat)
 + Запросы на сервер отпралвяются при помощи ![Axios](https://img.shields.io/badge/-Axios-000?logo=axios&logoColor=red&style=flat)
---

#### Особенности
 + Адаптивная верстка.
 + Реализованы популярные UI решения: аккордион, бургер меню, карусель и т.д.
 + Реализована бизнес логика, которая меняет UI в зависимости от ответа сервера.
 + Отсуствие хардкор данных, все приходит с backend.
 + Клиентский роунтинг.

---

#### Начало работы с Create React App
Проект запускается локально по адресу http://localhost:3000/ путем клонирования данного репозитория и последовательного запуска команд в терминале (должны быть установлены программы Git, NodeJS и менеджер пакетов npm).


#### Доступные скрипты

В каталоге проекта вы можете запустить:

- ##### `npm start` - запустить проект,

- ##### `npm test` - протестировать проект,

- ##### `npm run build` - собрать проект.
 
- ##### `npm test` //для Unit тестирования :

- ##### `npm run cypress` //для E2E тестирования:


Создает приложение для производства в папке "build".\
Он правильно связывает React в рабочем режиме и оптимизирует сборку для достижения наилучшей производительности.

---

