import React from "react";

const constants = {
  type: {
    Button: "button",
    Checkbox: "checkbox",
    Color: "color",
    Date: "date",
    "DateTime: Local": "datetime-local",
    Email: "email",
    File: "file",
    Hidden: "hidden",
    Image: "image",
    Month: "month",
    Number: "number",
    Password: "password",
    Radio: "radio",
    Range: "range",
    Reset: "reset",
    Search: "search",
    Submit: "submit",
    Telephone: "tel",
    Text: "text",
    Time: "time",
    URL: "url",
    Week: "week"
  },
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
  },
  type2: {
    Button: "button",
    Checkbox: "checkbox",
    Color: "color",
    Date: "date",
    "DateTime: Local": "datetime-local",
    Email: "email",
    File: "file",
    Hidden: "hidden",
    Image: "image",
    Month: "month",
    Number: "number",
    Password: "password",
    Radio: "radio",
    Range: "range",
    Reset: "reset",
    Search: "search",
    Submit: "submit",
    Telephone: "tel",
    Text: "text",
    Time: "time",
    URL: "url",
    Week: "week"
  },
  autoComplete2: {
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
  },
  type3: {
    Button: "button",
    Checkbox: "checkbox",
    Color: "color",
    Date: "date",
    "DateTime: Local": "datetime-local",
    Email: "email",
    File: "file",
    Hidden: "hidden",
    Image: "image",
    Month: "month",
    Number: "number",
    Password: "password",
    Radio: "radio",
    Range: "range",
    Reset: "reset",
    Search: "search",
    Submit: "submit",
    Telephone: "tel",
    Text: "text",
    Time: "time",
    URL: "url",
    Week: "week"
  },
  autoComplete3: {
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

const DateInput = ({
  dobHint,
  dob,
  dobDay,
  name,
  disabled,
  readOnly,
  autoFocus,
  value,
  type,
  spellCheck,
  autoComplete,
  onChange,
  dobMonth,
  name2,
  disabled2,
  readOnly2,
  autoFocus2,
  value2,
  type2,
  spellCheck2,
  autoComplete2,
  onChange2,
  dobYear,
  name3,
  disabled3,
  readOnly3,
  autoFocus3,
  value3,
  type3,
  spellCheck3,
  autoComplete3,
  onChange3
}) => (
  <div className="g-dateInput-form-group">
    <fieldset
      aria-describedby={dobHint}
      className="g-dateInput-fieldset"
      role="group"
    >
      <legend className="g-dateInput-fieldset__legend">
        What is your date of birth?
      </legend>
      <span className="g-dateInput-hint" id={dobHint}>
        For example, 31 3 1980
      </span>
      <div className="g-date-input" id={dob}>
        <div className="g-date-input__item">
          <div className="g-dateInput-form-group">
            <label
              className="g-dateInput-label g-date-input__label"
              htmlFor={dobDay}
            >
              Day
            </label>
            <input
              className="g-dateInput-input g-date-input__input g-dateInput-input--width-2"
              id={dobDay}
              name={name}
              pattern="[0-9]*"
              type={constants.type[type]}
              disabled={disabled}
              readOnly={readOnly}
              autoFocus={autoFocus}
              value={value}
              spellCheck={spellCheck}
              autoComplete={constants.autoComplete[autoComplete]}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="g-date-input__item">
          <div className="g-dateInput-form-group">
            <label
              className="g-dateInput-label g-date-input__label"
              htmlFor={dobMonth}
            >
              Month
            </label>
            <input
              className="g-dateInput-input g-date-input__input g-dateInput-input--width-2"
              id={dobMonth}
              name={name2}
              pattern="[0-9]*"
              type={constants.type2[type2]}
              disabled={disabled2}
              readOnly={readOnly2}
              autoFocus={autoFocus2}
              value={value2}
              spellCheck={spellCheck2}
              autoComplete={constants.autoComplete2[autoComplete2]}
              onChange={onChange2}
            />
          </div>
        </div>
        <div className="g-date-input__item">
          <div className="g-dateInput-form-group">
            <label
              className="g-dateInput-label g-date-input__label"
              htmlFor={dobYear}
            >
              Year
            </label>
            <input
              className="g-dateInput-input g-date-input__input g-dateInput-input--width-4"
              id={dobYear}
              name={name3}
              pattern="[0-9]*"
              type={constants.type3[type3]}
              disabled={disabled3}
              readOnly={readOnly3}
              autoFocus={autoFocus3}
              value={value3}
              spellCheck={spellCheck3}
              autoComplete={constants.autoComplete3[autoComplete3]}
              onChange={onChange3}
            />
          </div>
        </div>
      </div>
    </fieldset>
  </div>
);
DateInput.props = [
  "dobHint",
  "dob",
  "dobDay",
  "name",
  "disabled",
  "readOnly",
  "autoFocus",
  "value",
  "type",
  "spellCheck",
  "autoComplete",
  "onChange",
  "dobMonth",
  "name2",
  "disabled2",
  "readOnly2",
  "autoFocus2",
  "value2",
  "type2",
  "spellCheck2",
  "autoComplete2",
  "onChange2",
  "dobYear",
  "name3",
  "disabled3",
  "readOnly3",
  "autoFocus3",
  "value3",
  "type3",
  "spellCheck3",
  "autoComplete3",
  "onChange3"
];
export default DateInput;