#npm init / Es para inicializar el proyecto
#node -v /Version de nodes
-  "type": "module", cambiamos esta linea de commonjs a module, para poder implementar modules de es6
-npm i nodemon cors express mysql2 / paquete basicos
- nodemon: solo para desarrollar sirve para cambiar el codigo y que se actualice 
-cors: setear la seguridad 
- express: es la libreria para crar un servidor rest (POST,GET,PUT)
- mysql2: libreria para las consultas de la DB




- Cambiamos la sesion scripts en el package.json asi:
    "dev": "nodemon index.js",
    "start": "node index.js",
    con el fin de tener 2 scripts de ejecucion, uno de desarrollo  y otro de despliegue 