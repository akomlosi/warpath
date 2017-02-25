import {assert, expect} from 'chai';
import { Player } from '../src/modules/Player.js';

let player = null;

let mockedUnit = {
	price: 10,
	getUId: ()=> 'mock-uid'
};

describe('Player test', ()=> {
	beforeEach(()=> {
		player = new Player({
			credits: 20
		})
	});
	afterEach(()=> {
		player = null;
	});
	
	it('has initial credit amount', ()=> {
		expect(player.credits).to.equal(20);
	});

	it('is inactive initially', ()=> {
		expect(player.isActive).to.be.false;
	});

	it('can be activated and deactivated', ()=>{
		player.activate();
		expect(player.isActive).to.be.true;
		player.deActivate();
		expect(player.isActive).to.be.false;
	});

	it('has an empty initial army', ()=> {
		expect(player.army).to.be.an('object');
		assert.equal(Object.keys(player.army).length, 0);
	});

	it('can Unit be added to the army', ()=> {
		player.addUnitToArmy(mockedUnit);
		assert.equal(Object.keys(player.army).length, 1);
	});
	
	it('credits will be decreased when unit was added to army', ()=>{
		let supposedNewCredits = player.credits - mockedUnit.price;
		player.addUnitToArmy(mockedUnit);
		expect(player.credits).to.equal(supposedNewCredits);
	});

	it('throws error if player runs out of credits', ()=> {
		player.addUnitToArmy(mockedUnit);
		player.addUnitToArmy(mockedUnit);
		assert.throws(()=> {
			player.addUnitToArmy(mockedUnit)
		}, 'Insufficient credits');
	});

	it('can update credits', ()=> {
		player.updateCredits(10);
		expect(player.credits).to.equal(30);
		player.updateCredits(-5);
		expect(player.credits).to.equal(25);
	});

	it('can give back Unit by its ID', ()=>{
		player.addUnitToArmy(mockedUnit);
		expect(player.getUnitById('mock-uid')).to.equal(mockedUnit);
	});

	it('throws error if unit cannot by found in army', ()=>{
		assert.throws(()=> {
			player.getUnitById('ghost-unit')
		}, 'Non-existent unit');
	});
});