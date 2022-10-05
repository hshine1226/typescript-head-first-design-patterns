import Beverage from './Beverage'

export default class Decaf extends Beverage {
    constructor() {
        super()
        this.description = '디카페인 커피'
    }
    public cost(): number {
        return super.cost() + 4000
    }
}
