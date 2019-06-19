// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Ol from '@govtnz/ds/build/react-ts/Ol.tsx';import Li from '@govtnz/ds/build/react-ts/Li.tsx';
const onChangeGenerator = comp => ({});
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => <Fragment>{children}</Fragment>;
const Example = ({ children }) => <Fragment>{children}</Fragment>;

var PageContent = (props) => (<Example {...onChangeGenerator(Example)}>
        <Ol {...onChangeGenerator(Ol)} numbered>
            <Li {...onChangeGenerator(Li)}>Unordered item one</Li>
            <Li {...onChangeGenerator(Li)}>Unordered item two</Li>
            <Li {...onChangeGenerator(Li)}>Unordered item three
                <Ol {...onChangeGenerator(Ol)} numbered>
                    <Li {...onChangeGenerator(Li)}>Ordered item one</Li>
                    <Li {...onChangeGenerator(Li)}>Ordered item one</Li>
                </Ol>
            </Li>
            <Li {...onChangeGenerator(Li)}>Unordered item four</Li>
        </Ol>
    </Example>);

document.addEventListener('DOMContentLoaded', () => {
  const selector = '#root';
  const root = document.querySelector(selector);
  if (!root) {
    console.error("Couldn't find app mount point ", selector);
    return;
  }
  ReactDOM.render(<PageContent />, root);
});