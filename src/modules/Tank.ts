import {Unit} from './Unit';

export class Tank extends Unit {
	constructor(position: Array<number>) {
		super({
			position : position,
			speed : 1,
			health : 5,
			shootingRange: 2,
			firePower : 2,
			price : 10
		});
	}
}