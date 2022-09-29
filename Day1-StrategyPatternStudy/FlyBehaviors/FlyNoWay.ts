import FlyBehavior from './FlyBehavior'

export default class FlyNoWay implements FlyBehavior {
    fly(): string {
        return '이 오리는 날지 못합니다 ㅠㅠ'
    }
}
