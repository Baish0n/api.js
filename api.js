const time = new Date();
time.setHours(time.getHours() + 3); // МСК
console.log(time.toLocaleTimeString('ru-RU'));