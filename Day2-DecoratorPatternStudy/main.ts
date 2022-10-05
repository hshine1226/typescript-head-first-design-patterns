import Mocha from './Condiments/Mocha'
import Whip from './Condiments/Whip'
import DarkRoast from './DarkRoast'
import Espresso from './Espresso'

const espresso = new Espresso()
console.log(espresso.getDescription(), espresso.cost(), '원')

const darkRoast = new DarkRoast()
console.log(darkRoast.getDescription(), darkRoast.cost(), '원')
const beverage1 = new Mocha(darkRoast)
console.log(beverage1.getDescription(), beverage1.cost(), '원')
const beverage2 = new Mocha(beverage1)
console.log(beverage2.getDescription(), beverage2.cost(), '원')
const beverage3 = new Whip(beverage2)
console.log(beverage3.getDescription(), beverage3.cost(), '원')
