import Duck from '../Duck'
import FlyWithWings from '../FlyBehaviors/FlyWithWings'
import Quack from '../QuackBehavior/Quack'

export default class MallardDuck extends Duck {
    // 청동오리 생성자를 통해서 quackBehavior에 Quack 클래스를 사용하게 하고
    // flyBehavior에 FlyWithWings를 사용하게 함으로써
    // 실제 Duck 클래스에서 performQuack() 메소드가 호출 될 때 Quack(), FlyWithWings()가 호출되게 된다.
    constructor() {
        super()
        this.quackBehavior = new Quack()
        this.flyBehavior = new FlyWithWings()
    }

    public display(): string {
        return '청동오리의 모양을 보여줍니다.'
    }
}
