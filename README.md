# Proyecto Aplicación de Ochenta 

Este proyecto se encarga del de usuarios ,categorías 

## Comenzando 🚀

Descargar la Rama de Master y entrar a la terminal en la ruta de la carpeta del proyecto y asegurarse de tener instalado node js y npm instalados en su ordenador, Luego ejecutar el comando npm install para actualizar los paquetes del proyecto.


### Pre-requisitos 📋

Tener el Gestor de Base de Datos Mysql 
Restaurar la base de datos que se encuentra en la carpeta Base de Datos/ModelUber.mwb

luego tenemos que copiar el archivo configuracion.env y cambiar su nombre a .env 
luego configuramos las variables siguientes:

* SQLITE_DB= nombre de la base de datos de sqlite.
* SQLITE_SETUP= valor 1 o 0.

* JWT_AGE_SECONDS= segundos de duración del token de inicio de sesión.
* JWT_AGE_SECONDS_Reset_Password=  segundos de duración del token para restablecer la contraseña.    
* JWT_SECRET=

* MONGODB_URI= link de conexión a la base de datos
* MONGODB_DB= nombre de la base de datos
* MONGODB_SETUP= valor 1 o 0.

* APP_API_KEY= llaves validas para el uso de la api separadas por "|"
* CORSLIST= Lista de direcciones que permite la api

* correo_app =  Correo con verificación de 2 pasos 
* correo_servicio = smtp.gmail.com
* correo_port = 465
* correo_contrasenia = contraseña generada por google para el uso de app de terceros


Luego iniciamos la api con el siguiente comando escrito en la consola:
* nodemon


## Construido con 🛠️

* [Node Js](https://nodejs.org/es/) 
* [Mongo Db](https://mongodb.github.io/node-mongodb-native/4.5/) - Gestor de Base de Datos
* [NPM](https://www.npmjs.com/)


## Versionado 📌

Usamos [GitHub](https://github.com/) para el versionado. Para todas las versiones disponibles, 
mira los [ochenta-Backend](https://github.com/Luis-FloresC/Clase-Rest-Api.git).

## Autor ✒️

* **Luis Flores** - [LuisFlores-C](https://github.com/Luis-FloresC)


También puedes mirar la lista de todos los [contribuyentes](https://github.com/Luis-FloresC/Clase-Rest-Api/graphs/contributors) 
quienes han participado en este proyecto. 

## Expresiones de Gratitud 🎁

* Gracias al Ingeniero [JOSE BETANCOURTH](https://github.com/obetancourth) por compartir su conocimiento 😎
* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕. 
* Da las gracias públicamente 🤓.

---
