export default abstract class Beverage {
    private description: string
    private milk: boolean
    private milkPrice: number
    private soy: boolean
    private soyPrice: number
    private mocha: boolean
    private mochaPrice: number
    private whip: boolean
    private ingredientPrice: number

    constructor() {
        this.milk = false
        this.milkPrice = 300
        this.soy = false
        this.soyPrice = 300
        this.mocha = false
        this.mochaPrice = 200
        this.whip = false
        this.ingredientPrice = 0
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
            this.ingredientPrice += this.milkPrice
        }
        if (this.hasSoy()) {
            this.ingredientPrice += this.soyPrice
        }
        if (this.hasMocha()) {
            this.ingredientPrice += this.mochaPrice
        }

        return this.ingredientPrice
    }
}
