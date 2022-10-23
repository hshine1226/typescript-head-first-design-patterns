import GumballMachine from './GumballMachine'

const gumballMachine = new GumballMachine(5)

gumballMachine.insertQuarter()
gumballMachine.turnCrank()

console.log('\n')

gumballMachine.insertQuarter()
gumballMachine.ejectQuarter()
gumballMachine.turnCrank()

console.log('\n')

gumballMachine.insertQuarter()
gumballMachine.turnCrank()
gumballMachine.insertQuarter()
gumballMachine.turnCrank()
gumballMachine.ejectQuarter()

console.log('\n')

gumballMachine.insertQuarter()
gumballMachine.insertQuarter()
gumballMachine.turnCrank()
gumballMachine.insertQuarter()
gumballMachine.turnCrank()
gumballMachine.insertQuarter()
gumballMachine.turnCrank()
