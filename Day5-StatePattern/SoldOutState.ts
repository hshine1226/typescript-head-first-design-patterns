import GumballMachine from './GumballMachine'
import IState from './IState'

export default class SoldOutState implements IState {
    gumballMachine: GumballMachine
    constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine
    }

    instertQuarter(): void {
        console.log('매진이에요! 동전을 넣을 수 없어요.')
    }
    ejectQuarter(): void {
        console.log('동전을 반환할 수 없어요. 아직 동전을 넣지 않았어요.')
    }
    turnCrank(): void {
        console.log('손잡이를 돌렸어요. 그런데 매진이에요.')
    }
    dispense(): void {
        console.log('알맹이가 없어요...(매진)')
    }
    refill(): void {
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState())
    }
}
