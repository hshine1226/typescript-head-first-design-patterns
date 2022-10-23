import GumballMachine from './GumballMachine'
import IState from './IState'

export default class NoQuarterState implements IState {
    gumballMachine: GumballMachine

    constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine
    }

    instertQuarter(): void {
        console.log('동전을 넣었어요.')
        this.gumballMachine.setState(this.gumballMachine.getHasQuarterState())
    }
    ejectQuarter(): void {
        console.log('먼저 동전을 넣어주세요.')
    }
    turnCrank(): void {
        console.log('먼저 동전을 넣어주세요.')
    }
    dispense(): void {
        console.log('먼저 동전을 넣어주세요.')
    }
    refill(): void {
        console.log('매진 상태가 아닙니다.')
    }
}
