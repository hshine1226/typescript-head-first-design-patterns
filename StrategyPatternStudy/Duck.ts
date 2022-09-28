// Duck 이라는 슈퍼클래스 작성
export default abstract class Duck {
    constructor() {}

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
