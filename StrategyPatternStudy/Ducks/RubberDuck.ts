import Duck from '../Duck'

export default class RubberDuck extends Duck {
    constructor() {
        super()
    }

    public fly(): string {
        return '러버덕은 날지 못하도록 오버라이드!'
    }

    public quack(): string {
        return '러버덕은 삑삑소리를 냅니다.'
    }

    public display(): string {
        return '러버덕이 생긴 모습 표시'
    }
}
