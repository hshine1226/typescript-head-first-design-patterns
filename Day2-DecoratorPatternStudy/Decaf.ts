import Beverage from './Beverage'

export default class Decaf extends Beverage {
    public cost(): number {
        return super.cost() + 4000
    }
}
