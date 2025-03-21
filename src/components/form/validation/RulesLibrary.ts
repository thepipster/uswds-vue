import {type UsLocaleString} from "../FormTypes";

export type RuleOptions = {
	min?: number,
	max?: number,
	length?: number
};

export type ValidationRule = {
	validator: (val: string, opts?: RuleOptions) => boolean,
	checkRule?: (opts: RuleOptions) => void,
	message?: UsLocaleString,
	getMessage?: (opts: RuleOptions) => UsLocaleString
}


        /*
        Vee-Validate rules not implemented yet;

        alpha_dash
        alpha_spaces
        between
        confirmed
        digits
        dimensions
        email Inferred
        excluded
        ext
        image
        oneOf
        integer
        is
        is_not
        length
        max Inferred
        max_value Inferred
        mimes
        min Inferred
        min_value Inferred
        numeric
        regex Inferred
        required Inferred
        required_if
        size

*/


export const rulesLibrary: {[key: string]: ValidationRule} = {
	'length': {
		validator: (val:string, opts?:RuleOptions)=>{
			const length = opts?.length || 10;
			return (val && typeof val == 'string') ? val.length>=length : false
		},
		getMessage: (opts:RuleOptions) => {
			const length = opts?.length || 10;
			return {
				'en': `Please enter at least ${length} characters`
			}
		}
	},
	'email': {
		validator: (val:string)=>{
			return isEmailValid(val);
		},
		message: {'en': 'Please enter a valid email'}
	},
	'zip': {
		validator: (val:string)=>{
			return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(val);
		},
		message: {'en': 'Please enter a valid zip code'}
	},
	'alpha': {
		validator: (val:string)=>{
			if (!val){
				return false;
			}
			return /^[a-z]+$/i.test(val);
		},
		message: {'en': 'Please enter only characters'}
	},
	'numeric': {
		validator: (val:string)=>{
			//return isNumber(val);
			return /^\d*\.?\d*$/i.test(val);
		},
		message: {'en': 'Please enter a number'}
	},
	'between': {
		validator: (val:string, opts?:RuleOptions)=>{

			const min = opts?.min || 0;
			const max = opts?.max || 8;
			let no: number = 0;

			if (typeof val == 'string'){
				no = parseInt(val);
			}
			else {
				no = val;
			}

			if (no < min || no > max){
				return false;
			}

			return true;
		},
		checkRule: (opts:RuleOptions)=>{
			if (!opts){
				throw new Error('You must supply a {min, max} object');
			}
			else if (!opts.min){
				throw new Error('You must supply a min');
			}
			else if (!opts.max){
				throw new Error('You must supply a max');
			}
		},
		getMessage: (opts:RuleOptions) => {
			const min = opts?.min || 0;
			const max = opts?.max || 8;
			return {
				'en': `Please enter a number between ${min} and ${max}`
			}
		}
	},
	'alpha_num': {
		validator: (val:string)=>{
			if (!val){
				return false;
			}
			return /^[a-z0-9]+$/i.test(val);
		},
		message: {'en': 'Please enter a alpha-numeric value'}
	},
	'required': {
		validator: (val:string)=>{
			return !!val;
		},
		message: {'en': 'Please enter a value'}
	},
	'password': {
		validator: (val:string)=>{
			return isPasswordComplex(val);
		},
		message: {'en': 'Passwords must be at least 8 characters long and contain at least one number and one uppercase letter'}
	}
}

function isEmailValid(email: string) : boolean {

	//const emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

	function validateEmail(email: string) {
		// eslint-disable-next-line
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	if (!email) {
		return false;
	}

	if (email.length > 256) {
		return false;
	}

	if (!validateEmail(email)) {
		return false;
	}

	// Further checking of some things regex can't handle
	const [account, address] = email.split('@');

	if (account.length > 64) {
		return false;
	}

	const domainParts = address.split('.');

	if (domainParts.some(function (part) {return part.length > 63})) {
		return false;
	}

	return true;

}


function isPasswordComplex(password: string) : boolean {

	if (!password){
		return false;
	}

	const hasUpperCase:boolean = /[A-Z]/.test(password);
	const hasLowerCase:boolean = /[a-z]/.test(password);
	const hasNumbers:boolean = /\d/.test(password);
	//var hasNonalphas = /\W/.test(password);
	//var characterGroupCount = hasUpperCase + hasLowerCase + hasNumbers + hasNonalphas;
	const characterGroupCount:boolean = hasUpperCase + hasLowerCase + hasNumbers;

	//console.log('characterGroupCount = ' + characterGroupCount);

	if ((password.length >= 8) && (characterGroupCount >= 3)) {
		return true;
	}
	else {
		return false;
	}
}
