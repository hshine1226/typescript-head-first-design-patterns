export default class GumballMachine {
    // 4가지 상태 정의
    SOLD_OUT = 0
    NO_QUARTER = 1
    HAS_QUARTER = 2
    SOLD = 3

    state = this.SOLD_OUT
    count = 0

    constructor(numberGumballs: number) {
        this.count = numberGumballs
        if (this.count > 0) {
            this.state = this.NO_QUARTER
        }
    }

    // 4가지 행동 정의 (동전 투입, 동전 반환, 송잡이 돌림, 알맹이 내보냄)

    // 1. 동전 투입
    insertQuarter(): void {
        if (this.state === this.HAS_QUARTER)
            console.log('동전은 한 개만 넣어주세요.')
        else if (this.state === this.NO_QUARTER) {
            this.state = this.HAS_QUARTER
            console.log('동전이 투입되었습니다.')
        } else if (this.state === this.SOLD_OUT)
            console.log('매진되었습니다. 다음 기회에 이용해주세요.')
        else if (this.state === this.SOLD)
            console.log('알맹이를 내보내고 있습니다.')
    }

    // 2. 동전 반환
    ejectQuarter(): void {
        if (this.state === this.HAS_QUARTER) {
            console.log('동전이 반환됩니다.')
            this.state = this.NO_QUARTER
        } else if (this.state === this.NO_QUARTER) {
            console.log('동전을 넣어주세요.')
        } else if (this.state === this.SOLD_OUT)
            console.log('동전을 넣어주세요.')
        else if (this.state === this.SOLD)
            console.log('이미 알맹이를 뽑았어요.')
    }

    // 3. 손잡이 돌림
    turnCrank(): void {
        if (this.state === this.HAS_QUARTER) {
            console.log('손잡이를 돌렸습니다.')
            this.state = this.SOLD
            this.dispense()
        } else if (this.state === this.NO_QUARTER) {
            console.log('동전을 넣어주세요.')
        } else if (this.state === this.SOLD_OUT) console.log('매진 되었습니다.')
        else if (this.state === this.SOLD)
            console.log('이미 알맹이를 뽑았어요.')
    }

    // 4. 알맹이 내보냄
    dispense(): void {
        if (this.state === this.HAS_QUARTER) {
            console.log('손잡이를 먼저 돌려주세요.')
        } else if (this.state === this.NO_QUARTER) {
            console.log('동전을 먼저 넣어주세요.')
        } else if (this.state === this.SOLD_OUT) console.log('매진 되었습니다.')
        else if (this.state === this.SOLD) {
            console.log('알맹이를 내보내고 있어요.')
            this.count -= 1
            if (this.count === 0) {
                console.log('더 이상 알맹이가 없어요.')
                this.state = this.SOLD_OUT
            } else this.state = this.NO_QUARTER
        }
    }
}
