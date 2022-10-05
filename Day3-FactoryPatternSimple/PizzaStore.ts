import Pizza from './Pizza'
import { SimplePizzaFactory } from './SimplePizzaFactory'

export default class PizzaStore {
    private factory: SimplePizzaFactory

    constructor(factory: SimplePizzaFactory) {
        this.factory = factory
    }

    public orderPizza(type: string) {
        let pizza: Pizza

        pizza = this.factory.createPizza(type)

        pizza.prepare()
        pizza.bake()
        pizza.cut()
        pizza.box()
        return pizza
    }
}
