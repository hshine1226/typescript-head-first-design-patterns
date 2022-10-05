import Beverage from './Beverage'

export default abstract class CondimentDecorators extends Beverage {
    public beverage: Beverage
    public abstract getDescription(): string
}
