import GumballMachine from './GumballMachine'
import IState from './IState'

export default class SoldState implements IState {
    gumballMachine: GumballMachine
    constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine
    }

    instertQuarter(): void {
        console.log('잠시만요. 알맹이를 이미 내보내고 있어요.')
    }
    ejectQuarter(): void {
        console.log('이미 알맹이를 뽑았어요.')
    }
    turnCrank(): void {
        console.log('손잡이는 한 번만 돌릴 수 있어요.')
    }
    dispense(): void {
        this.gumballMachine.releaseBall()
        if (this.gumballMachine.getCount() > 0) {
            this.gumballMachine.setState(
                this.gumballMachine.getNoQuarterState()
            )
        } else {
            console.log('알맹이가 매진되었습니다.')
            this.gumballMachine.setState(this.gumballMachine.getSoldOutState())
        }
    }
}
