import React from "react";
import styled from "styled-components";

const StyledH4 = styled.h4`
  ${props =>
    props.styleSize === "xlarge" &&
    styled.css`
      color: #2a2a2a;
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 500;
      font-size: 3rem;
      line-height: 1.125;
      display: block;
      margin-top: 0;
      margin-bottom: 1rem;
    `}
  @media print {
    ${props =>
      props.styleSize === "xlarge" &&
      styled.css`
        color: #000000;
      `};
  }
  @media print {
    ${props =>
      props.styleSize === "xlarge" &&
      styled.css`
        font-family: sans-serif;
      `};
  }
  @media (min-width: 40.0625em) {
    ${props =>
      props.styleSize === "xlarge" &&
      styled.css`
        font-size: 3.5rem;
        line-height: 1.15;
      `};
  }
  @media print {
    ${props =>
      props.styleSize === "xlarge" &&
      styled.css`
        font-size: 32pt;
        line-height: 1.15;
      `};
  }
  @media (min-width: 40.0625em) {
    ${props =>
      props.styleSize === "xlarge" &&
      styled.css`
        margin-bottom: 1rem;
      `};
  }
  ${props =>
    props.styleSize === "large" &&
    styled.css`
      color: #2a2a2a;
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 500;
      font-size: 2rem;
      line-height: 1.2;
      display: block;
      margin-top: 3.5rem;
      margin-bottom: 0.5rem;
    `}
  @media print {
    ${props =>
      props.styleSize === "large" &&
      styled.css`
        color: #000000;
      `};
  }
  @media print {
    ${props =>
      props.styleSize === "large" &&
      styled.css`
        font-family: sans-serif;
      `};
  }
  @media (min-width: 40.0625em) {
    ${props =>
      props.styleSize === "large" &&
      styled.css`
        font-size: 2.5rem;
        line-height: 1.25;
      `};
  }
  @media print {
    ${props =>
      props.styleSize === "large" &&
      styled.css`
        font-size: 24pt;
        line-height: 1.05;
      `};
  }
  @media (min-width: 40.0625em) {
    ${props =>
      props.styleSize === "large" &&
      styled.css`
        margin-bottom: 30px;
      `};
  }
  ${props =>
    props.styleSize === "medium" &&
    styled.css`
      color: #0b0c0c;
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 1.25;
      display: block;
      margin-top: 2.5rem;
      margin-bottom: 0.5rem;
    `}
  @media print {
    ${props =>
      props.styleSize === "medium" &&
      styled.css`
        color: #000000;
      `};
  }
  @media print {
    ${props =>
      props.styleSize === "medium" &&
      styled.css`
        font-family: sans-serif;
      `};
  }
  @media (min-width: 40.0625em) {
    ${props =>
      props.styleSize === "medium" &&
      styled.css`
        font-size: 1.5rem;
        line-height: 1.25;
      `};
  }
  @media print {
    ${props =>
      props.styleSize === "medium" &&
      styled.css`
        font-size: 18pt;
        line-height: 1.15;
      `};
  }
  @media (min-width: 40.0625em) {
    ${props =>
      props.styleSize === "medium" &&
      styled.css`
        margin-bottom: 0.5rem;
      `};
  }
  ${props =>
    props.styleSize === "small" &&
    styled.css`
      color: #2a2a2a;
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 500;
      font-size: 1.25rem;
      line-height: 1.25;
      display: block;
      margin-top: 2.5rem;
      margin-bottom: 0.5rem;
    `}
  @media print {
    ${props =>
      props.styleSize === "small" &&
      styled.css`
        color: #000000;
      `};
  }
  @media print {
    ${props =>
      props.styleSize === "small" &&
      styled.css`
        font-family: sans-serif;
      `};
  }
  @media (min-width: 40.0625em) {
    ${props =>
      props.styleSize === "small" &&
      styled.css`
        font-size: 1.1875rem;
        line-height: 1.31579;
      `};
  }
  @media print {
    ${props =>
      props.styleSize === "small" &&
      styled.css`
        font-size: 14pt;
        line-height: 1.15;
      `};
  }
  @media (min-width: 40.0625em) {
    ${props =>
      props.styleSize === "small" &&
      styled.css`
        margin-bottom: 0.5rem;
      `};
  }
  padding-top: 5px;
  @media (min-width: 40.0625em) {
    padding-top: 10px;
  }
  padding-top: 15px;
  @media (min-width: 40.0625em) {
    padding-top: 20px;
  }
  padding-top: 5px;
  @media (min-width: 40.0625em) {
    padding-top: 10px;
  }
  ${props =>
    props.styleSize === "xsmall" &&
    styled.css`
      color: #2a2a2a;
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 500;
      font-size: 1.125rem;
      line-height: 1.25;
      display: block;
      margin-top: 2.5rem;
      margin-bottom: 0.5rem;
    `}
  @media print {
    ${props =>
      props.styleSize === "xsmall" &&
      styled.css`
        color: #000000;
      `};
  }
  @media print {
    ${props =>
      props.styleSize === "xsmall" &&
      styled.css`
        font-family: sans-serif;
      `};
  }
  @media (min-width: 40.0625em) {
    ${props =>
      props.styleSize === "xsmall" &&
      styled.css`
        font-size: 0.9375rem;
        line-height: 1.31579;
      `};
  }
  @media print {
    ${props =>
      props.styleSize === "xsmall" &&
      styled.css`
        font-size: 13pt;
        line-height: 1.15;
      `};
  }
  @media (min-width: 40.0625em) {
    ${props =>
      props.styleSize === "xsmall" &&
      styled.css`
        margin-bottom: 0.5rem;
      `};
  }
  padding-top: 5px;
  @media (min-width: 40.0625em) {
    padding-top: 10px;
  }
  ${props =>
    props.styleSize === "xxsmall" &&
    styled.css`
      color: #2a2a2a;
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.25;
      display: block;
      margin-top: 2.5rem;
      margin-bottom: 15px;
    `}
  @media print {
    ${props =>
      props.styleSize === "xxsmall" &&
      styled.css`
        color: #000000;
      `};
  }
  @media print {
    ${props =>
      props.styleSize === "xxsmall" &&
      styled.css`
        font-family: sans-serif;
      `};
  }
  @media (min-width: 40.0625em) {
    ${props =>
      props.styleSize === "xxsmall" &&
      styled.css`
        font-size: 0.875rem;
        line-height: 1.31579;
      `};
  }
  @media print {
    ${props =>
      props.styleSize === "xxsmall" &&
      styled.css`
        font-size: 12pt;
        line-height: 1.15;
      `};
  }
  @media (min-width: 40.0625em) {
    ${props =>
      props.styleSize === "xxsmall" &&
      styled.css`
        margin-bottom: 20px;
      `};
  }
  padding-top: 5px;
  @media (min-width: 40.0625em) {
    padding-top: 10px;
  }
  ${props =>
    props.marginBottom8 &&
    styled.css`
      margin-bottom: 8px;
    `}
`;

const H4 = ({ styleSize, marginBottom8, id, children }) => (
  <StyledH4 styleSize={styleSize} marginBottom8={marginBottom8} id={id}>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </StyledH4>
);

export default H4;
