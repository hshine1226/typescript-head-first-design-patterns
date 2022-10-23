import HasQuarterState from './HasQuarterState'
import IState from './IState'
import NoQuarterState from './NoQuarterState'
import SoldOutState from './SoldOutState'
import SoldState from './SoldState'
import WinnerState from './WinnerState'

export default class GumballMachine {
    // 모든 상태 객체를 선언한다.
    soldOutState: IState
    noQuarterState: IState
    hasQuarterState: IState
    soldState: IState
    winnerState: IState

    // 현재 상태를 나타내는 상태 인스턴스 변수를 선언한다.
    state: IState

    // count 인스턴스 변수에서는 알맹이 개수가 저장된다.
    count = 0

    constructor(numberGumballs: number) {
        // state 인스턴스를 각각 하나씩 생성한다.(state 인스턴스에는 생성자로 GumballMachine 자체를 넘겨줌)
        this.soldOutState = new SoldOutState(this)
        this.noQuarterState = new NoQuarterState(this)
        this.hasQuarterState = new HasQuarterState(this)
        this.soldState = new SoldState(this)
        this.winnerState = new WinnerState(this)

        // 생성자에서 알맹의 초기 개수를 받아서 초기화 해준다.
        this.count = numberGumballs

        if (numberGumballs > 0) {
            this.state = this.noQuarterState
        } else {
            this.state = this.soldOutState
        }
    }

    // 메소드를 구현하는 부분에서는 현재 상태가 작업을 처리하도록 위임한다.
    insertQuarter() {
        this.state.instertQuarter()
    }

    ejectQuarter() {
        this.state.ejectQuarter()
    }

    // dispense 메소드는 내부에서만 필요한 행동이기 때문에 구현하지 않아도 된다.
    // 사용자가 직접 알맹이를 내놓으라고 요청 할 수는 없기 때문
    turnCrank() {
        if (this.state.turnCrank()) this.state.dispense()
    }

    // 알맹이를 내보내고 count 인스턴스 변수의 값을 1 줄이는 보조 메소드를 지원한다.
    releaseBall() {
        console.log('알맹이를 내보내고 있어요.')
        if (this.count > 0) {
            this.count -= 1
        }
    }

    // 이 메소드를 사용하면 State 객체를 비롯한 다른 객체에서 뽑기 기계의 상태를 전환할 수 있다.
    setState(state: IState) {
        this.state = state
    }

    // 상태 객체를 위한 게터, 세터 등의 기타 메소드들을 구현한다.
    getCount(): number {
        return this.count
    }

    // getter 메소드를 통해서 의존성 최소화
    getNoQuarterState(): IState {
        return this.noQuarterState
    }

    getSoldState(): IState {
        return this.soldState
    }

    getHasQuarterState(): IState {
        return this.hasQuarterState
    }

    getSoldOutState(): IState {
        return this.soldOutState
    }

    getWinnerState(): IState {
        return this.winnerState
    }

    // 추가 기능
    refill(count: number) {
        this.count += count
        console.log(
            `기계에 코인이 리필되었습니다. 지금 코인 개수는 ${this.count} 입니다.`
        )
        this.state.refill()
    }
}
