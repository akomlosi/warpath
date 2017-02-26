import {Player} from './Player';
export interface ICombat {
	addPlayer(player: Player): void;
}

export class Combat implements ICombat {

	// constants
	public static COMBAT_STATUS_INIT: number = 0;
	public static COMBAT_STATUS_IN_PROGRESS: number = 1;
	public static COMBAT_STATUS_ENDED: number = 2;

	public players: Array<Player>;
	private maxPlayers: number;

	constructor() {
		this.maxPlayers = 2;
		this.players = Array<Player>();
	};

	addPlayer(player: Player): void {
		if (this.players.length < this.maxPlayers) {
			this.players.push(player);
		}
		else {
			throw Error('Player list full');
		}
	};


}