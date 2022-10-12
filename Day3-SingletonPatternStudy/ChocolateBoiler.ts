export class ChocolateBoiler {
    private empty: boolean
    private boiled: boolean
    private uniqueInstance: ChocolateBoiler

    private constructor() {
        this.empty = true
        this.boiled = false
    }

    public getInstance(): ChocolateBoiler {
        if (!this.uniqueInstance) this.uniqueInstance = new ChocolateBoiler()
        return this.uniqueInstance
    }

    public fill() {
        // 보일러가 비어있을 때만 재료를 넣는다.
        // 원료를 가득 채우고 나면 empty와 boiled 플래그를 false로 설정한다.
        if (this.isEmpty()) {
            this.empty = false
            this.boiled = false
        }
    }

    public drain() {
        // 보일러가 가득 차있고 다 끓여진 상태에서만 보일러에 들어있는 재료를 다음 단계로 넘긴다.
        // 보일러를 다 비우고 나면 empty 플래그를 true로 설정한다.
        if (!this.isEmpty() && this.isBoiled()) {
            this.empty = true
        }
    }

    public boil() {
        // 보일러가 가득 차있고 아직 끓지 않은 상태에서만 초콜릿과 우유가 혼합된 재료를 끓인다.
        // 재료를 다 끓이면 boiled 플래그를 true로 설정한다.
        if (!this.isEmpty() && !this.isBoiled()) {
            this.boiled = true
        }
    }

    public isEmpty(): boolean {
        return this.empty
    }

    public isBoiled(): boolean {
        return this.boiled
    }
}
