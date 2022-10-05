import Beverage, { Size } from '../Beverage'
import CondimentDecorator from './CondimentDecorator'

export default class Mocha extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super()
        this.beverage = beverage
    }

    public getDescription(): string {
        return this.beverage.getDescription() + ', 모카'
    }

    public cost(): number {
        let cost = this.beverage.cost()
        if (this.beverage.getSize() === Size.TALL) {
            cost += 100
        }
        if (this.beverage.getSize() === Size.GRANDE) {
            cost += 150
        }
        if (this.beverage.getSize() === Size.VENTI) {
            cost += 200
        }
        return cost
    }
}
