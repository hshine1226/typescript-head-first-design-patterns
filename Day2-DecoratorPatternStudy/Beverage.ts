enum Size {
    TALL,
    GRANDE,
    VENTI
}
export default abstract class Beverage {
    public description: string
    public size: Size

    constructor() {
        this.size = Size.TALL
    }

    public getDescription(): string {
        return this.description
    }

    public abstract cost(): number

    public setSize(size: Size) {
        this.size = size
    }

    public getSize(): Size {
        return this.size
    }
}
