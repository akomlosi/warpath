import {Unit} from './Unit';
export interface IPlayer {
	addUnitToArmy(unit: Unit): void;
	activate(): void;
	deActivate(): void;
	updateCredits(amount: number): void;
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

	deActivate() {
		this._isActive = false;
	};

	updateCredits(amount: number) {
		this.credits += amount;
	}
}