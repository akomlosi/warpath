export interface IUnit {
	damage(damage: number): void;
	move(position: Array<number>): void;
	heal(amount: number): void;
	attack(): number;
	isAlive(): boolean;
}