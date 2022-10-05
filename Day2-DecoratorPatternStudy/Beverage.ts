export default abstract class Beverage {
    public description: string

    constructor() {}

    public getDescription(): string {
        return this.description
    }

    public abstract cost(): number
}
