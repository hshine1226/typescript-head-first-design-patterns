import Beverage from './Beverage'

export default class HouseBlend extends Beverage {
    public cost(): number {
        return super.cost() + 3500
    }
}
