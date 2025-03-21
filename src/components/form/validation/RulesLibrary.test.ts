import { describe, it, expect, test } from 'vitest'
import { faker } from '@faker-js/faker';
import {rulesLibrary, type ValidationRule} from './RulesLibrary';

describe('ValRulesLibrary', () => {

	it('length rule', () => {
		const def: ValidationRule = rulesLibrary['length'];

		expect(def.validator(null, {length: 5})).toBe(false);
		expect(def.validator('1', {length: 5})).toBe(false);
		expect(def.validator('12', {length: 5})).toBe(false);
		expect(def.validator('123', {length: 5})).toBe(false);
		expect(def.validator('1234', {length: 5})).toBe(false);
		expect(def.validator('1234', {length: 5})).toBe(false);
		expect(def.validator('12345', {length: 5})).toBe(true);
		expect(def.validator('123456', {length: 5})).toBe(true);


	})

	it('email rule', () => {
		const def: ValidationRule = rulesLibrary['email'];

		expect(def.validator('test@example.com')).toBe(true);
		expect(def.validator('user.name+tag+sorting@example.com')).toBe(true);
		expect(def.validator('x@example.com')).toBe(true);
		expect(def.validator('x@example.com')).toBe(true);
		expect(def.validator('example-indeed@strange-example.com')).toBe(true);
		//expect(def.validator('admin@mailserver1')).toBe(true);
		//expect(def.validator('user@localserver')).toBe(true);
		expect(def.validator('user@sub.domain.com')).toBe(true);


		expect(def.validator('plainaddress')).toBe(false);
		expect(def.validator('@missingusername.com')).toBe(false);
		expect(def.validator('username@.com')).toBe(false);
		expect(def.validator('username@domain..com')).toBe(false);
		expect(def.validator('username@domain,com')).toBe(false);
		expect(def.validator('username@ domain.com')).toBe(false);
		expect(def.validator('username@domain.')).toBe(false);

	})

	it('zip rule', () => {
		const def: ValidationRule = rulesLibrary['zip'];

		expect(def.validator('12345')).toBe(true);
		expect(def.validator('12345-6789')).toBe(true);
		expect(def.validator('00000')).toBe(true);
		expect(def.validator('99999')).toBe(true);
		expect(def.validator('54321')).toBe(true);


		expect(def.validator(null)).toBe(false);
		expect(def.validator('1234')).toBe(false);
		expect(def.validator('123456')).toBe(false);
		expect(def.validator('1234A')).toBe(false);
		expect(def.validator('12-345')).toBe(false);
		expect(def.validator('ABCDE')).toBe(false);
		expect(def.validator('12345_6789')).toBe(false);
		expect(def.validator('12345 6789')).toBe(false);

	})

	it('alpha rule', () => {
		const def: ValidationRule = rulesLibrary['alpha'];

		expect(def.validator('asdgh')).toBe(true);
		expect(def.validator('AGdhd')).toBe(true);

		expect(def.validator(null)).toBe(false);
		expect(def.validator('a12ag34')).toBe(false);
		expect(def.validator('ahf%')).toBe(false);
		expect(def.validator('agd$')).toBe(false);
		expect(def.validator('-')).toBe(false);

	})

	it('numeric rule', () => {
		const def: ValidationRule = rulesLibrary['numeric'];

		expect(def.validator('1')).toBe(true);
		expect(def.validator('123')).toBe(true);
		expect(def.validator('5.6')).toBe(true);
		expect(def.validator('0.5')).toBe(true);
		expect(def.validator('1234.0')).toBe(true);
		expect(def.validator('123.')).toBe(true);

		expect(def.validator(null)).toBe(false);
		expect(def.validator('1,000')).toBe(false);
		expect(def.validator('1a2')).toBe(false);
		expect(def.validator('1.2.3')).toBe(false);
		expect(def.validator('%')).toBe(false);

	})

	it('alpha numeric rule', () => {

		const def: ValidationRule = rulesLibrary['alpha_num'];

		expect(def.validator('1')).toBe(true);
		expect(def.validator('123')).toBe(true);
		expect(def.validator('1')).toBe(true);
		expect(def.validator('1dgs23')).toBe(true);
		expect(def.validator('a')).toBe(true);
		expect(def.validator('a3dfhs')).toBe(true);

		expect(def.validator('')).toBe(false);
		expect(def.validator(null)).toBe(false);
		expect(def.validator('5.6')).toBe(false);
		expect(def.validator('0.5')).toBe(false);
		expect(def.validator('sdg57&')).toBe(false);
		expect(def.validator('1.2.3')).toBe(false);
		expect(def.validator('%')).toBe(false);

	})

	it('between two values rule', () => {

		const def: ValidationRule = rulesLibrary['between'];

		expect(def.validator('5', {min: 2, max: 6})).toBe(true);
		expect(def.validator('2', {min: 2, max: 6})).toBe(true);
		expect(def.validator('6', {min: 2, max: 6})).toBe(true);

		expect(def.validator(null, {min: 2, max: 6})).toBe(false);
		expect(def.validator('0', {min: 2, max: 6})).toBe(false);
		expect(def.validator('7', {min: 2, max: 6})).toBe(false);

	})



})
