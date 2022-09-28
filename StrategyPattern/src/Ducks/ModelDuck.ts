import Duck from '../Duck'
import FlyNoWay from '../FlyBehaviors/FlyNoWay'
import Quack from '../QuackBehaviors/Quack'

export default class ModelDuck extends Duck {
    constructor() {
        super()
        this.flyBehavior = new FlyNoWay()
        this.quackBehavior = new Quack()
    }

    display() {
        return '저는 모형 오리입니다.'
    }
}
