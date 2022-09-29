import QuackBehavior from './QuackBehavior'

export default class MuteQuack implements QuackBehavior {
    quack(): string {
        return '아무 소리도 낼 수 없어요ㅠㅠ'
    }
}
