import {Unit} from './Unit';
export interface IPlayer {
	addUnitToArmy(unit: Unit): void;
	activate(): void;
	standby(): void;
	updateCredits(amount: number): void;
	getUnitById(id: string): Unit;
}

export class Player implements IPlayer {
	protected army: {[uid: string]: Unit};
	public credits: number;
	private _isActive: boolean;


	constructor(config: {credits: number}) {
		this.credits = config.credits;
		this.army = {};
		this._isActive = false;
	}

	addUnitToArmy(unit: Unit) {
		if (this.credits > 0 && this.credits - unit.price >= 0) {
			this.army[unit.getUId()] = unit;
			this.credits -= unit.price;
		}
		else {
			throw Error('Insufficient credits');
		}
	};

	get isActive() {
		return this._isActive;
	};

	activate() {
		this._isActive = true;
	};

	standby() {
		this._isActive = false;
	};

	updateCredits(amount: number) {
		this.credits += amount;
	};

	getUnitById(id: string): Unit {
		if (!this.army[id]) {
			throw Error('Non-existent unit');
		}
		return this.army[id];
	}
}