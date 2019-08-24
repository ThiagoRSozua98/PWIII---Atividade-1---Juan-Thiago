"use strict";
exports.__esModule = true;
var exercicio8_1 = require("./exercicio8");
var ttpiscina = new exercicio8_1.Piscina();
ttpiscina.diametro = 6;
ttpiscina.custoConstrucao = 75;
console.log("R$ " + ttpiscina.custoTotal().toFixed(2));
