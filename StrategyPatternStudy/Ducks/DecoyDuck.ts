import Duck from '../Duck'

// 가짜 나무 오리 서브 클래스
export default class DecoyDuck extends Duck {
    constructor() {
        super()
    }

    // 소리 내지도 날지도 못하도록 메소드 오버라이드
    public quack(): string {
        return '아무 소리도 내지 못하도록 함'
    }

    public fly(): string {
        return '날지 못하도록 함'
    }

    public display(): string {
        return '가짜 나무오리 생긴 모습 표시'
    }
}
