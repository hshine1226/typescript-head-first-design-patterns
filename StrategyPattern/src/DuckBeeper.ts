import QuackBehavior from './QuackBehaviors/QuackBehavior'

export default abstract class DuckBeeper {
    public quackBehavior: QuackBehavior

    constructor() {}

    performQuack(): string {
        return this.quackBehavior.quack()
    }
}
