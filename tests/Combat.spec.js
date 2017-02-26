import {assert, expect} from 'chai';
import sinon from 'sinon';
import { Combat } from '../src/modules/Combat.js';

let combat = null;

let player1Mock = {
	updateCredits: ()=>{}
};
let player2Mock = {
	updateCredits: ()=>{}
};
let player3Mock = {
	updateCredits: ()=>{}
};

describe('Combat test', ()=> {
	beforeEach(()=> {
		sinon.spy(player1Mock, 'updateCredits');
		sinon.spy(player2Mock, 'updateCredits');
		sinon.spy(player3Mock, 'updateCredits');
		combat = new Combat();
	});
	afterEach(()=> {
		player1Mock.updateCredits.restore();
		player2Mock.updateCredits.restore();
		player3Mock.updateCredits.restore();
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

	it('gives initial credits to players when join to combat', ()=>{
		combat.addPlayer(player1Mock);
		assert(player1Mock.updateCredits.calledOnce);
	});

});