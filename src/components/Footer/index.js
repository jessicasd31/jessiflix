import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={require("../../assets/img/Logo.png")} alt="Logo" />
      </a>
    </FooterBase>
  );
}

export default Footer;
