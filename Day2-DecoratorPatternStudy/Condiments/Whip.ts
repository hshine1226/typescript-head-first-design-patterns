import Beverage, { Size } from '../Beverage'
import CondimentDecorator from './CondimentDecorator'

export default class Whip extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super()
        this.beverage = beverage
    }

    public getDescription(): string {
        return this.beverage.getDescription() + ', 휘핑크림'
    }

    public cost(): number {
        let cost = this.beverage.cost()
        if (this.beverage.getSize() === Size.TALL) {
            cost += 150
        }
        if (this.beverage.getSize() === Size.GRANDE) {
            cost += 200
        }
        if (this.beverage.getSize() === Size.VENTI) {
            cost += 250
        }
        return cost
    }
}
