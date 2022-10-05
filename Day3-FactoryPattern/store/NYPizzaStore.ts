import Pizza from '../Pizza'
import NYStyleCheesePizza from '../nyStyle/NYStyleCheesePizza'
import NYStyleClamPizza from '../nyStyle/NYStyleClamPizza'
import NYStylePepperoniPizza from '../nyStyle/NYStylePepperoniPizza'
import NYStyleVeggiePizza from '../nyStyle/NYStyleVeggiePizza'
import PizzaStore from '../PizzaStore'

export class NYPizzaStore extends PizzaStore {
    createPizza(type: string): Pizza {
        let pizza: Pizza

        // 이 부분에서만 유일하게 구상 클래스 참조 (new keyword)
        if (type === 'cheese') pizza = new NYStyleCheesePizza()
        else if (type === 'pepperoni') pizza = new NYStylePepperoniPizza()
        else if (type === 'clam') pizza = new NYStyleClamPizza()
        else if (type === 'veggie') pizza = new NYStyleVeggiePizza()

        return pizza
    }
}
