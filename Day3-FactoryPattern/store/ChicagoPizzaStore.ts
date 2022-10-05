import ChicagoStyleCheesePizza from '../chicagoStyle/ChicagoStyleCheesePizza'
import ChicagoStyleClamPizza from '../chicagoStyle/ChicagoStyleClamPizza'
import ChicagoStylePepperoniPizza from '../chicagoStyle/ChicagoStylePepperoniPizza'
import ChicagoStyleVeggiePizza from '../chicagoStyle/ChicagoStyleVeggiePizza'
import Pizza from '../Pizza'
import PizzaStore from '../PizzaStore'

export class ChicagoPizzaStore extends PizzaStore {
    createPizza(type: string): Pizza {
        let pizza: Pizza

        // 이 부분에서만 유일하게 구상 클래스 참조 (new keyword)
        if (type === 'cheese') pizza = new ChicagoStyleCheesePizza()
        else if (type === 'pepperoni') pizza = new ChicagoStylePepperoniPizza()
        else if (type === 'clam') pizza = new ChicagoStyleClamPizza()
        else if (type === 'veggie') pizza = new ChicagoStyleVeggiePizza()

        return pizza
    }
}
