<P styleSize="large">Text inputs allow users to enter any combination of letters, numbers, or symbols to answer questions and provide data.</P>

## Examples

Interact with each example to see how it works.

<ExampleContainer>
    <Example>
        <InputBlock type="Text" label="Event name" hint="Provide an event name" name="anyName" inputId="anyId" hintId="anyHintId" />
    </Example>
</ExampleContainer>

<ExampleContainer>
    <ExampleHeading>Error state</ExampleHeading>
    <Example>
        <InputBlock type="Text" label="Event name" hint="Provide an event name" name="anyName" inputId="anyId2f" hintId="anyHintId2" errorId="anyErrorId2Error" hasError error="Enter a known event name" />
    </Example>
</ExampleContainer>

## When to use it

Use the text input component for single line answers, such as a user’s name or phone number.

## When not to use it

If you expect multiple line answers from users, do not use the text input component. Use the `textarea` component instead (currently under development).

## How it works

Text input components need be clearly labelled, sized for the answer you require, and provided with any hints the user needs to complete them successfully.

### Label text inputs

All text inputs must have visible labels. Placeholder text is not an acceptable replacement for a label because it vanishes when users start typing.

Labels should be aligned above the text input they refer to. They should be short, direct, and written in sentence case. Do not use colons at the end of labels.

If you’re asking just one question per page, you can put the `<label>` inside the page heading. This is good practice, as it means that users of screen readers will only hear the contents once.

### Use appropriately-sized text inputs

Help users understand what they should enter by making each text input box the right size for the content it’s intended for.

By default, the width of text inputs in the design system is fluid and will fit the full width of the container they are placed into.

If you want to make the input smaller, you can either use a fixed-width input, or use the width override classes to create a smaller fluid-width input.

<ExampleContainer>
    <ExampleHeading>Fixed-width text input</ExampleHeading>
    <Example>
        <ExampleSection>
            <InputBlock width="30" label="30 character width" hint="Fits a short sentence answer or a long address line." name="anyNameWidth30" inputId="anyId3" hintId="anyHintId3" />
        </ExampleSection>
        <ExampleSection>
            <InputBlock type="Email" width="20" label="20 character width" hint="Fits an email address." name="anyNameWidth20" inputId="anyId4" hintId="anyHintId4" />
        </ExampleSection>
        <ExampleSection>
            <InputBlock width="10" label="10 character width" hint="Fits a name." name="anyNameWidth10" inputId="anyId5" hintId="anyHintId5" />
        </ExampleSection>
        <ExampleSection>
            <InputBlock width="5" label="5 character width" hint="Fits a post code." name="anyNameWidth5" inputId="anyId6" hintId="anyHintId6" />
        </ExampleSection>
        <ExampleSection>
            <InputBlock width="4" label="4 character width" hint="Fits a 4-digit group of a credit card number." name="anyNameWidth4" inputId="anyId7" hintId="anyHintId7"  />
        </ExampleSection>
        <ExampleSection>
            <InputBlock width="3" label="3 character width" hint="Fits a prefix for a mobile number." name="anyNameWidth3" inputId="anyId8" hintId="anyHintId8" />
        </ExampleSection>
        <ExampleSection>
            <InputBlock width="2" label="2 character width" hint="Fits the 2-digit part of a bank account number." name="anyNameWidth2" inputId="anyId9" hintId="anyHintId9" />
        </ExampleSection>
    </Example>
</ExampleContainer>

Use fixed-width inputs for content that has a specific, known length. For example, postcode inputs should be postcode-sized, and telephone number inputs should be telephone number-sized.

On fixed-width inputs, the width will remain fixed on all screens unless it is wider than the viewport, in which case it will shrink to fit.

<ExampleContainer>
    <ExampleHeading>Hint text</ExampleHeading>
    <Example>
        <InputBlock type="Email" label="Email address" hint="Provide a email address" name="anyName" inputId="anyId10" hintId="anyHintId10" />
    </Example>
</ExampleContainer>

Use hint text (also known as help text) for advice that’s relevant to the majority of users, like how their information will be used, or where to find it.

### Use the `autocomplete` attribute

Use the `autocomplete` attribute on text inputs to help users complete forms more quickly. This lets you specify an input’s purpose so browsers can autofill the information on a user’s behalf if they’ve entered it previously.

For example, to enable autofill on a postcode field, set the `autocomplete` attribute to `postal-code`. If you are working in production and there is a relevant input purpose, you’ll need to use the `autocomplete` attribute to meet Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.

See how to do this in the following example.

<ExampleContainer>
    <ExampleHeading white>Code</ExampleHeading>
    <Example codeOnly>
        <InputBlock label="Your postal code" hint="Your postal code will be a four digit number." name="postalCode" inputId="postalId" hintId="postalHintId" autoComplete="Postal Code" />
    </Example>
</ExampleContainer>

### Do not disable copy and paste

Users often need to copy and paste information into a text input, so do not stop them from doing this.

### How and when to spellcheck a user’s input

Sometimes browsers will spellcheck the information a user puts into a text input. If a user enters something that is recognised as a spelling error, sighted users will see a red line under the word.

If you are asking users for information that's not appropriate to spellcheck, like a reference number, name, or email address, disable the spellcheck.

To disable spellcheck, set `spellcheck="false"`.

<ExampleContainer>
    <ExampleHeading white>Code</ExampleHeading>
    <Example codeOnly>
        <InputBlock type="Email" label="Your email address" hint="Please provide your personal email address that we'll contact you on." name="someEmail" inputId="anyId122" hintId="anyHintId122" spellCheck="false" />
    </Example>
</ExampleContainer>

Browsers do not consistently spellcheck users’ input by default. If you are asking users a question for which spellcheck would be useful, set the `spellcheck` attribute to `true`.

### Disabled text inputs

Disabled input elements cannot be clicked by users. You can use them to prevent users from interacting with a specific input until another action is completed.

However, disabled input elements can confuse users so they are best avoided, if possible.

## Error messages

Style error messages as shown in the following example.

<ExampleContainer>
    <ExampleHeading>Error state</ExampleHeading>
    <Example>
        <InputBlock type="Text" label="Event name" hint="Provide an event name" name="anyName" inputId="anyId2f" hintId="anyHintId2" errorId="anyErrorId2Error" hasError error="Enter a known event name" />
    </Example>
</ExampleContainer>

Make sure error messages follow the guidance below, and that you have specific error messages for specific error states.

#### If the input is empty

Say ‘Enter [whatever it is]’. For example, ‘Enter your first name’.

#### If the input is too long

Say ‘[whatever it is] must be [number] characters or less’. For example, ‘Address line 1 must have 35 characters or less’.

#### If the input is too short [H4]

Say ‘[whatever it is] must be [number] characters or more’. For example, ‘Full name must be 2 characters or more’.

#### If the input can be either too short or too long [H4]

Say ‘[whatever it is] must be between [number] and [number] characters’. For example, ‘Last name must be between 2 and 35 characters’.

#### If the input accepts non-allowed characters that you can predict

Say ‘[whatever it is] must not include [characters]’. For example, ‘Town or city must not include è and \$’.

#### If the input accepts non-allowed characters that you cannot predict

Say ‘[whatever it is] must only include [list of allowed characters]’. For example, ‘Full name must only include letters a to z, hyphens, spaces and apostrophes’.

#### If the input must be a number

Say ‘[whatever it is] must be a number [optional example]’. For example, ‘Hours worked a week must be a number, like 30’.

#### If the input must be a whole number

Say ‘[whatever it is] must be a whole number [optional example]’. For example, ‘Hours worked a week must be a whole number, like 30’.

#### If the number is too low

Say ‘[whatever it is] must be [lowest] or more’. For example, ‘Hours worked a week must be 16 or more’.

#### If the number is too high

Say ‘[whatever it is] must be [highest] or less’. For example, ‘Hours worked a week must be 99 or less’.

#### If the input must be between 2 numbers

Say ‘[whatever it is] must be between [lowest] and [highest]’. For example, ‘Hours worked a week must be between 16 and 99’.

#### If the input could be other than an amount of money and allows decimals

Say ‘[whatever it is] must be an amount of money [optional example that includes decimals and non-decimals]’. For example, ‘How much you earn an hour must be an amount of money, like 7.50 or 8’.

#### If the input could be other than an amount of money and needs decimals

Say ‘[whatever it is] must be an amount of money [optional example that includes decimals]’. For example, ‘How much you earn an hour must be an amount of money, like 7.50 or 8.00’.

#### If the input is an amount of money that needs decimals

Say ‘[whatever it is] must include cents, like 123.45 or 156.00’. For example, ‘How much you earn a week must include cents, like 123.45 or 156.00’.

#### If the input is an amount of money that must not have decimals

Say ‘[whatever it is] must not include cents, like 123 or 156’. For example, ‘How much you earn a week must not include cents, like 123 or 156’.

## Credit

Guidance, original HTML and CSS derived from [GOV.UK Design System](https://github.com/alphagov/govuk-frontend).
