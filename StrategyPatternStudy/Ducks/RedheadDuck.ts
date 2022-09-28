import Duck from '../Duck'

export default class RedheadDuck extends Duck {
    constructor() {
        super()
    }

    public display(): string {
        return '빨간머리 오리의 모양을 보여줍니다.'
    }
}
