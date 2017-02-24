import {Unit} from './Unit';

export class Tank extends Unit {
    constructor() {
        super({
            position : [1,1],
            speed : 1,
            health : 5,
            shootingRange: 2,
            firePower : 2
        });
    }
}