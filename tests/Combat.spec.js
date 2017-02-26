import {assert, expect} from 'chai';
import { Combat } from '../src/modules/Combat.js';

let combat = null;

let player1Mock = {};
let player2Mock = {};
let player3Mock = {};

describe('Combat test', ()=> {
	beforeEach(()=> {
		combat = new Combat()
	});
	afterEach(()=> {
		combat = null;
	});
	
	it('has no players initially', ()=> {
		expect(combat.players).to.be.empty;
	});

	it('player can be added to combat', ()=>{
		combat.addPlayer(player1Mock);
		expect(combat.players).to.have.lengthOf(1);
	});

	it('cannot add more than 2 players', ()=>{
		combat.addPlayer(player1Mock);
		combat.addPlayer(player2Mock);
		assert.throws(()=>{combat.addPlayer(player2Mock)}, Error, 'Player list full');
	});

});