import Vue from "vue";

const constants = {
  autoComplete: {
    Off: "off",
    On: "on",
    Name: "name",
    "Honorific: Prefix": "honorific-prefix",
    "Given Name": "given-name",
    "Additional Name": "additional-name",
    "Family Name": "family-name",
    "Honorific: Suffix": "honorific-suffix",
    Nickname: "nickname",
    Email: "email",
    Username: "username",
    "New Password": "new-password",
    "Current Password": "current-password",
    "Organization Title": "organization-title",
    Organization: "organization",
    "Street Address": "street-address",
    "Address Line 1": "address-line1",
    "Address Line 2": "address-line2",
    "Address Line 3": "address-line3",
    "Address Level 4": "address-level4",
    "Address Level 3": "address-level3",
    "Address Level 2": "address-level2",
    "Address Level 1": "address-level1",
    Country: "country",
    "Country Name": "country-name",
    "Postal Code": "postal-code",
    "Credit Card: Name": "cc-name",
    "Credit Card: Given Name": "cc-given-name",
    "Credit Card: Additional Name": "cc-additional-name",
    "Credit Card: Family Name": "cc-family-name",
    "Credit Card: Number": "cc-number",
    "Credit Card: Expiry": "cc-exp",
    "Credit Card: Expiry Month": "cc-exp-month",
    "Credit Card: Expiry Year": "cc-exp-year",
    "Credit Card: CSC": "cc-csc",
    "Credit Card: Type": "cc-type",
    "Transaction: Currency": "transaction-currency",
    "Transaction: Amount": "transaction-amount",
    Language: "language",
    Birthday: "bday",
    "Birthday: Day": "bday-day",
    "Birthday: Month": "bday-month",
    "Birthday: Year": "bday-year",
    Sex: "sex",
    Telephone: "tel",
    "Telephone: Country Code": "tel-country-code",
    "Telephone: National": "tel-national",
    "Telephone: Area Code": "tel-area-code",
    "Telephone: Local": "tel-local",
    "Telephone: Extension": "tel-extension",
    IMPP: "impp",
    URL: "url",
    Photo: "photo"
  }
};

export default Vue.extend({
  functional: true, // no internal state
  props: {
    maxLength: { type: String, required: true },
    id: { type: String, required: false },
    name: { type: String, required: true },
    disabled: { type: Boolean, default: false, required: false },
    readOnly: { type: Boolean, default: false, required: false },
    rows: { type: String, required: false },
    cols: { type: String, required: false },
    autoFocus: { type: Boolean, default: false, required: false },
    spellCheck: { type: Boolean, default: false, required: false },
    autoComplete: {
      type: String,
      validator: value => {
        return (
          [
            "Off",
            "On",
            "Name",
            "Honorific: Prefix",
            "Given Name",
            "Additional Name",
            "Family Name",
            "Honorific: Suffix",
            "Nickname",
            "Email",
            "Username",
            "New Password",
            "Current Password",
            "Organization Title",
            "Organization",
            "Street Address",
            "Address Line 1",
            "Address Line 2",
            "Address Line 3",
            "Address Level 4",
            "Address Level 3",
            "Address Level 2",
            "Address Level 1",
            "Country",
            "Country Name",
            "Postal Code",
            "Credit Card: Name",
            "Credit Card: Given Name",
            "Credit Card: Additional Name",
            "Credit Card: Family Name",
            "Credit Card: Number",
            "Credit Card: Expiry",
            "Credit Card: Expiry Month",
            "Credit Card: Expiry Year",
            "Credit Card: CSC",
            "Credit Card: Type",
            "Transaction: Currency",
            "Transaction: Amount",
            "Language",
            "Birthday",
            "Birthday: Day",
            "Birthday: Month",
            "Birthday: Year",
            "Sex",
            "Telephone",
            "Telephone: Country Code",
            "Telephone: National",
            "Telephone: Area Code",
            "Telephone: Local",
            "Telephone: Extension",
            "IMPP",
            "URL",
            "Photo"
          ].indexOf(value) !== -1
        );
      },
      required: true
    },
    value: { type: String, required: false },
    remainingCharacters: { required: false }
  },
  computed: {
    computed__autocomplete() {
      return constants[this.autoComplete] !== undefined
        ? constants[this.autoComplete]
        : "";
    }
  },
  render: new Function(
    'with(this){return _c(\'div\',{staticClass:"g-characterCountWithCustomRows-character-count",attrs:{"data-maxlength":maxLength}},[_c(\'div\',{staticClass:"g-characterCountWithCustomRows-form-group"},[_c(\'label\',{staticClass:"g-characterCountWithCustomRows-label",attrs:{"for":id}},[_v("\\n\\n          Full address\\n        \\n\\n")]),_v(" "),_c(\'textarea\',{staticClass:"g-characterCountWithCustomRows-textarea",attrs:{"id":id,"name":name,"rows":rows,"disabled":disabled,"readonly":readOnly,"cols":cols,"autofocus":autoFocus,"spellcheck":spellCheck,"autocomplete":computed__autocomplete},domProps:{"value":value}}),_v(" "),_c(\'span\',{staticClass:"g-characterCountWithCustomRows-hint g-characterCountWithCustomRows-character-count__message",attrs:{"aria-live":"polite"}},[_v("\\nYou have "),_t("remainingCharacters"),_v(" characters remaining\\n\\n")],2)])])}'
  )
});
