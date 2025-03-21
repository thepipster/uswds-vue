import {isObject, isEmpty} from 'lodash';
import {type UsLocaleString} from "../FormTypes";
import {rulesLibrary, type ValidationRule, type RuleOptions} from "./RulesLibrary";

class Validator {

    public ruleSettings: Map<string, RuleOptions> = new Map();

    public valids: object = {};
    public errors: string[] = [];
    public passed: string[] = [];
    public isDirty: boolean = false;
	public defaultMessages: UsLocaleString = {
		'en' : 'Please enter a value',
		'es' : 'Por favor introduce un valor'
	};
	public locale = "en";
	//private static ruleLibary: {[key: string]: ValidationRule} = rulesLibrary;

    constructor(rules: {[key: string]: unknown} ){

		for (const name in rules){

			// Go through the list of rules, and extract settings (if given)
			// Settings can be {length, min, max}

			// Lookup rule from rule library
			const ruleDef: ValidationRule = rulesLibrary[name];
			const ruleOpts: RuleOptions = rules[name] as RuleOptions;

			//console.log(`Rule ${name}, settings = `, ruleOpts);

            // Check this rule exists first
            if (!ruleDef){
                throw new Error(`Rule "${name}" does not exist, and no validator given`);
            }

			// Support of vee-validate style string based rules. i.e. rules are serpated by a pipe
			// e.g. 'required|length:10'
			//if (typeof this.rules == 'string'){
				// TODO: implment vee-validate strings style rules
				//throw new Error(`String based rules not supported yet!!`)
				//let rules = ruleObj.split('|');
				//let vars = _.map(r)
			//}

			// Grab the settings and store
			if (ruleDef && ruleOpts){
				this.ruleSettings.set(name, ruleOpts)
			}
			else {
				console.error(`Rule ${name}, ruleOpts = `, ruleOpts);
				console.error(`Rule ${name}, ruleDef = `, ruleDef);
			}

		}

        this.valids  = {};
        this.errors = [];
        this.passed = [];
        this.isDirty = false;
        this.__checkRules();
    }

    /**
     * Check rules are setup correctly, if a rule has a checkRule function
     */
    private __checkRules(){

		this.ruleSettings.forEach((opts: RuleOptions, key: string) => {

			const ruleDef: ValidationRule = rulesLibrary[key];

            // Does the rule have a checkRule function?
            if (ruleDef && typeof ruleDef.checkRule == 'function'){
                ruleDef.checkRule(opts);
            }

		});

    }

    getErrors(){
        return this.errors;
    }

    getPassed(){
        return this.passed;
    }

    /**
     * Run the validation, returns an instance of ValidatorErrors
     * @param {object} obj The data object holding the form data
     */
    async run(val: string){

        //console.log(`Entering validator.run(${val})`);

       	this.errors = [];
		this.passed = [];
		this.isDirty = true;

		await this.ruleSettings.forEach(async (ruleSettings: RuleOptions, name: string) => {

			const ruleDef: ValidationRule = rulesLibrary[name];

            // Check this rule exists first
            if (!ruleDef){
                throw new Error(`Rule ${name} does not exist, and no validator given`);
            }

			//console.log(`Running "${val}" on rule ${name}`, ruleDef);

            // the rule message could be a function, if so call it to get a string
            let msg: UsLocaleString = {};

            if (ruleDef.getMessage){
                msg = ruleDef.getMessage(ruleSettings);
            }
            else if (ruleDef.message){
                msg = ruleDef.message;
            }

            if (!msg ||!msg[this.locale]){
                throw new Error(`Rule ${name} does not have a validation message for the current locale, ${this.locale}`);
            }

            const msgStr: string = (msg && msg[this.locale]) ? msg[this.locale] : "";

            // Lookup the rule, or check if a validator function was passed

            // Now do the validation!
            if (isObject(val) && isEmpty(val) && val !== ''){
                //console.log(`[${name}] EMPTY: `, msg);
                this.errors.push(msgStr);
            }
            //else if (val !== 'false') {
			else {

                const isValid = await ruleDef.validator(val, ruleSettings);

                if (!isValid){
                    //console.log(`[${name}] ERROR: ${msg}`)
                    this.errors.push(msgStr);
                }
                else {
                    // store the fields that passed in case we need them
                    this.passed.push(msgStr);
                }

				//console.log(`[${name}] ${isValid}`, this.errors)

            }
            //else {
            //    passed.push(msgStr);
            //}

        });

		//console.log(`Leaving Validator.run() - found ${this.errors.length} errors`);

		return (this.errors.length > 0) ? false : true;

    }

    /**
     * Add a new rule
     * @param {*} rule
     */
	/*
    static extend(ruleName: string, settings: {validator: string, message: string}){

        let msg = {};

        // Check we have a validator function
        if (typeof settings.validator != 'function'){
            throw new Error(`You must supply a validator function`);
        }

        // Check for custom message
        if (settings.message) {
            if (typeof settings.message == 'string'){
                msg[Validator.locale] = settings.message;
            }
            else if (typeof settings.message == 'function' && settings.message()[Validator.locale]){
                msg = settings.message;
            }
            else if (settings.message[Validator.locale]){
                msg = settings.message;
            }
            else {
                throw new Error(`Message does not support the current locale, ${Validator.locale}`);
            }
        }

        Validator.ruleLibary[ruleName] = {
            validator: settings.validator,
            message: msg
        };

    }
	*/




}

export default Validator
