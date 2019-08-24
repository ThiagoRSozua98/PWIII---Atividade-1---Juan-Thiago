var Piscina = /** @class */ (function () {
    function Piscina() {
    }
    Piscina.prototype.raio = function () {
        return this.diametro / 2;
    };
    Piscina.prototype.area = function () {
        return 3.14159265359 * (this.raio() * this.raio());
    };
    Piscina.prototype.custoTotal = function () {
        return this.custoConstrucao * this.area();
    };
    return Piscina;
}());
//let ttpiscina =  new Piscina()
//ttpiscina.diametro = 6
//ttpiscina.custoConstrucao = 75
//console.log(`R$ ${ttpiscina.custoTotal().toFixed(2)}`)
