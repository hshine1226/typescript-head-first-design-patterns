import GumballMachine from './GumballMachine'
import IState from './IState'

export default class WinnerState implements IState {
    gumballMachine: GumballMachine
    constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine
    }
    instertQuarter(): void {
        console.log('알맹이를 내보내는 중입니다.')
    }
    ejectQuarter(): void {
        console.log('알맹이를 내보내는 중입니다.')
    }
    turnCrank(): void {
        console.log('알맹이를 내보내는 중입니다.')
    }
    dispense(): void {
        this.gumballMachine.releaseBall()
        if (this.gumballMachine.getCount() === 0) {
            this.gumballMachine.setState(this.gumballMachine.getSoldOutState())
        } else {
            this.gumballMachine.releaseBall()
            console.log(
                '축하합니다. 이벤트에 당첨되어서 알맹이를 하나 더 받을 수 있습니다!'
            )
            if (this.gumballMachine.getCount() > 0) {
                this.gumballMachine.setState(
                    this.gumballMachine.getNoQuarterState()
                )
            } else {
                this.gumballMachine.setState(
                    this.gumballMachine.getSoldOutState()
                )
            }
        }
    }
}
