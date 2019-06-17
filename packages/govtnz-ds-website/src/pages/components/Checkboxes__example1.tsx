// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment } from 'react';

import FieldsetBlockWithError from '@govtnz/ds/build/react-ts/FieldsetBlockWithError.tsx';
import '@govtnz/ds/build/css/FieldsetBlockWithError.css';
import H1 from '@govtnz/ds/build/react-ts/H1.tsx';
import '@govtnz/ds/build/css/H1.css';
import CheckboxBlock from '@govtnz/ds/build/react-ts/CheckboxBlock.tsx';
import '@govtnz/ds/build/css/CheckboxBlock.css';

import IframePage from '../../components/IframePage';
import onChangeGenerator from '../../commons/onChangeGenerator';
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => <Fragment>{children}</Fragment>;
const Example = ({ children }) => <Fragment>{children}</Fragment>;

const PageContent = (props) => (<Example {...onChangeGenerator(Example)}>
        <FieldsetBlockWithError {...onChangeGenerator(FieldsetBlockWithError)} legend={<H1 {...onChangeGenerator(H1)} styleSize="large" id="providerChoiceTitle2" marginBottom8>Who are your providers?</H1>} hint={<p>Select all that apply.</p>} hintId="hintId21" errorId="errorId21" error="You must choose at least one provider.">
            <CheckboxBlock {...onChangeGenerator(CheckboxBlock)} label="Aardvark Access"  checkboxId="anyCheckboxId21" value="provider1" name="providerChoice2" labelId="labelId21" />
            <CheckboxBlock {...onChangeGenerator(CheckboxBlock)} label="Bumblebee Business"  checkboxId="anyCheckboxId22" value="provider2"  name="providerChoice2" labelId="labelId22" />
    <CheckboxBlock {...onChangeGenerator(CheckboxBlock)} label="Caterpillar Company"  checkboxId="anyCheckboxId23" value="provider3" name="providerChoice2" labelId="labelId23" />
        </FieldsetBlockWithError>
    </Example>);

const template = props => {
  return (
    <IframePage
      title={"Error (Checkboxes example)"}
      id={"iframe_componentsCheckboxes1"}
      parentUrl={"../Checkboxes"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
};

export default template;