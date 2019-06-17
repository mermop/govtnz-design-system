// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment } from 'react';

import InputBlock from '@govtnz/ds/build/react-ts/InputBlock.tsx';
import '@govtnz/ds/build/css/InputBlock.css';

import IframePage from '../../components/IframePage';
import onChangeGenerator from '../../commons/onChangeGenerator';
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => <Fragment>{children}</Fragment>;
const Example = ({ children }) => <Fragment>{children}</Fragment>;

const PageContent = (props) => (<Example {...onChangeGenerator(Example)}>
        <InputBlock {...onChangeGenerator(InputBlock)} type="Email" label="Email address" hint="Provide a email address" name="anyName" inputId="anyId2" hintId="anyHintId2Error" errorId="anyErrorId2" hasError error="Enter an email address in the correct format, like name@example.com" />
    </Example>);

const template = props => {
  return (
    <IframePage
      title={"Error state (Input example)"}
      id={"iframe_componentsInput6"}
      parentUrl={"../Input"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
};

export default template;