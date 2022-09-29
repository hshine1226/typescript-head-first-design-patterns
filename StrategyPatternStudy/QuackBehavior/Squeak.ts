import QuackBehavior from './QuackBehavior'

export default class Squeak implements QuackBehavior {
    quack(): string {
        return '나는 삑삑 삑삑🎶'
    }
}
