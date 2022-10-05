import Beverage from './Beverage'

export default class Espresso extends Beverage {
    public cost(): number {
        return super.cost() + 3000
    }
}
