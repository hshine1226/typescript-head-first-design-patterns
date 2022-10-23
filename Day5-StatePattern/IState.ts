// 추상 클래스에 넣을만한 공통적인 기능이 없기 때문에 인터페이스를 사용함
// State에 해당하는 클래스 디자인 할 때, 추상 클래스 사용도 생각해보면 좋음 => 추상 클래스를 사용하면 구상 상태 클래스 코드를 건드리지 않고도 메소드를 추가할 수 있기 때문에?
export default interface IState {
    instertQuarter(): void
    ejectQuarter(): void
    turnCrank(): boolean
    dispense(): void
    refill(): void
}
