export class Singleton {
    // Singleton 클래스의 하나뿐인 인스턴스를 저장하는 정적 변수
    // uniqueInstance가 정적 변수라는 것을 잊지 말아야 함
    private static uniqueInstace: Singleton

    // 생성자를 private로 선언했으므로 Singleton에서만 클래스의 인스턴스를 만들 수 있다.
    private constructor() {}

    // getInstance() 메소드는 클래스의 인스턴스를 만들어서 return 한다.
    public static getInstance(): Singleton {
        // lazyinstantiation (게으른 인스턴스 생성)
        // 인스턴스가 필요한 상황이 닥치기 전까지 인스턴스를 생성하지 않음
        if (this.uniqueInstace == null) this.uniqueInstace = new Singleton()
        return this.uniqueInstace
    }
}
