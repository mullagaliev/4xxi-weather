# 4xxi-evaluation-test
Evaluation Test for company "4xxi"

##Погодное одностраничное веб-приложение

(!) Данные можно взять с сайта openweathermap.org или с любого другого сервиса.

(!) Обязательно использовать react.js и redux.

Приложение должно уметь:

* Добавлять/удалять города
* Сохранять локально данные
* Автоматически запрашивать погоду по координатам пользователя - это город/место по умолчанию.

Результат разработки должен быть сохранён на сервисе github с локальными коммитами разработчика.

Ссылку на репозиторий необходимо указать при отклике на вакансию или прислать на ab@4xxi.com.

##Run
0. Open terminal
1. npm install
2. Add openweathermap API key 
    1. Create openweathermap api key on [openweathermap.org](https://home.openweathermap.org/api_keys)
    2. Create file '.env.local' on app root
    3. Add line `REACT_APP_OPEN_WEATHER_SECRET=YOUR_API_KEY` to ENV file '.env.local' (or replace line on '.env')
3. npm start
