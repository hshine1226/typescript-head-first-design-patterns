import HasQuarterState from './HasQuarterState'
import IState from './IState'
import NoQuarterState from './NoQuarterState'
import SoldOutState from './SoldOutState'
import SoldState from './SoldState'
import WinnerState from './WinnerState'

export default class GumballMachine {
    soldOutState: IState
    noQuarterState: IState
    hasQuarterState: IState
    soldState: IState
    winnerState: IState

    state: IState
    count = 0

    constructor(numberGumballs: number) {
        // GumballMachine 자체를 넘겨줌
        this.soldOutState = new SoldOutState(this)
        this.noQuarterState = new NoQuarterState(this)
        this.hasQuarterState = new HasQuarterState(this)
        this.soldState = new SoldState(this)
        this.winnerState = new WinnerState(this)

        this.count = numberGumballs

        //
        if (numberGumballs > 0) {
            this.state = this.noQuarterState
        } else {
            this.state = this.soldOutState
        }
    }

    insertQuarter() {
        this.state.instertQuarter()
    }

    ejectQuarter() {
        this.state.ejectQuarter()
    }

    turnCrank() {
        this.state.turnCrank()
        this.state.dispense()
    }

    setState(state: IState) {
        this.state = state
    }

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

    releaseBall() {
        console.log('알맹이를 내보내고 있어요.')
        if (this.count > 0) {
            this.count -= 1
        }
    }

    refill(count: number) {
        this.count += count
        console.log(
            `기계에 코인이 리필되었습니다. 지금 코인 개수는 ${this.count} 입니다.`
        )
        this.state.refill()
    }
}
