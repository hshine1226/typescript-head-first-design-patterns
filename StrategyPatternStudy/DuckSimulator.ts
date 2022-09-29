import MallardDuck from './Ducks/MallardDuck'
import FlyRocketPowered from './FlyBehaviors/FlyRocketPowered'

const mallard = new MallardDuck()
console.log(mallard.performFly())
mallard.setFlyBehavior(new FlyRocketPowered())
console.log(mallard.performFly())
