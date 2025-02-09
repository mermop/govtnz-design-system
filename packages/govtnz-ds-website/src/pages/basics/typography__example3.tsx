// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment } from 'react';

import H1 from '@govtnz/ds/build/react-ts/H1.tsx';
import '@govtnz/ds/build/css/H1.css';
import CaptionXl from '@govtnz/ds/build/react-ts/CaptionXl.tsx';
import '@govtnz/ds/build/css/CaptionXl.css';

import IframePage from '../../components/IframePage';
import onChangeGenerator from '../../commons/onChangeGenerator';
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => <Fragment>{children}</Fragment>;
const Example = ({ children }) => <Fragment>{children}</Fragment>;

const PageContent = (props) => (<Example {...onChangeGenerator(Example)}>
        <H1 {...onChangeGenerator(H1)} styleSize="xlarge">
            <CaptionXl {...onChangeGenerator(CaptionXl)}>caption-xl</CaptionXl>
            g-heading-xl
        </H1>
    </Example>);

const template = props => {
  return (
    <IframePage
      title={"Headings with captions inside the       h1 (typography example)"}
      id={"iframe_basicstypography3"}
      parentUrl={"../typography"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
};

export default template;
