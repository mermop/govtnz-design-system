// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

// Developer note: these files are treated as templates and called from prebuild.js
// They shouldn't be imported and used directly.

import React from 'react';
import { Link } from 'gatsby';
import onChangeGenerator from '../../commons/onChangeGenerator';
import H1 from '@govtnz/ds/build/react-ts/H1.tsx';
import '@govtnz/ds/build/css/H1.css';

// Indirect relative import because this template is output to src/pages/components so it needs to step back to `commons`.
import ComponentPage from '../../commons/component-page';
import ComponentCode from '../../commons/component-code';
import Example from '../../commons/Example';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';

const PageContent = (props) => <React.Fragment><H1 {...onChangeGenerator(H1)} styleSize="xlarge" id="components">Components</H1>
<p>As key building blocks of the all-of-government (AOG) design system, our components are designed and coded to solve specific user problems.</p>
<p>Choose what you need from our catalogue of modular components. Using them saves you the time and cost of developing and testing complex components yourself. Designed to integrate directly into existing content management systems, these components will add functionality to your website without you having to rebuild it.</p>
<p>Browse available components via the sidebar menu if you’re on a desktop, or the main menu if you’re using a mobile.</p>
</React.Fragment>

export default function Code(props) {
  return (
    <ComponentPage
      title={"index"}
      id={"index"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
}