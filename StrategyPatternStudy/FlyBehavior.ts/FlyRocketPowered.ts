import FlyBehavior from './FlyBehavior'

export default class FlyRocketPowered implements FlyBehavior {
    fly(): string {
        return '로켓을 타고 날아갑니다🚀'
    }
}
