import Beverage, { Size } from '../Beverage'
import CondimentDecorator from './CondimentDecorator'

export default class Soy extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super()
        this.beverage = beverage
    }

    public getDescription(): string {
        return this.beverage.getDescription() + ', 두유'
    }

    public cost(): number {
        let cost = this.beverage.cost()
        if (this.beverage.getSize() === Size.TALL) {
            cost += 50
        }
        if (this.beverage.getSize() === Size.GRANDE) {
            cost += 100
        }
        if (this.beverage.getSize() === Size.VENTI) {
            cost += 150
        }
        return cost
    }
}
