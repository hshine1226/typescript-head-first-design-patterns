import { Size } from './Beverage'
import Mocha from './Condiments/Mocha'
import Whip from './Condiments/Whip'
import DarkRoast from './DarkRoast'
import Espresso from './Espresso'

const espresso = new Espresso()
console.log(
    espresso.getDescription(),
    espresso.getSize(),
    espresso.cost(),
    '원'
)

const darkRoast = new DarkRoast()
darkRoast.setSize(Size.VENTI)
console.log(
    darkRoast.getDescription(),
    darkRoast.getSize(),
    darkRoast.cost(),
    '원'
)
const beverage1 = new Mocha(darkRoast)
console.log(
    beverage1.getDescription(),
    beverage1.getSize(),
    beverage1.cost(),
    '원'
)
const beverage2 = new Mocha(beverage1)
console.log(
    beverage2.getDescription(),
    beverage2.getSize(),
    beverage2.cost(),
    '원'
)
const beverage3 = new Whip(beverage2)
console.log(
    beverage3.getDescription(),
    beverage3.getSize(),
    beverage3.cost(),
    '원'
)
