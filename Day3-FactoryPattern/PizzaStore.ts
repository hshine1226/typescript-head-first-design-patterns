import Pizza from './Pizza'

export default class PizzaStore {
    public orderPizza(type: string) {
        let pizza: Pizza

        pizza.prepare()
        pizza.bake()
        pizza.cut()
        pizza.box()
        return pizza
    }
}
