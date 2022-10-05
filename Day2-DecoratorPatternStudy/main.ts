import DarkRoast from './DarkRoast'
import Decaf from './Decaf'

const darkRoast = new DarkRoast()
console.log(darkRoast.getDescription())
console.log(darkRoast.cost())
darkRoast.setMilk()
console.log(darkRoast.cost())
darkRoast.setMocha()
console.log(darkRoast.cost())

const decaf = new Decaf()
console.log(decaf.getDescription())
console.log(decaf.cost())
decaf.setMilk()
console.log(decaf.cost())
