import Duck from '../Duck'

export default class MallardDuck extends Duck {
    constructor() {
        super()
    }

    public display(): string {
        return '청동오리의 모양을 보여줍니다.'
    }
}
