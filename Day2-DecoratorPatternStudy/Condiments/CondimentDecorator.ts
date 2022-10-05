import Beverage, { Size } from '../Beverage'

export default abstract class CondimentDecorator extends Beverage {
    constructor() {
        super()
    }

    public beverage: Beverage

    public abstract getDescription(): string

    public getSize(): Size {
        return this.beverage.getSize()
    }
}
