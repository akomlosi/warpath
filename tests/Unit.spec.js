import {assert, expect} from 'chai';
import { Unit } from '../src/modules/Unit.js';

let unit = null;

describe('Unit test', ()=> {
	beforeEach(()=> {
		unit = new Unit({
			position : [1,1],
			speed : 1,
			health : 5,
			shootingRange: 2,
			firePower : 2
		})
	});
	afterEach(()=> {
		unit = null;
	});
	it('has firepower', ()=>{
		expect(unit.firePower).to.equal(2);
	});
	it('has speed', ()=>{
		expect(unit.speed).to.equal(1);
	});
	it('has shooting range', ()=>{
		expect(unit.shootingRange).to.equal(2);
	});
	it('can be set to an initial position', ()=>{
		assert.deepEqual(unit.position, [1,1]);
	});
	it('can be damaged', ()=> {
		expect(unit.health).to.equal(5);
		unit.damage(2);
		expect(unit.health).to.equal(3);
	});

	it('can be healed or fixed', ()=>{
		unit.damage(2);
		expect(unit.health).to.equal(3);
		unit.heal(2)
		expect(unit.health).to.equal(5);
	});
	it('cannot be heal more then the max health', ()=>{
		expect(unit.health).to.equal(5);
		assert.throws(function(){unit.heal(1)}, 'Health is full');
	});
	it('can be destroyed', ()=> {
		expect(unit.isAlive()).to.be.true;
		unit.damage(3);
		expect(unit.isAlive()).to.be.true;
		unit.damage(3);
		expect(unit.isAlive()).to.be.false;
	});
	it('can move', ()=>{
		unit.move([1,2]);
		assert.deepEqual(unit.position, [1,2]);
		unit.move([4,5]);
		assert.deepEqual(unit.position, [4,5]);
	});
	it('can attack with an amount of its firepower', ()=>{
		assert.isTrue(unit.attack() === unit.firePower);
	});
});