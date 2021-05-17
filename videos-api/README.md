# Videos API

Pequeña aplicación que expone un API Rest que permite subir videos a la plataforma [api.video](https://api.video/)

Para utilizar este proyecto es necesario instalar las siguientes dependencias:

```bash
    npm install -g sequelize-cli nodemon
```
Una vez instaladas las dependencias es necesario ejecutar el comando `sequelize-cli db:migrate` para crear las tablas en sqlite.

Luego debe crear un archivo **.env** en la raíz del proyecto y en el colocar las siguientes variables de entorno:

```bash
    VIDEO_API_API_KEY=<api-key>
    JWT_SECRET=<secret>
```

Finalmente puede ejecutar `npm run start` y el proyecto debería estar funcionando.