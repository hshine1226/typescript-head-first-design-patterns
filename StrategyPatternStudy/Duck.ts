import FlyBehavior from './FlyBehavior.ts/FlyBehavior'
import QuackBehavior from './QuackBehavior/QuackBehavior'

// Duck 이라는 슈퍼클래스 작성
export default abstract class Duck {
    // 나는 행동, 꽥꽥거리는 행동을 정의한 인터페이스를 레퍼런스 변수로 선언한다.
    // 같은 패키지에 속하는 모든 서브클래스에서 이 레퍼런스 변수를 상속 받을 수 있음
    public flyBehavior: FlyBehavior
    public quackBehavior: QuackBehavior

    constructor() {}

    // Duck 슈퍼 클래스에서 setter를 설정해서 인스턴스 동작 중간에 오리의 행동을 바꿀 수 있도록 함
    public setFlyBehavior(fb: FlyBehavior) {
        this.flyBehavior = fb
    }

    public setQuackBehavior(qb: QuackBehavior) {
        this.quackBehavior = qb
    }

    // 오리 클래스에 perform 메소드를 만들어서 참조되는 객체의 행동을 위임한다.
    // 꽥꽥거리는 행동을 하고 싶을 때는 슈퍼 클래스에서 객체의 종류에는 전혀 신경쓰지 않고 참조되는 객체에서 꽥꽥거리도록 하면 된다.
    public performQuack(): string {
        return this.flyBehavior.fly()
    }

    public performFly(): string {
        return this.flyBehavior.fly()
    }

    // 모든 오리는 꽥꽥 소리를 낼 수 있음
    public quack() {
        return '오리가 꽥꽥거립니다.'
    }

    // 모든 오리는 헤엄칠 수 있음
    public swim() {
        return '오리가 헤엄칩니다.'
    }

    // 모든 오리가 날 수 있도록 슈퍼 클래스에 fly 메소드 작성!
    public fly() {
        return '오리가 날아갑니다.'
    }

    // 모든 오리는 다르게 생겼으므로 보여주는 메소드는 추상 메소드로 정의
    // 각각 오리 서브 클래스에서 구체적인 모양을 정의
    public abstract display(): string
}
