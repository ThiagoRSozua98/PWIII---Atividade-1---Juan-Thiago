class Piscina {
    diametro: number
    custoConstrucao: number

    raio(){
        return this.diametro / 2 
    }

    area(){
        return 3.14159265359 *  (this.raio() * this.raio())
    }

    custoTotal(){
        return this.custoConstrucao * this.area()
    }
}


//let ttpiscina =  new Piscina()
//ttpiscina.diametro = 6
//ttpiscina.custoConstrucao = 75

//console.log(`R$ ${ttpiscina.custoTotal().toFixed(2)}`)