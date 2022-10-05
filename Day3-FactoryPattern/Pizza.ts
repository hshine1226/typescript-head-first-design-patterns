export default class Pizza {
    constructor() {}

    public prepare(): string {
        return '준비중'
    }
    public bake(): string {
        return '굽는중'
    }
    public cut(): string {
        return '자르는중'
    }
    public box(): string {
        return '포장중'
    }
}
