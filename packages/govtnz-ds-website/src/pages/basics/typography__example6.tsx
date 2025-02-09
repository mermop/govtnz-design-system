// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment } from 'react';

import P from '@govtnz/ds/build/react-ts/P.tsx';
import '@govtnz/ds/build/css/P.css';

import IframePage from '../../components/IframePage';
import onChangeGenerator from '../../commons/onChangeGenerator';
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => <Fragment>{children}</Fragment>;
const Example = ({ children }) => <Fragment>{children}</Fragment>;

const PageContent = (props) => (<Example {...onChangeGenerator(Example)}>
        <ExampleSection {...onChangeGenerator(ExampleSection)}>
            <P styleSize="small">
            Government Information Services is creating the design system now, and you can contribute. This alpha site shows you what we have built so far, what we are working on, and how you can get involved.</P>
        </ExampleSection>
    </Example>);

const template = props => {
  return (
    <IframePage
      title={"Small size for small body text (typography example)"}
      id={"iframe_basicstypography6"}
      parentUrl={"../typography"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
};

export default template;
