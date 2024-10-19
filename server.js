const http = require("http");

//Импортируем обработчик маршрутов
const routeHandler = require("./routes/router");

//Создание HTTP сервера
const server = http.createServer(routeHandler);

//Запуск сервера на порту 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log("Server is runningon port " + PORT);
});