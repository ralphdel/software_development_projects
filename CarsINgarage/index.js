class Car {
    static numberOfCars= 0
    constructor(model){
        this.model=model
        Car.numberOfCars+=1
    }
}

let porsche = new Car('porsche')
let ferarri = new Car('ferarri')
let benz = new Car('benz')
let lamboghini = new Car('lamboghini')

console.log(Car.numberOfCars);