export type UsInputProps = {
	modelValue?: string | Array<string>,
    name?: string,
    //title?: string,
    //lead?: string,
    help?: string,
    label?: string,
    mask?: string, // mask pattern
    disabled?: boolean,
    required?: boolean,
    rules?: UsValidationRule,
    //valid?: boolean,
    type?: string,
    placeholder?: string,
    //debounce?: boolean,
    validationMode?: string,
    // Allow you to turn of the error string being displayed by validation
    suppressError?: boolean,
    options?: Array<any>,
    labelField?: string, // value
    keyField?: string, // id
}

// Used for text transform based on language locale
// Strings of form;
// {'en': 'string in english', 'es'}
export type UsLocaleString = {
	[key: string]: string;
}

/**
 * Validation rules
 * 'required|length:10'
 */
export type UsValidationRule = {
    locale?: string,
    required?: boolean,
    length?: {length: number},
    email?: boolean
    zip?: boolean,
    alpha?: boolean,
    numeric?: boolean,
    between?: {min: number, max: number},
    alpha_num?: boolean,
    password?: boolean
}
