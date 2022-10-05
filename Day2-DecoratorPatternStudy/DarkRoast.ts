import Beverage from './Beverage'

export default class DarkRoast extends Beverage {
    constructor() {
        super()
        this.description = '다크로스팅 커피!'
    }
    public cost(): number {
        return super.cost() + 2500
    }
}
