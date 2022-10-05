import Beverage from './Beverage'

export default class DarkRoast extends Beverage {
    public cost(): number {
        return super.cost() + 2500
    }
}
