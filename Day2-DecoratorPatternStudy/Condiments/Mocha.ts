import Beverage from '../Beverage'
import CondimentDecorator from '../CondimentDecorator'

export default class Mocha extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super()
        this.beverage = beverage
    }

    public getDescription(): string {
        return this.beverage.getDescription() + ', 모카'
    }

    public cost(): number {
        return this.beverage.cost() + 200
    }
}
