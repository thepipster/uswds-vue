<template>
    <form class="usa-form usa-form--large">
        <fieldset class="usa-fieldset">
            <legend class="usa-legend usa-legend--large">Mailing address</legend>
            <p>
                Required fields are marked with an asterisk (<abbr
                    title="required"
                    class="usa-hint usa-hint--required"
                    >*</abbr
                >).
            </p>
            <label class="usa-label" for="mailing-address-1">Street address</label>
            <input class="usa-input" id="mailing-address-1" name="mailing-address-1" />
            <label class="usa-label" for="mailing-address-2">Street address line 2</label>
            <input class="usa-input" id="mailing-address-2" name="mailing-address-2" />
            <label class="usa-label" for="city">City <abbr title="required" class="usa-hint usa-hint--required">*</abbr></label>
            <input class="usa-input" id="city" name="city" required />
            <label class="usa-label" for="state"
                >State, territory, or military post
                <abbr title="required" class="usa-hint usa-hint--required">*</abbr></label
            >
            <select class="usa-select" id="state" name="state">
                <option value>- Select -</option>
                <option value="AL">AL - Alabama</option>
                <option value="AK">AK - Alaska</option>
                <option value="AS">AS - American Samoa</option>
                <option value="AZ">AZ - Arizona</option>
                <option value="AR">AR - Arkansas</option>
                <option value="CA">CA - California</option>
                <option value="CO">CO - Colorado</option>
                <option value="CT">CT - Connecticut</option>
                <option value="DE">DE - Delaware</option>
                <option value="DC">DC - District of Columbia</option>
                <option value="FL">FL - Florida</option>
                <option value="GA">GA - Georgia</option>
                <option value="GU">GU - Guam</option>
                <option value="HI">HI - Hawaii</option>
                <option value="ID">ID - Idaho</option>
                <option value="IL">IL - Illinois</option>
                <option value="IN">IN - Indiana</option>
                <option value="IA">IA - Iowa</option>
                <option value="KS">KS - Kansas</option>
                <option value="KY">KY - Kentucky</option>
                <option value="LA">LA - Louisiana</option>
                <option value="ME">ME - Maine</option>
                <option value="MD">MD - Maryland</option>
                <option value="MA">MA - Massachusetts</option>
                <option value="MI">MI - Michigan</option>
                <option value="MN">MN - Minnesota</option>
                <option value="MS">MS - Mississippi</option>
                <option value="MO">MO - Missouri</option>
                <option value="MT">MT - Montana</option>
                <option value="NE">NE - Nebraska</option>
                <option value="NV">NV - Nevada</option>
                <option value="NH">NH - New Hampshire</option>
                <option value="NJ">NJ - New Jersey</option>
                <option value="NM">NM - New Mexico</option>
                <option value="NY">NY - New York</option>
                <option value="NC">NC - North Carolina</option>
                <option value="ND">ND - North Dakota</option>
                <option value="MP">MP - Northern Mariana Islands</option>
                <option value="OH">OH - Ohio</option>
                <option value="OK">OK - Oklahoma</option>
                <option value="OR">OR - Oregon</option>
                <option value="PA">PA - Pennsylvania</option>
                <option value="PR">PR - Puerto Rico</option>
                <option value="RI">RI - Rhode Island</option>
                <option value="SC">SC - South Carolina</option>
                <option value="SD">SD - South Dakota</option>
                <option value="TN">TN - Tennessee</option>
                <option value="TX">TX - Texas</option>
                <option value="UM">UM - United States Minor Outlying Islands</option>
                <option value="UT">UT - Utah</option>
                <option value="VT">VT - Vermont</option>
                <option value="VI">VI - Virgin Islands</option>
                <option value="VA">VA - Virginia</option>
                <option value="WA">WA - Washington</option>
                <option value="WV">WV - West Virginia</option>
                <option value="WI">WI - Wisconsin</option>
                <option value="WY">WY - Wyoming</option>
                <option value="AA">AA - Armed Forces Americas</option>
                <option value="AE">AE - Armed Forces Africa</option>
                <option value="AE">AE - Armed Forces Canada</option>
                <option value="AE">AE - Armed Forces Europe</option>
                <option value="AE">AE - Armed Forces Middle East</option>
                <option value="AP">AP - Armed Forces Pacific</option>
            </select>
            <label class="usa-label" for="zip">ZIP code</label>
            <input
                class="usa-input usa-input--medium"
                id="zip"
                name="zip"
                pattern="[\d]{5}(-[\d]{4})?"
            />
            <label class="usa-label" for="urbanization">Urbanization (Puerto Rico only)</label>
            <input class="usa-input" id="urbanization" name="urbanization" />
        </fieldset>
    </form>
</template>
