// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React from 'react';

import H1 from '@govtnz/ds/build/react-ts/H1.tsx';
import '@govtnz/ds/build/css/H1.css';
import P from '@govtnz/ds/build/react-ts/P.tsx';
import '@govtnz/ds/build/css/P.css';
import Ul from '@govtnz/ds/build/react-ts/Ul.tsx';
import '@govtnz/ds/build/css/Ul.css';
import Li from '@govtnz/ds/build/react-ts/Li.tsx';
import '@govtnz/ds/build/css/Li.css';

import AboutPage from '../../components/AboutPage';
import onChangeGenerator from '../../commons/onChangeGenerator';

const PageContent = (props) => <React.Fragment><H1 {...onChangeGenerator(H1)} styleSize="xlarge" id="about-the-design-system-alpha-website">About the Design System alpha website</H1>
<P styleSize="large">
    New Zealand's all-of-government (AOG) Design System alpha website provides
    a catalogue of reusable basic elements, single components, and patterns of
    components for building websites and applications, along with guidance on
    how and when to use them. 
</P>

<p><a href="https://www.digital.govt.nz/digital-government/leadership-and-governance/government-chief-digital-officer-gcdo/who-supports-the-gcdo/">Government Information Services</a>&nbsp;
is creating the AOG Design System now. Our overall aim is to improve digital
service delivery across the New Zealand public service.</p>
<p><a href="https://design-system-alpha.digital.govt.nz/">Read about the benefits of using our Design System, and how we are building it, on the homepage</a>.</p>
<p>This alpha website shows you what we have built so far, what we&#39;re working on,
and how you can get involved.</p>
<h2 id="get-involved">Get involved</h2>
<p>Since the Design System will be available for everyone in central and local
government (and beyond) to use, we want a strong cross-government community
backing it. You can contribute by:</p>
<Ul {...onChangeGenerator(Ul)} bulleted>
<Li {...onChangeGenerator(Li)}>testing our components and patterns</Li>
<Li {...onChangeGenerator(Li)}>helping to develop new components and patterns</Li>
<Li {...onChangeGenerator(Li)}>commenting on our guidance.</Li>
</Ul>
</React.Fragment>

const template = (props) => {
    return (
        <AboutPage
            title="About"
            pageProps={props}
            PageContent={PageContent}
        />
    );
};

export default template;
