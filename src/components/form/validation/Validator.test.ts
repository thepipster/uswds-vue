import { describe, it, expect } from 'vitest'
//import { faker } from '@faker-js/faker';
import Validator from './Validator';

describe('Validator', () => {
	it('sets up correctly', () => {

		const rules = {
			'length': 8,
			'email': true,
			'zip': true,
			'alpha': true,
			'numeric': true,
			'between': {min: 5, max: 12},
			'alpha_num': true,
			'required': true,
			'password': true
		};

		const val = new Validator(rules);
		expect(val.ruleSettings.size).toEqual(9);
	})

	it('testing length', () => {

		const rules = {
			'length': 8
		};

		const val = new Validator(rules);
		expect(val.ruleSettings.size).toEqual(9);
	})

})
