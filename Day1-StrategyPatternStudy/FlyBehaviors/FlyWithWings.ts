import FlyBehavior from './FlyBehavior'

// FlyBehavior 인터페이스를 상속 받아서 실제 날개로 나는 동작이 있는 클래스 구현
export default class FlyWithWings implements FlyBehavior {
    fly(): string {
        return '오리가 날개로 날아갑니다~'
    }
}
