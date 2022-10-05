export default abstract class Beverage {
    public description: string
    private milk: boolean
    private milkPrice: number
    private soy: boolean
    private soyPrice: number
    private mocha: boolean
    private mochaPrice: number
    private whip: boolean
    private condimentPrice: number

    constructor() {
        this.milk = false
        this.milkPrice = 300
        this.soy = false
        this.soyPrice = 300
        this.mocha = false
        this.mochaPrice = 200
        this.whip = false
        this.condimentPrice = 0
    }

    public getDescription(): string {
        return this.description
    }

    private hasMilk(): boolean {
        if (this.milk) {
            return true
        }
        return false
    }

    public setMilk() {
        this.milk = true
    }

    private hasSoy(): boolean {
        if (this.soy) {
            return true
        }
        return false
    }

    public setSoy() {
        this.soy = true
    }

    private hasMocha(): boolean {
        if (this.mocha) {
            return true
        }
        return false
    }

    public setMocha() {
        this.mocha = true
    }

    public cost(): number {
        if (this.hasMilk()) {
            this.condimentPrice += this.milkPrice
        }
        if (this.hasSoy()) {
            this.condimentPrice += this.soyPrice
        }
        if (this.hasMocha()) {
            this.condimentPrice += this.mochaPrice
        }

        return this.condimentPrice
    }
}
