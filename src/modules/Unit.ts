import {IUnit} from './IUnit';

export class Unit implements IUnit {
	protected position: Array<number>;
	protected speed: number;
	protected shootingRange: number;
	protected health: number;
	protected firePower: number;
	public price: number;
	private maxHealth: number;
	private _id: string;

	constructor(config: {
		position: Array<number>,
		speed: number,
		health: number,
		shootingRange: number,
		firePower: number,
		price: number}
	) {
		this.position = config.position;
		this.speed = config.speed;
		this.health = config.health;
		this.maxHealth = this.health;
		this.shootingRange = config.shootingRange;
		this.firePower = config.firePower;
		this.price = config.price;

		this._id = 'unit-' + new Date().getTime();
	}

	damage(damage: number) {
		this.health -= damage;
	}

	move(position: Array<number>) {
		this.position = position;
	}

	heal(amount: number) {
		if (this.health + amount > this.maxHealth) {
			throw Error('Health is full');
		}
		this.health += amount;
	}

	attack() {
		return this.firePower;
	}

	isAlive(): boolean {
		return this.health > 0;
	}

	getUId(): string {
		return this._id;
	}
}