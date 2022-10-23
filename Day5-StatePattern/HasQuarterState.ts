import GumballMachine from './GumballMachine'
import IState from './IState'

export default class HasQuarterState implements IState {
    gumballMachin: GumballMachine

    constructor(gumballMachine: GumballMachine) {
        this.gumballMachin = gumballMachine
    }

    /**
     * Get a random number from 1 - 10
     */
    private static getRandomNumber() {
        return Math.floor(Math.random() * 10) + 1
    }

    instertQuarter(): void {
        console.log('이미 동전을 넣었어요.')
    }
    ejectQuarter(): void {
        console.log('동전을 반환합니다.')
        this.gumballMachin.setState(this.gumballMachin.getNoQuarterState())
    }
    turnCrank(): void {
        let winner: number = HasQuarterState.getRandomNumber()
        console.log('손잡이를 돌렸습니다.')
        // 10% 확률로 winnerState로 상태 전환
        if (winner === 1 && this.gumballMachin.getCount() > 1)
            this.gumballMachin.setState(this.gumballMachin.getWinnerState())
        else this.gumballMachin.setState(this.gumballMachin.getSoldState())
    }
    dispense(): void {
        console.log('알맹이를 내보낼 수 없어요. 먼저 손잡이를 돌려주세요.')
    }
}
