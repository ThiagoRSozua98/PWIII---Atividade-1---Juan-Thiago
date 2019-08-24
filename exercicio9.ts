import {Piscina} from "./exercicio8"; 

let ttpiscina =  new Piscina()
ttpiscina.diametro = 6
ttpiscina.custoConstrucao = 75

console.log(`R$ ${ttpiscina.custoTotal().toFixed(2)}`)