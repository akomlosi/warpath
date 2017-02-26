import {Player} from './Player';
export interface ICombat {
	addPlayer(player: Player): void;
}

export class Combat implements ICombat {

	// constants
	public static COMBAT_STATUS_INIT: number = 0;
	public static COMBAT_STATUS_IN_PROGRESS: number = 1;
	public static COMBAT_STATUS_ENDED: number = 2;
	public static INITIAL_CREDITS_AMOUNT: number = 100;

	protected players: Array<Player>;
	private maxPlayers: number;
	private activePlayer: Player;
	private status = Combat.COMBAT_STATUS_INIT;

	constructor() {
		this.maxPlayers = 2;
		this.players = Array<Player>();
		this.activePlayer = null;
	};

	public addPlayer(player: Player): void {
		if (this.players.length < this.maxPlayers) {
			this.players.push(player);
			player.updateCredits(Combat.INITIAL_CREDITS_AMOUNT);
			this.updateStatus();
		}
		else {
			throw Error('Player list full');
		}
	};

	private updateStatus(): void {
		if (this.players.length === this.maxPlayers && this.status === Combat.COMBAT_STATUS_INIT) {
			this.activePlayer = this.players[0];
			this.status = Combat.COMBAT_STATUS_IN_PROGRESS;
		}
	};

}