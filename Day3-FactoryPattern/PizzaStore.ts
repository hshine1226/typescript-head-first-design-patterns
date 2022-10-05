import Pizza from './Pizza'

export default abstract class PizzaStore {
    public orderPizza(type: string) {
        let pizza: Pizza

        pizza = this.createPizza(type)

        pizza.prepare()
        pizza.bake()
        pizza.cut()
        pizza.box()
        return pizza
    }

    protected abstract createPizza(type: string): Pizza
}
