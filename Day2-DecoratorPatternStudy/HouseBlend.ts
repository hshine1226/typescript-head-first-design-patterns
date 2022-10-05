import Beverage from './Beverage'

export default class HouseBlend extends Beverage {
    constructor() {
        super()
        this.description = '하우스 블렌드'
    }
    public cost(): number {
        return super.cost() + 3500
    }
}
