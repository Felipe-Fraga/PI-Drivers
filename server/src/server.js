//CREAR EL SERVIDOR
const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();
//Middlewares   -->   Hacen lo que tengan que hacer y la req sigue hacia el endpoint hasta que haya una res
server.use(morgan("dev"));                                                         //registro de solicitudes HTTP
server.use(express.json());                          //solicitudes HTTP desde dominios diferentes al del servidor
server.use(cors());

server.use(router);

module.exports = server;
