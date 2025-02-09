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
        <InputBlock {...onChangeGenerator(InputBlock)} type="Email" label="Email address" hint="Provide a email address" name="anyName" inputId="anyId10" hintId="anyHintId10" />
    </Example>);

const template = props => {
  return (
    <IframePage
      title={"Hint text (Input example)"}
      id={"iframe_componentsInput3"}
      parentUrl={"../Input"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
};

export default template;
